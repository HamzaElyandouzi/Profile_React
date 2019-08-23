import React from "react";
import "./NavBar.css"
import Contact from "../Contact/Contact";

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="navBar">
            <ul>
                <li>
                    <a className="tags1" href="#" onClick={this.props.contact}>Contact</a>
                </li>
                <li>
                    <a className="tags2" href="#" onClick={this.props.home}>Profile</a>
                </li>
            </ul>
        </div>
        )
    }
}

export default NavBar;