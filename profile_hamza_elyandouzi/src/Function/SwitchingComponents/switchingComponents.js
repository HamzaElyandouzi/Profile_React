import React from 'react'
import Description from "../../Components/Description/Description";
import Image from "../../Components/Images/Images";
import NavBar from "../../Components/NavBar/NavBar";
import Contact from "../../Components/Contact/Contact";

//this component uses everything explained in the other Component classes
//from the state to props.
class SwitchingComponents extends React.Component {
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

    render() {
        if (this.state.display === true) {
            return (
                <div>
                    <Description/>
                    <Image/>
                    {/*we call the props reference name found in the Navbar component and connect them to the above functions*/}
                    {/*which wil change the display value onClick. this is the power of props.*/}
                    {/*created in a parent class and used in child class to allow the state to change from true to false.*/}
                    {/*and changing the render based on that.*/}
                    <NavBar contact={this.handleContact} home={this.handleHome}/>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="imageDiv">
                        <Image/>
                    </div>
                    <Contact/>
                    <NavBar contact={this.handleContact} home={this.handleHome}/>
                </div>
            )
        }
    }
}

export default SwitchingComponents