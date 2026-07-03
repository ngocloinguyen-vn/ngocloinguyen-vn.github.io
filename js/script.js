// Highlight navbar after scrolling

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 40){

navbar.classList.add("shadow");

}else{

navbar.classList.remove("shadow");

}

});
