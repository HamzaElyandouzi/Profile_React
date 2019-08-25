import React from 'react';
import './App.css';
import IntroPage from "./Components/Intro/Intro";
/*
* the App Component is often used as a gate way to other
* Components who contain more complex code
*/

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
