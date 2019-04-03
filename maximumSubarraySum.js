var maxSequence = function(arr){
    //run through array
    //start at diff index each time
    //store highest num
    var highNum =0;
    for(var i =0; i< arr.length; i++){
        let counter = 0;
        console.log("START " + i + "-----------------");
        for(var j =i; j <arr.length; j++){
            //console.log("Counter "+arr[j]+" added to "+counter)
            counter += arr[j];
            
            if (counter >highNum){
                highNum=counter;
                console.log("New high num "+highNum);
            }
           
        }
    }
  }


maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])



//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) return 6