//array serve pra agrupar valores
const valores = [7.7 , 8.9 , 6.3 , 9.2];
console.log(valores[0], valores[3]);
console.log(valores.length); //vai mostrar quantos elementos exisstem no array

valores.push('teste');
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);