/*let estouComFome=true;
let estomago= 0;

while(estouComFome){
  console.log("quero comer mais")
  estomago = estomago + 10;
  if(estomago===100){
    estouComFome=false;
  }
}*/


/*let estomago=0 
while(estomago < 100){
  estomago += 10
  console.log("quero comer mais")

}*/


/*let numero = Number (prompt("Digite seu numero"))
let soma=0;
while (numero !==0){
  soma += numero
  numero=Number (prompt("Digite seu numero"))
}
console.log("a soma é ", numero)*/

//for (let i=0; i<10; i++){
  //console.log(i)
//}

/*for (let i=0; i<=10; i++){
  if (i % 2===0){
    console.log (i,"numero par")
  }else{
    console.log(i,"numero impar")
  }
}*/

/*const numeros = [14,67,89,15,23,99]
for (let i=0; i<numeros.length; i++){
  const elemento = numeros[i]
  console.log(elemento)
}*/

/*const numeros = [14,67,89,15,23,99]
let maior=numeros[0]
for (let i=0; i<numeros.length; i++){
  const elemento = numeros[i]
  if(elemento>maior){
    maior=elemento
  }
  
}
console.log(maior)*/


/*const numeros= [14,67,89,15,23]
for (let numero of numeros){
  console.log(numero)
}*/

/*const arrayNumeros = [11,15,18,12,13]
let maior= 0
for(let num of arrayNumeros){
  if(num>maior){
    maior=num
  }
}
console.log(maior)*/

/*const listaDePalavras = ["oi","sumida","tudo","bem?"]
let mensagem= ""
for(let palavra of listaDePalavras){
  mensagem+= palavra+ " "
}
console.log(mensagem)*/


/*let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
// enquanto i <15 é somado e atraibuido a variavel sum
// resultado impresso é 105 */

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

//2-A - Adiciona um elemento ao array
//2-B - Array(4) [10, 15, 25, 30]
//2-C-const numero= 3 Array(6) [12, 15, 18, 21, 27, 30] 
//C-const numero= 4 Array(1) [12] 
*/
/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}/*
//Desafio de interpretação 
 //0
 //00
 //000
 //0000
 
/*
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = arrayOriginal [0]
let menor = arrayOriginal [0]
for(let num of arrayOriginal){
    if(num > maior) {
        maior = num
    }else if(num < menor){
        menor = num
    }
}
console.log("O maior número é",maior,"o menor número é", menor)*/


/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray=[]
for(i=0; i<arrayOriginal.length; i++){
  novoArray.push(arrayOriginal[i]/10)
}
console.log(novoArray)*/
/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray=[]
for(i=0; i<arrayOriginal.length; i++){
  novoArray.push(arrayOriginal[i]/10)
}
console.log(novoArray)*/

/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayDividido = []
for(let i = 0; i < arrayOriginal.length; i++){
    if( i % 2 === 0){
        arrayDividido.push(arrayOriginal[i])
    }
}
console.log(arrayDividido, "é par")*/


/*let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let index = 0
const frases = []
for(let i = 0; i < arrayOriginal.length; i++){
    index = arrayOriginal[i]
    frases.push("O elemento do índex "+ i+ "é "+ index)
}
console.log(frases)




