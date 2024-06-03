//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());
const DISTANCIA = 10;

//TODO: Print no console se a semente deve ser plantada ou se o buraco deve
let difEntreBuracos = parseInt(gets());

//avançar ou retroceder X metros

if (id === DISTANCIA) {
  print("Plantar!");
} else if (id < DISTANCIA) {
  print(`O buraco deve avançar ${DISTANCIA - id} metros`);
} else {
  print(`O buraco deve retroceder ${id - DISTANCIA} metros`);
}
