 var kleurenlijst = ["blue","green","purple","red","white","yellow"];
 count = 1;
 rowcount= 9;
 checkcount =9;
 guess =[];
 var checked= [];
 var gecontroleerd;
function addColor(color)
{
	var kleur = kleurenlijst[color];
    document.getElementById('row'+rowcount).getElementsByClassName('color'+count)[0].style.backgroundColor = kleur; //zorgt ervoor dat de kleuren op het speelbord komen
        count++;
         guess.push(kleur);//pushed users invoer naar guess
         console.log(guess);
        if(count == 5){
        	count = 1;
        	rowcount --;//vermindert de rowcount
         gecontroleerd = check(); //voert de check functie uit
         geefFeedback(gecontroleerd);
         checkcount--;
         guess=[]; //guess wordt na het checken weer geleegd

         console.log(' guess het wordt geleegd')
        }
        
}
  var w = Math.floor((Math.random()*5)); //genereert het antwoord
 document.getElementById('solution').style.backgroundColor = kleurenlijst[w];
   var x = Math.floor((Math.random()*5));
 document.getElementById('solution1').style.backgroundColor = kleurenlijst[x];
   var y = Math.floor((Math.random()*5));
 document.getElementById('solution2').style.backgroundColor = kleurenlijst[y];
   var z = Math.floor((Math.random()*5));
 document.getElementById('solution3').style.backgroundColor = kleurenlijst[z];

  var randomArray = [w,x,y,z];//alle gegenereerde kleuren in een array

function reloadz(){
  location.reload();
}
function check(){
  
  answercopy = copyAnswer();

  checked = [];
  for (var i = 0; i < 4; i++) 
  {
    if (guess[i] == kleurenlijst[answercopy[i]]) 
    { //vergelijkt gegenereede antwoord met users guess
      checked.push(2);
      answercopy[i] = -1;
    }
  }
  for (var j = 0; j <4; j++) {
    if(checked[j] != 2)
    {
      for(var i = 0; i<4; i++)
      {
        if (guess[i]==kleurenlijst[answercopy[j]]) {
          checked.push(1);
          answercopy[j] = -1;
          break;
        }
      }
    }
  }
  return checked;
}
function copyAnswer()
{
  var answercopy = [];
  for(z=0;z<randomArray.length; z++)
  {
    answercopy[z] = randomArray[z];
  }
  return answercopy;
}

function geefFeedback(gecontroleerdeArray)
{
  console.log("gecontroleerde array =" + gecontroleerdeArray);
  for(f=0; f< guess.length; f++)
  {
    if(gecontroleerdeArray[f] == 2)
    {
      document.getElementById('check'+checkcount).getElementsByClassName('pin' + (f+1))[0].style.backgroundColor = "red";
    }
    if(gecontroleerdeArray[f] == 1)
    {
      document.getElementById('check'+checkcount).getElementsByClassName('pin' + (f+1))[0].style.backgroundColor = "white";
    }
  }
  gecontroleerd = [];                  
}