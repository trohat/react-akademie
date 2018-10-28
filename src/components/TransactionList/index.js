import React from "react";
import styled from "styled-components";
import TransactionContainer from "./TransactionContainer";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export default ({ transactions, deleteTransaction }) => (
  <List>
    {transactions.map(transaction => (
      <TransactionContainer
        data={transaction}
        deleteTransaction={deleteTransaction}
      />
    ))}
  </List>
);
