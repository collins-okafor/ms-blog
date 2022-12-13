import styled from "styled-components";

export const StyledTabDisplay = styled.div`
  .buttonContainer {
    border-bottom: 1px solid gray;
  }
  .tabOneBtn {
    background-color: transparent;
    border: none;
    /* width: 10%; */
    padding: 12px;
    font-weight: ${({ display }) => (display === true ? "bolder" : "normal")};
    border-bottom: ${({ display }) =>
      display === true ? "1px solid black" : "none"};
    cursor: pointer;
  }
  .tabTwoBtn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    /* width: 10%; */
    margin-left: 2rem;
    font-weight: ${({ display }) => (display === false ? "bolder" : "normal")};
    padding: 12px;
    border-bottom: ${({ display }) =>
      display === false ? "1px solid black" : "none"};
  }
  .tabContainer {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;
    flex-wrap: wrap;
    .leftContent {
      width: 65%;
      @media (max-width: 700px) {
        width: 90%;
      }
    }
    .rightContent {
      width: 25%;
      @media (max-width: 700px) {
        width: 90%;
      }
    }
  }
  .tabOneDisplay {
    display: ${({ display }) => (display === true ? "block" : "none")};
    .header-text {
      margin: 2rem 0;
    }
  }
  .tabTwoDisplay {
    display: ${({ display }) => (display === false ? "block" : "none")};
    .header-text {
      margin-top: 2rem;
    }
  }
`;
