import React from "react";
import "./NavBar.css"
import CV from '../../Resources/CV.docx'

class NavBar extends React.Component{
    render(){
        return(
        <div className="navBar">
            <ul>
                <li> <a className="tags1" href="//" onClick={this.props.contact}>Contact</a>
                </li>
                <li> <a className="tags2" href={CV} download><img src="https://img.icons8.com/android/24/000000/download.png"
                                                                  alt="Click to download my CV" className="image"/> CV</a>
                </li>
                <li><a className="tags3" href="//" onClick={this.props.home}>Profile</a>
                </li>
            </ul>
        </div>
        )
    }
}

export default NavBar;