let preco = 19.90; // Valor literal
let desconto = 0.4;

console.log (preco * (1 - desconto));

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

{
    let nome = "Caderno"; //string -> sequência de símbolos
    let categoria = "Papelaria";
    console.log(nome + categoria); // sem espaço

    console.log(nome + " " + categoria); //com espaço

    console.log("Produto: " + nome
     + ", Categoria: " + categoria
     + ", Preço:" + preco
     + ", Desconto: " + desconto);
      //texto literal com valor da variável
}