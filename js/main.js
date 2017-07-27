$(document).ready(function(){
var letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersArray = letters.split('');
var wordBank = ['squirtle','pikachu','charmander','magikarp','bulbasaur','onyx','pidgey','caterpie'];
var word = wordBank[Math.floor(Math.random()*wordBank.length)];
var counter = 0;

var wordArray = word.split('');

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
$('button').click(function(){
//var re = new RegExp(this.innerHTML, 'g');

  for(var i =0; i< word.length;i++){
    if(this.innerHTML === document.getElementsByTagName('li')[i].id){
      document.getElementsByTagName('li')[i].innerHTML = wordArray[i];
      //console.log(document.getElementsByTagName('li')[i].id)
    };
  };


console.log(this.innerHTML,document.getElementsByTagName('li')[0].id)
  $(this).remove();

});

});
