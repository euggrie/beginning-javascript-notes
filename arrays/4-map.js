
//First we'll use the for loop:

var doublesForLoop = function (list) {
    var result = [];
    var i;

    for(i=0; i<list.length; i = i+1){
        result.push(list[i] * 2);
    }

    return result;
};

console.log(doublesForLoop([1,2,3,4,5]));

//Then we'll use the forEach method:

var doubleForEach = function (list) {
    var result= [];

    list.forEach(function (i) {
        result.push(i * 2);
    });

    return result;
};

console.log(doubleForEach([1,2,3,4,5]));

//But we can use an option to get ride of the result variable: Map

var doublesWithMap = function (list) {

    return list.map(function (i) {
        return i * 2;
    });
};

console.log(doublesWithMap([1,2,3,4,5]));

//using map we can save a lot of code

var square = function (i) {   // Here I define a function that tells me exactly what I want to do with each element
    return i * i;
};

var numbers = [2,4,6,8];

numbers.map(square); //this will return an array [square(2), square(4), square(6), square(8)]
                     // => [4, 16, 36, 64]


//We can write the function inside the parameters and the result would be the same:

numbers.map(function (i) {
    return Math.pow(i, 3);  //using Math to obtain cube of i
});

//this returns => [8, 64, 216, 512]

//More examples

var firstLetters = function (listOfStrings) {
    return listOfStrings.map(function (word) {
        return word.charAt(0);
        //return word[0]; this is equivalent
    });
};

listOfNames = ["john", "charlie", "emma", "daniel"];
console.log(firstLetters(listOfNames)); //=> ['j','c','e','d']


// we can use map with any array
[true, false, false, true].map(function (element) {
    return !element;
});
//=> [false, true, true, false] returns !value of each element in the array