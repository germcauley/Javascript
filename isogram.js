// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string
// that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isogram(word){
	newArr=[];
	//make lower case
	lower = word.toLowerCase().split("");
	console.log(lower);

	//cycle through word
	for(var i=0; i<lower.length; i++){
		
		if(newArr.indexOf(lower[i])==-1){
			newArr.push(lower[i]);		
		}
		else{
			return false;
			break;
		}
	}
	return true;
}

console.log(isogram("abcd"));