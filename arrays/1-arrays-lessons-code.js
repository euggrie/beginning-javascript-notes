var tweets = ["hello world", "this is a tweet", "lol"];


var isVowel = function(letter){
    var letterLC= letter.toLowerCase();
    return (letterLC === "a" || letterLC === "e" ||letterLC === "i" ||letterLC === "o" ||letterLC === "u");
};

console.log(isVowel("a"));
console.log(isVowel("z"));

var removeVowels = function(word) {
    var result = "";
    var i;
    for(i = 0; i< word.length; i = i+1){
        if(!isVowel(word[i])){
           result = result + word[i];
        }
    }

    return result;
};

console.log(removeVowels("hello world"));

var removeVowelsFromEach = function(tweets){
    var result = [];
    var i;

    for(i=0; i<tweets.length; i = i+1){
        result.push(removeVowels(tweets[i]));
    }
    return result;
};

console.log(removeVowelsFromEach(tweets));

var smallesNumber = function(list) {
    var smallestSoFar = list[0];
    var i;

    for( i = 1; i<list.length; i = i+1){
        if(list[i] < smallestSoFar){
            smallestSoFar = list[i];
        }
    }

    return smallestSoFar;
};

console.log(smallesNumber([5,2,3,6,7,8,9]));

var largestNumber = function(list) {
    var largestSoFar = list[0];
    var i;

    for(i = 1; i<list.length; i=i+1){
        if(list[i] > largestSoFar){
            largestSoFar = list[i];
        }
    }

    return largestSoFar;
};

console.log(largestNumber([5,2,3,6,7,8,9]));


var multipleOfThree = function(list){
    var result = [];
    var i;

    for(i = 0; i<list.length; i=i+1){
        if(list[i] % 3 === 0) {
            result.push(list[i]);
        }
    }

    return result;
};
console.log(multipleOfThree([99,21,5,8,11]));

console.log(Array.isArray([1,2,3,4,5]));