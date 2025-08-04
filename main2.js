document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded so that we can see the elements we want to animate

    const topLeftDiv = document.querySelector('.top-left-div');
    topLeftDiv.classList.add('slide-in-top-left-div');

    const topRightDiv = document.querySelector('.top-right-div');
    topRightDiv.classList.add('slide-in-top-right-div');

    const leftEdgeDiv = document.querySelector('.left-edge-div');
    leftEdgeDiv.classList.add('slide-in-left-edge-div');
});