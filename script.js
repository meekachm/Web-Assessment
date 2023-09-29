document.addEventListener('DOMContentLoaded', function () {
    // References to DOM elements
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const colorInput = document.getElementById('color');
    const dynamicWidth = document.getElementById('dynamic-width');
    const dynamicHeight = document.getElementById('dynamic-height');
    const dynamicColor = document.getElementById('dynamic-color');
    const box = document.getElementById('box');

    // Function for updating the box and dynamic values
    function updateBox() {
        const width = widthInput.value + 'px';
        const height = heightInput.value + 'px';
        const color = colorInput.value;

        box.style.width = width;
        box.style.height = height;
        box.style.backgroundColor = color;

        dynamicWidth.innerHTML = width;
        dynamicHeight.innerHTML = height;
        dynamicColor.innerHTML = color;
    }

    // Add event listeners to input elements
    widthInput.addEventListener('input', updateBox);
    heightInput.addEventListener('input', updateBox);
    colorInput.addEventListener('input', updateBox);

    // Initialize box and dynamic values
    updateBox();
});
