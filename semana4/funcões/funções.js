/*function meuarray (array){
    for (let elemento of array){
        console.log(elemento)
    }
    return array.length
    
}
const meuarray1=meuarray([1,2,3,4,5])
console.log(meuarray1)*/


/*let vericaPar= (numero)=>{
    if(numero % 2 === 0){
        return "é par"

     } else {
        return "é impar"
    }
        return numero

    }


console.log(vericaPar(89))
*/
/*const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
    return array
    
}
let resultado = minhaFuncao
console.log(resultado(2))/*
// resposta  exercicio 1 
/*A-0 
B- [0,1,0,1,2,3]
C- [´0,1,0,1,2,3,0,1,2,3,4,5]*/

/*let arrayDeNomes = [1, 2, 3, 4, 5];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, 1));
console.log(funcao(arrayDeNomes, 2));
console.log(funcao(arrayDeNomes, 15));

//A- 0 , 2 , undefined
// funcionaria porque estamos capturando o indice do array e não o tipo 
*/
/*function soma(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }
let resultado = metodo([2,2])
console.log(resultado)*/
// a funcão incrementa um array a partir da soma e multiplicação das variaveis
// nome alternativa "multiplicaEsomaArray"

/*let anosHumanos = (idade)=>{
    let idadeDoCachorro= idade*7;
    return idadeDoCachorro
}
console.log(anosHumanos(4))
*/


/*function parametros (nome, idade, endereco, estudante){
    if(estudante === true){
       return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou estudante")
    }else {
       return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco +" e não sou estudante.")
    }
}
parametros("Mario", 33, "São Paulo", True)
*/

/*let seculo = (ano) => {

    if(ano >= 1001 && ano <= 1100){
      return "O " + ano + " pertence ao século XI";
  }else if(ano >= 1101 && ano <= 1200){
      return "O " + ano + " pertence ao século XII";
  }else if(ano >= 1201 && ano <= 1300){
      return "O " + ano + " pertence ao século XIII";
  }else if(ano >= 1301 && ano <= 1400){
      return "O " + ano + " pertence ao século XIV";
  }else if(ano >= 1401 && ano <= 1500){
      return "O " + ano + " pertence ao século XV";
  }else if(ano >= 1501 && ano <= 1600){
      return "O " + ano + " pertence ao século XVI";
  }else if(ano >= 1601 && ano <= 1700){
      return "O " + ano + " pertence ao século XVII";
  }else if(ano >= 1701 && ano <= 1800){
      return "O " + ano + " pertence ao século XVIII";
  }else if(ano >= 1801 && ano <= 1900){
      return "O " + ano + " pertence ao século XIX";
  }else if(ano >= 1901 && ano <= 2000){
      return "O " + ano + " pertence ao século XX";
  }else if(ano >= 2001 && ano <= 2100){
      return "O " + ano + " pertence ao século XXI";
  }else{
      return "Ano fora do intervalo entre 1000dc e 2020dc.";
  }
  }
  
  console.log(seculo(2020));
  */
  const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
 const tamanhoArray = (array) => {
     return array.length
 }
 console.log(tamanhoArray(array))
 

  const boleano = (numero) => {
      if(numero % 2 === 0){
          return numero + "é par"
      }else{
         return numero= "é impar"
     }
  }
  console.log(boleano(10))


  const quantidadeDePar = (array) => {
    let arrayPar = 0;
    for(let elemento of array){
        if(elemento%2 === 0){
            arrayPar++;
        }
    }
    return arrayPar ;
  }
  
  let resultado = quantidadeDePar(array);
  console.log("A quantidade de números pares é ", resultado);

