import styled from "styled-components";
import { withWindowSize } from "react-fns";

const PageContainer = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export default withWindowSize(PageContainer);
