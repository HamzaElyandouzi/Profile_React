import React from "react";
import "./Intro.css";
import Main from "../Main/Main";
/*this is when React starts to get interesting.
*
* below you see the intro Component its also the first page you see when you run the app.
* every class extends to React.Component which allows you to use several handy functions and methods.
* the one i used mostly is props witch is short for Properties which you can use directly or through the state.
* as seen below.
*/
class Intro extends React.Component{
    //the constructor holds the props value and the super will link that props value to
    //the library React witch will allow it to work in the lower code.
    constructor(props) {
        super(props);
        //this is the state and as the name suggest it wil hold a certain state of
        //information. either nothing or anything at all. from string to booleans.
        //you do need to create a reference to that information followed by a : witch the information afterwards.
        //this will allow you to access it.

        this.state = {
            display: true
        };

        //if you create a function that access the state its best that you bind this function in the
        //constructor so it can call itself and access the state.
        //it is not always necessary but that depends on the situation itself.
        this.handleClick = this.handleClick.bind(this)
    }

    //this function changes the display value in the state to false with the setState method in React.
    handleClick() {
        this.setState({display: false});
    };

    render(){
        //the render method renders your Components but also allows you to use javascript inside
        //to determine what to render

        //to access the state you use this.state followed by the reference name to what you want to use and that's it.
        //which allows the following code to work.
        if (this.state.display === true) {
            return (
                // introPage
                <div className="wrapperIntro">
                    <div className="introPage">
                        <h1>Welcome</h1>
                        <p>to my profile</p>
                        {/*the onclick method access the the handleClick function which will change the display value to true*/}
                        <button onClick={this.handleClick} type="button">click here to continue</button>
                    </div>
                </div>
            )
            //and will return the lower code
        }else{
            return(
                <div>
                    <Main/>
                </div>
            )
        }
    }
}
//any components created that you want to use must be exported only then can you import them
//in other code.
export default Intro;