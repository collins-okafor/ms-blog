import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.548);
  height: 100vh;
  position: absolute;
  top: 0;
  display: ${({ show }) => (show === false ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  .modalContent {
    width: inherit;
  }
`;
