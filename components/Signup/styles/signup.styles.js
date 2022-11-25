import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  background: ${({ theme }) => theme.primaryColor};
  margin: auto;
  height: 90vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;
  color: ${({ theme }) => theme.textColor};
  .cancelButton {
    position: absolute;
    top: 1px;
    right: 1px;
    padding: 5px 10px;
  }
  h3 {
    margin-bottom: 5rem;
    text-transform: uppercase;
  }
  .signupButton {
    border: 1px solid gray;
    border-radius: 20px;
    color: ${({ theme }) => theme.textColor};
    padding: 10px;
    width: 32%;
    background-color: transparent;
    margin: 0.7rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      font-size: 20px;
      margin-right: 0.5rem;
    }
    :hover {
      cursor: pointer;
    }
  }
  .account {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 5rem;
    a {
      color: ${({ theme }) => theme.majorColor};
      margin-left: 0.7rem;
    }
  }
  .termsAndServices {
    width: 80%;
    margin: 0 auto;
    p {
      font-size: 12px;
    }
    p a {
      color: ${({ theme }) => theme.majorColor};
    }
  }
`;
