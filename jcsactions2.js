let divs = document.querySelectorAll('#classicbox1alt,#classicbox2alt,#classicbox3alt,#classicbox4alt');
let button = document.getElementById('classicnextalt');
let currentIndex = 0;

function showDiv(index) {
    divs.forEach(div => div.style.display = 'none'); // Hide all divs
    divs[index].style.display = 'block'; // Show the selected div
}

button.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % divs.length; // Increment and loop back to 0
    showDiv(currentIndex);
});