import { useState, useEffect } from "react";

const initialState = {
    isMobile: false,
    isTablet: false,
    isDesktop: false
}
const BreakPoints = {
    MOBILE: 640,
    TABLET: 768,
    DESKTOP: 1024,
    LARGE_DESKTOP: 1536
}
/* 
      'sm': '640px',
     
      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
*/

const compute = (size: { height: number, width: number }) => {
    let result

    if (size.width < BreakPoints.MOBILE) {
        result = { ...initialState, isMobile: true }
    } else if (
        size.width > BreakPoints.MOBILE && size.width < BreakPoints.DESKTOP
    ) {

        result = { ...initialState, isTablet: true }
    }
    else {
        result = { ...initialState, isDesktop: true }
    }


    return result
}



function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount




    return compute(windowSize);
}


export default useWindowSize