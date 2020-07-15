import React from 'react';
import { connect } from 'react-redux';
import {addCard} from '../actions';
import swal from 'sweetalert2';

class AddCard extends React.Component {

    handleClick = () => {
        let tid = document.getElementById("tid"); //references the whole html element
        let did = document.getElementById("did");
        let pid = document.getElementById("pid");
        if (tid.value === '' || (did.value === '' || pid.value === '')) {
            swal.fire('Error', 'Please fill out all sections.');
        }
        else {
            this.props.addCard(tid.value, did.value, pid.value); //gets the id value from the element as a string
            tid.value = '';
            did.value = '';
            pid.value = '';
        }
    }

    render() {
        return (
        <div className="column">
            <div className="ui fluid grey card">
                <div className="content">                                        
                    <form className="ui mini form">
                        <div className="field">
                            <input type="text" id="tid" placeholder="Task Description"/>
                        </div>
                        <div className="field">
                            <input type="text" id="did" placeholder="Due date" />
                        </div>
                        <div className="field">
                            <input type="text" id="pid" placeholder="Taskholder" />
                        </div>
                    </form>                     
                </div>
            </div >
            <div className="extra content">
                <button className="ui small right floated button" onClick={this.handleClick} >
                    Add New Task
                </button>
            </div>
        </div >
        )
    }
}

const mapStateToProps = (state) => {  //binds the addCard into the props
    return state;
};
//We are able to use addCard because connect adds all the state to the component props
export default connect(mapStateToProps, {addCard})(AddCard); 
