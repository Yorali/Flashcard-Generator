module.exports = ClozeCard;
var basic = require("./BasicCard.js");

var ClozeCard = function(text, cloze) {
    this.text = text,
    this.cloze = cloze,
    this.partial = text.replace(cloze, "____")
};

// ClozeCard.prototype.text = function() {
//     return text
// }

// ClozeCard.prototype.cloze = function() {
//     return cloze;
// };

// ClozeCard.prototype.partial = function() {
//     console.log(text.replace(cloze, "____"));
// };

ClozeCard.prototype.fullText = function() {
    return text;
};

var leda = new ClozeCard ("Leda is the guitarist of Far East Dizain", "Leda");

console.log(leda.text);
console.log(leda.cloze);
console.log(leda.partial)