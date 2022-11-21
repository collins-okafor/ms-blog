import styled from "styled-components";

export const LandingDiv = styled.div`
  width: 100%;
  padding: 30px 80px;

  .landingHeroSection {
    width: 100%;
    height: 80vh;
    margin: 10px 0px;
  }

  .landingBodySection {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 40px 0px;

    .landingBodySectionPost {
      width: 70%;
    }

    .landingBodySectionAds {
      width: 25%;

      .landingBodySectionAdsItem {
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.secondaryColor};
        color: ${({ theme }) => theme.primaryColor};
        margin-bottom: 20px;
      }
    }
  }
`;
