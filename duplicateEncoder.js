function duplicateEncode(word){
    var input = (word.toLowerCase()).split('');
    var output ="";
    //make object from input string
    createObj = (inputArr)=> {
        let x;
        var result ={};
        for(x in inputArr){
            // console.log(inputArr[x]);
            if(!result[inputArr[x]]){
                result[inputArr[x]] = 1;
            }
            else{
                result[inputArr[x]] +=1;
            }
        }
        return result;
        }
    //take in object output string
    createNewString = (arr,inputObj) =>{
        let y;
        let output="";
        console.log(inputObj);
        console.log(arr);
        for(y in arr){
            console.log(inputObj[arr[y]]);
            if(inputObj[arr[y]]==1){
                output += "(";
            }
            else{
                output+=")";
            }
        }
        return output;
    }    
    createObj(input);
    
    console.log(createNewString(input,createObj(input)));
    }

    // ()()()

  



// "(" if that character appears only once in the original string,

// or ")" if that character appears more than once

duplicateEncode('Success');