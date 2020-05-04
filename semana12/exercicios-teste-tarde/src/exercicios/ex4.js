export function removeItensDuplicados(array) {
    const arraySemDuplicados = array.filter((item, index, self) => {
      return self.indexOf(item) === index;
    });
  
    // const arraySemDuplicados = [...new Set(array)] // maneira alternativa
  
    return arraySemDuplicados;
  }
  