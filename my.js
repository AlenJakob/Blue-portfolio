var div = document.querySelector(".search")
var width = document.querySelector(".search-up")
width.onfocus = function(){
this.classList.add("show-search")
}
width.onblur = function(){
this.classList.remove("show-search")
}


 div.onmouseover = function(){
  width.classList.remove("time")
 width.classList.add("show-search")};


div.onmouseout = function(){
 this.classList.remove("show-search")
  width.classList.add("time")
};

