import React from "react";
import './Contact.css';


//the basic layout of a form model in html
class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <form action="#" className="form">
                    <h3>Contact Form</h3>
                    <label htmlFor="Name" >First Name:</label>
                    <input type="text" id="Name" placeholder="First Name" required/>
                    <br/>
                    <label htmlFor="Name">Last Name:</label>
                    <input type="text" id="Name" placeholder="Last Name" required/>
                    <br/>
                    <label htmlFor="email">E-Mail:</label>
                    <input type="email" name="email" required placeholder="ExampleMail@gmail.com"/>
                    <br/>
                    <label htmlFor="Gender" className="gender"><h4>Gender</h4></label>
                    <input type="radio" name="gender" id="Gender" value="Male"/> Male
                    <input type="radio" name="gender" id="Gender" value="Female"/>Female
                    <input type="radio" name="gender" id="Gender" value="Other"/>Other
                    <br/>
                    <label htmlFor="ContactForm"><h4>Message</h4></label>
                    <textarea name="ContactForm" id="ContactForm" cols={30} rows={10}
                    placeholder="enter your message here">
                    </textarea>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Contact;