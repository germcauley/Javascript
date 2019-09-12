function autocomplete(input, dictionary) {
    //get length of word
    len = (input.length) - 1;
    //Each word in dictionary
    resultArr = [];
    for (var j = 0; j < dictionary.length; j++) {
        var match = false
        //letter 1, 2 in word
        //check if is letter

        for (var i = 0; i <= len; i++) {
            if (/^[A-Za-z]+$/.test(dictionary[j][i]) && dictionary[j][i] == input[i]) {
                console.log(dictionary[j][i] + " is a letter")
                match = true;
            } else {
                console.log(dictionary[j][i] + " is NOT a letter")
                match = false;
            }
            // if (dictionary[j][i] !== input[i]) {
            //     match = false;
            //     break
            // } else {
            //     match = true;
            // }
        }
        if (match == true) {
            resultArr.push(dictionary[j])
        }
    }
    return (resultArr)
}

console.log(autocomplete('ai', ['a7irplane', 'apple', 'air', 'a6venue', 'airport', 'adamantium', 'awkwardness', 'awesome', 'amazing']))