export const changeStatus = (id, status) => {
  console.log(id, status);
  return {
    type: 'STATUS_CHANGE',
    payload: {id: id, status: status}
  }
}

export const addCard = (task, date, person) => {
  return {
    type: 'ADD_CARD',
    payload: { task: task, date: date, person: person}
  }
}

export const deleteCard = (id) => {
  return {
    type: 'DELETE_CARD',
    payload: {id: id}
  }
}

export const editCard = (id, task, date, person) => {
  return {
    type: 'EDIT_CARD',
    payload: {id: id, task: task, date: date, person: person}
  }
}