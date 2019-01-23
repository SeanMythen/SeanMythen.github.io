function changeText(text) {
    var display = document.getElementById('skilltitle');
    display.innerHTML = text;
}

function defaultText() {
    var display = document.getElementById('skilltitle');
    display.innerHTML = "Expertise";
}

function changeText1(text) {
    var display = document.getElementById('learningtitle');
    display.innerHTML = text;
}

function defaultText1() {
    var display = document.getElementById('learningtitle');
    display.innerHTML = "Learning";
}

let porfolio = document.getElementById('portfolio');
let container = document.getElementById('container');
let portfolioContainer = document.getElementById('portfolioContainer');

let body = document.getElementById('body');




window.onload = function(){
    body.classList.remove('fade-out')
    body.classList.remove('fade-out-portfolio')
};


