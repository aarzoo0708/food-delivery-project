// const images = ["../image/home-main.png",
//           "../image/home-pizza.jpeg",
//           "../image/home-burger.jpg",
//           "../image/home-sandwich.avif",
//           "../image/home-waffle.webp",
//           "../image/home-coffee.webp"
// ]

// const image = document.getElementById("img");

// images.forEach(src => {
//     const img = document.createElement("img")
//     img.src = src;
//     image.appendChild(img);
// });

// let index = 0;

// setInterval(() => {
//     index++;
//     if(index>images.length){
//         index = 0;
//     }

//     image.style.transform = `translate(-${index * 100}%)`;
//     image.style.transition = "0.5s ease-in-out";
// }, 3000);


const images = [
    "../image/home-main.png",
    "../image/home-pizza1.png",
    "../image/home-burger1.png",
    "../image/home-sandwich1.png",
    "../image/home-waffle1.png",
    "../image/home-coffee1.png"
];

const track = document.getElementById("img");
images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    track.appendChild(img);
});

const firstClone = document.createElement("img");
firstClone.src = images[0];
track.appendChild(firstClone);

let index = 0;

setInterval(() => {
    index++;

    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * 100}%)`;

    if (index === images.length) {
        setTimeout(() => {
            track.style.transition = "none";   
            track.style.transform = "translateX(0)";
            index = 0;
        }, 500); 
    }

}, 3000);