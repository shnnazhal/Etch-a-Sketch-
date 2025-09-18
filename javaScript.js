

let isHolding = false;
let pressedElements = []

for (let i = 0; i < 4096; i++) {
    const square = document.createElement("div");
    square.classList.add('square');
    document.getElementById('container').appendChild(square);
}


document.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('square')) {
        isHolding = true;
        console.log("pisun")

        if (!pressedElements.includes(e.target)) {
            pressedElements.push(e.target);
            e.target.classList.add("pressed")
            e.target.style.backgroundColor = 'red';
        }
    }
});
document.addEventListener('mouseover', function (e) {
    if (isHolding && e.target.classList.contains("square")) {
        if (!pressedElements.includes(e.target)) {
            pressedElements.push(e.target);
            e.target.classList.add("pressed")
            e.target.style.backgroundColor = 'red';
        }
    }
})

document.addEventListener("mouseup", function (e) {
    isHolding = false
})
document.addEventListener("click", function (e ){
    if (e.target.id === "buttonr") {
        // твой код
        pressedElements.forEach(element => {
            element.classList.remove('pressed');
            element.style.backgroundColor= "";
        });
        pressedElements = [];
        console.log("adlskdlasd")
    }
})



//My problem is that the
