let image = document.querySelector(".image");
let previous = document.querySelector(".preBtn");
let next = document.querySelector(".nextBtn");

let counter = 1;

next.addEventListener("click",()=>{
    image.style.backgroundImage = `url(img/bike${counter}.jpg)`;
    if(counter === 11){
        counter = 1;
    }
    counter++; 
    image.animate([{opacity:"0.2"},{opacity:"1.8"}],{duration: 1000, fill:"forwards"});
})

previous.addEventListener("click",()=>{
    image.style.backgroundImage = `url(img/bike${counter}.jpg)`;
    if(counter === 1){
        counter = 11;
    }
    counter--; 

    image.animate([{opacity:"0.2"},{opacity:"1.8"}],{duration: 1000, fill:"forwards"});
})