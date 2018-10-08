import React from "react";
import Record from "./Record";

const Table = props => {
  const item = "prase";
  /*const lines = props.data.map(item => (
    <Record item= />
  );*/
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Value</th>
      </tr>
      {lines}
    </table>
  );
};

export default Table;
