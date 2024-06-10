//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let arr = gets().split(', ')

const list = {
    Reflorestamento: gets(),
    EsgotoTratado: gets(),
    EmissaoDeCarbono: gets(),
    EnergiaSustentavel: gets(),
}

const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);

//TODO: Print no console "Multa", "Avaliação de progresso" ou "Não multar" dependendo do valor 
//de cada uma das chaves a serem verificadas da lista arr

arr.forEach(item => {
    const value = list[findItem(list, item)[0]];
    if (value === 'Feito') {
        print("Não multar");
    } else if (value === 'Em progresso') {
        print("Avaliação de progresso");
    } else if (value === 'Não feito') {
        print("Multa");
    }
});