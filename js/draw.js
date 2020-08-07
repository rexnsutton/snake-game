const canvas = document.querySelector(".canvas");
const ctxt = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let snake;
(function setup() {

 snake = new Snake();

 window.setInterval(() => {
        ctxt.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();

 }, 250);
}());



