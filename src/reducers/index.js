import {combineReducers} from 'redux';
import todosReducer from './todosReducer';
import editModeReducer from './editModeReducer';

export default combineReducers(
  {
  todos: todosReducer,
  editMode: editModeReducer
  }
)

/*map is a function used for arrays
map takes in a function as a parameter, map(func())
that function will execute for each element in the array, map(func(element))
and returns the executed element to map 
which will push that element into a new array, [newarray]
  */