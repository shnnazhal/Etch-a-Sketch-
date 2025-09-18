

let isHolding = false;
let pressedElements = [];

document.querySelector("#large").addEventListener("click", () => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    return createSquares("large")
})
document.querySelector("#medium").addEventListener("click", () => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    return createSquares("medium")
})
document.querySelector("#small").addEventListener("click", () => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    return createSquares("small")
})


function createSquares(format) {
       console.log(format);
        if (format === "large") {

            buildSquares(4096, "square2");
       }
       if (format === "medium") {
           buildSquares(1024, "square1");
       }
       if (format === "small") {
           buildSquares(256, "square");
       }
}





function buildSquares(pixels, squaresNumber) {
    console.log(pixels, squaresNumber);
    for (let i = 0; i < pixels; i++) {
        const square64 = document.createElement("div");
        square64.classList.add(squaresNumber);
        document.getElementById('container').appendChild(square64);
    }


    document.addEventListener('mousedown', function (e) {
        if (e.target.classList.contains(squaresNumber)) {
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
        if (isHolding && e.target.classList.contains(squaresNumber)) {
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
    document.addEventListener("click", function (e) {
        if (e.target.id === "buttonr") {
            // твой код
            pressedElements.forEach(element => {
                element.classList.remove('pressed');
                element.style.backgroundColor = "";
            });
            pressedElements = [];
            console.log("adlskdlasd")
        }
    })
}



//My problem is that the
