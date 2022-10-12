import styled, { keyframes } from "styled-components";

// Fancy background animation, shows that the component is loading
const StyledLoadingAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`

// This ensures that the loading component doesn't become visible right away
// as that would cause a poping effect
const StyledVisibilityAnimation = keyframes`
  0% {
    opacity: 0;
  }

  90% {
    opacity: 1;
  }
  
  100% {
    opacity: 1;
  }
`

export const StyledLoadingBox = styled.div`
  background-color: #141823;
  background: linear-gradient(90deg, #141823, #252d41);
  background-size: 200% 100%;
  width: 100%;
  height: 100%;
  border-radius: 1em;
  opacity: 0;
  animation:
    ${StyledLoadingAnimation} 2s ease infinite,
    ${StyledVisibilityAnimation} 3s ease forwards
  ;
`