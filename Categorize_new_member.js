

var arr =[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];


function openOrSenior(data){
	results=[];
  //each array must have age over 55 and handicap over 7 to be senior else open
  for(var i=0; i<arr.length; i++){
  	if(arr[i][0]>=55 &&arr[i][1]>=7){
  		results.push("Senior");
  	}
  	else{
  		results.push("Open");
  	}
  }
  console.log(results);
}






openOrSenior(arr)