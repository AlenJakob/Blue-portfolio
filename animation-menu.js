
document.addEventListener('DOMContentLoaded', function() {
  var clas = document.querySelectorAll('li');
  for (let i=0; i< clas.length; i++) {
    
    clas[i].addEventListener('mouseover', function() {

   this.classList.add("animation");
      
  });
      
     clas[i].addEventListener('mouseout', function() {
      this.classList.remove('animation');
   
      
  });
    
     
}  
});

