
//Sometimes we want to break out of the loop early as soon as we find what we want
var tweets = ["Hello World", "lol", "this is an awesome tweet", "this is awesome"];

tweets.some( function (tweet) {
    return tweet.indexOf("awesome") > -1;
});
//=> true

//So some doesn't returns all the values like filter, it returns true if some element satisfy the condition.

tweets.filter( function (tweet) {
    return tweet.indexOf("awesome") > -1;
});
//=> ["this is an awesome tweet", "this is awesome"]

tweets.some(function (tweet) {
    console.log(tweet);
    return tweet.indexOf("awesome") > -1;
});
//=> "Hello World"
//=> "lol"
//=> "this is an awesome tweet"
//=> true

//It doesn't execute the last element because the third element breaks the loop when returns true.



//There is another similar method called every
//It's the opposite, it only returns true if every element passes the test

var range = function (max) {  //function that creates a range (0-max)
    var result = [];
    var i;

    for (i = 0; i <= max; i = i + 1) {
        result.push(i);
    }

    return result;
};

range(100).filter(function (i) {
    return i % 2 ===0 ;
}); //=>returns all even numbers from 0 to 100; so let's try every:

range(100).filter(function (i) {
    return i % 2 ===0 ;
}).every(function (i) {
    return i % 2 === 0;
}); //=> this returns true(all numbers are even)
//Let's try it with another array:

tweets.every(function (tweet) {
    return tweet.indexOf("lol") > -1;
}); //=> returns false (not every element contain the word "lol")