let images = [
    './images/pic-1.jpg',
    './images/pic-2.jpg',
    './images/pic-3.jpg',
    './images/pic-4.jpg',
    './images/pic-5.jpg',
    './images/pic-6.jpg',
    './images/pic-7.jpg',
    './images/pic-8.jpg',
    './images/pic-9.jpg'
];

let index = 0;
let slider = document.getElementById("slider");
setInterval(() => {
    if (index === images.length) {
        index = 0;
    }
    slider.setAttribute("src", `${images[index]}`);
    index++;
}, 1000);
