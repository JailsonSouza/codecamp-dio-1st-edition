//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let plastico = parseInt(gets());
let diasNecessarios = 0;

//TODO: Print no console a quantidade de dias que levará para que o plástico chegue
//a 1kg ou menos

do {
  diasNecessarios++;
  plastico /= 2;
} while (plastico > 1);

print(`Serão necessários ${diasNecessarios} dias`);