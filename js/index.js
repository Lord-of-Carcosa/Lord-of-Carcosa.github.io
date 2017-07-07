function expand1() {
  var showButton = document.getElementById("myShowButton1");
  var hideButton = document.getElementById("myHideButton1");
    var x = document.getElementById('expandable1');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } 
  else {
        x.style.display = 'block';
    }
   if (x.style.display === 'block') {
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
  }
  else {
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
  }
  
}

function expand2() {
  var showButton = document.getElementById("myShowButton2");
  var hideButton = document.getElementById("myHideButton2");
    var x = document.getElementById('expandable2');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } 
  else {
        x.style.display = 'block';
    }
   if (x.style.display === 'block') {
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
  }
  else {
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
  }
  
}


function expand3() {
  var showButton = document.getElementById("myShowButton3");
  var hideButton = document.getElementById("myHideButton3");
    var x = document.getElementById('expandable3');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } 
  else {
        x.style.display = 'block';
    }
   if (x.style.display === 'block') {
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
  }
  else {
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
  }
  
}


function expand4() {
  var showButton = document.getElementById("myShowButton4");
  var hideButton = document.getElementById("myHideButton4");
    var x = document.getElementById('expandable4');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } 
  else {
        x.style.display = 'block';
    }
   if (x.style.display === 'block') {
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
  }
  else {
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
  }
  
}


function expand5() {
  var showButton = document.getElementById("myShowButton5");
  var hideButton = document.getElementById("myHideButton5");
    var x = document.getElementById('expandable5');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } 
  else {
        x.style.display = 'block';
    }
   if (x.style.display === 'block') {
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
  }
  else {
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
  }
  
}


function expand6() {
  var showButton = document.getElementById("myShowButton6");
  var hideButton = document.getElementById("myHideButton6");
    var x = document.getElementById('expandable6');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } 
  else {
        x.style.display = 'block';
    }
   if (x.style.display === 'block') {
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
  }
  else {
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
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