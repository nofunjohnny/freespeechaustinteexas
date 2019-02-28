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
                        
                    </tr>
                </Table>
                </Container>
            </div>
        );
    }
}

export default eventList;