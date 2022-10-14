import styled from "styled-components";

const myId = document.getElementsByClassName("header-wrapper");
let lastKnown = 0;

/** enables you to hide menu on down scroll and immediately show on scroll up */
let elementHider = () => {
  let y = window.scrollY;
  if (y > lastKnown) {
    lastKnown = y;
    myId[0].className = "header-wrapper  hide";
  } else {
    lastKnown = y;
    myId[0].className = "header-wrapper  show";
    // console.log("trigger show");
  }
};

const HeaderHider = styled.div`
  /* the 'hide' and 'show' is part of menu hiding (elementHider.js) by scrolling */

  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;

  .header-wrapper {
    transition: all 0.5s;
  }

  .hide {
    opacity: 0;
    left: -100%;
  }

  .show {
    opacity: 1;
    left: 0;
  }
`;

// import in the component to hide
export { elementHider, HeaderHider };
