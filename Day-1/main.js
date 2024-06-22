// let count = 0;
// const box = document.getElementById("box");
// const originalMargin = box.style.marginTop; // store the original margin
// const pageHeight = document.body.offsetHeight; // get the height of the page

// function increaseMargin() {
//     box.style.marginTop = count + "px";
//     count += 10;

//     // check if the margin has reached the bottom of the page
//     if (count + box.offsetHeight >= pageHeight) {
//         resetMargin(); // reset the margin to its original value
//     }
// }

// function resetMargin() {
//     box.style.marginTop = originalMargin; // reset the margin to its original value
//     count = 0; // reset the count to 0
//     clearInterval(intervalId); // stop the interval
// }

// const intervalId = setInterval(increaseMargin, 100);




// const WINDOW_HEIGHT = window.innerHeight;
// const BOX_SIZE = 100;
// const MAX_MARGIN = WINDOW_HEIGHT - BOX_SIZE;
// let direction = 1;

// let count = 10;
// const box = document.getElementById("box")

// function increaseMargin() {
//     box.style.marginTop = count + "px";

//     if (count >= MAX_MARGIN || count <= 0) {
//         direction *= -1;
//     }
//     count += direction * 5;
// }

// setInterval(increaseMargin, 20);

// JavaScript to handle any dynamic functionality, such as handling the buy button clicks
document.addEventListener('DOMContentLoaded', function () {
    // Select all "Buy" buttons
    const buyButtons = document.querySelectorAll('.card-buy');

    // Add click event listener to each "Buy" button
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item has been purchased!');
        });
    });

    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.card-add');

    // Add click event listener to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item has been added to your cart!');
        });
    });
});

