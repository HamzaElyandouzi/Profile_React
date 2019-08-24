import React from "react";
import Profile from '../../Resources/Profile.png'
import "./Header.css"

class Header extends React.Component{
    render(){
        return (
            <div className="profile" >
                <h1>Hamza Elyandouzi</h1>
                <h2>JAVA BACKEND DEVELOPER</h2>
                <div className="profilePicture">
                    <img src={Profile} alt="profilePicture"/>
                </div>
            </div>
        );
    }
}

export default Header;