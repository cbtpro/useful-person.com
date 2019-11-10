const tasks = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(task => (task.id === action.id) ? { ...task, completed: !task.completed } : task);
        case 'CHANGE_CURRENT_TASK':
            return [
                ...state
            ];
        default:
            return state;
    }
}

export default tasks;