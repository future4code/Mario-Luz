//----------------Exercícios de interpretação de código ---------------------------
//EXERCICIO 1
/*function conversorDeMoeda(valorEmDolar){ // cria a função conversorDeMoeda que recebe como parametro um valor numerico
    const cotacao= Number(prompt("informe o Valor")); // crua a variavel cotacao e exibe na tela um pedido para que seja digitado um valor
    return "R$" + (valorEmDolar*cotacao) // define que o retorno da função deve ser o o valor inserido para a cotação * o valor estipulado no valorEmDolar
}
const meuDinheiro = conversorDeMoeda(100);// cria a variavel meuDinheiro que vai receber o valor da função conversorDeMoeda que no caso é 100

console.log(meuDinheiro) // retorna o valor do calculo realizado do valorEmDolar*cotacao e que foi atribuido a varivel meuDinheiro */
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//EXERCICIO 2
/*function investeDinheiro(tipoDeInvestimento,valor){  // cria a função investeDinheiro, que recebe os valores tipoDeInvestimento e valor
    let valorAposInvestimento; // cria a variavel let valorAposInvestimento
    switch(tipoDeInvestimento){ // inicia o switch e case , que vai possibilitar diferentes blocos de codigo variando a condição 
        case "poupança":
            valorAposInvestimento= valor * 1.03; // variavel ValorAposInvestimento recebe a multiplicação de valor* 1.3
            break;
            case "Renda Fixa":
                valorAposInvestimento = valor * 1.05; // variavel ValorAposInvestimento recebe a multiplicação de valor* 1.5
                break;
                case "CDB":
                    valorAposInvestimento = valor * 1.06; // variavel ValorAposInvestimento recebe a multiplicação de valor* 1.6
                    break
                    case"Ações":
                    valorAposInvestimento= valor* 1.1 // variavel ValorAposInvestimento recebe a multiplicação de valor* 1.1
                    break;
                    default:
                        alert("TIPO DE INVESTIMENTO INFORMADO INCORRETO!") emite um alerta na tela caso o tipo de investimento esteja incorreto 
                        break;
    
    }
    return valorAposInvestimento //  retorna  o valorAposInvestimento, que recebeu um novo valor apos a multiplicação de valor
}
const novoMontante = investeDinheiro("Ações",150); // cria uma variavel novoMontante para receber o valor de 150 multiplicado por 1.1
const segundoMontante = investeDinheiro("Tesouro Direto",200) // não existe o case para "Tesouro Direto", que vai retornar um erro criado pelo alert

console.log(novoMontante); //vai exibir o valor de 165
console.log(segundoMontante);// exibido como undefined por não ser definido anteriormente */

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// EXERCICIO 3
/*const numeros = [25,12,55,64,121,44,11,84,51,48,14,73,111,283]; // cria  a const numeros que recebe um array
const array1 = []; //cria a variavel array que vai receber array
const array2 = []; // cria a variavel array2 que vai recer também array

for (let numero of numeros){ // inicia um laço de for que diz " para cada elemento  dentro de numeros"
    if(numero % 2 ===0){ // condição de if dizendo " para cada numero do array que tiver divisão por 2 com o resto 0"
        array1.push(numero); // adicione no array1
    }else{ // caso não atenda
        array2.push(numero); // adicione no array2
    }
}
console.log("Quantidade total de numeros", numeros.length); // inprime na tela a mensagem quantidade total de numeros 14
console.log(Array.length)//  exibe o total de itens do array1 que é 1 
console.log(array2.length);// exibie ototal de itens do array2 que é 8
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EXERCICIO 4
/*const numeros = [25,12,55,64,121,44,11,84,51,48,14,73,111,283,1,99,13,31,83,131,1,1.1,-10,25,1590];// cria a variavel numeros que receber arrays
let numero1= Infinity; // cria a variavel numero1 que recebe o valor infinity que é positvo
let numero2= 0; // cria a variavel numero2 que recebe o valor inicial de zero

for(let numero of numeros){ // inicia um laço de for para todos os elementos do array numeros
    if(numero<numero1){ // diz  (se o numero do array, que for menor que o valor da variavel numero1)
        numero1=numero; // numero1 assume o valor do menor numero do array
    }
    if(numero>numero2){ //diz (se numero do array, for maior que o valor da variavel numero2)
        numero2=numero; // variavel numero2 assume o maior valor existente desse array
    }
}
console.log(numero1); // exive na tela o valor adicionado a variavel numero1 que agora é -10
console.log(numero2); // exive na tela o valor da variavel numero2 que agora é 1590
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EXERCICIOS DE LOGICA
//EXERCICIO-1
// usando for
/*const mediaA = new Array(8, 7, 10, 9); // cria variavel mediaA que recebe um array

for (let i = 0, l = mediaA.length; i < l; i++) { // inicia um laço for 
  console.log(mediaA[i]);
}
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Usando foreach
/*var dataClient = {
  
    name: 'Yure',
    last_name: 'Pereira'
    age: 23, 
  };
  
  for (var data in dataClient) {
    
    console.log(data + ' = ' + dataclient[data]);
    
  }
  */
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Usando While
  /*var mediaA = new Array(8, 7, 10, 9)
  l = mediaA.length,
  count = 0;

while (count < l) {

console.log(mediaA[count]);
count = count + 1;

}
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EXERCICIOS DE LOGICA
//EXERCICIO-2
/*const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 = TRUE
const booleano4 = !booleano3 = FALSE
A-  false
B-  false
C-  true
D-  true
E- true
*/
//---------------------------------------------------------------------------------------------------------------
//EXERCICIO3

/*var j=0, msg="";
while (j<=10){
     
     if(j%2 ==0){
        msg += j + ", ";
     }
    j++;
  };
msg = msg.substr(0,(msg.length -2));
console.log(msg);*/
// o codigo não funciona por falta de parametros para indicar se é par ou não, 
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EXERCICIO 4 
/*function calculaTriangulo(a,b,c){
    const  lado1= a
    const  lado2= b 
    const  lado3= c
    if(lado1 ===lado2 && lado1===lado3){
        return "é Equilátero"

    }else if(lado1===lado2 || lado1===lado3 || lado2===lado3){
        return "é Isósceles"
    }else{
        return " é Escaleno"
    }
    */
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  
   //EXERCICIO 5
   /*function programa (num1, num2){
    if(num1 > num2){
        console.log("O número 1: ", num1,  " é maior que o número 2: ", num2);
    }else{
        console.log("O número 2: ", num2, " é maior que o número 1: ", num1);
    }
    if(num1 % num2 === 0){
        console.log("O ", num1, "é divisível por ", num2);
    }else{
        console.log("O ", num1, "NÃO é divisível por ", num2);
    }
    if(num1 > num2){
        console.log("A diferença entre eles é: ", num1 - num2);
    }else{
        console.log("A diferença entre eles é: ", num2 - num1);
    }
}   
programa(15,30)
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EXERCICIOS FUNÇÕES
//EXERCICIO 1
/*function encontraMaior(array) {
   
    var maior = array[0];
    
    for (let i = 1; i < array.length; ++i){
   

        if (array[i] > maior){ 
            maior = array[i]; 
        }
    }
    
    return maior;
}

let arr = [10,3,1,6,7,2];
console.log(encontraMaior(arr));
*/
/*let foo = function () {
    alert ("Hello Future")
}
foo()

function teste() {
    
}
alert("segundo alert")  
foo()
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EXERCICIOS OBJETOS
//1- Arrays são uma lista de valores que são armazenados na memoria, podemos visualizar cada uma das posições individualmente
//  Objetos é uma variavel que armazena multiplos valores e comportamentos
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//2- 
/*function criaRetangulo(lado1,lado2) {
    let lado1= largura;
    let lado2= altura;
    let perimetro = (2*(lado1+lado2);
    let area= (lado1*lado2)
    
}
*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3-
const filme = {
    nome : "Harry Potter e o Enigma do Principe",
    ano: 2009,
    diretor:"David Yates",
    atores: ["Daniel","Rupper","Emma"],
    jaVi: true
}
console.log("Venha assistir ao Filme"+ filme.nome,"de Ano",filme.ano,"Dirigido por",filme.diretor,"e Estrelado por",filme.atores[1],filme.atores[0],filme.atores[2])
*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercício 4
 /*function anonimizarPessoa(){
     let pessoa = {
         nome: "Mario Luz",
         idade: 33,
         email: "marionetoluz@gmail.com",
         endereco: "Rua Freixisto"
     }

     let novoObjeto = {
         ...pessoa,
         nome: "ANÔNIMO"
     }

     return novoObjeto;
 }

 console.log(anonimizarPessoa());
