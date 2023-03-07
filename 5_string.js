const escola = "Cod3r";

console.log(escola.charAt(4)); //ele vai trazer a letra depois do 4
console.log(escola.charCodeAt(3));
console.log(escola.indexOf(3)); //pra saber qual o índice do valor indicado

console.log(escola.substring(1)); //traz o índice do número usado até o final
console.log(escola.substring(0, 3)); //traz i valor no intervalo selecionado, somente

console.log('Escola'.concat(escola.concat("!"))); //concat funciona do mesmo jeito que o + -> pra unir duas ou mais strings;
console.log(escola.replace(3, 'e')); // substitui o valor do índice pelo string

console.log('Ana,Maria,Pedro'.split(','));