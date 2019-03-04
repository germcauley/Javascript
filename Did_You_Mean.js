// fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
// fruits.findMostSimilar('strawbery'); // must return "strawberry"
// fruits.findMostSimilar('berry'); // must return "cherry"

// things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
// things.findMostSimilar('coddwars'); // must return "codewars"

// languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
// languages.findMostSimilar('heaven'); // must return "java"
// languages.findMostSimilar('javascript'); // must return "javascript" (same words are obviously the most similar ones)


function Dictionary(words) {
    this.words = words;
  }
  
  Dictionary.prototype.findMostSimilar = function(term) {
    // TODO: this is your task ;)
  }



//   Create object to index occurences of letters in input
// Run same code on each word from dictionary array and use the one with most matches

var test = "goodbye";
const 


newArr = test.split('');
var strObj = {};

//Break word into and obejct with occurnce of letters counted
for(var i =0; i < newArr.length; i++){
    if(!strObj[newArr[i]]){
        strObj[newArr[i]]=1;
    }
    else{
        strObj[newArr[i]]+=1;
    }
    console.log(newArr[i]);
    console.log(strObj);

}



