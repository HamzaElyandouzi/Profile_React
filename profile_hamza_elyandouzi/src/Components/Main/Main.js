import React from "react";
import './Main.css'
import MainPage from '../../Resources/mainBack.jpg';
import Description from '../Description/Description';
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Contact from "../Contact/Contact";
import Image from "../Images/Images";
import Footer from "../Footer/Footer";

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };

        this.handleContact = this.handleContact.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }

    handleContact() {
        this.setState({display: false});
    };

    handleHome() {
        this.setState({display: true});
    };

    changes(){
        if (this.state.display === true){
            return (
                <div>
                    <Description/>
                    <Image/>
                    <NavBar contact={this.handleContact} home={this.handleHome}/>
                </div>
            )
        }else {
            return (
                <div>
                    <div className="imageDiv">
                        <Image/>
                    </div>
                    <NavBar contact={this.handleContact} home={this.handleHome} CV={this.handleCV}/>
                    <Contact/>
                </div>
            )
        }
    }

    render(){
        return (
            <div className="mainWrapper" style={{backgroundImage: `url(${MainPage})` }}>
                <div className="contain">
                    <Header/>
                    {this.changes()}
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Main;