import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('events')
    this.unsubscribe = null;
    this.state = {
      events: []
    };
  }


  onCollectionUpdate = (querySnapshot) => {
    const events = [];
    querySnapshot.forEach((doc) => {
      const { date, time, venue, address, host, topic, attendees, handicapAccess, food, price, explicit, capacity,} = doc.data();
      events.push({
      key: doc.id,
      doc, // DocumentSnapshot
      date, 
      time, 
      venue, 
      address, 
      host, 
      topic, 
      attendees,
      handicapAccess,
      food,
      price,
      explicit,
      capacity,
      });
    });
    this.setState({
      events 
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
       //<img src={logo} className="App-logo" alt="logo" />
       render() {
        return (
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  EVENT LIST
                </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/create">Add Event</Link></h4>
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Venue</th>
                      <th>Address</th>
                      <th>Host</th>
                      <th>Topic</th>
                      <th>Attendees</th>
                      <th>Handicap Accessible</th>
                      <th>Food</th>
                      <th>Price</th>
                      <th>Explicit</th>
                      <th>Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.events.map(event =>
                      <tr>
                        <td><Link to={`/show/${event.date}`}>{event.time}</Link></td>
                        <td>{event.venue}</td>
                        <td>{event.address}</td>
                        <td>{event.host}</td>
                        <td>{event.topic}</td>
                        <td>{event.attendees}</td>
                        <td>{event.handicapAccess}</td>
                        <td>{event.food}</td>
                        <td>{event.price}</td>
                        <td>{event.explicit}</td>
                        <td>{event.capacity}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
    }
    
    export default App;