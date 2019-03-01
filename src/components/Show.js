import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      event: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('events').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          event: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('events').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
Event.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Event List</Link></h4>
            <h3 class="panel-title">
              {this.state.event.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Time:</dt>
              <dd>{this.state.event.time}</dd>
              <dt>Venue:</dt>
              <dd>{this.state.event.venue}</dd>
              <dt>Address:</dt>
              <dd>{this.state.event.address}</dd>
              <dt>Host:</dt>
              <dd>{this.state.event.host}</dd>
              <dt>Attendees:</dt>
              <dd>{this.state.event.attendees}</dd>
              <dt>Handicap Access:</dt>
              <dd>{this.state.event.handicapAccess}</dd>
              <dt>Food:</dt>
              <dd>{this.state.event.food}</dd>
              <dt>Price:</dt>
              <dd>{this.state.event.price}</dd>
              <dt>Explicit:</dt>
              <dd>{this.state.event.explicit}</dd>
              <dt>Capacity:</dt>
              <dd>{this.state.event.capacity}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;