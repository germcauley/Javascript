var players,p1Symbol,p2Symbol,comSymbol,ans,moves=1,win=false,turn=1;

//PLAYER NUMBER SELECTION
$(".player").click(function(){
    players=(this.innerHTML);
    //console.log(players);
});

//WHEN SYMBOL IS SELECTED
$(".symbol").click(function(){
    p1Symbol=(this.innerHTML);
    if(p1Symbol=='X'){
    	p2Symbol='O';
    	comSymbol='O';
    }else{
    	comSymbol='X';
    	p2Symbol='X';
    }
});

//WHEN SQUARE IS CLICKED
$(".square").click(function(){

		//make sure players and symbol are selected
		if(!p1Symbol ||!players){
			alert("choose number of players and a symbol first");
		}else if(players==2){
			if(turn==1){
				playerMove(this);
				turn=2;
        		winConditions();
			}else{
				playerTwoMove(this);
				turn=1;
       			winConditions();
				}
			
		}
		else{

			playerMove(this);
			//get coordinates of player move;
			ans = playerMove(this);
			//use as parameters for computer move
				if(moves<=4){
					computerPlayer(ans[0]);
					winConditions();
					moves++;
				}
			winConditions();
			
			}
		//CHECK IF THERE IS A WINNER
});

$(".reset").click(function(){
	for(var i=1; i<=9; i++){
 		var id = i.toString();
 		document.getElementById(id).innerHTML="";
 	}
 	location.reload();

});



//win conditions
//if 3 in row horizontal
function winConditions(){
	//sqaure variables
		var sq1 = document.getElementById('1').innerHTML;
		var sq2 = document.getElementById('2').innerHTML;
		var sq3 = document.getElementById('3').innerHTML;
		var sq4 = document.getElementById('4').innerHTML;
		var sq5 = document.getElementById('5').innerHTML;
		var sq6 = document.getElementById('6').innerHTML;
		var sq7 = document.getElementById('7').innerHTML;
		var sq8 = document.getElementById('8').innerHTML;
		var sq9 = document.getElementById('9').innerHTML;

		//WIN_CONDITIONS
		//HORIZONTAL
		if(sq1==sq2&&sq2==sq3){
			//make sure it has symbol and isnt blank
			if(sq1!=""){
				resetGame();
        console.log(sq1);
				}
		}
		else if(sq4==sq5&&sq5==sq6) {
			if(sq4!=""){
				resetGame();
				}
		}
		else if(sq7==sq8&&sq8==sq9) {
			if(sq7!=""){
				resetGame();
				}
		}
		//VERTICAL
		else if(sq1==sq4&&sq4==sq7) {
			if(sq1!=""){
				resetGame();
				}
		}
		else if(sq2==sq5&&sq5==sq8) {
			if(sq2!=""){
				resetGame();
				}
		}
		else if(sq3==sq6&&sq6==sq9) {
			if(sq3!=""){
				resetGame();
				}
		}
		//DIAGONAL
		else if(sq1==sq5&&sq5==sq9) {
			if(sq1!=""){
				resetGame();
				}
		}
		else if(sq3==sq5&&sq5==sq7) {
			if(sq3!=""){
				resetGame();
				}
		}
}
//if9three in row vertical8
//if9three in row diagona9

function playerMove(i){
			//add player symbol to square
			i.innerHTML='<div id="play"style="font-size:2em; height:100%; background-color:yellow; border-radius:60px; padding:5px;">'+p1Symbol+'</div>';

			var sqPos = i.id;
			//CHECK IF WINNER
			//winConditions();
			//out put player position coordinates to computer and place +1 to player poisition
			var coordinates=[];
			coordinates.push(sqPos);
			return coordinates
}

function playerTwoMove(i){
		i.innerHTML='<div id="play2"style="font-size:2em; height:100%; background-color:blue; border-radius:60px; padding:5px;">'+p2Symbol+'</div>';
		//winConditions()
}

function computerPlayer(square){

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
				var rndID = rnd.toString();
				//put computer symbol in square
				//$("#"+rnd).text(comSymbol);
				document.getElementById(rndID).innerHTML='<div id="com" style="font-size:2em; height:100%; background-color:blue; border-radius:60px; padding:5px;">'+comSymbol+'</div>';
				comPlace=true;
				//CHECK IF ANY WINNER
				winConditions();
				
			}
			else{
				console.log("problem"+squareContent);
				//re-roll random
				rnd =(Math.floor((Math.random() * 9) + 1)).toString();
				squareContent = document.getElementById(rnd).innerHTML;
				
			}
		}
 }

//CLEAR BOARD AND SHOW WINNER MES
 function resetGame(){
 	win=true;
 	alert("Winner!");
 	//CLEAR THE BOARD
 	for(var i=1; i<=9; i++){
 		var id = i.toString();
 		document.getElementById(id).innerHTML="";
 	}
 	location.reload();
 }
