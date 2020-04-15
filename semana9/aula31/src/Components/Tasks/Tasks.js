import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {toggleTask, deleteTask} from '../../Actions/ActionsCreators'


class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }
  handleChange = (event) => {
    const newTask = event.target.value
    this.setState({ task: newTask })
  }

  render() {
    console.log(this.props.taskList)
    return (
      <div>
        <ul>
          {this.props.taskList.filter((task) => {
            const filter = this.props.filter
            if (filter === 'pendentes') {
              return task.complete === false
            }
            if (filter === 'completas') {
              return task.complete === true
            }
            return true
          }).map(task => (<li key={task.id}
            onClick={() => this.props.toggleTask(task.id)}
          >
            {task.text} - Completa: {String(task.complete)}
            <button onClick={() => this.props.deleteTask}>Deletar</button>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    taskList: state.todos.todosList,
    filter: state.todos.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTask: (id) => dispatch(toggleTask(id)),
    deleteTask: (id) => dispatch(deleteTask(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)

/*Chegando aqui, primeira coisa faz um componente react normal de classe todo bonitão e completo  e foca agora na CONEXÃO
Para conectar as coisas é necessário que  usemos a palavras connect  e com ela passar dois parametros.... onde isso? Aqui embaixo mesmo 
no export default task! Ai ja esta feito mais é necessário que criemos as variaveis 
mapStateToProps(Primeiro parametro sempre forever) e mapDispatchToProps(segundo parametro sempre mas nao é tão necessário) ! 
eita ja complicou, o que que é isso? 
Vamos lá o mapStateToProps é o que vamos fazer para transformar os estados em props para sempre serem utilizados 
ta vendo a função mapStateToProps? ele recebe como parametro o que? o estado certo... então ele deve retornar sempre um objeto, 
e dentro desse objeto teremos o taskList ! Oxi da onde veio esse tasklist? simplemente criamos ele para pode colocar como props o nosso todoList
que está la no reducers todos quee esta no initial esta lembra? o que esta acontecendo aqui é guardando tudo... o estado, 
o todos(que é a constante onde esta guardando todos os switch cases  eeee o todosList que é o nosso objeto array de objetos!! 
aaah ta manjando ne? mas pera e esse filter ai? calma... ele nao ta dentro do todosList lembra? então ele vai ter que ser montado 
deeeepois no mapStateToProps também para ser passado como props e ser utilizado igual o taskList...
Meu mas agora vem a loucura depois de tudo conectado ! precisamos fazer a parte da logica que é necessária para pegar o texto e criar a tarefa e tal
Essa pagina aqui ja percebi que não é a primeira pagina que eu deveria ter colocado essas coisas porque não é o input que esta aqui, aqui só tem a 
parte de criar a nova tarefa, meu input ta na pagina do componente input então vamos para lá
Obs: esquece o mapDispatchToProps agora .... ja ja voltamos
*/