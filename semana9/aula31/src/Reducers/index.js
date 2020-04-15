import {combineReducers} from 'redux'
import { todos } from './todos'



export const rootReducer = combineReducers({
todos: todos
})
// aqui simplesmente estamos juntando todos os reducers para ser exportados não é aqui que precisamos fazer o switch case
//ssó precisa export o rootreducer que nao precisa usar esse nome mas é bom
// e criar o combineReducers
// quando começa acredito que nao tera nada aqui então para começar preciso criar outra pagina no reducer para começaçr a fazer os switch cases
// fez isso vai la na nova pagina de reducer que voce criou