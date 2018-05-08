arr =[1,1,1];

function tribonacci(arr,n){
	if(n ==0){
		return [];
	}
	else if(n ==1){
		return arr;
	}
	else{
		for(var i=0; i<n-3; i++){
		
		var newNum= (arr[i]+arr[i+1]+arr[i+2]);
		arr.push(newNum);		
	}
	return(arr);
	}
	
}
tribonacci(arr,10)