import styled from "styled-components";

export const NavDiv = styled.div`
  position: relative;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  .UpperSection {
    display: ${({ fix }) => (fix === true ? "none" : "blockUpperSection")};
    transition: all 2s;
  }

  .LowerSection {
    width: 100%;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
`;
