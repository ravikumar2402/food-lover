
window.addEventListener('scroll',function(){
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 150
  header.classList.toggle('scrolling-active',windowPosition);
})

function myFunction(x) {
  x.classList.toggle("change");
}


function openNav(){
  document.getElementById("leftSidenav").style.width = "400px";
 
}

function closeNav(){
  document.getElementById("leftSidenav").style.width = "0";
}