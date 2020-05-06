export function anoBissexto(ano) {
    let anoEBissexto = false;
  
    if (ano % 4 === 0) {
      if (ano % 100 === 0 && ano % 400 !== 0) {
        anoEBissexto = false;
      } else {
        anoEBissexto = true;
      }
    }
  
    return anoEBissexto;
  }
  