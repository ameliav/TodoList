import React from 'react';
import { connect } from 'react-redux';
//import StatusButton from './StatusButton';
//import DeleteButton from './DeleteButton';
//import EditButton from './EditButton';
import CardContent from './CardContent';

class Card extends React.Component {

    renderHelper(todoList) {
        return todoList.map((todo) => {
            return (
                <CardContent todo={todo} key={todo.id}></CardContent>
            )           
        })
    }

    render() {
        return this.renderHelper(this.props.todos);
    }
}

const mapStateToProps = (state) => {          //function that takes the state from your reducer and pass it into props for your current component
    return { todos: state.todos };              //putting your state of songs into a prop of SongList (in this.props)
};
export default connect(mapStateToProps)(Card); 