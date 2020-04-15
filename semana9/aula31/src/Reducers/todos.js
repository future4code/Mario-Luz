const initialState = {
  todosList: [{
    id: 1,
    text: 'tarefa 1 do redux',
    complete: false
  },
  {
    i: 2,
    text: 'tarefa 2 do redux',
    complete: true
  }
  ],
  filter: 'todas'
};
// VAI LA NO FINAL DA PAGINA PRIMEIRO ! LEIA ISSO DAQUI DEPOIS OK? 
// Muito bem...
// primeira coisa precisamos criar esse initialestate... porque?
// vai ser o estado inicial do state, lembra do react= this.state={ alguma coisa recebe string vazia? é aqui}
// crie ele como objeto e depois crie um estado com nome do que voce quer, nesse caso o todosList é um array porque é uma lista de tarefas ne
// então dentro do objeto initialState temos o stado(todosList) que é um array com objetos dentros, aqui ele esta chumbado porque no começo é 
// importante saber onde está as coisas criado isso vamos ao todos que é onde estará nosso switch case com todas as actions creators
 

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        complete: false
      }
      return {
        ...state,
        todosList: [newTodo, ...state.todosList]
      };
      
    
    case "TOGGLE_TASK":
      {
        const newTodosList = state.todosList.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              complete: !todo.complete
            }
          }
          return todo
        })
        return {
          ...state,
          todosList: [newTodosList]
        };
      }
    case "DELETE_TASK":
      {
        const newTodosList = state.todosList.filter(todo => {
          if (todo.id === action.payload.id) {
            return false
          }
          return true
        })
        return {
          ...state,
          todosList: [newTodo, ...state.todosList]
        };
      }
    case 'COMPLETE_ALL_TASKS': {
      const newTodosList = state.todosList.map(todo => {
        return {
          ...todo,
          complete: true
        }
      })
      return {
        ...state,
        todosList: [newTodosList]
      };
    }
    case "DELETE_ALL_COMPLETE": {
      const newTodosList = state.todosList.filter(todo => {
        if (todo.complete === true) {
          return false
        }
        return true
      })
      return {
        ...state,
        todosList: [newTodo, ...state.todosList]
      };
    }
    case 'SET_FILTER': {
      return {
        ...state,
        filter: action.payload.filter
      }
    }
    default:
      return state
  }
}

