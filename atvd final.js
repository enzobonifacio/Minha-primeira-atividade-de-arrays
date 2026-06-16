// Sistema Simples da Cantina

let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate"];
let precos = [8, 5, 7, 4];

// Mostrar cardápio
console.log("=== CARDÁPIO ===");

for (let i = 0; i < produtos.length; i++) {
    console.log(
        (i + 1) + " - " + produtos[i] + " - R$ " + precos[i]
    );
}

let total = 0;

for (let i = 0; i < precos.length; i++) {
    total += precos[i];
}
console.log("Valor total de todos os produtos: R$ " + total);

// Encontrar produto mais caro
let maiorPreco = precos[0];
let produtoMaisCaro = produtos[0];

for (let i = 1; i < precos.length; i++) {
    if (precos[i] > maiorPreco) {
        maiorPreco = precos[i];
        produtoMaisCaro = produtos[i];
    }
}

console.log(
    "Produto mais caro: " +
    produtoMaisCaro +
    " (R$ " +
    maiorPreco +
    ")"
);

produtos.push("Pão de Queijo");
precos.push(6);

console.log("Novo produto adicionado!");


console.log("=== CARDÁPIO ATUALIZADO ===");

for (let i = 0; i < produtos.length; i++) {
    console.log(
        (i + 1) + " - " + produtos[i] + " - R$ " + precos[i]
    );
}
console.log("Quantidade de produtos: " + produtos.length);