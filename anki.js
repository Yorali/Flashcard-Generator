var word = process.argv[2];
var sentence = process.argv [3];

var basic = require("./BasicCard.js");
var cloze = require("./ClozeCard.js");

var leda = new cloze.ClozeCard("Leda is the guitarist of Far East Dizain", "Leda");
var leda = new BasicCard("Leda is the guitarist of Far East Dizain", "Leda");