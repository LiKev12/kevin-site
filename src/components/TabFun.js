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

export class TabFun extends Component {
  render() {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} className='Card'>
          <CardTitle className="CardTitle BlankProject">
            Fun Project #1
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
        {/* Project 2 */}
        <Card shadow={5} className='Card'>
          <CardTitle className="CardTitle BlankProject">
            Fun Project #2
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
            Fun Project #3
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

export default TabFun;
