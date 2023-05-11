let valor; //não inicializada

console.log(valor); //undefined
//console.log(valor2); // is not defined

valor = null; //ausência de valor

console.log(valor);
//console.log(valor.toString()); //Não é possível ler propriedades nulas

const produto = {};
console.log(produto.preco); //preço não definindo dentro de produto
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evitar
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);