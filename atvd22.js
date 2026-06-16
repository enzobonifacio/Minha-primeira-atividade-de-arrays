let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate"];
let produtoBuscado = "Coxinha";
let encontrado = false;

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] === produtoBuscado) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("Produto encontrado!");
} else {
    console.log("Produto não encontrado.");
}''