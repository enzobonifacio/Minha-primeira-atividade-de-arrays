let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios",
    "Ler apostila",
    "Revisar conteúdo",
    "Enviar atividade"
];

for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);
}

tarefas.push("Assistir aula");

console.log("Lista atualizada:");

for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);
}