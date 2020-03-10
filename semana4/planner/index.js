let segunda = document.querySelector("#section-segunda>ul")
let terca = document.querySelector("#section-terca>ul")
let quarta = document.querySelector("#section-quarta>ul")
let quinta = document.querySelector("#section-quinta>ul")
let sexta = document.querySelector("#section-sexta>ul")
let sabado = document.querySelector("#section-sabado>ul")
let domingo = document.querySelector("#section-domingo>ul")

const criaTarefa = () => {
    const input = document.querySelector("input")
    const novoItem = input.value    
    const select = document.querySelector("select").value

    if (novoItem === "") {
        alert("Digite uma tarefa ")
    } else {
         const listaSegunda = document.getElementById("section-segunda")
         const listaTerca = document.getElementById("section-terca")
         const listaQuarta = document.getElementById("section-quarta")
         const listaQuinta = document.getElementById("section-quinta")
         const listaSexta = document.getElementById("section-sexta")
         const listaSabado = document.getElementById("section-sabado")
         const listaDomingo = document.getElementById("section-domingo")

  
        switch (select) {
            case "segunda":
                segunda.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "terca":
                terca.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "quarta":
                quarta.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "quinta":
                quinta.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "sexta":
                sexta.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "sabado":
                sabado.innerHTML += "<li>" + novoItem + "</li>"
                break;
            case "domingo":
                domingo.innerHTML += "<li>" + novoItem + "</li>"
                break;
        }

        input.value = ""

    }
}

const apagar = () => {
    segunda.innerHTML = ""
    terca.innerHTML = ""
    quarta.innerHTML = ""
    quinta.innerHTML = ""
    sexta.innerHTML = ""
    sabado.innerHTML = ""
    domingo.innerHTML = ""    
}


