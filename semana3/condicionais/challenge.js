/*const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
//O codigo realiza um teste para saber se o resto da divisão de um numero por 2 é 0
//ele vai imprimir para numeros inteiros
 //a mensagem de "não passou no teste " sera para numeros que impares
 */

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

// A- o codigo serve para informar o preço de cada fruta
// B- Se a fruta for maçã o valor sera 2.25
// C- Banana não é um item existente
// D- O preço da fruta  Pêra  é  R$  5

/*const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)*/

//Uncaught ReferenceError: mensagem is not defined
// mensagem não é uma variavel declarada de forma global, e sim apenas no bloco

/*const primeiroNumero = Number(prompt("Digite um numero de 1 a 10"))
const segundoNumero = Number(prompt("Digite um numero de 1 a 10"))
const terceiroNumero = Number(prompt("Digite um numero de 1 a 10"))
if ((primeiroNumero > segundoNumero) && (segundoNumero > terceiroNumero)) {
    console.log (primeiroNumero)
    console.log (segundoNumero)
    console.log (terceiroNumero)
}else if ((primeiroNumero > terceiroNumero)  && (terceiroNumero > segundoNumero)) {
    console.log (primeiroNumero)
    console.log (terceiroNumero)
    console.log (segundoNumero)
}else if ((segundoNumero > primeiroNumero)  && (primeiroNumero > terceiroNumero)) {
    console.log (segundoNumero)
    console.log (primeiroNumero)
    console.log (terceiroNumero)
}else if ((segundoNumero > terceiroNumero)  && (terceiroNumero > primeiroNumero)) {
    console.log (segundoNumero)
    console.log (terceiroNumero)
    console.log (primeiroNumero)
}else if ((terceiroNumero > primeiroNumero)  && (primeiroNumero > segundoNumero)) {
    console.log (terceiroNumero)
    console.log (primeiroNumero)
    console.log (segundoNumero)
}else if ((terceiroNumero > segundoNumero)  && (segundoNumero > primeiroNumero)) {
    console.log (terceiroNumero)
    console.log (segundoNumero)
    console.log (primeiroNumero)
} */
// numeros iguais apenas exibe indiferente da ordem
//a. Foto postada junto a pasta do exercício.
//b.
let vertebras = prompt("tem vertebras ? (s/n)");
let mamifero;
let racional;
let penas;
let terrestre;
let agua;
if (vertebras === "s"){
    mamifero = prompt("é mamifero? (s/n)");
//é mamifero
    if (mamifero ==="s"){
        racional = prompt("é racional ? (s/n)");
        if(racional === "s"){
            console.log("é um humano");
        }
        else {
            console.log("é um mamifero não racional");
        }
    }
//não mamifero
    else {
        penas = prompt("tem penas ? (s/n)") 
        if(penas === "s"){
            console.log("é uma ave");
        }
//não é uma ave
        else {
        terrestre = prompt("é terrestre ? (s/n)");
        if(terrestre==="s"){
//é terrestre
        agua = prompt("passa parte da vida na água ? (s/n)");
        if(agua==="s"){
            console.log("é um anfibio");
        }
        else{
            console.log("é um reptil");
        }
    }
//não é terrestre
    else{
        console.log("é um peixe");
        }
    }
}
}
else{
    console.log("invertebrado")
}
