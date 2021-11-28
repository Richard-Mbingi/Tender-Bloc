import React from "react";
import ClosedTendersTable from "../components/ClosedTendersTable";
import Page from "../components/Page";

const ClosedTenders = () => {
  return (
    <Page name="Closed Tenders">
      <div className="table-template">
        <ClosedTendersTable />
      </div>
    </Page>
  );
};

export default ClosedTenders;
