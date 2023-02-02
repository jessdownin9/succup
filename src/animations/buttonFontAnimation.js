export const buttonFontAnimation = (element, fontArray) => {
    let currentFont = 0;
    setInterval(() => {
        element.style.fontFamily = fontArray[currentFont++ % fontArray.length];
    }, 1000);
};
