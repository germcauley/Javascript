//count how many taps required to write a sentence

function countKeys(word){
	var keyPad =[["1"],
	["a","b","c","2"],["d","e","f","3"],["g","h","i","4"],
	["j","k","l","5"],["m","n","o","6"],["p","q","r","s","7"],
	["t","u","v","8"],["w","x","y","z","9"],[" ","0"]
	]
	var total =0;
	var input =word.toLowerCase();
	var splitter = input.split("");//split the input
	//define find index function
	function findIndex(letter){
			for(var i=0; i<keyPad.length;i++){
					for(var j=0; j<keyPad[i].length;j++){
					if(keyPad[i][j]==letter){
						console.log("Match at "+ i +" and " +(j+1)); //j is the key press amounts
						total+=(j+1);
						}											
					}
				}
			}
	//run for loop on all splitter indices
	for(var p=0; p<splitter.length;p++){		
		console.log(findIndex(splitter[p]));
	}
	console.log(total);
	return total;
}

countKeys("how r u");