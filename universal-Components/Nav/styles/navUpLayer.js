import styled from "styled-components";

export const NavUpLayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.stableColor};
  padding: 10px 80px;

  .navUpLayerLogo {
  }

  .navUpLayerLogoAuth {
    .navUpLayerLogoAuthSignIn {
      color: ${({ theme }) => theme.mainColor};
      background-color: transparent;
      outline: none;
      border: 1px solid ${({ theme }) => theme.majorColor};
      font-size: 15px;
      font-weight: 600;
      margin: 0px 10px;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.BaseColor};
      }
    }

    .navUpLayerLogoAuthGetStarted {
      color: ${({ theme }) => theme.mainColor};
      background-color: transparent;
      outline: none;
      border: 1px solid ${({ theme }) => theme.majorColor};
      font-size: 15px;
      font-weight: 600;
      margin: 0px 10px;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.BaseColor};
      }
    }
  }
`;
