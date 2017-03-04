
var rightButton = document.querySelector("#right");
var leftButton = document.querySelector("#left");
var slides = document.querySelector(".slides");
var slidesLen = slides.children.length;
var counter = 0;
var progress = document.querySelectorAll(".progressIndicators_indicator")

function initEventListeners(){
  rightButton.addEventListener("click",slideRight);
  leftButton.addEventListener("click",slideLeft);
}
function initProgress(){
   var j = 0;
   progress[counter].children[0].className += " trans";
   setInterval(function(){
     if(counter+1 === slidesLen){
       while(j < progress.length){
         progress[j].children[0].className = progress[j].children[0].className.split(" trans")[0] ;
         j++;
       }
       j=0;
     }
    slideRight();
     setTimeout(function(){
       progress[counter].children[0].className += " trans"
     },50)

  },2500)

 
}
function slideRight(){
  if(counter + 1 == slidesLen){
    counter = 0;
    slides.style='';
    
  }
  else{
    counter++;
    slides.style.left = -400*counter+'px';
    
  }
}
