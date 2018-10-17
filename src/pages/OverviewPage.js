import React from "react";
import { Link } from "react-router-dom";

const OverviewPage = props => {
  return (
    <div>
      <h1>Overview Page</h1>
      <Link to="/">Transactions</Link>
    </div>
  );
};

export default OverviewPage;
