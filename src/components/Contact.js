import React, { Component } from 'react';
import Resume from '../content/Kevin_K_Li.pdf';

class Contact extends Component{
    render() {
        return (
            <div id="contact" className="contact">
                <h1>Contact</h1>
                <p>Find me on 
                <a href="https://www.linkedin.com/in/kevin-li-aa9397103/" target="_blank" rel="noopener noreferrer" className="normalLink"><b> LinkedIn </b></a>  
                and 
                <a href="https://github.com/LiKev12" target="_blank" rel="noopener noreferrer" className="normalLink"><b> GitHub</b></a>
                , or shoot me an 
                <a href="mailto:kevin.k.li@wustl.edu" target="_blank" rel="noopener noreferrer" className="normalLink"><b> email</b></a>!  
                In the meantime, check out my 
                <a href={Resume} target = "_blank" rel="noopener noreferrer" className="normalLink"><b> resume</b></a>, or ping me 
                for a friendly game of 
                <a href="https://lichess.org/@/Kevdoge24" target = "_blank" rel="noopener noreferrer" className="normalLink"><b> chess</b></a>!</p>
            </div>
        )
    }
}

export default Contact;