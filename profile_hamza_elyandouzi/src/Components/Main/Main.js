import React from "react";
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

    render(){
        if (this.state.display === true){
            return (
                <div className="mainWrapper" style={{backgroundImage: `url(${MainPage})` }}>
                    <div className="contain">
                        <Header/>
                        <Description/>
                        <Image/>
                        <NavBar contact={this.handleContact} home={this.handleHome}/>
                        <Footer click={this.handleContact}/>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="mainWrapper" style={{backgroundImage: `url(${MainPage})`}}>
                    <div className="contain">
                        <Header/>
                        <div className="imageDiv">
                            <Image/>
                        </div>
                        <NavBar contact={this.handleContact} home={this.handleHome}/>
                        <Contact/>
                        <Footer click={this.handleContact}/>
                    </div>
                </div>
            );
        }
    }
}

export default Main;