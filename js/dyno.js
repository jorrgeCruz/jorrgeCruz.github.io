const ipad= window.matchMedia("screen and (max-width: 767px")
const menu = document.querySelector(".menu");
const burguerButton = document.querySelector(".burguer-button");

// console.log(burguerButton);
burguerButton.addEventListener('click', hideShow);

ipad.addListener(validation);
function hideShow(){
  if(menu.classList.contains("is-active"))
    menu.classList.remove("is-active");
  else
    menu.classList.add("is-active");
}

function validation(event ){
  console.log(event);
  if(event.matches)
    burguerButton.addEventListener('click', hideShow);
  else
    burguerButton.removeEventListener('click', hideShow);
}
validation(ipad);