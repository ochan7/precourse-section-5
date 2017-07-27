$(document).ready(function(){
var letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersArray = letters.split('');
var wordBank = ['squirtle','pikachu','charmander','magikarp','bulbasaur','onyx','pidgey','caterpie'];
var word = wordBank[Math.floor(Math.random()*wordBank.length)];

var wordArray = word.split('');
var lives = 10
//creates dashes representing the letters to be found
function hiddenFunction(){
  for(var i =0; i<wordArray.length; i++){
  var btn = document.createElement("li");
  var t = document.createTextNode('-');
  btn.appendChild(t);
  btn.id = wordArray[i];
  document.getElementById('guess').appendChild(btn);

}
};
hiddenFunction();


// creates the alphabet
function myFunction(){
  for(var i =0; i<lettersArray.length; i++){
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode(lettersArray[i]);
  btn.appendChild(t);
  btn.id = lettersArray[i];
  document.getElementById('alphabet').appendChild(btn);

  };
};


function whichLetter(){}
myFunction();
$('button').hover(function(){
  $(this).css("background-color","lightgrey");

},


function(){
  $(this).css("background-color","white");
});

//lives ounter
document.getElementById('lives').innerHTML = lives;

$('button').click(function(){
var count=0
var button = this.id;
  for(var i =0; i< word.length;i++){
    if(this.innerHTML === document.getElementsByTagName('li')[i].id){
      document.getElementsByTagName('li')[i].innerHTML = wordArray[i];
      count+=1;
      //console.log(document.getElementsByTagName('li')[i].id)
    }}
  if(count !== 0){
    this.disabled = true;
    $(this).css('background-color','green');
  }else{
  this.disabled = true;
  $(this).css('background-color','red')
  lives -=1;
document.getElementById('lives').innerHTML = lives;}
  console.log(this.id, lives, count)
});





});
