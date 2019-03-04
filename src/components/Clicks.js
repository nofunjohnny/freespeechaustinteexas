import React, { Component } from 'react'



class Clicks extends React.Component {
    
    constructor(props) {
    	super(props);
    	this.state = {clicks: 0}
    }
    
    handleClick() {
    	this.setState((prevState) => ({
      	   clicks: prevState.clicks + 1
        }));
    }
    
    render() {
    	return <button class="btn btn-secondary btn-sm" onClick={this.handleClick.bind(this)}>{this.state.clicks}People Going</button>
    }
    
}

export default Clicks;