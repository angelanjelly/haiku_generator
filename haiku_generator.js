var fs = require("fs");
var haiku = require('./haiku');

//var structure = process.argv[2];
//var data = process.argv[3];

console.log("        Haiku        ")
console.log(haiku.createHaiku([[5],[7],[5]], 'cmudict.txt'));

/*
haiku.createHaiku(process.argv[2], process.argv[3]);
console.log(haiku.createHaiku(process.argv[2], process.argv[3]));
*/