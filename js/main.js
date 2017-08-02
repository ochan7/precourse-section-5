$(document).ready(function(){
var letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersArray = letters.split('');

var wordBank = [ 'bulbasaur',
  'ivysaur','venusaur','charmander','charmeleon','charizard',
  'squirtle','wartortle','blastoise','caterpie','metapod',
  'butterfree', 'weedle','kakuna','beedrill','pidgey',
  'pidgeotto','pidgeot','rattata','raticate','spearow',
  'fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash',
  'nidoran',  'nidorina','nidoqueen','nidoran','nidorino',
  'nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff',
  'wigglytuff','zubat','golbat',  'oddish','gloom','vileplume',
  'paras','parasect','venonat','venomoth','diglett','dugtrio',
  'meowth','persian','psyduck','golduck','mankey','primeape','growlithe',
  'arcanine','poliwag','poliwhirl',
  'poliwrath','abra','kadabra','alakazam',
  'machop','machoke','machamp','bellsprout',
  'weepinbell','victreebel','tentacool','tentacruel',
  'geodude','graveler','golem','ponyta',
  'rapidash','slowpoke','slowbro','magnemite',
  'magneton','farfetchd','doduo','dodrio','seel',
  'dewgong','grimer','muk','shellder','cloyster','gastly',
  'haunter','gengar','onix','drowzee','hypno','krabby',
  'kingler','voltorb','electrode','exeggcute',
  'exeggutor','cubone','marowak','hitmonlee',
  'hitmonchan','lickitung','koffing',
  'weezing','rhyhorn','rhydon','chansey',
  'tangela','kangaskhan','horsea','seadra',
  'goldeen','seaking','staryu','starmie','mr. mime',
  'scyther','jynx','electabuzz','magmar',
  'pinsir','tauros','magikarp','gyarados',
  'lapras','ditto','eevee','vaporeon',  'jolteon',
  'flareon','porygon','omanyte','omastar',
  'kabuto','kabutops','aerodactyl','snorlax',
  'articuno','zapdos','moltres','dratini',
  'dragonair','dragonite','mewtwo','mew' ];

var word = wordBank[Math.floor(Math.random()*wordBank.length)];

var wordArray = word.split('');
var lives = 10



//animations
var mainCanvas = document.querySelector("#myCanvas");
var mainContext = mainCanvas.getContext("2d");

var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
mainContext.lineWidth = 5;
var animationArray =[
function drawBase1(){
      mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
      mainContext.beginPath();
      mainContext.moveTo(20,430);
      mainContext.lineTo(430,430);
      mainContext.stroke();
},

function drawBase2(){
  mainContext.beginPath();
  mainContext.moveTo(50,430);
  mainContext.lineTo(50,50);
  mainContext.stroke();
},

function drawBase3(){
  mainContext.beginPath();
  mainContext.moveTo(47.5,50);
  mainContext.lineTo(252.5,50);
  mainContext.stroke();
},

function drawBase4(){
  mainContext.beginPath();
  mainContext.moveTo(250,50);
  mainContext.lineTo(250,100);
  mainContext.stroke();
},

function drawHead(){
  mainContext.beginPath();
  mainContext.arc(250,120,20,0,Math.PI*2,false);
  mainContext.stroke();
},

function drawBody(){
  mainContext.beginPath();
  mainContext.moveTo(250,140);
  mainContext.lineTo(250,250);
  mainContext.stroke();
},

function drawLeftArm(){
  mainContext.beginPath();
  mainContext.moveTo(250,160);
  mainContext.lineTo(200,200);
  mainContext.stroke();
},

function drawRightArm(){
  mainContext.beginPath();
  mainContext.moveTo(250,160);
  mainContext.lineTo(300,200);
  mainContext.stroke();
},

function drawLeftLeg(){
  mainContext.beginPath();
  mainContext.moveTo(250,250);
  mainContext.lineTo(200,290);
  mainContext.stroke();
},

function drawRightLeg(){
  mainContext.beginPath();
  mainContext.moveTo(250,250);
  mainContext.lineTo(300,290);
  mainContext.stroke();
}];


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

//change colour of letter when hovering
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
//checks whether selected letter match
$('button').click(function(){
var count=0;

  for(var i =0; i< word.length;i++){
    if(this.innerHTML === document.getElementsByTagName('li')[i].id){
      document.getElementsByTagName('li')[i].innerHTML = wordArray[i];
      count+=1;
    }}

  if(count !== 0){
    this.disabled = true;
    $(this).css('background-color','#00FF46');
  }else{
    this.disabled = true;
    $(this).css('background-color','#FF4C40')
    lives -=1;
    // run the animation
    animationArray[9-lives]();
    document.getElementById('lives').innerHTML = lives
  };

  // checks when there are no more lives
  if(lives ===0){
    $(':button').prop('disabled',true);
    document.getElementsByTagName('h2')[0].innerHTML = '';
    var solution = document.getElementById('lives');
    solution.innerHTML = "Game over :( the correct pokemon is " + word + ". Why don't you try again?";
    var playme = document.getElementById('themetune');
    playme.src='music/131-lavender-town-s-theme.mp3';
    playme.load();
    playme.play();
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
      $(':button').prop('disabled',true);
      var playme = document.getElementById('themetune');
      playme.src='music/116-victory-vs-trainer-.mp3';
      playme.load();
      playme.play();
      console.log(document.getElementsByTagName('audio'))

    };
    };

correctWord();
});


});
