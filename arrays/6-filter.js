var data = [50, 10, 100, 150, 1000, 1, 2, 8, 1001, 200, 250];

data.filter(function (i) {
    return i >= 100;
});
// => [100, 150, 1000, 1001, 200, 250]
//this will return an array with the elements that satisfy the condition
//the array data is still the same


//Let's use the range function again:
var range = function (max) {  //function that creates a range (0-max)
    var result = [];
    var i;

    for (i = 0; i <= max; i = i + 1) {
        result.push(i);
    }

    return result;
};

range(100).filter(function (i) { //this will return all even numbers between 0 and 100
    return i % 2 === 0;
});


//If we want we can create the function before and the call it with filter:
var isEven = function (i) {
    return i % 2 === 0;
};

range(100).filter(isEven);

//How does filter work?
//It will check with every element on the array if the condition is true or false.
//If the condition returns true, the element will be push to an array (equivalent to result =[])
//this will be the array returned, the one with the elements that satisfy the condition.


//Using this we can generate all prime numbers from 0 to 50:

//This is the isPrime solution:
var isPrime = function (number) {
    var result = true;
    var div;

    if (number <= 1) {
        result = false;
    }

    for (div = 2; div < number; div = div + 1) {
        if (number % div === 0) {
            result = false
        }
    }

    return result;
};
//using filter:
console.log(range(50).filter(isPrime));

//=> [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]
