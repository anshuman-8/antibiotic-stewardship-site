import React from "react";
import AnalysisReportTable from "./AnalysisReportTable";
import { useQuery, gql } from "@apollo/client";
import TablePlaceholder from "./TablePlaceholder";

export default function AnalysisReportTab() {
  const getAllAnalysisReport = gql`
    query {
      analysisForms {
        id
        date
        doctor
        patient {
          id
          fullName
          mrdNumber
          dateOfBirth
          dateOfAdmission
        }
        patientForm {
          id
          reviewDate
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(getAllAnalysisReport, {
    pollInterval: 10000,
  });

  if (loading)
    return (
      <>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <TablePlaceholder />
        </div>
      </>
    );

  return (
    <div>
      <AnalysisReportTable data={data.analysisForms} />
    </div>
  );
}
