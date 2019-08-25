import React from "react";
import MainPage from '../../Resources/mainBack.jpg';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SwitchingComponents from "../../Function/SwitchingComponents/switchingComponents";
import './Main.css'

//the following Component is pretty simple
//it just renders the imported Components to the second page
class Main extends React.Component{
    render(){
        return (
            //to use inline styles you have to use double curly brackets and then either the link or the reference to in this case the background
            // in with '' so React can recognize it as css code
            <div className="mainWrapper" style={{backgroundImage: `url(${MainPage})` }}>
                {/*if need to use javascript or a component in a string place theme in backtick` ` followed by a dollar sign and curly brakets
                like so `url(${Javascript code or reference's to imports})` this will count as a string and is used if you need to use a
                reference in yours code as a string */}
                <div className="contain">
                    <Header/>
                    <SwitchingComponents />
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Main;