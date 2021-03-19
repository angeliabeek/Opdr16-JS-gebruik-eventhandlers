// Opdracht 1
const button = document.querySelector('#mybutton');
button.addEventListener('click', function () {
    alert("button clicked");
})

// Opdracht 2
const changeButton = document.querySelector('#backgroundbutton');
const blueBackground = document.querySelector('.blue-background');
changeButton.addEventListener('click', function changeColor() {
    blueBackground.classList.add("red-background");
})

// Opdracht 3
const toggleButton = document.querySelector('#backgroundbutton');
const blueBackground = document.querySelector('.blue-background');
toggleButton.addEventListener('click', function toggleColor() {
    blueBackground.classList.toggle("red-background");
})