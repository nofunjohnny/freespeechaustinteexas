import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Container } from 'react-bootstrap';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('events');
    this.state = {
      date: '',
        time: '',
        name: '',
        venue: '',
        address: '',
        host: '',
        topic: '',
        attendees: '',
        handicap: '',
        food: '',
        price: '',
        explicit: '',
        capacity: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { date, time, name, venue, address, host, topic, attendees, handicap, food, price, explicit, capacity } = this.state;

    this.ref.add({
      date,
      time,
      name,
      venue,
      address,
      host,
      topic,
      attendees,
      handicap,
      food,
      price,
      explicit,
      capacity
    }).then((docRef) => {
      this.setState({
        date: '',
        time: '',
        name: '',
        venue: '',
        address: '',
        host: '',
        topic: '',
        attendees: '',
        handicap: '',
        food: '',
        price: '',
        explicit: '',
        capacity: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { date, time, name, venue, address, host, topic, attendees, handicap, food, price, explicit, capacity } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Create Event
            </h3>
          </div>
          <div class="panel-body">
            
              <Form>
                <Row>
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="date" value={date} onChange={this.onChange} placeholder="Date" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' class="form-control" name="time" onChange={this.onChange} value={time} placeholder="Time" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="venue" value={venue} onChange={this.onChange} placeholder="Venue" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="host" value={host} onChange={this.onChange} placeholder="Host" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="topic" value={topic} onChange={this.onChange} placeholder="Topic" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="attendees" value={attendees} onChange={this.onChange} placeholder="Attendees" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="handicap" value={handicap} onChange={this.onChange} placeholder="Handicap" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="food" value={food} onChange={this.onChange} placeholder="Food" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="price" value={price} onChange={this.onChange} placeholder="Price" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="explicit" value={explicit} onChange={this.onChange} placeholder="Explicit" />
                </Col>
              
              
                <Col>
                <Form.Control size='sm' type="text" class="form-control" name="capacity" value={capacity} onChange={this.onChange} placeholder="Capacity" />
                              </Col>
                              </Row>              
              
              
            </Form>
            <button type="submit" class="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
