
import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
  console.log("Começando o Jogo:")

  const user1 = prompt("Digite seu nome")
  const carta1 = comprarCarta();
  const carta2 = comprarCarta();

  console.log(`${user1} - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${carta1.valor + carta2.valor}`)

  const PC = "Computador"
  const carta1pc = comprarCarta();
  const carta2pc = comprarCarta();

  console.log(`${PC} - cartas: ${carta1pc.texto} ${carta2pc.texto} - pontuação ${carta1pc.valor + carta2pc.valor}`)

  if (carta1.valor + carta2.valor === carta1pc.valor + carta2pc.valor) {
    console.log("Drawn!")
  } else if (carta1.valor + carta2.valor < carta1pc.valor + carta2pc.valor) {
    console.log("PC WINS!")
  } else {
    console.log("Player 1 WiNS!")

  }
} else {
  console.log(" GAME OVER")
}