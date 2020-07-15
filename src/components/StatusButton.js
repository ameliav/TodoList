import React from 'react';
import { connect } from 'react-redux';
import { changeStatus } from '../actions';

class StatusButton extends React.Component {
    
    checkstatus(status) {
        if (status === 'completed') {
            return ["ui tiny left floated yellow button", "Restart"];
        }
        else {
            return ["ui tiny right floated green button", "Complete"];
        }
    }
    render() {
        const { status, id } = this.props.todo;
        return (
            <div className="extra content">                
                <button className={this.checkstatus(status)[0]} onClick={() => this.props.changeStatus(id, status)}>
                    {this.checkstatus(status)[1]}                             
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;             
};

export default connect(mapStateToProps, { changeStatus })(StatusButton); 

/*
onClick is an HTML keyword (event trigger) which looks for a function (event handler).
This function will be executed when the trigger happens.
This function is also called a callback function because it will only execute when called.
An arrow function can be used to bind "this" property. 
If you don't use an arrow function or .bind(this) then the function will execute only once when the page loads.
(It won't be a callback function)
*/