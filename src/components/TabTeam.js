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

export class TabTeam extends Component {
  render() {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} className='Card'>
          <CardTitle id="TeamA" className="CardTitle">
            KeyWatch
          </CardTitle>
          <CardText>
            Continuous monitoring platform for Parkinson's Disease prognosis 
            (<b>ReactJS</b>, <b>Flask</b>)
          </CardText>
          <CardActions border>
            <Button colored>
                <a href="https://github.com/LiKev12/KeyWatch">GitHub</a>
            </Button>
            <Button colored>
                <a href="https://keywatch.kevinkli.now.sh/">Live Demo</a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" href="mailto:kevin.k.li@wustl.edu?subject=Interested in your project!" target="_blank" />
          </CardMenu>
        </Card>
        {/* Project 2 */}
        <Card shadow={5} className='Card'>
          <CardTitle className="CardTitle BlankProject">
            Team Project #2
          </CardTitle>
          <CardText>
            Under construction
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 3 */}
        <Card shadow={5} className='Card'>
          <CardTitle className="CardTitle BlankProject">
            Team Project #3
          </CardTitle>
          <CardText>
            Under construction
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default TabTeam;
