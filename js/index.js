

let sort = document.querySelector(".sort");
let color = document.querySelector(".color");
let price = document.querySelector(".price");
let type = document.querySelector(".type");
let occasion = document.querySelector(".occasion");

let position = document.querySelector(".position");
let position1 = document.querySelector(".position1");
let position2 = document.querySelector(".position2");
let position3 = document.querySelector(".position3");
let position4 = document.querySelector(".position4");


// BOTTON + LIST FILTER

sort.onclick = () => {
    position.classList.toggle('active');  
};

color.onclick = () => {
    position1.classList.toggle('active');  
};

price.onclick = () => {
    position2.classList.toggle('active');  
};

type.onclick = () => {
    position3.classList.toggle('active');  
};

occasion.onclick = () => {
    position4.classList.toggle('active');  
};

document.onclick = (e) => {
    if (e.target !== sort && e.target !== position
        && e.target !== color && e.target !== position1
        && e.target !== price && e.target !== position2
        && e.target !== type && e.target !== position3
        && e.target !== occasion && e.target !== position4) {
        position.classList.remove('active');
        position1.classList.remove('active');
        position2.classList.remove('active');
        position3.classList.remove('active');
        position4.classList.remove('active');
    }
};


