let notas = [8, 7, 5, 9, 10];
let notaBaixa = false;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 6) {
        notaBaixa = true;
    }
}

if (notaBaixa) {
    console.log("Existe nota abaixo da média.");
} else {
    console.log("Todas as notas estão boas.");
}