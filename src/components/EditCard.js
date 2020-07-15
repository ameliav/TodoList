import React from 'react';
import { connect } from 'react-redux';
import { editCard } from '../actions';

class EditCard extends React.Component {

    render(){
        return (
            <div className="column" key={this.props.todo.id}>
                <div className="ui fluid card">
                    <div className="content">
                        <form className="ui mini form">
                            <div className="field">
                                <input type="text" id="tid" defaultValue={this.props.todo.task} />
                            </div>
                            <div className="field">
                                <input type="text" id="did" defaultValue={this.props.todo.date} />
                            </div>
                            <div className="field">
                                <input type="text" id="pid" defaultValue={this.props.todo.person} />
                            </div>
                        </form>
                    </div>
                </div >
                <div className="extra content">
                    <button className="ui small right floated button" onClick={() => this.props.editCard(document.getElementById("tid").value, document.getElementById("did").value, document.getElementById("pid").value)} >
                        Save
                </button>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {  //function to take the state from your reducer and pass it into props to your current component
    return { state };                
};
export default connect(mapStateToProps, {editCard})(EditCard); 