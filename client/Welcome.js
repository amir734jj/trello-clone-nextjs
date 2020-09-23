import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      owner: 'test'
    };
  }


  updateWip = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit = async () => {
    if (this.state.owner) {

      await fetch(`/api/board/${this.state.owner}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ })
      });

      this.props.handleSubmit(this.state.owner);
    }
  }

  render() {
    return (
      <div className="container">
        <div style={{marginTop: '3rem'}}>
          <h3> Welcome to Trello Clone!</h3>
          <p>Enter the name of board owner and click submit</p>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="test" value={this.state.owner} name="owner" onChange={this.updateWip}/>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary mb-3" onClick={this.handleSubmit}>Enter</button>
        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  handleSubmit: PropTypes.func
};