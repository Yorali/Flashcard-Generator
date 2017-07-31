module.exports = BasicCard;

var BasicCard = function(front, back) {
    this.front = front,
    this.back = back
};

var leda = new BasicCard ("Leda is the guitarist of Far East Dizain", "Leda");

console.log(leda.front);
console.log(leda.back)