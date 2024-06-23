let menuIcon = document.getElementById("menu_icon");

let menu = document.getElementById("menu");

function mobileMenu(){
   if(menu.style.display == 'block'){
     menu.style.display = 'none';
   }
   else{
      menu.style.display = 'block';
   }
}

menuIcon.addEventListener("click",mobileMenu); 

document.getElementsByClassName("btn")[0].addEventListener("click",function(){
   alert("hi, You are Good Person");
})
