import React from "react";
import { Link } from "react-router-dom";
import withTransactions from "../components/withTransactions";

const OverviewPage = props => {
  return (
    <div>
      <h1>Overview Page</h1>
      <Link to="/">Transactions</Link>
    </div>
  );
};

export default withTransactions(OverviewPage);
