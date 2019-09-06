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
                <a href="https://github.com/LiKev12/KeyWatch" target="_blank" rel="noopener noreferrer" className="normalLink">GitHub</a>
            </Button>
            <Button colored>
                <a href="https://keywatch.kevinkli.now.sh/" target="_blank" rel="noopener noreferrer" className="normalLink">Live Demo</a>
            </Button>
            <Button colored>
                <a href="https://insights.samsung.com/2019/09/05/keywatch-samsung-breakthroughs-that-matter-award-winner/" target="_blank" rel="noopener noreferrer" className="normalLink">Blog Post</a>
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
            Team Project #3
          </CardTitle>
          <CardText>
            Under construction
          </CardText>
          <CardActions border>
            <Button colored disabled>GitHub</Button>
            <Button colored disabled>Live Demo</Button>
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
