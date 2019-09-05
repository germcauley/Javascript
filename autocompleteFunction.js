function autocomplete(input, dictionary){
    //get length of word
    len = (input.length)-1;
    
     console.log(input.length);
     console.log(len);
    for(var j=0; j <dictionary.length; j++){
        var match = false
        console.log(dictionary[j]);
        for(var i = 0; i <= len; i++){
            if(dictionary[j][i] !== input[i]){
                console.log('No match!')
            }
            else{
                console.log(dictionary[j][i]);
            }
            
        }
    }
     

    //test len of word against each word index
}













autocomplete('he',['hello','hellicopter','happy','not'])




// take in an input string and a dictionary array and return the values from the dictionary that start with the input string.
// autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']