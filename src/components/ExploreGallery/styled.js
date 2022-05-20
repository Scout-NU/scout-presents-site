import styled from "styled-components";
import Cursor from "../../images/cursor-pointer.svg";
import { H3 } from "../../styles/styles";

export const ViewContainer = styled.div`
  margin-bottom: 6rem;
  height: 900;
  overflow: hidden;
  cursor: url(${Cursor}) 20 20, pointer;
`;

export const StyledH3 = styled(H3)`
  margin-top: 250px;
  margin-left: 10px;
`;
