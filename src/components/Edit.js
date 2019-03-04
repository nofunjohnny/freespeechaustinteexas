import React, { Component } from "react";
import firebase from "../Firebase";
import { Link } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      name: "",
      venue: "",
      address: "",
      host: "",
      topic: "",
      attendees: "",
      handicap: "",
      food: "",
      price: "",
      explicit: "",
      capacity: ""
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("events")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        const event = doc.data();
        this.setState({
          key: doc.id,
          date: event.date,
          time: event.time,
          name: event.name,
          venue: event.venue,
          address: event.address,
          host: event.host,
          topic: event.topic,
          attendees: event.attendees,
          handicap: event.handicap,
          food: event.food,
          price: event.price,
          ex: event.ex,
          name: event.name,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ event: state });
  };

  onSubmit = e => {
    e.preventDefault();

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
    } = this.state;

    const updateRef = firebase
      .firestore()
      .collection("events")
      .doc(this.state.key);
    updateRef
      .set({
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
      })
      .then(docRef => {
        this.setState({
          key: "",
          date: "",
          time: "",
          name: "",
          venue: "",
          address: "",
          host: "",
          topic: "",
          attendees: "",
          handicap: "",
          food: "",
          price: "",
          explicit: "",
          capacity: ""
        });
        this.props.history.push("/show/" + this.props.match.params.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Edit event</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to={`/show/${this.state.key}`} class="btn btn-primary">
                Event List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="date">Date:</label>
                <input
                  type="text"
                  class="form-control"
                  name="date"
                  value={this.state.date}
                  onChange={this.onChange}
                  placeholder="Date"
                />
              </div>
              <div class="form-group">
                <label for="time">Time:</label>
                <input
                  class="form-control"
                  name="time"
                  onChange={this.onChange}
                  placeholder="Time"
                />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="venue">Venue:</label>
                <input
                  type="text"
                  class="form-control"
                  name="venue"
                  value={this.state.venue}
                  onChange={this.onChange}
                  placeholder="Venue"
                />
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <input
                  type="text"
                  class="form-control"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  placeholder="Address"
                />
              </div>
              <div class="form-group">
                <label for="host">Host:</label>
                <input
                  type="text"
                  class="form-control"
                  name="host"
                  value={this.state.host}
                  onChange={this.onChange}
                  placeholder="Host"
                />
              </div>
              <div class="form-group">
                <label for="topic">Topic:</label>
                <input
                  type="text"
                  class="form-control"
                  name="topic"
                  value={this.state.topic}
                  onChange={this.onChange}
                  placeholder="Topic"
                />
              </div>
              <div class="form-group">
                <label for="attendees">Attendees:</label>
                <input
                  type="text"
                  class="form-control"
                  name="attendees"
                  value={this.state.attendees}
                  onChange={this.onChange}
                  placeholder="Attendees"
                />
              </div>
              <div class="form-group">
                <label for="handicap">Handicap:</label>
                <input
                  type="text"
                  class="form-control"
                  name="handicap"
                  value={this.state.handicap}
                  onChange={this.onChange}
                  placeholder="Handicap"
                />
              </div>
              <div class="form-group">
                <label for="food">Food:</label>
                <input
                  type="text"
                  class="form-control"
                  name="food"
                  value={this.state.food}
                  onChange={this.onChange}
                  placeholder="Food"
                />
              </div>
              <div class="form-group">
                <label for="price">Price:</label>
                <input
                  type="text"
                  class="form-control"
                  name="price"
                  value={this.state.price}
                  onChange={this.onChange}
                  placeholder="Price"
                />
              </div>
              <div class="form-group">
                <label for="explicit">Explicit:</label>
                <input
                  type="text"
                  class="form-control"
                  name="explicit"
                  value={this.state.explicit}
                  onChange={this.onChange}
                  placeholder="Explicit"
                />
              </div>
              <div class="form-group">
                <label for="capacity">Capacity:</label>
                <input
                  type="text"
                  class="form-control"
                  name="capacity"
                  value={this.state.capacity}
                  onChange={this.onChange}
                  placeholder="Capacity"
                />
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
