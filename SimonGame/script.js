 var steps=0;
 var counter=0;//tracks how many steps shown by game
 var stepsArr=[];//store steps
 var guessArr=[];//player guesses to compare against
 var x =0;//index of steps array
 var strict = false;
 var on = false;

document.getElementById('start').disabled=true;
document.getElementById('strict').disabled=true;

//audio files
 var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
 var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
 var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
 var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

 $(document).ready(function(){

//ON/OFF BUTTON
$('#on').click(function(){
	if(on==false){
		on=true;
		document.getElementById('start').disabled=false;
		document.getElementById('strict').disabled=false;
	}
	else if(on ==true){
		on=false;
		document.getElementById('start').disabled=true;
		document.getElementById('strict').disabled=true;
	}
	
});

//CLICK START BUTTON, CALL HIGHLIGHT FUNCTION
    $("#start").click(function(){
    	counter=1;
    	steps=1;
        $("#count").html(steps.toString());
         stepHighlight();

        
    });
//CLICK STRICT BUTTON, TOGGLE IT ON/OFF
    $('#strict').click(function(){
    	if(strict==false){
    		strict=true;
    		this.style.backgroundColor ="red";
    		this.style.color ='white';
    		console.log(strict);
    	}else{
    		strict=false;
    		this.style.backgroundColor ="#f0f0f0";
    		this.style.color = 'black';
    		console.log(strict);
    	}
    })

    	

//HIGHLIGHT QUARTERS AND COUNTS STEPS
	function highlight(){
	 	
	 	if(counter>0){
	 		//create random number
	 		var rnd = Math.floor((Math.random() * 4) + 1).toString();
	 		//make string to use for id
	 		var rndStr =rnd.toString();

	 		//push random number to array
	 		stepsArr.push(rnd);
	 		console.log("array is :"+stepsArr);

	 		//highlight random quarter using id
	 		$('#'+rndStr).toggleClass('tog', 100).toggleClass('tog', 300);
	 		//Play sound
	 		playSounds(rnd);	
	 		
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
		$('.quarter').unbind().click(function(){
			
			playSounds(this.id);
			guess=this.id;
			//run until guess array is same content as steps array
				//compare player guess to index in step array

				//IF CLICKED QUARTER MATCHES STEP
				if(stepsArr[x]==guess){
					//DEBUG REPEATING NUMBERS AND GUESSES !!!!!!!!!!
					// console.log("X is "+x);
					// console.log("stepsx is"+stepsArr[x]);
					// console.log("this id is "+this.id);
					// console.log("You guessed: "+this.id);
					
					// console.log("pushing guess")
					//add guess to array
					guessArr.push(guess);
					
					// console.log("guess arr "+ guessArr)
					//if match and arrays are same length/content
					//elif they match and not same length arrays
					if(stepsArr.length!=guessArr.length){
						//change guess to 0 in case it gets called
						guess=0;
						//Increment x and test next step
						x++;
						// console.log("!!!!!!!!take next guess");
					}
					else if(stepsArr.length==guessArr.length){
						// console.log("!!!!!!!arrays match! steps is: "+stepsArr+" and guess is :"+guessArr);
						steps++;//update text for steps
						counter=steps;//update counter
						//clear arrays
						stepsArr=[];
						// console.log("reset steps");
						// console.log(stepsArr);
						guessArr=[];
						// console.log("reset guess");
						// console.log(guessArr);
						//reset X
						x=0;
						//update steps text
						$("#count").html(steps.toString());
						// console.log("steps are "+steps);
						// console.log("counter is "+counter);

						stepHighlight();
					}
				}
				else if(strict==true){
					alert("Wrong! Game will reset");
					 steps=1;
					 counter=1;//tracks how many steps shown by game
					 stepsArr=[];//store steps
					 guessArr=[];//player guesses to compare against
					 x =0;//index of steps array
					 $("#count").html(steps.toString());
					 stepHighlight();
					
				}
				else{
					alert("Wrong! Try Again.");
				}	
		});
	//end of player input	
	}

//CONTROLS PLAYBACK OF SOUNDS
function playSounds(num){
		if (num==1){
	 			audio1.play();
	 		}
	 		else if(num==2){
	 			audio2.play();
	 		}
	 		else if(num==3){
	 			audio3.play();
	 		}
	 		else{
	 			audio4.play();
	 		}
}



//End of doc.ready	 	
});


