//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const arr = gets().split(', ');
let qualFiltro = 0;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas na entrada

arr.forEach(molecula => {
    let classificacaoFiltro = molecula.length <= 5 ? 1 : (molecula.length <= 10 ? 2 : 3);
    
    if (classificacaoFiltro > qualFiltro) {
        qualFiltro = classificacaoFiltro;
    }
});

switch (qualFiltro) {
  case 1:
    print("O filtro deve ser: Filtro Normal");
   break;
  case 2:
    print("O filtro deve ser: Filtro Específico");
    break;
  case 3:
    print("O filtro deve ser: Filtro Duplo Específico");
    break;
}