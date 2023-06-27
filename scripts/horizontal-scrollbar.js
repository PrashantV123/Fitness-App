// Get the container and content elements
const container = document.querySelector('.horizontal-scrollbar-container');

// Get the left and right arrow elements
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Add event listeners to the arrow elements
leftArrow.addEventListener('click', scrollLeft);
rightArrow.addEventListener('click', scrollRight);

// Function to scroll content to the left
function scrollLeft() {
    container.scrollTo({
        left: container.scrollLeft - 400,
        behavior: 'smooth'
    });
}

// Function to scroll content to the right
function scrollRight() {
    container.scrollTo({
        left: container.scrollLeft + 400,
        behavior: 'smooth'
    });
}
