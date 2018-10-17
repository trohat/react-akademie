import React from "react";

const Transaction = ({ key, name, value, type }) => (
  <div key={key}>
    <div>{name}</div>
    <div>{value}</div>
    <div>{type}</div>
  </div>
);

export default Transaction;
