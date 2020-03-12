class despesa {
    constructor(valor, despesa, descricao){
       this.valores = valor
       this.tipoDesp = despesa
       this.descDesp = descricao
    }
 }
 
 const arrayDespesas = []
 
 
 function aoClicarNoBotaoCadastro(){
    if (document.getElementById("valorGasto").value == "" || document.getElementById("tipoDespesa") == "" || document.getElementById("descricao").value == "") {
       alert("Por favor, preencha todos os campos!");          
    }  else {
       const valorDespesa = document.getElementById("valorGasto").value;
       const tipoDespesa = document.getElementById("tipoDespesa").value;
       const descDespesa = document.getElementById("descricao").value;
 
       const novaDespesa = new despesa(valorDespesa, tipoDespesa, descDespesa)       
       arrayDespesas.push(novaDespesa)                                               
       
       const listaDeDespesas = document.getElementById("lista-despesa")
       listaDeDespesas.innerHTML = ""
       for(const elementos of arrayDespesas) {               
          listaDeDespesas.innerHTML += "<div>" + "Valor: " + "<p>" + elementos.valores + "</p>" + "</div>";
          listaDeDespesas.innerHTML += "<div>" + "Tipo de Despesa: " + "<p>" + elementos.tipoDesp + "</p>" + "</div>";
          listaDeDespesas.innerHTML += "<div>" + "Descrição: " + "<p>" + elementos.descDesp + "</p>" + "</div>";
       }
       document.getElementById("valorGasto").value = "";                           
       document.getElementById("tipoDespesa").value = "Casa";
       document.getElementById("descricao").value = "";
 
       somarValoresDespesas()
    }
 }
 

 function aoClicarBotaoFiltro() {
    if(document.getElementById("tipoDespesaDetalhes").value == "" || document.getElementById("minimo") == "" || document.getElementById("maximo").value == "") {
       alert("Por favor, preencha todos os campos!");                 
    } else {
       const resultadosFiltro = document.getElementById("resultados-filtragem")
       resultadosFiltro.innerHTML = ""
       const tipoDespesa = document.getElementById("tipoDespesaDetalhes").value;
      
       const valorMinimo = Number(document.getElementById("minimo").value)
      
       const valorMaximo = Number(document.getElementById("maximo").value)   
         
       const despesasFiltradas = arrayDespesas.filter( despesa => {                  
          return despesa.tipoDesp === tipoDespesa && despesa.valores >= valorMinimo && despesa.valores <= valorMaximo
       })
       for(const elementos of despesasFiltradas) {                      
          resultadosFiltro.innerHTML += "<div>" + "Valor: " + "<p>" + elementos.valores + "</p>" + "</div>";
          resultadosFiltro.innerHTML += "<div>" + "Tipo de Despesa: " + "<p>" + elementos.tipoDesp + "</p>" + "</div>";
          resultadosFiltro.innerHTML += "<div>" + "Descrição: " + "<p>" + elementos.descDesp + "</p>" + "</div>";
       }
       document.getElementById("tipoDespesa").value = "Casa";           
       document.getElementById("minimo").value = "";
       document.getElementById("maximo").value = "";
    }
 }
 
 function aoClicarBotãoLimparFiltros(){
    const resultadosFiltro = document.getElementById('resultados-filtragem')
    resultadosFiltro.innerHTML = ""                  
    alert("Os resultados foram limpos!")               
 }
 
 
 function somarValoresDespesas() {
    const insereExtrato = document.getElementById("valorTotalExtrato")
    let valorTotalExtrato = arrayDespesas.reduce((valorTotal, quantValor) =>
       parseInt(valorTotal) + parseInt(quantValor.valores), 0)         
 
    insereExtrato.innerHTML = "Valor Total: " + "<p>" + " R$ " + valorTotalExtrato + "</p>";          
 }