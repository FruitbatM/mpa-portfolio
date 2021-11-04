let navigation = gsap.timeline({
  paused: true, 
  reversed: true
});

navigation.to('#navigationWrap', 0.5, {opacity: 1, display: 'block'})
          .to('.navbar', 0.3, {opacity: 0}, '-=0.1')
          .to('.close', 0.3, {display: 'block', opacity: 1}, "-=0.1")
          .from('.menu', 0.5, {opacity: 0, y: 30})
          .from('.social', 0.5, {opacity: 0});

$('.navbar, .close').click (function() {
  navigation.reversed() ? navigation.play() : navigation.reverse();
})

// Back to Top Arrow - code with modification taken from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
mybutton = document.getElementById('arrow_2top');

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200|| document.documentElement.scrollTop > 200) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}