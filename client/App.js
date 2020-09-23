import React, {Component} from "react";
import Welcome from "./Welcome";
import Board from "./Board";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { owner: ''};
  }

  handleSubmit = owner => {
    this.setState({owner});
  };

  render() {
    return (
      <div>
        {!this.state.owner && <Welcome handleSubmit={this.handleSubmit} />}
        {this.state.owner && <Board name={this.state.owner} />}
      </div>
    );
  }
}
