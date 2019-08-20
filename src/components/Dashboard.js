import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import HeadPic from '../images/headshot.png';


class Dashboard extends Component{
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;

// <div style={{width: '100%', margin: 'auto'}} id="home" >
// <Grid className="landing-grid">
//     <Cell col={12}>
//         <img
//             src= { HeadPic }
//             alt="avatar"
//             className="avatar-img"
//         />
//             <div className="banner-text">
//                 <h1>Kevin Li</h1>
//                 <hr/>
//                 <p> HTML/CSS | JavaScript | Java | C++ | Python </p>

//                 <div className="social-links">
//                     {/* Resume */}
//                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//                         <i className="fa fa-file" aria-hidden="true" />
//                         <p>Resume</p>
//                     </a> 

//                     {/* LinkedIn */}
//                     <a href="https://www.linkedin.com/in/kevin-li-aa9397103/" rel="noopener noreferrer" target="_blank">
//                         <i className="fa fa-linkedin-square" aria-hidden="true" />
//                         <p>LinkedIn</p>
//                     </a>

//                     {/* Github */}
//                     <a href="https://github.com/LiKev12" rel="noopener noreferrer" target="_blank">
//                         <i className="fa fa-github-square" aria-hidden="true" />
//                         <p>GitHub</p>
//                     </a>

//                     {/* Chess */}
//                     <a href="https://lichess.org/@/Kevdoge24" rel="noopener noreferrer" target="_blank">
//                         <i className="fa fa-user-circle" aria-hidden="true" />
//                         <p>LiChess</p>
//                     </a> 
//                 </div>
//             </div>
//         </Cell>
// </Grid>
// </div>