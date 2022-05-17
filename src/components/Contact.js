import React from 'react';
import staticContactConfig from '../config/ContactConfig.js';
import '../css/components/contact.css';

function Contact(props){
    return (
        <div style={{paddingLeft:'5%', paddingRight:'5%'}}>
            <h2 className="h2text"> 
                Contact Us
            </h2>
            <hr/>
            <div className="maincontact">
            <p className="text">
                If you have any suggestion and feedback you can contact us using these details.<br/>
                Email : {staticContactConfig.email}<br/>
                Phone : {staticContactConfig.phoneNumber}
            </p>
            </div>
        </div>
    );
}

export default Contact;