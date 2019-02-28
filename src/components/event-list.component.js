import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';

class eventList extends Component {
    render() {
        return (
            <div>
                <Container>
                <h1 className="App-header">Event List</h1>
                <Table striped bordered hover>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Venue</th>
                        <th>Address</th>
                        <th>Host</th>
                        <th>Topic</th>
                        <th>Attending</th>
                    </tr>
                </Table>
                <form>
                <input placeholder="Enter Date"></input>
                <input placeholder="Time"></input>
                <input placeholder="Venue"></input>
                <input placeholder="Address"></input>
                <input placeholder="Host"></input>
                <input placeholder="Topic"></input>
                
            </form>
            <button type="submit">Create Event</button>
            <button type="submit">Cancel</button>
                </Container>
            </div>
        );
    }
}

export default eventList;