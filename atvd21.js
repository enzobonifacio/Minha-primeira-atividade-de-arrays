let notas = [8, 5, 7, 4, 10, 6];

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        console.log("Nota " + notas[i] + ": Aprovado");
    } else {
        console.log("Nota " + notas[i] + ": Reprovado");
    }
}