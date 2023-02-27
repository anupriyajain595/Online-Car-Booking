const button = document.querySelector(".first");
const audio = new Audio("./audiofiles/home.mp3");

button.addEventListener("click", function () {

  audio.play();
});


const button0 = document.querySelector(".second");
const audio0 = new Audio("./audiofiles/about.mp3");

button0.addEventListener("click", function () {

  audio0.play();
});


const button1 = document.querySelector(".third");
const audio1 = new Audio("./audiofiles/car.mp3");

button1.addEventListener("click", function () {

  audio1.play();
});


const button2 = document.querySelector(".forth");
const audio2 = new Audio("./audiofiles/services.mp3");

button2.addEventListener("click", function () {

  audio2.play();
});


const button3 = document.querySelector(".fivth");
const audio3 = new Audio("./audiofiles/contact.mp3");

button3.addEventListener("click", function () {

  audio3.play();
});

const button4 = document.querySelector(".sixth");
const audio4 = new Audio("./audiofiles/book.mp3");

button4.addEventListener("click", function () {

  audio4.play();
});

const button5 = document.querySelector(".seventh");
const audio5 = new Audio("./audiofiles/thanks.mp3");

button5.addEventListener("click", function () {

  audio5.play();
});


const button6 = document.querySelector(".eighteth");
const audio6 = new Audio("./audiofiles/query.mp3");

button6.addEventListener("click", function () {

  audio6.play();
});





window.addEventListener('scroll' , 
function(){
let navbar = document.getElementById('menu-bar');
    if(window.pageYOffset >= 200){
  navbar.classList.add('sticky')
}
else{
  navbar.classList.remove('sticky');
}
});   
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.querySelector(".open-button").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.querySelector(".open-button").style.display = "block";
}
let email = document.getElementById("email");
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", ( ) => {
  if(window.pageYOffset > 500){
    toTop.classList.add("active");
  } else{
    toTop.classList.remove("active");
  }
});

$( document.body ).click(function() {
  $( "#showup" ).click(function() {
    $( ".containerrs" ).slideUp(200);
  });
  $( "#showdown" ).click(function() {
    $( ".containerrs" ).slideDown(200);
  });
 });

//  $("#showdown").click(function () {
//   $(this).toggleClass("down");
// })
  

//toggle menu/navbar script
$('.menu-btn').click(function(){
  $('#menu-bar .menu-inside').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

$('#menu-bar .menu-inside a').click(function(event){
  event.preventDefault(); // prevent the default link behavior

  $('#menu-bar .menu-inside').removeClass("active"); // hide the menu
  $('.menu-btn i').removeClass("active"); // change the menu button back to hamburger icon

  // wait for 300 milliseconds before executing the default link behavior
  setTimeout(function() {
    window.location = event.currentTarget.href;
  }, 300);
});







