const ipad= window.matchMedia("screen and (max-width: 767px")
const menu = document.querySelector(".menu");
const burguerButton = document.querySelector(".burguer-button");
const body = document.querySelector("body");
const theme = document.getElementById("label");
const items = document.getElementsByClassName("theme");

var themeBool = false;
// console.log(body);

burguerButton.addEventListener('click', hideShow);
theme.addEventListener('click', changeTheme);
ipad.addListener(validation);

function hideShow(){
  if(menu.classList.contains("is-active"))
    menu.classList.remove("is-active");
  else
    menu.classList.add("is-active");
}

function validation(event ){
  if(event.matches)
    burguerButton.addEventListener('click', hideShow);
  else
    burguerButton.removeEventListener('click', hideShow);
}

 function changeTheme(){
  //  debugger
  // console.log(theme.innerText);
    if(theme.innerText === "Dark theme"){
      theme.innerText = "Light theme";
      themeBool = true;
      
      Array.prototype.forEach.call(items, item => {
        item.style.backgroundColor = 'rgb(68,53,68)';
      })
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
    }
    else{
      theme.innerText = "Dark theme";
      themeBool = false;
      Array.prototype.forEach.call(items, item => {
        item.style.backgroundColor = 'rgb(220,229,225)';
      })
      body.style.backgroundColor = 'rgb(240,249,245)';
      body.style.color = 'black';
    }
    //dibujaTodo();  
    // console.log(theme.innerText);
 }

 changeTheme();
 //BLOQUE PRINCIPAL
 validation(ipad);

 function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var inicio, fin;
  inicio = type*3;
  fin = type*3+3;
 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++; 
  if (slideIndex > fin) {slideIndex = inicio+1}    
  
  for (i = 0; i < 3; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[(slideIndex-1)%3].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

 
 var href= window.location.href;
 var type= (parseInt( href.charAt(href.length-1))-1);
 var slideIndex = type*3;
showSlides();



