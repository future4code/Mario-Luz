import { anoBissexto } from "./ex1";

describe("Ano bissexto", () => {
      it("Testa se a função retorna false se 2004 é múltiplo de 400", () => {
        let ano = 2008;
        let result = anoBissexto();
        expect(result).toBe(false); }
      )
      it("Testa se a função consegue imprimir true se um ano for multiplo de 4 mas não de 100", () => {
        let ano = 2008;
        let result = anoBissexto(ano);

        expect(result).toBe(true); }
      )
    }
)


