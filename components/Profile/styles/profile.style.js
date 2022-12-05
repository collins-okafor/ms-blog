import styled from "styled-components";

export const ProfileDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .profileDetials {
    width: 70%;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  .profileAds {
    width: 25%;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
