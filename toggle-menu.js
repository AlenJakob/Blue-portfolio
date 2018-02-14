var menu = document.querySelector(".menu");
var btn = document.querySelector(".toggle");
var ul = document.querySelector(".ul");
 btn.onclick = function(){
   btn.classList.toggle("jo");
  
     ul.classList.toggle("menu-show")
}
