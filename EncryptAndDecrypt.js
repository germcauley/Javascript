/*For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, put first batch at end of nd other bath at front and concat them as new String.
Do this n times!
be able to reverse the process in decrypt function
*/


/*"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"*/


function encrypt(text,n){
var str ="";
var even=[];
var other=[];
var count=0;
var word=[];

	if(text==null ){
		return text
		}
	else if(text==""){
		return text
	}
	else if(n<=0){
		return text;
	}
	else{
			str=text;
			while(count<n){			
			word=str.split("");
			console.log(word.length);		
			even=[];
			other=[];
			for (var i = 0; i <word.length; i++) {
				if(i%2==0){				
					even.push(word[i]);
				}
				else{				
					other.push(word[i]);
				}
			}			
			str = (other.join("")+even.join(""));
			count++;
			}			
			return(str);
		}
	}
function decrypt(text,n){

	var str = "";
	var even=[];
	var other=[];
	var word=[];
	var ans=[];	
	var count=0;
if(text==null ){
		return text
		}
	else if(text==""){
		return text
	}
	else if(n<=0){
		return text;
	}
	else{
word=text.split("");
console.log(word.length);	
while(count<n){		
			even=[];
			other=[];
			ans=[];
		if(word.length%2==0){
			var size = word.length/2			
			for(var i=0; i<size;i++){			
				other.push(word[i]);						
			}
			for(var j=size; j<=word.length-1;j++){			
				even.push(word[j]);						
			}
			for(var x=0; x<size;x++){			
				ans.push(even[x]);
				ans.push(other[x]);
			}
		}
		else{///////need to work on this section for uneven length strings
			var evenNum=Math.ceil(word.length/2);
			//console.log(word);
			var odd=(word.length-evenNum);
					console.log(evenNum);
					console.log(odd);
					//push all even numbers to even array
					for(var i=evenNum-1; i < word.length; i++){
						even.push(word[i]);					
					}
					console.log("even is   " +even + "    "+even.length);
					//push odd number to odd array
					for(var j=0; j < odd; j++){
						other.push(word[j]);										
					}
					console.log("other is   "+ other + "    "+other.length);
					
					//push index 0 from arr1 to an[0], index 0 from arr2 to [1] etcetc					
					for(var k=0; k<word.length;k++){									
							ans.push(even[k]);								
							ans.push(other[k]);						
					}	
			}			
		str="";
		str=ans.join("");
		word=[];		
		word=str.split("");			
		count++;
		}//end of while
	}		//end ofelse
	return str;	
}//end of function

console.log(encrypt("This kata is very interesting!", 1));
console.log(decrypt("hskt svr neetn!Ti aai eyitrsigX", 1));////
//console.log(decrypt("hsi  etTi sats!",1));

///add number of iterations to script



