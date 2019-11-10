let lang = 'zh';
export const changeLanguage = lang => { type: 'CHANGE_LANGUAGE', lang }

let nextTaskId = 0;
export const addTask = text => {
    return {
        type: 'ADD_TASK',
        id: nextTaskId++,
        text
    };
};

export const changeCurrTask = id => {
    return {
        type: 'CHANGE_CURRENT_TASK',
        id
    };
};

export const toggleTask = id => {
    return {
        type: 'TOGGLE_TASK',
        id
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};
