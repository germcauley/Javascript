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
    var matchArr=[];

    //for loop for length of dictionary
    for(var i =0; i < this.words.length; i++){
        console.log(this.words[i]);//array word
        console.log(createObject(this.words[i]));//array key/values
        //create object from array index
        let index = createObject(this.words[i]);
        //get keys of the object
        let indArr = Object.keys(index);
        //keys in input word
        //console.log(wordKeys);
        console.log(term);//input term
        console.log(word);//input key/values
        //keys in dictionary index
        //console.log(indArr);
        console.log("-------------------");

        //compare keys of each object
        
       
    }
    return 'hello';
    
    
  }

// Create object to index occurences of letters in input
// Run same code on each word from dictionary array and use the one with most matches


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


things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
console.log(things.findMostSimilar('coddwars')); 



