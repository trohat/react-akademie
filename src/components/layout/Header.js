import styled from "styled-components";
import { backgroundColor } from "../../constants/colors";

export default styled.header`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 1rem;

  ${({ centered }) =>
    centered &&
    `
    justify-content: center;
  `};
`;
