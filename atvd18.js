let numeros = [12, 45, 7, 89, 34, 21];
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("O maior número é: " + maior);