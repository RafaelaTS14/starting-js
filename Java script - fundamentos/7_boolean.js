let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!isAtivo); // duas exclamações - true. Uma exclamação - false

console.log('os verdadeiros: ');
console.log(!!3); //valor inteiro é true
console.log(!!-1); 
console.log(!!' '); //string com valor é true
console.log(!![]); //array é true
console.log(!!{}); //função é true
console.log(!!Infinity); //infinity é true
console.log(!!(isAtivo = true)); //atribuição true é true
console.log(!!(isAtivo = Infinity));

console.log('os falsos:');
console.log(!!0); //zero é false
console.log(!!''); //string vazio é false
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false)); //atribuição false é false

let nome = 'Lucas';
console.log(nome || 'Desconhecido'); // || se usa para "ou"