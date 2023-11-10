import React, {Component} from 'react';
import "./Contact.css";
import BGPhoto from '../../assets/contact.jpg';
 
class Contact extends Component {
 
    render() {
        return (
            <div>
                <div className="centered-content contact-text text-standout">
                    <h1>{"Want more info?"}</h1>
                    <p>If you would like to contact me, I can be reached at <a href="mailto:derekgesin@gmail.com">derekgesin@gmail.com</a>.</p> 
                    <p>Thanks for taking the time to check out my work. I hope to hear from you soon!</p>
                </div>
                <div className="background-overlay fixed"></div>
                <img src={BGPhoto} className="background-image fixed" alt="Large satallite in field" />
            </div>
        )
    }
}
 
export default Contact;