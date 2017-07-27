$(document).ready(function(){
var letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersArray = letters.split('');
var wordBank = ['squirtle','pikachu','charmander',
'magikarp','bulbasaur','onyx','pidgey','caterpie',
'gyarados','machoke','staryu','grimer','ghastly',
'raichu','charizard','blastoise','sandshrew',
'electrabuzz'];
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
  $(this).addClass('on');

},


function(){
  $(this).removeClass('on');
});

//lives counter
document.getElementById('lives').innerHTML = lives;

$('button').click(function(){
var count=0;

  for(var i =0; i< word.length;i++){
    if(this.innerHTML === document.getElementsByTagName('li')[i].id){
      document.getElementsByTagName('li')[i].innerHTML = wordArray[i];
      count+=1;
    }}

  if(count !== 0){
    this.disabled = true;
    $(this).css('background-color','green');
  }else{
    this.disabled = true;
    $(this).css('background-color','red')
    lives -=1;
    document.getElementById('lives').innerHTML = lives
  };

  // checks when there are no more lives
  if(lives ===0){
    $(':button').prop('disabled',true);
    document.getElementsByTagName('h2')[0].innerHTML = '';
    var solution = document.getElementById('lives');
    solution.innerHTML = "Game over the correct word is " + word;
  };

  var correctWord = function(){
    var counter =0;
    var arr=  document.getElementsByTagName('li');
    for(var i =0; i< arr.length; i++){
      if(arr[i].innerHTML ==='-'){
        counter +=1; break;}
    }
    if(counter === 0){
      document.getElementsByTagName('h2')[0].innerHTML = '';
      var leftOver = document.getElementById('lives');
      leftOver.innerHTML = "Well done you got the right answer!! " + word;
      $(':button').prop('disabled',true).c;
    };
    };

correctWord();
});






});
