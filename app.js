const changeColor = document.querySelector('div');

changeColor.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'pink';
})

changeColor.addEventListener('mouseleave', function (event) {
    event.target.style.backgroundColor = "aqua";
})