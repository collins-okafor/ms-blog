import styled from "styled-components";

export const SearchStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0c15217a;
  /* color: white; */
  text-align: center;
  button {
    position: absolute;
    font-size: 30px;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.textColor};
    top: 1rem;
    right: 1rem;
  }
  input {
    width: 70%;
    margin: 1rem auto;
    margin-top: 10rem;
    padding: 10px;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.majorColor};
    font-size: 20px;
    color: ${({ theme }) => theme.textColor};
  }
`;
