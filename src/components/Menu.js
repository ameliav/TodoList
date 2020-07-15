import React from 'react';
import swal from 'sweetalert2';

class Menu extends React.Component {

    aboutClick() {
        swal.fire(
        {title:'About', 
        html:"An interactive webpage to create, edit, and delete tasks."+
        "<br/><br/>Created by <b>Amelia</b> using React-Redux and packaged in npm."
        })
    }
    contactClick() {
        swal.fire(
        {title:'Contact me', 
        html: 'Please reach me through my main github page.'
        })
    }
    render() {
        return(
            <div className="ui inverted menu">
                <a className="item active" href="../">Home</a>
                <a className="item" onClick={this.aboutClick}>About</a>
                <div className="right menu">
                    <a className="item" onClick={this.contactClick}>Contact</a>
                </div>
            </div>
        )
    }
}
export default Menu;