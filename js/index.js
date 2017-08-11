function expand1() {
  var button = document.getElementById("myButton1");
    var x = document.getElementById('expandable1');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } 
  else {
        x.style.display = 'block';
    }
   if (x.style.display === 'block') {
    button.value = "Hide Information";
  }
  else {
    button.value = "Show Information";
  }
  
}

function expand2() {
  var button = document.getElementById("myButton2");
    var x = document.getElementById('expandable2');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } 
  else {
        x.style.display = 'block';
    }
   if (x.style.display === 'block') {
   button.value = "Hide Information";
  }
  else {
    button.value = "Show Information";
  }
  
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function showWarning() {
  var danger = document.getElementById("dangerslider").value;
  if (danger <= 10) { 
  document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "You probably should not be here. Leave now, traveler."
  }
  else if (10 < danger && danger <= 20) {
  document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "Maybe you should just step in, buy some merchandise, and go home and say you did stuff."
  }
  else if (20 < danger && danger <= 30) {
    document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "You might be able to venture beyond the gift shop, but not very far. Maybe check out the cities, and not the ancient ones; the modern ones. Suggestions: Arkham, Innsmouth."
  }
  else if (30 < danger && danger <= 40) {
  document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "You're pretty brave. You can explore Arkham and Innsmouth's hidden secrets."
  }
  else if (40 < danger && danger <= 50) {
 document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "Explore the depths of Arkham and Innsmouth, but take note also of Yuggoth."
  }
  else if (50 < danger && danger <= 60) {
  document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "Most of the cities are probably a good choice to be explored, though don't get lost in Yuggoth or Hyperborea."
  }
  else if (60 < danger && danger <= 70) {
   document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "Congratulations! You are sufficiently corageous enough that you have been selected for a special tour of Carcosa. Downloading directly into your brain right now should be a memory of events long past, including a tour through the palace of Carcosa! What an event!"
  }
  else if (70 < danger && danger <= 80) {
  document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "Not content to explore Carcosa in your mind, you might want to try exploring it in real life!"
  }
  else if (80 < danger && danger <= 90) {
  document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "Visit the pristine landscape of R'lyeh, and visit the great Temple inside."
  }
  else {
   document.getElementById("dangerwarning").style.visibility = "visible";
 document.getElementById("dangerwarning").textContent = "Fight Cthulhu!"
  }
}
function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.keyCode === 32 || event.keyCode === 13) {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
}

function labelChange() {
      var x = document.getElementById("dangerslider").value
   var label = document.getElementById("sliderlabel");
    label.textContent = "Slider Value: " + x
}