document.addEventListener('DOMContentLoaded', function (){

var form = document.querySelector('.getstarted')
var button = document.querySelector('.close')
var sign_in = document.querySelector('.signin')
var user = document.querySelector('#user')
var pass = document.querySelector('#pass')
var error = document.querySelector('.submit')

sign_in.addEventListener('click', function(){
  var modal = document.querySelector('.modal').style.display = "block"







// When the user presses the .close button, hide the modal window

button.addEventListener('click', function(){
  form.style.display = "none"
})





// When the user presses the .submit button, add an .error class to both input elements
error.addEventListener('click', function(){
user.classList.add('error')
pass.classList.add('error')
})




})

});
