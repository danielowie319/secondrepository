function myFunction() {
    var button = document.body;
    button.classList.toggle("dark-mode");
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

