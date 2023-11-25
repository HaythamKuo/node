import styled from "styled-components";
import { show } from "./Theme.style";

export const HomeStyle = styled.div`
  //margin-top: 3rem;
  text-align: center;
  svg {
    width: 100%;
    height: 200;
  }
  text {
    font-weight: bold;
    font-size: 6rem;
    stroke: #b7b7a4;
    stroke-width: 2;
    animation: ${show} 5s ease-in-out;
  }
  p {
    font-size: 4rem;
  }
`;
