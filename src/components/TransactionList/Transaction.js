import React from "react";
import styled from "styled-components";
import parse from "date-fns/parse";
import format from "date-fns/format";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

import TransactionValue from "./TransactionValue";
import StyledButton from "../shared/StyledButton";
import StyledIcon from "../shared/StyledIcon";

const TransactionRoot = styled.div`
  padding: 10px;
  border: 1px solid #d3e0df;
  border-radius: 4px;
  background-color: #ffffff;
  margin-bottom: 6px;
`;

const TransactionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ expanded }) =>
    expanded &&
    `
    margin-top: 10px;
  `};
`;

export default ({ data, expanded, toggleExpanded, deleteTransaction }) => (
  <TransactionRoot onClick={toggleExpanded}>
    <TransactionRow>
      <div>{data.name}</div>
      <TransactionValue type={data.type}>{data.value}</TransactionValue>
    </TransactionRow>
    {expanded && (
      <TransactionRow expanded>
        <div>{format(parse(data.created), "H:mm DD:MM:YYYY")}</div>
        <StyledButton icon danger onClick={() => deleteTransaction(data)}>
          <StyledIcon icon={faEraser} />
        </StyledButton>
      </TransactionRow>
    )}
  </TransactionRoot>
);
