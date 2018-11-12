// // 1. Minimum time for preloader to load is 2.5 seconds (In case the DOM is loaded too quickly, the preloader will still have a chance to be shown)
// // 2. Maximum time for preloader to load is based on how fast the DOM is loaded because the preloader will spin forever until the DOM has fully loaded because it hasn't reached line 8
// // 3. For even clearer UI/UX design put an animation of "Loading..."
// // Note: Don't use preloader for heavy sites

// window.addEventListener('load',function(){  // The moment the page has loaded, show it, but... let the preloader run for 2.5seconds first, then show.
//   setTimeout(showPage, 2500); 
//   // playAnimation();
// });

window.onload = function() {
  setTimeout(showPage, 1); 
}


// Set preloader state to be transparent
function showPage(){
	document.getElementById('overlay').classList.add('hidden');   //Background
	document.getElementById('parent').classList.add('hidden');    //Invisible Box
	document.getElementById('pedals').classList.add('hidden');    //Flower
	document.getElementById('circle').classList.add('hidden');    //Circle
	document.getElementById('cute_kiss').classList.add('hidden'); //Picture of Kissing
  document.getElementById('titleX').classList.add('titleXX');
  document.getElementById('subtitleX').classList.add('subtitleXX');
  document.getElementById('dateX').classList.add('dateXX');
};

// NAV START
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});
// NAV END

// SLIDER BEGIN
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length){
    slideIndex = 1;
  }    

  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}
// SLIDER END

function updateTimer(deadline){
  var time = deadline - new Date();
  return {
    'days': Math.floor( time/(1000*60*60*24) ),
    'hours': Math.floor( (time/(1000*60*60)) % 24 ),
    'minutes': Math.floor( (time/1000/60) % 60 ),
    'seconds': Math.floor( (time/1000) % 60 ),
    'total' : time
  };
}

function startTimer(id, deadline){
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);
    clock.innerHTML = '<span>' + timer.days + 'D</span>' + 
                      '<span>' + timer.hours + 'H</span>' + 
                      '<span>' + timer.minutes + 'M</span>' + 
                      '<span>' + timer.seconds + 'S</span>';
    if(timer.total < 1){
      clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
    }
  }, 1000);
}

var deadline = new Date("July 04, 2020 0:00:00");
startTimer("clock", deadline);


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top").style.display = "block"
    } else {
        document.getElementById("to-top").style.display = "none"
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}
