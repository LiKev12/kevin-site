import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-mdl'; 
import TabNotesTable from './TabNotesTable';

export class TabNotes extends Component {
    render() {
        return (
            <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ margin: 'auto', width: '36vw'}}>
                <CardTitle style={{color: '#000000', height: '176px'}}>
                    <TabNotesTable />
                </CardTitle>
                <CardText style={{ marginLeft: '1vw' }}>
                    <b style={{ fontSize: '18px'}}> See the latest projects I've been working on!</b>
                </CardText>
            </Card>
        </div>
        )
    }
}

export default TabNotes
