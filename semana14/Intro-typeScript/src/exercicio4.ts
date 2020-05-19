const ano:number = 1533
let sigla:string = ""
sigla = sigla.toUpperCase()

console.log(retornaIdade(ano,sigla))

function retornaIdade(ano:number,sigla:string):string {
    if((sigla==="AC")&&(ano<=100000)&&(ano>4000)){
        return "Pré-história"
    }
    else if((sigla==="AC")&&(ano<=4000)){
        return "Idade antiga"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=476)){
        return "Idade antiga"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=476)){
        return "Idade antiga"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=1453)){
        return "Idade média"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=1789)){
        return "Idade moderna"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=2020)){
        return "Idade Contemporânea"
    }
    else{
        return "Erro"
    }
}
