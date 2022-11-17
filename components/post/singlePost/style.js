import styled from "styled-components";

export const StyledPost = styled.div`
  /* background: red; */
  /* display: flex; */
  /* justify-content: space-between; */
  width: 60%;
  margin: 1rem auto;
  align-items: center;
  /* font-family: "Merriweather", serif; */
  border-bottom: 1px solid #7e807e4d;
  padding-bottom: 1rem;
  /* font-family: "Montserrat", sans-serif; */
  font-family: "PT Serif", serif;
  .flex {
    display: flex;
    align-items: center;
    /* background-color: red; */
    margin-bottom: 0.4rem;
  }
  .profileImage {
    width: 4%;
    height: 30px;
    margin-right: 0.7rem;
    img {
      width: 100%;
      height: inherit;
      border-radius: 100%;
    }
  }
  .userName {
    h5 {
      font-weight: 500;
      margin-right: 0.5rem;
    }
    p {
      font-size: 12px;
    }
  }
  .mainPostContainer {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
  .photoContainer {
    width: 16%;
    height: 120px;
    img {
      width: 100%;
      height: inherit;
    }
  }

  .postContainer {
    width: 75%;
    h1 {
      font-size: 20px;
      font-weight: 900;
      font-family: "PT Serif", serif;
    }
    h5 {
      margin: 0.1rem 0;
    }
    .date {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 0.4rem;
    }
    .textContent {
      font-size: 12px;
    }
  }
`;
