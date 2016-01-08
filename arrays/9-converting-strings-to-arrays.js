var greeting = "hello world";

greeting.split("");

greeting.split("").forEach(function (letter) {
    console.log(letter);
});

//=>h
//=>e
//=>l
//=>l
//=>o
//=>
//=>w
//=>o
//=>r
//=>l
//=>d

var dogNames = "gracie,loki,dahlia,ally,layla";
dogNames.split(",");
// =>[gracie, loki, dahlia, ally, layla]

var capitalize = function(word) {
    return word[0].toUpperCase() + word.slice(1);
};

dogNames.split(",").map(capitalize);
//=>[Gracie, Loki, Dahlia, Ally, Layla]

dogNames.split(",").map(capitalize).join(",");
//=>"Gracie,Loki,Dahlia,Ally,Layla"