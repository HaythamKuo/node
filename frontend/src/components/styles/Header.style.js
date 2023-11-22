import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.color.header};
  padding: 2.5rem 2rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;
  }
  img {
    width: 75px;
    height: 75px;
    cursor: pointer;
    border-radius: 50%;
    background-color: white;
    padding: 1rem;
  }
`;
