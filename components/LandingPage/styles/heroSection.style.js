import styled from "styled-components";

export const HeroDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* flex-direction: column; */

  .heroImageWrapper {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-image: linear-gradient(
        to right,
        rgba(20, 39, 66, 0.655) 50%,
        rgba(20, 39, 66, 1.255)
      ),
      url(${({ bg }) => bg.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .heroImage {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  .heroDetails {
    position: absolute;
    width: 60%;
    margin: 0px 30px;
    /* border: 1px solid red; */

    .heroDetails__header {
      font-family: "Public Sans", sans-serif;
      color: ${({ theme }) => theme.majorColor};
      font-size: 64px;
      font-weight: 900;
      font-style: normal;

      @media screen and (max-width: 800px) {
        font-size: 42px;
      }

      @media screen and (max-width: 500px) {
        font-size: 32px;
      }
    }
    .heroDetails__contents {
      font-family: "Public Sans", sans-serif;
      width: 70%;
      color: ${({ theme }) => theme.mainColor};
      font-size: 18px;
      font-weight: 600;
    }

    .heroDetails__action {
      margin: 35px 0px;

      button {
        font-family: "Public Sans", sans-serif;
        background-color: ${({ theme }) => theme.majorColor};
        border: none;
        outline: none;
        padding: 12px 10px;
        color: ${({ theme }) => theme.mainColor};
        font-size: 18px;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          background-color: #b37216;
        }
      }
    }

    @media screen and (max-width: 1030px) {
      width: 80%;
    }

    @media screen and (max-width: 800px) {
      width: 90%;
    }
  }
`;
