import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { addTask } from '../../Actions/ActionsCreators'
import Button from '@material-ui/core/Button'

const InputWrapper = styled.div`

`


class Inputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
    }
  }

  handleChange = (event) => {
    const newInput = event.target.value
    this.setState({ inputText: newInput })
  }
onclickButton = (event) => {
  this.props.addTask(this.state.inputText)
}

  render() {
    return (
      <InputWrapper>
        <TextField
          id="outlined-name"
          label="O que tem que ser feito?"
          value={this.state.inputText}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <Button variant="outlined" onClick={this.onclickButton} >
         Adicionar Tarefa
        </Button>
      </InputWrapper>
      
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    addTask: text => dispatch (addTask(text))
    }
  }



export default connect(null, mapDispatchToProps)(Inputs)
/* 
Beleza chegando aqui vai olhamos aqui embaixo que tem o mapStateToProps e o mapDispatchToProps então ja vai começando a conectar as coisas aqui
ja viu ne? sem mapStateToProps então vamos tratar do mapDispatchToProps, ou seja ele vai disparar a ação de adicionar a tarefa... mas de que jeito?
olha o addtask que esta sendo retornado.... tem um parametro que é text ( ah pronto.... cade esse text?) Lá nos todosList, lá no todos.js do reducer
e vamos usar o addTask no click do botão
*/