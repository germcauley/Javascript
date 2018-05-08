function isSortedAndHow(array) {
	
		//if current bigger tham index 0 check if ascending
		if(array[1] > array[0]){
			//test if all are ascending
			return ascendingTest(array);
		}
		//if current less than index 0 check if descending
		else if(array[1] < array[0]){
			//test if all are descending
			return descendingTest(array);
		}
		else{
			return "no";
		}
	
}

//arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
arr =[9,8,7,6,5,4,3,2,1];

function ascendingTest(array){
	result="yes, ascending";
	//iterate through array, test direction
	for(var i=1; i<array.length; i++){
		if(array[i]>array[i-1]){

		}
		else{
			return "no";
		}
	}
	return result;
}

function descendingTest(array){
	result="yes, descending";
	//iterate through array, test direction
	for(var i=1; i<array.length; i++){
		if(array[i]<array[i-1]){

		}
		else{
			return "no";
		}
	}
	return result;
}


isSortedAndHow(arr);








//     'yes, ascending' - if the numbers in the array are sorted in an ascending way
//     'yes, descending' - if the numbers in the array are sorted in a descending way
//     'no'

// You can assume the array will always be valid, and there will always be one correct answer.