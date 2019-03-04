import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

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
            <h4><Link to="/" class="btn btn-primary">Event List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="date">Date:</label>
                <input type="text" class="form-control" name="date" value={date} onChange={this.onChange} placeholder="Date" />
              </div>
              <div class="form-group">
                <label for="time">Time:</label>
                <input class="form-control" name="time" onChange={this.onChange} value={time} placeholder="Time" />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="venue">Venue:</label>
                <input type="text" class="form-control" name="venue" value={venue} onChange={this.onChange} placeholder="Venue" />
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="host">Host:</label>
                <input type="text" class="form-control" name="host" value={host} onChange={this.onChange} placeholder="Host" />
              </div>
              <div class="form-group">
                <label for="topic">Topic:</label>
                <input type="text" class="form-control" name="topic" value={topic} onChange={this.onChange} placeholder="Topic" />
              </div>
              <div class="form-group">
                <label for="attendees">Attendees:</label>
                <input type="text" class="form-control" name="attendees" value={attendees} onChange={this.onChange} placeholder="Attendees" />
              </div>
              <div class="form-group">
                <label for="handicap">Handicap:</label>
                <input type="text" class="form-control" name="handicap" value={handicap} onChange={this.onChange} placeholder="Handicap" />
              </div>
              <div class="form-group">
                <label for="food">Food:</label>
                <input type="text" class="form-control" name="food" value={food} onChange={this.onChange} placeholder="Food" />
              </div>
              <div class="form-group">
                <label for="price">Price:</label>
                <input type="text" class="form-control" name="price" value={price} onChange={this.onChange} placeholder="Price" />
              </div>
              <div class="form-group">
                <label for="explicit">Explicit:</label>
                <input type="text" class="form-control" name="explicit" value={explicit} onChange={this.onChange} placeholder="Explicit" />
              </div>
              <div class="form-group">
                <label for="capacity">Capacity:</label>
                <input type="text" class="form-control" name="capacity" value={capacity} onChange={this.onChange} placeholder="Capacity" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
