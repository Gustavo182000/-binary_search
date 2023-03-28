function binary_search(dados, pesquisa) {

    // Definição do inicio e do final do array
    var inicio = 0;
    var fim = dados.length - 1;
    let interacoes = 0;

    while (inicio <= fim) { // Enquanto não chegar a um único elemento
        var meio = Math.floor((inicio + fim) / 2) // Verifica o meio do array
        var chute = dados[meio] 

        interacoes += 1;
        console.log(interacoes) // Interações para achar o elemento

        if (chute == pesquisa) { // Se achar o item
            return meio;
        } else if (chute > pesquisa) { // O chute foi muito alto
            fim = meio - 1;
        } else { // O chute foi muito baixo
            inicio = meio + 1;
        }
    }

    return null;

}



const nomes = ['Alice', 'Beatriz', 'Carla', 'Daniel', 'Eduardo', 'Fernanda', 'Gustavo', 'Helena', 'Isabela', 'Juliana', 'Karen', 'Luisa', 'Marcelo', 'Natalia', 'Otavio', 'Paula', 'Quiteria', 'Rafael', 'Sofia', 'Thiago', 'Ulisses', 'Valentina', 'Wagner', 'Xavier', 'Yasmin', 'Zelia'];

console.log(binary_search(nomes, "Zelia"))
