//Return amount of Duplicates in a string
function duplicateCount(text){
	text.toLowerCase();
	//results num
	var results =0;
	var ansArr =[];
	var count;
    //add each character to an array
    var splitArr = text.toLowerCase().split('');
    //console.log(splitArr);
    //compare each charater and count them, push to a results array
	var uniqueArray = splitArr.filter(function(elem, pos) {
  		return splitArr.indexOf(elem) == pos;
	});
		//console.log(uniqueArray); 
	//compare uniue array to spliArr
	for(var i=0; i<uniqueArray.length; i++){
			//console.log(uniqueArray[i]+'-------');
			count=0;
		for(var j=0; j<splitArr.length; j++){
			if(uniqueArray[i].toLowerCase()==splitArr[j].toLowerCase()){
				
				//console.log(splitArr[j]+'match '+ count); 
				count+=1;
				if(count>1){
					ansArr.push(uniqueArray[i]);
					results++;//counts number of repeat not unique numbers
				}	
			}	
		}
	}
//remove unique from ansArr
var final = ansArr.filter(function(elem, pos) {
  		return ansArr.indexOf(elem) == pos;
	});	

return final.length;
}

duplicateCount("Indivisibilities"));
