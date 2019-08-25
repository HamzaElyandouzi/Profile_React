import React from "react";
import "./NavBar.css"
import CV from '../../Resources/CV.docx'
//the following code uses the props from mechanism from react.
class NavBar extends React.Component{
    render(){
        return(
        <div className="navBar">
            <ul>
                {/*by using this.props followed by a reference name which you can then call on when you import it in a different*/}
                {/*Component. binding whatever you connect to that reference to this reference. which is placed in a onClick method.*/}
                {/*which will then work when you click on it.*/}

                {/*if you wnt to see how it works open up switchComponents to see.*/}

                {/*props are used to connect functions or place value on them like strings that you can then use to render like a string */}
                {/*you just typed to the page and more. props are really useful in react and are a big part of it.*/}
                <li> <a className="tags1" href="//" onClick={this.props.contact}>Contact</a>
                </li>
                {/*by placing the reference to my cv in the a tag download. when clicked it will automatically download it.*/}
                <li> <a className="tags2" href={CV} download><img src="https://img.icons8.com/android/24/000000/download.png"
                                                                  alt="Click to download my CV" className="image"/> CV</a>
                </li>
                <li><a className="tags3" href="//" onClick={this.props.home}>Profile</a>
                </li>
            </ul>
        </div>
        )
    }
}

export default NavBar;