import styled, { keyframes } from "styled-components";

const left = keyframes`
  from{
    left:-100px; 
    opacity:0.5
  } 
  to{
    left:0; 
    opacity:1
  }
`;

const leftRevers = keyframes`
  from{
    left:0; 
    opacity:1
  } 

  to{
    left:-100px; 
    opacity:0.5
  }
`;

const right = keyframes`
  from{
    right:-50px; 
    opacity:0
  } 
  to{
    right:0; 
    opacity:1
  }
`;

const fade = keyframes`
  0%{
    opacity:0
  }
  100%{
    opacity:1
  }
`;

export const SideBarDiv = styled.div`
  width: 60%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  background-color: ${({ theme }) => theme.BaseColor};
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.698);
  display: none;
  /* animation: ${fade} 0.4s; */

  .sidebar__UpperLayer {
    width: 100%;
    height: 24vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .sidebar__UpperLayerCancelIconBody {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      margin: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .sidebar__UpperLayerCancelIcon {
        font-size: 30px;
        color: ${({ theme }) => theme.mainColor};
      }
    }

    .navUpLayerLogoAuthSystem {
      display: flex;
      align-items: center;
      padding: 5px 0px;

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
  }

  .LowerNavLinks {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0px 10px;

    &::-webkit-scrollbar-track {
      border-radius: 5px;
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 3px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #e89b2d;
    }

    .LowerNavLinksData {
      /* font-family: "Public Sans", sans-serif; */
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-size: 16px;
      line-height: 16px;
      cursor: pointer;
      padding: 10px 5px;
      margin-right: 8px;
      font-weight: 800;
      margin: 2px 0px;
      border-bottom: 1px solid ${({ theme }) => theme.majorColor};

      &:hover {
        border-radius: 8px;
        background-color: ${({ theme }) => theme.majorColor};
      }
    }
  }

  @media screen and (max-width: 800px) {
    display: ${({ showHideSidebar }) => (showHideSidebar ? "block" : "none")};
    transition: all 2s;
    animation: ${({ showHideSidebar }) =>
        showHideSidebar === true ? left : leftRevers}
      0.4s ease-out;
  }
`;
