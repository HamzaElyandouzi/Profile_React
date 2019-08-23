import React from "react";
import "./Intro.css";
import "../Main/Main.css";
import IntroPage from "../../Resources/intro.jpg";
import Main from "../Main/Main";

class Intro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        document.body.style.backgroundImage = `url(${IntroPage})`;
        this.setState({display: false});
    };

    render(){
        if (this.state.display === true) {
            return (
                <div className="wrapperIntro">
                    <div className="introPage">
                        <h1>Welcome</h1>
                        <p>to my profile</p>
                        <button onClick={this.handleClick} type="button">click here to continue</button>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <Main/>
                </div>
            )
        }
    }
}


export default Intro;