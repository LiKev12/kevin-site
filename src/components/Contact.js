import React, { Component } from 'react';
import Resume from '../content/Kevin_K_Li.pdf';

class Contact extends Component{
    render() {
        return (
            <div id="contact" className="contact">
                <h1>Contact</h1>
                <p>Find me on LinkedIn and GitHub, or shoot me an 
                <a href="mailto:kevin.k.li@wustl.edu" target="_blank" rel="noopener noreferrer"> email</a>!  
                In the meantime, check out my 
                <a href={Resume} target = "_blank" rel="noopener noreferrer"> resume</a>, or ping me 
                for a friendly game of 
                <a href="https://lichess.org/@/Kevdoge24" target = "_blank" rel="noopener noreferrer"> chess</a>!</p>
            </div>
        )
    }
}

export default Contact;