import React from 'react';
import { connect } from 'react-redux';
import StatusButton from './StatusButton';
import DeleteButton from './DeleteButton';
import { editCard } from '../actions';

class CardContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editMode: false};
    }

    cardRender(todo) {
        return (
            <div className="column" key={todo.id} >
                <div className="ui fluid grey card"><div className="content">
                    <DeleteButton todo={todo} />
                    <div className="ui sub header">By {todo.date}</div>
                    <div className="ui small feed"><div className="event">
                        <div className="content">
                            <div className="description"> {todo.person}'s turn </div>
                            <div className="ui mini icon buttons right floated">
                                <button className="ui basic icon right floated button" onClick={() => this.setState({ editMode: true })}>
                                    <i className="edit icon" />
                                </button>
                            </div>
                        </div>
                    </div></div>
                </div></div>
                <StatusButton todo={todo} />
            </div>
        )
    }
    editCardRender(todo) {
        return (
            <div className="column" key={todo.id}>
                <div className="ui fluid grey card">
                    <div className="content">
                        <form className="ui mini form">
                            <div className="field">
                                <input type="text" id="tid" defaultValue={todo.task} />
                            </div>
                            <div className="field">
                                <input type="text" id="did" defaultValue={todo.date} />
                            </div>
                            <div className="field">
                                <input type="text" id="pid" defaultValue={todo.person} />
                            </div>
                        </form>
                    </div>
                </div >
                <div className="extra content">
                    <button className="ui small blue right floated button" onClick={this.executeSave} >
                        Save
                    </button>
                    <button className="ui small left floated button" onClick={this.executeCancel}>
                        Cancel
                    </button>
                </div>
            </div >
        )
    }
    executeSave = () => {
        this.setState({ editMode: false });
        this.props.editCard(this.props.todo.id, document.getElementById("tid").value, document.getElementById("did").value, document.getElementById("pid").value);
    }
    executeCancel = () => {
        this.setState({editMode: false});
    }

    render() {
        //return !this.state.editMode ? this.cardRender(this.props.todo) : this.editCardRender(this.props.todo);
        if (this.state.editMode) {
            return this.editCardRender(this.props.todo);
        }
        else {
            return this.cardRender(this.props.todo);
        }
    }
}

const mapStateToProps = (state) => {          //function that takes the state from your reducer and pass it into props for your current component
    return { todos: state.todos};              //putting your state of songs into a prop of SongList (in this.props)
};
export default connect(mapStateToProps, {editCard})(CardContent); 