import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl'; 
import TabNotes from './TabNotes';
import TabPersonal from './TabPersonal';
import TabTeam from './TabTeam';
import TabFun from './TabFun';

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        // A) Notes
        if (this.state.activeTab === 0) {
            return(
                <TabNotes />
            )
        // B) Personal
        } else if (this.state.activeTab === 1) {
            return(
               <TabPersonal />
            )
        // C) Team
        } else if (this.state.activeTab === 2) {
            return(
                <TabTeam />
            )
        // D) Fun
        } else if (this.state.activeTab === 3) {
            return(
                <TabFun />
            )
        }
    }

    render() {
        return (
            <div className="category-tabs" id="projects">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Notes</Tab>
                    <Tab>Personal</Tab>
                    <Tab>Team</Tab>
                    <Tab>Fun</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;