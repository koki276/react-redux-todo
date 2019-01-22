const initialState = {
    todos: []
  }  


const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
            };
        default:
            return state;
    }
}


const todos = (state = initialState, action) => {
    if (state === undefined) {state = initialState}
    switch (action.type){
        case 'ADD_TODO':
            // stateに新しくtodoを追加する
            // 「...」でstate配列を開いて、そこにtodoを加えてものを[]で囲み新たな配列を返している
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    todo(undefined, action)
                ]
            })
        default:
            return state
    }
}

export default todos;