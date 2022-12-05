import styled from "styled-components";

export const ProfileHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .profileHeadeWrapper {
    width: 170px;
    height: 170px;

    .profileHeadeWrapper__profile {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .profileHeadeWrapper_profileText {
    width: 75%;
    border: 1px solid red;

    .profileHeadeWrapper_profileTextDetails {
      h3 {
        /* font-family: "Public Sans", sans-serif; */
        /* font-family: "Nunito", sans-serif; */
        /* font-family: "Inter", sans-serif; */
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 38px;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`;
