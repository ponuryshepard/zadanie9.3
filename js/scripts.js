var text = 'Papugi kosz¹ trawê, unosz¹c siê nad ziemi¹ 15 centymetrów, na czerwonych dywanach.';
var elephant = 'Zielone s³onie';
var elephantUpperCased = elephant.toUpperCase();


var NowyText = text.replace('Papugi', elephantUpperCased);

var partOftext = NowyText.slice(0, NowyText.length/2);

console.log(partOftext);