import React from "react";
import Record from "./Record";

const Table = props => {
  const item = "prase";
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Value</th>
      </tr>
      {props.data.map(item => (
        <Record item={item} />
      ))}
    </table>
  );
};

export default Table;
