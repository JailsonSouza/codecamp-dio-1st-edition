//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let amostra = gets().split(',').map(nivel => parseInt(nivel, 10));

//TODO: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável

amostra.forEach(nivel => {
    if (nivel >= 75) {
        print("Descartar da lista");
    } else if ((nivel >= 50) && (nivel < 75)) {
        print("Manter sob observação");
    } else {
        print("Isolar e iniciar protocolo de cuidados");
    }
});