var text = 'Papugi kosz� traw�, unosz�c si� nad ziemi� 15 centymetr�w, na czerwonych dywanach.';
var elephant = 'Zielone s�onie';
var elephantUpperCased = elephant.toUpperCase();


var NowyText = text.replace('Papugi', elephantUpperCased);

var partOftext = NowyText.slice(0, NowyText.length/2);

console.log(partOftext);