 




 $(document).ready(function(){
    $("#start").click(function(){
        $("#count").html("1");
        highlight()
    });
});


 function highlight(){
 		var rnd = Math.floor((Math.random() * 4) + 1);

 		if(rnd >0){
 			$("#1").toggleClass('tog');
 		}
 }