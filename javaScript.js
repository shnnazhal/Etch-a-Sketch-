

let isHolding = false;
let pressedElements = [];

document.querySelector("#large").addEventListener("click", () => {
    return createSquares(large)
})
document.querySelector("#medium").addEventListener("click", () => {
    return createSquares(medium)
})
document.querySelector("#small").addEventListener("click", () => {
    return createSquares(small)
})


   function createSquares(format) {
       if (format === large) {
           for (let i = 0; i < 4096; i++) {
               const square64 = document.createElement("div");
               square64.classList.add('square2');
               document.getElementById('container').appendChild(square64);
           }


           document.addEventListener('mousedown', function (e) {
               if (e.target.classList.contains('square2')) {
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
               if (isHolding && e.target.classList.contains("square2")) {
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
       }
       if (format === medium) {
           for (let i = 0; i < 1024; i++) {
               const square64 = document.createElement("div");
               square64.classList.add('square1');
               document.getElementById('container').appendChild(square64);
           }


           document.addEventListener('mousedown', function (e) {
               if (e.target.classList.contains('square1')) {
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
               if (isHolding && e.target.classList.contains("square1")) {
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
                   pressedElements.forEach(element => {
                       element.classList.remove('pressed');
                       element.style.backgroundColor= "";
                   });
                   pressedElements = [];
                   console.log("adlskdlasd")
               }
           })
       }
       if (format === small) {
           for (let i = 0; i < 256; i++) {
               const square64 = document.createElement("div");
               square64.classList.add('square');
               document.getElementById('container').appendChild(square64);
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
                   pressedElements.forEach(element => {
                       element.classList.remove('pressed');
                       element.style.backgroundColor= "";
                   });
                   pressedElements = [];
                   console.log("adlskdlasd")
               }
           })
       }
}





//My problem is that the
