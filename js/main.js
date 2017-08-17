document.addEventListener('DOMContentLoaded', function (){

var form = document.querySelector('.getstarted')
var button = document.querySelector('.close')
var sign_in = document.querySelector('.signin')
var user = document.querySelector('#user')
var pass = document.querySelector('#pass')
var error = document.querySelector('.submit')

sign_in.addEventListener('click', function(){
  var modal = document.querySelector('.modal').style.display = "block"


button.addEventListener('click', function(){
  form.style.display = "none"
})

error.addEventListener('click', function(){
user.classList.add('error')
pass.classList.add('error')
})

error.addEventListener('mouseover', function(){
  user.remove()
})






})

});
