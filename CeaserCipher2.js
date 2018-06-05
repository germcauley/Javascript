function CC2(string, int){
	//divide string into 5 sections with as many equal sections as possible
	//eg 17 = 4,4,4,4,1. 16= 4,4,4,4,0

	//divide equally between 5

	var strLen = string.length;
	console.log("strLen is "+ strLen);
	//use math ceil for values
	var res = Math.ceil(strLen/5);
	console.log(res);
	var remain = res*4;
	var end = [];
	
	//subtract res from len
	while(strLen>=res){
		console.log("new value "+strLen);
		end.push(res);
		strLen-=res;
		
	//if len is still bigger than res repeat
	//else we have the remainder
	}
	console.log("len left "+strLen);
	end.push(strLen);
	console.log(end);
	

}



CC2("1234512345123451",2);