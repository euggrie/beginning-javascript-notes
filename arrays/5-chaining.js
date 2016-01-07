
//any function that returns an array, we can call another array method on it,
// so we can call an immediate forEach on a map by chaining it

var double = function (i) {
    return i * 2;
};

[1, 2, 3, 4, 5].map(double); //=> [2, 4, 6, 8, 10] returns an array

[1, 2, 3, 4, 5].map(double).forEach( function (i){
    console.log("This is the number " + i);
});

//So because map returns an array we can call a function on each element using forEach
//In this case we add a text to each element of the array returned

//More examples:

var range = function (max) {  //function that creates a range (0-max)
    var result = [];
    var i;

    for (i=0; i <= max; i = i+1) {
        result.push(i);
    }

    return result;
};

range(10).map( function (i) {
    return i * 2;
});
//=> [0, 2, 6, 8, 10, 12, 14, 16, 18, 20]

//Knowing this we can write a solution for the fizz buzz problem:

range(100).map( function (i) {
    if(i % 3 === 0) {
        return "FIZZ";
    } else if(i % 5 === 0) {
        return "BUZZ";
    } else {
        return i;
    }
}).forEach( function (i) {
    console.log(i);
});

// This is the solution of the problem: Print number from 0 to 100,
// replacing multiple of 3 with the word FIZZ and multiples of 5 with the word BUZZ