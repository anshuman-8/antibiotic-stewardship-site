import React from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useMutation, gql} from "@apollo/client";
import { toast } from "react-toastify";
import { calculate_age } from "../../utils/functions";

export default function PatientCard(props) {
  const { id, fullName, mrdNumber, active, dateOfBirth } = props;

  const [loading, setLoading] = React.useState(false);

  const notifyError = (message: String) => toast.error(message);
  const notifySuccess = (message: String) => toast.success(message);

  const dischargePatientGQL = gql`
    mutation ($id: ID) {
      dischargePatient(id: $id)
    }
  `;

  const generateCSVGQL = gql`
    mutation ($patientid: ID) {
      generateCSV(patientId: $patientid) {
        encodedCsv
      }
    }
  `;

  const [dischargePatient] = useMutation(dischargePatientGQL);
  const [generateCSV] = useMutation(generateCSVGQL, {
    onError: (error) => {
      notifyError("Failed to fetch CSV file");
      console.error(error);
    },
  });

  const dischargeButton = () => {
    if (confirm("Do you want to discharge " + fullName+ ` (${mrdNumber})`+ "?")) {
      dischargePatient({ variables: { id: id } })
        .then(() => notifySuccess("Patient Discharged"))
        .catch((err) => notifyError(err.message));
    }
  };

  const downloadReportButton = () => {
    setLoading(true);
    generateCSV({ variables: { patientid: id } })
      .then((res) => {
        const encodedCsv = res.data.generateCSV.encodedCsv;
        const decodedCsv = Buffer.from(encodedCsv, "base64").toString("utf-8");
        const csvData = new Blob([decodedCsv], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(csvData);
        link.download = `${fullName} Patient Report Data.csv`;
        link.click();
        notifySuccess("CSV generated successfully.");
        setLoading(false);
      })
      .catch((error) => {
        notifyError("Failed to generate CSV.");
        console.error(error);
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <div className="bg-slate-100/50 backdrop-blur-sm m-5 max-w-lg border min-w-min rounded-md p-2">
      <div className="flex flex-row items-center">
        <div className="text-xl my-1">{fullName}</div>
        {active ? (
          <GrStatusGoodSmall className="fill-green-700 mx-1" />
        ) : (
          <GrStatusGoodSmall className="fill-red-700 mx-1" />
        )}
      </div>
      <div>MRD No: {mrdNumber}</div>
      <div className="space-x-5">
        {" "}
        <span> Age: {calculate_age(dateOfBirth)} </span> <span>Sex: -</span>
      </div>

      <div className="space-x-5 mt-5 mb-2 flex flex-row">
        <div
          className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400 cursor-pointer"
          onClick={dischargeButton}
        >
          Discharge
        </div>
        <div
          className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400 cursor-pointer"
          onClick={downloadReportButton}
        >
          {loading ? "Loading ..." : "Download Report"}
        </div>
      </div>
    </div>
  );
}
