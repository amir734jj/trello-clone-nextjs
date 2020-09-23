import Board from "react-trello";
import React from "react";
import * as PropTypes from "prop-types";

export default class TrelloBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: null};
  }

  async componentDidMount() {
    const res = await fetch(`/api/board/${this.props.name}`)
    const json = await res.json()
    return this.setState({data: json});
  }

  updateBoard = async (newBoard) => {
    await fetch(`/api/board/${this.props.name}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBoard)
    });
  }

  render() {
    let {data} = this.state;
    return data ? (
      <div>
        <Board data={data} editLaneTitle={true} editable={true} canAddLanes={true} onDataChange={this.updateBoard} draggable/>
      </div>
    ) : <p>Loading ...</p>;
  }
}

TrelloBoard.propTypes = {data: PropTypes.any, name: PropTypes.string}