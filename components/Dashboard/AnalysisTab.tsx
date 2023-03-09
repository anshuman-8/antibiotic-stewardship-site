import React from "react";
import AnalysisTable from "./AnalysisTable";
import { useQuery, gql } from "@apollo/client";
import TablePlaceholder from "./TablePlaceholder";

export default function AnalysisTab() {
  const getFormsForAnalysis = gql`
    query {
      formsForAnalysis {
        id
        reviewDate
        reviewDepartment
        patient {
          id
          fullName
          mrdNumber
          dateOfBirth
          patientLocation
          lastReviewDate
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(getFormsForAnalysis, {
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
      <AnalysisTable data={data.formsForAnalysis} />
    </div>
  );
}
