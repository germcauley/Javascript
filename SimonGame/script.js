 var steps=0,counter=0;
 var stepsArr=[];
 var guessArr=[];
 var click =1;




 $(document).ready(function(){


//CLICK START BUTTON, CALL HIGHLIGHT FUNCTION
    $("#start").click(function(){
    	counter=1;
    	steps=1;
        $("#count").html(steps.toString());
         stepHighlight();

        
    });
    	

//HIGHLIGHT QUARTERS AND COUNTS STEPS
	 function highlight(){
	 	
	 	if(counter>0){
	 		//create random number
	 		var rnd = Math.floor((Math.random() * 4) + 1).toString();
	 		//make string to use for id
	 		var rndStr =rnd.toString();

	 		//push random number to array
	 		stepsArr.push(rnd);
	 		//console.log("array is :"+stepsArr);
	 		//highlight random quarter using id
	 		$('#'+rndStr).toggleClass('tog', 100).toggleClass('tog', 300);
	 		//console.log("counter is :"+counter);
	 		counter--;
	 		//console.log("counter is :"+counter);
	 	}
	 	else{
	 		//STOP HIGHLIGHT INTERVAL
			clearInterval(highlightInterval);
			alert("Try to input the steps");
			console.log(stepsArr);
			//ALLOW PLAYER TO CLICK AND STORE ID OF QUARTERS CLICKED
			playerInput();
			}
	 }

//CALL HIGHLIGHT FUNCTION AT A SET INTERVAL
	function stepHighlight() {
		highlightInterval = setInterval(highlight,1000);
				
	}

//PLAYER INPUT SECTION


function playerInput(){
	//Only allow if there is data in steps array
	$('.quarter').click(function(){
		//send id of clicked quarter to guess array
		guessArr.push(this.id);

		//if guessArr is same length as steps and they match show message
		for(var i=0; i<guessArr.length; i++){

			//IF PLAYER GETS PATTERN CORRECT
			if(stepsArr.length==guessArr.length){
				for(var j=0; j<stepsArr; j++){
					if(stepsArr[i]==guessArr[i]){
						console.log('match, you win!');
						guessArr=[];
						stepsArr=[];
						steps++;
						counter=steps;
						stepHighlight();
					}
				}
			}
			//IF PLAYER MATCHES ONE NUMBER
			else if(stepsArr[i]==guessArr[i]&&stepsArr.length!=guessArr.length){
				console.log('match');
				console.log(guessArr);
			}
			else{
				//IF PLAYER MAKES A MISTAKE CLEAR ARRAY
				console.log('no match');
				guessArr=[];
			}
		}
		//else if guessArr is same length and they dont match show message
		// console.log("Com is :"+stepsArr);
		// console.log("Player guess is :"+guessArr);
	});
}








//End of doc.ready	 	
});


