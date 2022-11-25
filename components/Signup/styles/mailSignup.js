import styled from "styled-components";

export const MailContainer = styled.div`
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
  .signUpButton {
    border: 1px solid gray;
    border-radius: 20px;
    color: ${({ theme }) => theme.textColorReverse};
    background-color: ${({ theme }) => theme.textColor};
    padding: 10px;
    width: 32%;
    /* background-color: transparent; */
    margin: 0.7rem 0;
  }
  h3 {
    text-transform: uppercase;
  }
  p {
    margin-bottom: 3rem;
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    width: 80%;
    text-align: center;
    margin: 1rem 0;
    label {
      margin-bottom: 0.2rem;
    }
    input {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.textColor};
      color: ${({ theme }) => theme.textColor};
      background-color: ${({ theme }) => theme.primaryColor};
      outline: none;
      font-size: 15px;
      width: 60%;
      margin: 0 auto;
      padding: 10px;
    }
  }
`;
