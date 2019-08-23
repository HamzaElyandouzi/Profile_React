import React from 'react';
import './App.css';
import IntroPage from "./Components/Intro/Intro";

class App extends React.Component{
    render(){
        return(
            <div className="mainWrapper">
                <IntroPage/>
            </div>
        )
    }
}

export default App;
