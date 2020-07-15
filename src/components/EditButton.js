import React from 'react';
import { connect } from 'react-redux';
//import { editCard } from '../actions';
import swal from 'sweetalert2';

class EditButton extends React.Component {

    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
    }
    sayHello(todo) {
        swal.fire({
            title: "Edit '" + todo.task + "'",
            text: todo.task
        })    
    }
    
    render() {
        return (
            <div className="ui mini icon buttons right floated">
                <button className="ui basic icon right floated button" onClick={ () => this.sayHello(this.props.todo) }>
                    <i className="edit icon" />
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(EditButton); 