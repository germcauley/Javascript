function Dictionary(words) {
  this.words = words;
}
Dictionary.prototype.findMostSimilar = function(term) {
  // TODO: this is your task ;)
  const word = createObject(term);
  var matches =0; //number of matches
  var finalMatches =0; //number of matches
  var matchWord ='';
  var differences =0;
  var finalDifferences =100;
  //for loop for length of dictionary
  for(var i =0; i < this.words.length; i++){
      var arrayWord = this.words[i];
      let index = createObject(arrayWord);
      //run for each key in word
     for(var p in word){ 
       //run over each key in index, compare with word keys
       for(var q in index){  
         if(p === q){
          matches += word[p];
          break;
         } 
       }
     } 
     differences = getDifference(term.length,arrayWord.length,matches);
     console.log("INPUT: "+term+" ARRAYWORD: "+arrayWord+ " MATCHES: "+matches+" DIFFERENCES: "+differences);
     if(matches>=finalMatches&&differences<finalDifferences){
        matchWord = arrayWord;
        finalDifferences=differences;
        finalMatches = matches;
     }
  matches =0;//reset for next word in array
  }
  return matchWord;
}
//Break word into an object with occurences of letters counted
function createObject(input){
newArr = input.split('');
var strObj = {};
for(var i =0; i < newArr.length; i++){
    if(!strObj[newArr[i]]){
        strObj[newArr[i]]=1;
    }
    else{
        strObj[newArr[i]]+=1;
    }
}
return strObj;
}
function getDifference(w1,w2,matches){
  let output =0;
  if(w1>w2){
    output = (w1-matches) - (w2-matches);
    return output;
  }
  else if (w2>w1){
    output = (w2-matches) - (w1-matches);
    return output;
  }
  else if(w1==w2){
    output = w1 -matches
    return output;
  }
}
languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
// things = new Dictionary(['stars']);
console.log(languages.findMostSimilar('heaven')); 



