import __ from 'lodash';

let todoList = [
    { id: 1, task: 'Do dishes', date: '8/5/20 10pm', person: 'AV', status: 'completed'},
    { id: 2, task: 'Vacuum bathrooms', date: '8/7/20 8pm', person: 'KB', status: 'not_started'},
    { id: 3, task: 'Do laundry', date: '8/8/20 7pm', person: 'AV', status: 'not_started'},
    { id: 4, task: 'Give the dog a bath', date: '8/9/20 3pm', person: 'KB', status: 'not_started'},
    { id: 5, task: 'Vacuum bedrooms', date: '8/10/20 5pm', person: 'AV', status: 'not_started'},
    { id: 6, task: 'Vacuum living room', date: '8/9/20 3pm', person: 'AV', status: 'not_started'},
    { id: 7, task: 'Grocery shopping', date: '8/10/20 5pm', person: 'KB', status: 'not_started'}
];

//list of todos
export default (state = null, action) => {
    if (action.type === 'STATUS_CHANGE') {
        todoList = todoList.map(
            (todo) => {
                if (todo.id === action.payload.id) {
                    if (action.payload.status === 'completed') {
                        todo.status = 'not_started';
                    }
                    else {todo.status = 'completed'; }
                } return todo;
            }); 
            return todoList;
    }
    else if (action.type === 'ADD_CARD') {
        todoList = [...todoList,
            {
                id: Math.floor(Math.random() * 99999999), task: action.payload.task, date: action.payload.date,
            person: action.payload.person, status: 'not_started'}
        ]
        return todoList;
    }
    else if (action.type === 'DELETE_CARD') {
        todoList = __.filter(todoList, function (o) { return o.id !== action.payload.id; });
        //todoList = todoList.filter(tid => tid !== action.payload.id)
    }
    else if (action.type === 'EDIT_CARD') {
        todoList = todoList.map(
            (todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, task: action.payload.task, date: action.payload.date, person: action.payload.person }
                }
                else {
                    return todo;
                }
            })
    }
    return todoList;
};