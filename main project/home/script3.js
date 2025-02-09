function myFunction() {
    var button = document.body;
    button.classList.toggle("dark-mode");
}



let scrollbutton = document.getElementsByClassName("Button");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var i = 0;
var text = 'This text has a typing effect'; 
var speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("demo").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = fadeIn; 
          
function fadeIn() { 
  var fade = document.getElementById("body"); 
  var opacity = 0; 
  var interval = setInterval(function() { 

      if (opacity < 1) { 
          opacity = opacity + 0.1 
          fade.style.opacity = opacity; 
      } else { 
          clearInterval(interval); 
      } 
  }, 200); 
} 