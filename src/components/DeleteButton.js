import React from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../actions';
import swal from 'sweetalert2';

class DeleteButton extends React.Component {

    checkiconstatus(todo) {
        if (todo.status === 'completed') {
            return "right floated green circle icon";
        }
        else {
            return "right floated red circle icon";
        }
    }

    handleDelete = (id) => {
        swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this task.',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                /*swal.fire('Deleted!','Your task has been deleted.','success')*/
                this.props.deleteCard(id);
            }})
    }
    handleStatus(status) {
        if (status === 'not_started') {
            swal.fire({
                text: 'This task is ongoing.'              
            })
        }
        else if (status === 'completed') {
            swal.fire({
                text: 'This task has been completed!'
            })
        }
    }

    render() { 
        return (
            <div className= "content">
                <div className="ui mini icon buttons right floated">            
                    <button className="ui basic icon right floated button">
                        <i className={this.checkiconstatus(this.props.todo)} onClick={() => this.handleStatus(this.props.todo.status)}></i>
                    </button>
                    <button className="ui basic icon right floated button" onClick={() => this.handleDelete(this.props.todo.id)}>
                        <i className="close icon" />
                    </button>
                </div>     
                <div className="header">
                    <h4>{this.props.todo.task}</h4>
                </div>             
            </div>
        )
    }
}

const mapStateToProps = (state) => { //binds the deleteCard into the props
    return state;
};
//We are able to use deleteCard because connect adds all the state to the component props
export default connect(mapStateToProps, { deleteCard })(DeleteButton); 