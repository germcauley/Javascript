 var steps=0;
 var counter=0;//tracks how many steps shown by game
 var stepsArr=[];//store steps
 var guessArr=[];//player guesses to compare against
 var x =0;//index of steps array




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
	 		counter--;//countdown
	 		//console.log("counter is :"+counter);
	 	}
	 	else{
	 		//STOP HIGHLIGHT INTERVAL
			clearInterval(highlightInterval);
			//alert("Try to input the steps");
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
	$('.quarter').click(function(){
		

		//run until guess array is same content as steps array
			//compare player guess to index in step array

			//IF CLICKED QUARTER MATCHES STEP
			if(stepsArr[x]==this.id){
				//DEBUG REPEATING NUMBERS AND GUESSES !!!!!!!!!!
				console.log("X is "+x);
				console.log("stepsx is"+stepsArr[x]);
				console.log("this id is "+this.id);
				console.log("You guessed: "+this.id);
				//add guess to array
				guessArr.push(this.id);
				console.log("guess arr "+ guessArr)
				//if match and arrays are same length/content
				//elif they match and not same length arrays
				if(stepsArr.length!=guessArr.length){
					//Increment x and test next step
					x++;
					console.log("!!!!!!!!take next guess");
				}
				else if(stepsArr.length==guessArr.length){
					console.log("!!!!!!!arrays match! steps is: "+stepsArr+" and guess is :"+guessArr);
					steps++;//update text for steps
					counter=steps;//update counter
					//clear arrays
					stepsArr=[];
					console.log("reset steps");
					console.log(stepsArr);
					guessArr=[];
					console.log("reset guess");
					console.log(guessArr);
					//reset X
					x=0;
					//update steps text
					$("#count").html(steps.toString());
					console.log("steps are "+steps);
					console.log("counter is "+counter);

					stepHighlight();
					
				}
				

			}
			

			
	});
}








//End of doc.ready	 	
});


