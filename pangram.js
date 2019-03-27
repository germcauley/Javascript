function isPangram(string){
    var input = string.split('');
    var resultObj ={}
    var ans = false;
    const alpha = 'abcdefghijlkmnopqrstuvwxyz'.split('');
    for(var i=0; i < input.length; i ++){
        if(alpha.indexOf(input[i].toLowerCase())> -1){
            console.log('Match ');
            console.log(i);
            if(!(input[i] in resultObj)){
                resultObj[input[i]] = 1;
            }
        }  
    }
    var y = Object.keys(resultObj).length;
    var x = Object.keys(resultObj).sort();
    if(y > 25){
        return true;
    }
    else{
        return false;
    } // console.log(`Result is : ${x} and length is :${y}`);
}

isPangram("The quick brown fox jumps over the lazy dog.");