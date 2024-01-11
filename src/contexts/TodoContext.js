import React, {useContext, createContext} from 'react'

export const  ToDoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    updateTodoStatus: (id) =>{}
});

export const TodoProvider = ToDoContext.Provider 

export const useTodo = () => {
    return useContext(ToDoContext)
}
