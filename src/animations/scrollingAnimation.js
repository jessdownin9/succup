import { animateScroll } from "react-scroll";

export const scrollToTop = () => {
    animateScroll.scrollToTop();
};

export const scrollToNext = () => {
    let viewportHeight = window.innerHeight;
    if (window.scrollY < viewportHeight) {
        animateScroll.scrollTo(viewportHeight);
    } else if (window.scrollY < viewportHeight * 2) {
        animateScroll.scrollTo(viewportHeight * 2);
    } else if (window.scrollY < viewportHeight * 3) {
        animateScroll.scrollTo(viewportHeight * 3);
    }
};

export const scrollBack = () => {
    let viewportHeight = window.innerHeight;
    if (window.scrollY > viewportHeight * 3) {
        animateScroll.scrollTo(viewportHeight * 3);
    } else if (window.scrollY > viewportHeight * 2) {
        animateScroll.scrollTo(viewportHeight * 2);
    } else if (window.scrollY > viewportHeight) {
        animateScroll.scrollTo(viewportHeight);
    } else {
        animateScroll.scrollTo(0);
    }
};