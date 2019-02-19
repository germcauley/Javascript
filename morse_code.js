
decodeMorse = function(morseCode){
    morse_code =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    letters =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var arr = morseCode.split("  ");
    
    //console.log(arr);
    var x = arr.join(' ')
    //console.log(x);
    var newArr = x.split(" ");
    //console.log(newArr);
    

    var result = []
    for(var i =0; i < newArr.length; i++){
        if(newArr[i] === ""){
            
            result.push(" ");
        }
        else{
            
            letter = letters[morse_code.indexOf(newArr[i])]
            result.push(letter);  
        }
       
    }
   return(result.join(''));
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));