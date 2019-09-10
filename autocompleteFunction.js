function autocomplete(input, dictionary){
    //get length of word
    len = (input.length)-1;
    //Each word in dictionary
    resultArr =[];
    for(var j=0; j <dictionary.length; j++){
        var match = false 
        //letter 1, 2 in word
        for(var i = 0; i <= len; i++){
            if(dictionary[j][i] !== input[i]){
                match = false;
                break
            }
            else{
                match = true;
            }   
        }
        if(match == true){
            resultArr.push(dictionary[j])
        }
    }
    return(resultArr)
}













autocomplete('ai', ['airplane','airport','apple','ball'])




// take in an input string and a dictionary array and return the values from the dictionary that start with the input string.
// autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']