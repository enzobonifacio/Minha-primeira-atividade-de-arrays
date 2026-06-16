let numeros = [2, 5, 8, 11, 14, 17, 20, 22];
let pares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    }
}
console.log("Quantidade de números pares: " + pares);