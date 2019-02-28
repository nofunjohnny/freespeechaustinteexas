import React, { Component } from 'react';
import { ButtonToolbar, Button, Container } from 'react-bootstrap';

class addEvent extends Component {
    render() {
        return (
            <Container>
            <div>
                <ButtonToolbar>
                    <Button variant="primary" size="lg">Create New</Button>
                </ButtonToolbar>
            </div>
            </Container>
        );
    }
}

export default addEvent;