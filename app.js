let size = 10; // wielkosc kwadratu 
const square = document.createElement('div');
document.body.appendChild(square);
square.style.width = size + "px";
square.style.height = size + "px";
let grow = true;

// windows.innerWidth * 0.5 to szerokość okno (50%)


function upSize() {
    if (grow == true) {
        size += 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
        if (size > window.innerWidth*0.5){
            grow = false;
        }
}
    else if (grow == false) {
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
        if (size < 10) {
            grow = true;
        }
    }
    // console.log(size);
    
}

window.addEventListener("scroll", upSize);