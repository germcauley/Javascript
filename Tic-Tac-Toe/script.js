var players,pSymbol,comSymbol,ans,moves=0;


$(".player").click(function(){
    players=(this.innerHTML);
    //console.log(players);
    
}); 

$(".symbol").click(function(){
    pSymbol=(this.innerHTML);
    if(pSymbol=='X'){
    	comSymbol='O';
    }else{
    	comSymbol='X';
    }
}); 

//when sqaure is clicked
$(".square").click(function(){
		//make sure players and symbol are selected
		if(!pSymbol ||!players){
			alert("choose number of players and a symbol first");
		}else if(players==2){
			
		}
		else if(moves==4){
			alert("no moves left!");
		}
		else{
			playerMove(this);
			//get coordinates of player move;
			ans = playerMove(this);
			//use as parameters for computer move
			computerPlayer(ans[0],ans[1]);
			moves++;
		}
	});


function playerMove(i){
			//add player symbol to square
			i.innerHTML=pSymbol;
			var sqPos = i.id;
			//print id of square
			//console.log("square is: "+sqPos);
			//get id of parent
			var id = $(i).parent('div').attr('id')
			//console.log("row is: "+id);
			//out put player position coordinates to computer and place +1 to player poisition
			var coordinates=[];
			coordinates.push(sqPos,id);
			return coordinates

}



function computerPlayer(square,row){
		// take in p1 move and location place symbol in adjacent square
								
		//random num between 1 and 9
		var rnd = (Math.floor((Math.random() * 9) + 1)).toString();
		console.log("rand is "+rnd);
		//get id of userMove
		var sqId = square;
		//get content of a sqaure to see if empty
		var squareContent = document.getElementById(rnd).innerHTML;

		var comPlace =false;
		console.log(squareContent);

		while(!comPlace){
			if(!squareContent){
				console.log("square content is "+squareContent);
				console.log("User move was "+sqId);
				console.log("Placing Computer at "+rnd);
				//put computer symbol in square
				$("#"+rnd).text(comSymbol);
				comPlace=true;
				break;
			}	
			else{
				console.log("problem"+squareContent);
				//re-roll random
				rnd =(Math.floor((Math.random() * 9) + 1)).toString();
				squareContent = document.getElementById(rnd).innerHTML;
			}
		}
				
	
		
				
				
			
		
		
			//if square is empty and rnd is not same as sqaure
			
			//else new rnd
		//them try same sqaure diff row

		//then try adjacent suqare diff row
 }

