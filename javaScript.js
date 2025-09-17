for (let i = 0; i < 1024; i++) {
    const square = document.createElement("div");
    square.classList.add('square');
    document.getElementById('container').appendChild(square);
}

console.log("4 squares created!");
