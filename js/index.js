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
  document.getElementById("dangerwarning1").style.visibility = "visible";
  document.getElementById("dangerwarning2").style.visibility = "hidden";
  document.getElementById("dangerwarning3").style.visibility = "hidden";
  document.getElementById("dangerwarning4").style.visibility = "hidden";
 document.getElementById("dangerwarning5").style.visibility = "hidden";
 document.getElementById("dangerwarning6").style.visibility = "hidden";
 document.getElementById("dangerwarning7").style.visibility = "hidden";
  document.getElementById("dangerwarning8").style.visibility = "hidden";
 document.getElementById("dangerwarning9").style.visibility = "hidden";
 document.getElementById("dangerwarning10").style.visibility = "hidden";
  }
  else if (10 < danger && danger <= 20) {
    document.getElementById("dangerwarning2").style.visibility = "visible";
  document.getElementById("dangerwarning1").style.visibility = "hidden";
  document.getElementById("dangerwarning3").style.visibility = "hidden";
  document.getElementById("dangerwarning4").style.visibility = "hidden";
 document.getElementById("dangerwarning5").style.visibility = "hidden";
 document.getElementById("dangerwarning6").style.visibility = "hidden";
 document.getElementById("dangerwarning7").style.visibility = "hidden";
  document.getElementById("dangerwarning8").style.visibility = "hidden";
 document.getElementById("dangerwarning9").style.visibility = "hidden";
 document.getElementById("dangerwarning10").style.visibility = "hidden";
  }
  else if (20 < danger && danger <= 30) {
    document.getElementById("dangerwarning3").style.visibility = "visible";
  document.getElementById("dangerwarning1").style.visibility = "hidden";
  document.getElementById("dangerwarning2").style.visibility = "hidden";
  document.getElementById("dangerwarning4").style.visibility = "hidden";
 document.getElementById("dangerwarning5").style.visibility = "hidden";
 document.getElementById("dangerwarning6").style.visibility = "hidden";
 document.getElementById("dangerwarning7").style.visibility = "hidden";
  document.getElementById("dangerwarning8").style.visibility = "hidden";
 document.getElementById("dangerwarning9").style.visibility = "hidden";
 document.getElementById("dangerwarning10").style.visibility = "hidden";
  }
  else if (30 < danger && danger <= 40) {
    document.getElementById("dangerwarning4").style.visibility = "visible";
  document.getElementById("dangerwarning1").style.visibility = "hidden";
  document.getElementById("dangerwarning3").style.visibility = "hidden";
  document.getElementById("dangerwarning2").style.visibility = "hidden";
 document.getElementById("dangerwarning5").style.visibility = "hidden";
 document.getElementById("dangerwarning6").style.visibility = "hidden";
 document.getElementById("dangerwarning7").style.visibility = "hidden";
  document.getElementById("dangerwarning8").style.visibility = "hidden";
 document.getElementById("dangerwarning9").style.visibility = "hidden";
 document.getElementById("dangerwarning10").style.visibility = "hidden";
  }
  else if (40 < danger && danger <= 50) {
    document.getElementById("dangerwarning5").style.visibility = "visible";
  document.getElementById("dangerwarning1").style.visibility = "hidden";
  document.getElementById("dangerwarning3").style.visibility = "hidden";
  document.getElementById("dangerwarning4").style.visibility = "hidden";
 document.getElementById("dangerwarning2").style.visibility = "hidden";
 document.getElementById("dangerwarning6").style.visibility = "hidden";
 document.getElementById("dangerwarning7").style.visibility = "hidden";
  document.getElementById("dangerwarning8").style.visibility = "hidden";
 document.getElementById("dangerwarning9").style.visibility = "hidden";
 document.getElementById("dangerwarning10").style.visibility = "hidden";
  }
  else if (50 < danger && danger <= 60) {
    document.getElementById("dangerwarning6").style.visibility = "visible";
  document.getElementById("dangerwarning1").style.visibility = "hidden";
  document.getElementById("dangerwarning3").style.visibility = "hidden";
  document.getElementById("dangerwarning4").style.visibility = "hidden";
 document.getElementById("dangerwarning5").style.visibility = "hidden";
 document.getElementById("dangerwarning2").style.visibility = "hidden";
 document.getElementById("dangerwarning7").style.visibility = "hidden";
  document.getElementById("dangerwarning8").style.visibility = "hidden";
 document.getElementById("dangerwarning9").style.visibility = "hidden";
 document.getElementById("dangerwarning10").style.visibility = "hidden";
  }
  else if (60 < danger && danger <= 70) {
    document.getElementById("dangerwarning7").style.visibility = "visible";
  document.getElementById("dangerwarning1").style.visibility = "hidden";
  document.getElementById("dangerwarning3").style.visibility = "hidden";
  document.getElementById("dangerwarning4").style.visibility = "hidden";
 document.getElementById("dangerwarning5").style.visibility = "hidden";
 document.getElementById("dangerwarning6").style.visibility = "hidden";
 document.getElementById("dangerwarning2").style.visibility = "hidden";
  document.getElementById("dangerwarning8").style.visibility = "hidden";
 document.getElementById("dangerwarning9").style.visibility = "hidden";
 document.getElementById("dangerwarning10").style.visibility = "hidden";
  }
  else if (70 < danger && danger <= 80) {
    document.getElementById("dangerwarning8").style.visibility = "visible";
  document.getElementById("dangerwarning1").style.visibility = "hidden";
  document.getElementById("dangerwarning3").style.visibility = "hidden";
  document.getElementById("dangerwarning4").style.visibility = "hidden";
 document.getElementById("dangerwarning5").style.visibility = "hidden";
 document.getElementById("dangerwarning6").style.visibility = "hidden";
 document.getElementById("dangerwarning7").style.visibility = "hidden";
  document.getElementById("dangerwarning2").style.visibility = "hidden";
 document.getElementById("dangerwarning9").style.visibility = "hidden";
 document.getElementById("dangerwarning10").style.visibility = "hidden";
  }
  else if (80 < danger && danger <= 90) {
    document.getElementById("dangerwarning9").style.visibility = "visible";
  document.getElementById("dangerwarning1").style.visibility = "hidden";
  document.getElementById("dangerwarning3").style.visibility = "hidden";
  document.getElementById("dangerwarning4").style.visibility = "hidden";
 document.getElementById("dangerwarning5").style.visibility = "hidden";
 document.getElementById("dangerwarning6").style.visibility = "hidden";
 document.getElementById("dangerwarning7").style.visibility = "hidden";
  document.getElementById("dangerwarning8").style.visibility = "hidden";
 document.getElementById("dangerwarning2").style.visibility = "hidden";
 document.getElementById("dangerwarning10").style.visibility = "hidden";
  }
  else {
    document.getElementById("dangerwarning10").style.visibility = "visible";
  document.getElementById("dangerwarning1").style.visibility = "hidden";
  document.getElementById("dangerwarning3").style.visibility = "hidden";
  document.getElementById("dangerwarning4").style.visibility = "hidden";
 document.getElementById("dangerwarning5").style.visibility = "hidden";
 document.getElementById("dangerwarning6").style.visibility = "hidden";
 document.getElementById("dangerwarning7").style.visibility = "hidden";
  document.getElementById("dangerwarning8").style.visibility = "hidden";
 document.getElementById("dangerwarning9").style.visibility = "hidden";
 document.getElementById("dangerwarning2").style.visibility = "hidden";
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