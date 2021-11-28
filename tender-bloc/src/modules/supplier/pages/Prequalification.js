import React from "react";
import Page from "../components/Page";
import Category from "../components/Category";
import PrequalificationTable from "../components/PrequalificationTable";

const Prequalification = () => {
  return (
    <Page name="Prequalification">
      <Category name="Home - Document Upload" />
      <div className="table-template">
        <PrequalificationTable />
      </div>
    </Page>
  );
};

export default Prequalification;
