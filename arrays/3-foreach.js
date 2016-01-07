// write a function that will do what you want to do with each element

var printElement = function(tweet){
    console.log(tweet);
};

// we created a function that represents the loop body in a for loop
//now we send this function into the forEach method that's on the array

var tweets = ["Hello World", "this is a tweet", "lol"];

tweets.forEach(printElement);

//So it takes the function and apply it to every element in the array by making the element the argument
//In this case we passed a function as an argument, so we can also declare the function as the argument:

tweets.forEach(function (tweet) {
    console.log(tweet);
});

// No we'll use two different way of building the sum function:

var sumForLoop = function (list) {
    var sum = 0;
    var i;

    for(i =0; i<list.length; i = i+1){
        sum = sum + list[i];
    }
    return sum;
};

var sumForEach = function (list) {
    var sum = 0;
    list.forEach(function (i) {
        sum = sum + i;
    });

    return sum;
};

console.log(sumForEach([1,2,3]));
console.log(sumForLoop([1,2,3]));