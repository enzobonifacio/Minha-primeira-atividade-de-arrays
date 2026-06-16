let notas = [8, 7, 5, 9, 10, 6];
let contador = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
        contador++;
    }
}

console.log("Quantidade de notas boas: " + contador);