const WINDOW_HEIGHT = window.innerHeight;
const WINDOW_WIDTH = window.innerWidth;
const box = document.getElementById("box");
const bar = document.getElementById("bar");

const BAR_HEIGHT = 150; // Increased bar height
const BOX_SIZE = 50; // Increased box size
const MAX_MARGIN_TOP = WINDOW_HEIGHT - BOX_SIZE;
const MAX_MARGIN_LEFT = WINDOW_WIDTH - BOX_SIZE;

let direction_x = 1;
let direction_y = 1;
let x_count = 60;
let y_count = 20;

let bar_top = (WINDOW_HEIGHT - BAR_HEIGHT) / 2;

bar.style.position = "absolute";
bar.style.height = BAR_HEIGHT + "px";
bar.style.width = "30px"; // Increased width of the bar for better visibility
bar.style.backgroundColor = "black";
bar.style.left = "10px";
bar.style.top = bar_top + "px";

box.style.position = "absolute";
box.style.height = BOX_SIZE + "px";
box.style.width = BOX_SIZE + "px";
box.style.backgroundColor = "red";
box.style.top = y_count + "px";
box.style.left = x_count + "px";

document.addEventListener("mousemove", (e) => {
    let newTop = e.clientY - BAR_HEIGHT / 2;
    if (newTop < 0) newTop = 0;
    if (newTop > WINDOW_HEIGHT - BAR_HEIGHT) newTop = WINDOW_HEIGHT - BAR_HEIGHT;
    bar.style.top = newTop + "px";
    bar_top = newTop;
});

function increaseMargin() {
    box.style.top = y_count + "px";
    box.style.left = x_count + "px";

    if (y_count >= MAX_MARGIN_TOP || y_count <= 0) {
        direction_y *= -1;
    }
    if (x_count >= MAX_MARGIN_LEFT || x_count <= 30) {
        // Check if bar position collides with ball
        if (x_count <= 30) {
            if (y_count + BOX_SIZE >= bar_top && y_count <= bar_top + BAR_HEIGHT) {
                // Collides
                direction_x *= -1;
                x_count = 31;
            } else {
                alert("GAME OVER");
                clearInterval(gameInterval); // Stop the game loop
                return;
            }
        } else {
            direction_x *= -1;
        }
    }

    y_count = y_count + direction_y * 10;
    x_count = x_count + direction_x * 10;
}

const gameInterval = setInterval(increaseMargin, 20);
