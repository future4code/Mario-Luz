import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import { createTaskAction, getTasks } from "../../actions/planner";

export const AppWrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction:column;
  background-color: #F4F4ED;
`

export const InputTask = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:15px;
`
export const PlannerView = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 15px;
  
  
`
export const DailyCard= styled.div`
border: solid 4px black;
border-radius: 8px;
padding: 10px;
background-color:#00F0B5;


`
export const Button = styled.button`

`
export class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      day:"Segunda"
    };
  }

  componentDidMount(){
    if(this.props.getTasks() && this.props.getTasks()){
      this.props.getTasks()
    }
  }

  onChangeTask = event => {
    this.setState({  [event.target.name]: event.target.value});
  };

  onCreateTask = () => {
    const { day, text} = this.state
    this.props.createTask(text, day)
  }
  
  render() {
    return <AppWrapper>
      <InputTask>
        <div>
          <h1>PLANNER</h1>
          <input type="text"
           value={this.state.text}
           onChange={this.onChangeTask}
           name="text"></input>
          <select name="day" onChange={this.onChangeTask} >
            <option value="Segunda">Segunda</option>
            <option value="Terca">Terça</option>
            <option value="Quarta">Quarta</option>
            <option value="Quinta">Quinta</option>
            <option value="Sexta">Sexta</option>
            <option value="Sabado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
          <Button onClick={this.onCreateTask}>Agendar</Button>
        </div>
      </InputTask>
      <PlannerView>
        <DailyCard><h3>Segunda</h3>
        <ul>
          {this.props.tasks && this.props.tasks.filter((task) => {
            return task.day ==="Segunda"}).map(task => (
            <li key={task.id}>{task.text}</li>))}
        </ul>
        </DailyCard>
        <DailyCard><h3>Terça</h3>
        <ul>
          {this.props.tasks && this.props.tasks.filter((task) => {
            return task.day ==="Terca"}).map(task => (
            <li key={task.id}>{task.text}</li>))}
        </ul>
        </DailyCard>
        <DailyCard><h3>Quarta</h3>
        <ul>
          {this.props.tasks && this.props.tasks.filter((task) => {
            return task.day ==="Quarta"}).map(task => (
            <li key={task.id}>{task.text}</li>))}
        </ul>
        </DailyCard>
        <DailyCard><h3>Quinta</h3>
        <ul>
          {this.props.tasks && this.props.tasks.filter((task) => {
            return task.day ==="Quinta"}).map(task => (
            <li key={task.id}>{task.text}</li>))}
        </ul>
        </DailyCard>
        <DailyCard><h3>Sexta</h3>
        <ul>
          {this.props.tasks && this.props.tasks.filter((task) => {
            return task.day ==="Sexta"}).map(task => (
            <li key={task.id}>{task.text}</li>))}
        </ul>
        </DailyCard>
        <DailyCard><h3>Sabado</h3>
        <ul>
          {this.props.tasks && this.props.tasks.filter((task) => {
            return task.day ==="Sabado"}).map(task => (
            <li key={task.id}>{task.text}</li>))}
        </ul>
        </DailyCard>
        <DailyCard><h3>Domingo</h3>
        <ul>
          {this.props.tasks && this.props.tasks.filter((task) => {
            return task.day ==="Domingo"}).map(task => (
            <li key={task.id}>{task.text}</li>))}
        </ul>
        </DailyCard>
      </PlannerView>
    </AppWrapper>;
  }
}

const mapStateToProps = state => ({
  tasks: state.planner.tasks
});

const mapDispatchToProps = dispatch => ({
  createTask:(text, day) => dispatch(createTaskAction(text, day)),
  getTasks: () => dispatch(getTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
