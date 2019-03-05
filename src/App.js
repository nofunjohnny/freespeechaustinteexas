import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import firebase from "./Firebase";
import Clicks from './components/Clicks.js';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Create  from './components/Create';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("events");
    this.unsubscribe = null;
    this.state = {
      events: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const events = [];
    querySnapshot.forEach(doc => {
      const {
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
      } = doc.data();
      events.push({
        key: doc.id,
        doc, // DocumentSnapshot
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
      });
    });
    this.setState({
      events
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h1>Free Speech Austin Texas</h1>
            <h3 class="panel-title">Event List</h3>
          </div>
          <div class="panel-body">
            <h4>

            </h4>
            
            <Table>
              
              <tbody>
                {this.state.events.map(event => (
                  <tr>
                    
                    <td data-label='Date'>
                      <Link to={`/show/${event.key}`}><strong>Date: </strong>{event.date}</Link>
                    </td>
                    <td data-label='Time'><strong>Time: </strong>{event.time}</td>
                    <td data-label='Name'><strong>Name: </strong>{event.name}</td>
                    <td data-label='Venue'><strong>Venue: </strong>{event.venue}</td>
                    <td data-label='Address'><strong>Address: </strong>{event.address}</td>
                    <td data-label='Host'><strong>Host: </strong>{event.host}</td>
                    <td data-label='Topic'><strong>Topic: </strong>{event.topic}</td>
                    <td data-label='Attendees'><strong>Attendees: </strong>{event.attendees}<Clicks /></td>
                    <td data-label='Handicap'><strong>Handicap: </strong>{event.handicap}</td>
                    <td data-label='Food'><strong>Food: </strong>{event.food}</td>
                    <td data-label='Price'><strong>Price: </strong>{event.price}</td>
                    <td data-label='Explicit'><strong>Explicit: </strong>{event.explicit}</td>
                    <td data-label='Capacity'><strong>Capacity: </strong>{event.capacity}</td>
                  </tr>
                ))}
                
              </tbody>
            </Table>
            <Create />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
