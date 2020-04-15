

 export function addTask (text){
  return{
    type: 'ADD_TASK',
    payload:{
      text: text
    }
  }
}

// ação de toggle tarefa
export function toggleTask (id){
  return{
    type: 'SHOW_TAKS',
    payload:{
      id: id
    }
  }
}

// Apagar uma tarefa
export function deleteTask (id) {
  return{
    type: 'DELETE_TASK',
    payload:{
      id:id
    }
  }
}

// marcar como todas completas 
export function completeAllTasks () {
  return{
    type: 'COMPLETE_ALL_TASKS'
  }
}

  // DELETAR TODAS AS COMPLETAS
  export function deleteAllComplete(){
    return{
      type: 'DELETE_ALL_COMPLETE'
      }
    }

  //filtrar as tarefas

  export function setFilter (filter) {
    return{
      type: 'SET_FILTER',
      payload: {
        filter:filter
      }
    }
  }


  