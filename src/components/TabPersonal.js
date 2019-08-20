import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

export class TabPersonal extends Component {
  render() {
    return (
      <div className="projects-grid">
        {/* Project 1: 24Game */}
        <Card shadow={5} className='Card'>
          <CardTitle id="PersonalA" className="CardTitle">
            24 Game Solver
          </CardTitle>
          <CardText>
            Solves classic numbers game 24 and visualizes results (<b>Python</b>
            , <b>ReactJS</b>)
          </CardText>
          <CardActions border>
            <Button colored>
              <a href="https://github.com/LiKev12/Solve24" className="normalLink">GitHub</a>
            </Button>
            <Button colored>
              <a href="https://solve-game-24.herokuapp.com/" className="normalLink">Live Demo</a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" href="mailto:kevin.k.li@wustl.edu?subject=Interested in your project!" target="_blank" />
          </CardMenu>
        </Card>
        {/* Project 2 */}
        <Card shadow={5} className='Card'>
          <CardTitle className="CardTitle BlankProject">
            Personal Project #2
          </CardTitle>
          <CardText>Under construction</CardText>
          <CardActions border>
            <Button colored disabled>GitHub</Button>
            <Button colored disabled>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 3 */}
        <Card shadow={5} className='Card'>
          <CardTitle className="CardTitle BlankProject">
            Personal Project #3
          </CardTitle>
          <CardText>Under construction</CardText>
          <CardActions border>
            <Button colored disabled>GitHub</Button>
            <Button colored disabled>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" disabled/>
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default TabPersonal;
