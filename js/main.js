$(document).ready(function(){
var letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersArray = letters.split('');
var $alphabet = document.getElementsByClassName("alphabet");
function myFunction(){
  for(var i =0; i<lettersArray.length; i++){
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode(lettersArray[i]);
  btn.appendChild(t);
  document.body.appendChild(btn);
    console.log($alphabet);
  };
};
myFunction();
$('button').hover(function(){
  $(this).css("background-color","lightgrey");

},
function(){
  $(this).css("background-color","white");
});
$('button').click(function(){
  $(this).remove();
});

});
