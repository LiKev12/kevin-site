import React, { Component } from 'react'

export class TabNotesTable extends Component {
    render() {
        return (
            <div>
            <table id="projectsTable">
            <thead>
            <tr>
              <th>Project</th>
              <th>Category</th>
              <th>Notes</th>
            </tr>
            <tr>
              <td>KeyWatch</td>
              <td>Team</td>
              <td>Won MIT Hackathon award</td>
            </tr>
            <tr>
              <td>24-Solver</td>
              <td>Personal</td>
              <td>Solves classic numbers game</td>
            </tr>
            <tr>
              <td>Tuder</td>
              <td>School</td>
              <td>Tutoring coordination app</td>
            </tr>
            </thead>
          </table>
            </div>
        )
    }
}

export default TabNotesTable
