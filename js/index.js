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


function expand3() {
  var button = document.getElementById("myButton3");
    var x = document.getElementById('expandable3');
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


function expand4() {
  var button = document.getElementById("myButton4");
    var x = document.getElementById('expandable4');
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


function expand5() {
  var button = document.getElementById("myButton5");
    var x = document.getElementById('expandable5');
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


function expand6() {
  var button = document.getElementById("myButton6");
    var x = document.getElementById('expandable6');
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