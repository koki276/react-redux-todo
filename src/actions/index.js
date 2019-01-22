let nextToDoId = 0
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextToDoId++,
        text
    }
}