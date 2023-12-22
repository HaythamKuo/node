import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: #ddbea9;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 35px;
  ${({ $layout }) => $layout && `flex-direction: ${$layout};`}
  flex-direction: ${({ layout }) => layout || "row"};
  &:hover {
    transform: scale(1.005);
    border: solid black 1px;
  }

  h2 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 2rem;
  }
  img {
    width: 20%;
    height: 20%;
  }

  & > div {
    flex: 1;
  }
`;
