
//reduce takes a function as an argument, and this function takes two arguments.



var sumWithReduce = function (list) {
    var result = list.reduce(function (sumSoFar, i) {
        return sumSoFar + i;
    });
    return result;
};

sumWithReduce([5, 6, 7, 8]); // => 26

//So What is reduce doing here?
//Is taking the result of the function and is sending that result in the next call as sumSoFar.
//We are adding a number to sumSoFar and sending that into the next function call.
//So the first thing that happens with reduce, it picks the first value in the array (in this case 5), so it sets:
// sumSoFar = 5;
//The next thing that happens is that it executes the function. so:
//sumSoFar: 5, i: 6, returns 5 + 6
//sumSoFar: 11, i: 7, returns 11 +7
//sumSoFar: 18, i: 8, returns 18 +8
//=> 26

//Some exercise:
