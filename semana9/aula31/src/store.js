import {createStore} from 'redux'
import { rootReducer } from './Reducers'

export const store = createStore(rootReducer)

// aqui na store é necessário juntar todos os reducers para ser um ponto em comum para todas as paginas do codigo
// tem que criar a store com o createStore  e importar o rootReducer
// o rootReducer é o que vai ter la no index.js dos reducers que é a combinação de todos os reducers criados
// e aqui estamos expondos eles para o mundo
// fez isso vai la no reducer