
//return any string that has 4 letters
function friend(friends){
  friends.forEach(function(elem){
  	if(elem.length ===4){
  		console.log(elem);
  	}
  })
}


friend(['bob','bill','john'])