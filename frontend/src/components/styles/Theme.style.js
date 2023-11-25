import { keyframes } from "styled-components";
export const show = keyframes`
0%,10%{
    fill:transparent;
    stroke-dasharray:0% 100%;

}
70%{
    stroke-dasharray:100% 0%;
    stroke-opacity:1;
    fill:transparent
}
80%,100%{
    stroke-opacity:0;
    fill:#cb997e
}
`;

const theme = {
  color: {
    header: "#e8bcb9",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
export default theme;
