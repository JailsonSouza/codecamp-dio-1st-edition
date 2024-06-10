//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let lista1 = gets().split(', ');
let lista2 = gets().split(', ');
let lista3 = gets().split(', ')

let arr = [lista1, lista2, lista3]

let qualFiltro = false;
let qualMolecula;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas prejudiciais
//avaliadas no teste. 
const gasesPrejudiciais = ["NO2", "SO2", "CO", "FHO"];

let contListas = 0;

while (!qualFiltro && contListas < arr.length) {
    let lista = arr[contListas];
    let contMoleculas = 0;
    while (!qualFiltro && contMoleculas < lista.length) {
        let molecula = lista[contMoleculas];
        if (gasesPrejudiciais.includes(molecula)) {
            qualFiltro = true;
            qualMolecula = molecula;
        }
        contMoleculas++;
    }
    contListas++;
}

print(qualFiltro ? `Filtro Específico para a Molécula ${qualMolecula}` : "Filtro Simples");