export const buttonFontAnimation = (element, fontArray) => {
    let currentFont = 0;
    return setInterval(() => {
        element.style.fontFamily = fontArray[currentFont++ % fontArray.length];
    }, 1000);
};
