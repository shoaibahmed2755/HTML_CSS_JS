const button = document.getElementById('mybutton');
button.addEventListener('click', function() {
    console.log("Button Clicked");
});

const image = document.getElementById('myimage');
image.addEventListener('mouseover', function() {
    image.style.borderColor = "red"; // Change the border color to red
});

image.addEventListener('mouseout', function() {
    image.style.borderColor = "pink"; // Revert back to pink when mouse leaves
});
