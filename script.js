const button = document.querySelector(".options");
const navMenu = document.querySelector(".background_color");
const options = document.querySelector(".options");
const crossOption = document.querySelector(".cross_option");
button.addEventListener("click",function(){
    if(navMenu.style.display == 'block'){
     crossOption.style.display ='none';  
     navMenu.style.display ='none';
     
} else{
    navMenu.style.display ='block';
    crossOption.style.display = 'block';
}
})
crossOption.addEventListener("click",function(){
    navMenu.style.display = 'none';
    crossOption.style.display = 'none';
})