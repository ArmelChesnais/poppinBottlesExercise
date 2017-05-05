var bottlesLib = require("./bottlesLib");

var money = process.argv[2];

var totalBottles = bottlesLib.buyBottles(money);

console.log("bought " + totalBottles.bought + " bottles, redeemed " + totalBottles.fromEmpties + " bottles from empties, and " + totalBottles.fromCaps + " from bottle caps.");