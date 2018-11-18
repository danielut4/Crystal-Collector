$( document ).ready(function(){
  var Number = Math.floor(Math.random()*101+19)
  
  $('#randomNumber').text(Number);
  
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
      Number = Math.floor(Math.random()*101+19);
      console.log(Number)
      $('#randomNumber').text(Number);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

function yes(){
alert("You win!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

function lose(){
alert ("You lose :(");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}


  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 


        if (userTotal === Number){
          yes();
        }
        else if ( userTotal > Number){
          lose();
        }   
  }) 

  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal === Number){
          yes();
        }
        else if ( userTotal > Number){
          lose();
        } 
  })  

  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          if (userTotal === Number){
          yes();
        }
        else if ( userTotal > Number){
          lose();
        } 
  })  

  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      if (userTotal === Number){
          yes();
        }
        else if ( userTotal > Number){
          lose();
        }
  });   
}); 