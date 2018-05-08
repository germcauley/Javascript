// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

numbers=[1,2,1,1,1,1]

function stray(num){

	sorted= num.sort();
	//sort array
	
	//test first and last numbers
	if(sorted[0]!=sorted[1]&&sorted[sorted.length-1]==sorted[sorted.length-2]){
		console.log(sorted[0]);
	}
	else{
		console.log(sorted[sorted.length-1]);
	}
	//if first differrent adn last not return first etc
}

stray(numbers);
