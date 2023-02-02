export const findPicX = (ref) => {
    let right = ref.getBoundingClientRect().right; 
    let left = ref.getBoundingClientRect().left;
    let length = right - left
    return left + (length / 2);
};

export const findPicY = (ref) => {
    let bottom = ref.getBoundingClientRect().bottom;
    let top = ref.getBoundingClientRect().top;
    let length = bottom - top;
    return top + (length / 2) + 200;
}

export const changeSize = (ref, picX, picY, e) => {
    let x = e.pageX;
    let y = e.pageY;
    let dx = x - picX;
    let dy = y - picY;
    let distance = Math.max(100, 550-(Math.sqrt((dx*dx) + (dy*dy)) / 4));
    ref.style.width = ref.style.height = distance + 'px';
};
