// fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
// fruits.findMostSimilar('strawbery'); // must return "strawberry"
// fruits.findMostSimilar('berry'); // must return "cherry"

// things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
// things.findMostSimilar('coddwars'); // must return "codewars"

// languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
// languages.findMostSimilar('heaven'); // must return "java"


function Dictionary(words) {
    this.words = words;
  }
  
  Dictionary.prototype.findMostSimilar = function(term) {
    // TODO: this is your task ;)
    const word = createObject(term);
    const wordKeys= Object.keys(word)
    var matches =0; //number of matches
    var matchWord ='';
    var matchWordCount =0;

    //for loop for length of dictionary
    for(var i =0; i < this.words.length; i++){
      
        var arrayWord = this.words[i];
        //console.log(arrayWord);//array word
        //console.log(createObject(arrayWord));//array key/values

        //create object from array index, this is current word from array
        let index = createObject(arrayWord);
        //get keys of the object
        //let indArr = Object.keys(index);

        // console.log('------------------------------NEW WORDS----------------------');
        // console.log(term);//input term
        // console.log(word);//input key/values
        // console.log(arrayWord);
        // console.log(index);
        // //keys in dictionary index
        // //console.log(indArr);
        // console.log("-------------------");

        //run for each key in word
       for(var p in word){ 
         //run over each key in index, compare with word keys
        //  console.clear()
        //  console.log('Comparing '+ p + ' '+word[p]+' with...... ');
         for(var q in index){
            // console.log(q+' '+index[q]);
           if(p === q){
            // console.log('MATCH!');
            matches +=1;
            break;
           }
         }
         
       } 
       if(matches >matchWordCount ){
          matchWord = arrayWord;
          matchWordCount = matches;
          // console.log('NEW MATCH WORD '+ matchWord);
          // console.log('MATCHING LETTER COUNT '+matchWordCount);
     }
     else if(matches == matchWordCount ){
         
      if(arrayWord.length< matchWord.length){
       matchWord = arrayWord;
       matchWordCount = matches;
       // console.log('NEW MATCH WORD '+ matchWord);
       // console.log('MATCHING LETTER COUNT '+matchWordCount);
      }
      else if(matchWordCount == 0){
       matchWord = arrayWord;
       matchWordCount = matches;
       // console.log('NEW MATCH WORD '+ matchWord);
       // console.log('MATCHING LETTER COUNT '+matchWordCount);
      }
  }
       var matches =0;//reset for next word in array

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


languages = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
// things = new Dictionary(['stars']);
console.log(languages.findMostSimilar('berry')); 



