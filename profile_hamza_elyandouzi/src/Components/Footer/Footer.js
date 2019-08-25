import React from "react";
import "./Footer.css"

//the footer of the page containing my basic information
class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <hr className="hr"/>
                <footer>
                    <p>Made by: Hamza Elyandouzi| </p>
                    <p>Contact information: <a href="//">
                        hamza.elyandouzi@example.com</a>.| </p>
                    <p>PhoneNumber: 0032+ (0)467 704 699| </p>
                    <p>adress: kerkstraat 2 2060 Antwerpen</p>
                </footer>
            </div>
        );
    }
}

export default Footer;