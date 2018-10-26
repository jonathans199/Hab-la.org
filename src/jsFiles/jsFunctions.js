const $ = require('jquery')

function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

function showMenu(){
  var navLinks=document.getElementById('nav-links');
  var input = document.getElementById('input-burger');

  if(navLinks.classList.contains('display-none')){
    navLinks.classList.remove('display-none');
    navLinks.classList.add('nav-links-height');
    
    
  }else if(!navLinks.classList.contains('display-none') && navLinks.classList.contains('nav-links-height')){
    navLinks.classList.add('display-none');
    navLinks.classList.remove('nav-links-height');
    input.checked = false;  
    
  }else if(!navLinks.classList.contains('display-none') && !navLinks.classList.contains('nav-links-height')){
    navLinks.classList.add('nav-links-height'); 
    // navLinks.display = 'flex';
  }
}

$(document).on('scroll', function() {
  if($(document).scrollTop()>100) {
    $('header').removeClass('padding-menu-3').addClass('padding-menu-2');
  } else {
    $('header').removeClass('padding-menu-2').addClass('padding-menu-3');
  }
});

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('to-top-btn').style.display = 'block';
  } else {
      document.getElementById('to-top-btn').style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function closeMenu(){
  var input = document.getElementById('input-burger');
  input.checked = false;
}

function resetInput(){
  document.getElementById('searchI').value ='';
}

$('.input-search').keydown( function( event ) {
  if ( event.which === 13 ) {
    resetInput('searchI');
    showMenu();
    event.preventDefault();
    return false;
  }
});

function elementFocus(){
  var el= document.getElementById('searchI');
  el.focus();
}

function goToByScroll(id) {
  $('html,body').animate(
      { scrollTop: $('#' + id).offset().top },
      'slow'
  )
}
function openCloseModal(){
  var modalId = document.getElementById('modal-id');
  if(modalId.classList.contains('modal-display-none') ){
    modalId.classList.remove('modal-display-none');
    modalId.classList.add('modal-display-flex');
  }else if(modalId.classList.contains('modal-display-flex') ) {
    modalId.classList.remove('modal-display-flex');
    modalId.classList.add('modal-display-none');
  }
}
function openModal(){
  var ele= document.getElementsByClassName("modal");
  const elem = document.getElementsByClassName("modalCont");
  
  if (elem[0].classList.contains('modalOut')){
      elem[0].classList.remove('modalOut');
  }
 
  elem[0].classList.add('modalIn');
  ele[0].style.display = "block";
 setContact();
}
 
function closeModal(){
  const elem = document.getElementsByClassName("modalCont");
  
  if (elem[0].classList.contains('modalIn')){
      elem[0].classList.remove('modalIn');
  }
  
  elem[0].classList.add('modalOut'); 
  setTimeout(displayOut, 500);
}
// module.exports = {
//   goToByScroll,
//   showMenu,
//   elementFocus,
//   resetInput
// }