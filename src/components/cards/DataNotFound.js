import React, { Component } from "react";

class DataNotFound extends Component {
  render() {
    return (
      <>
        <div className="alert alert-danger">
          <b> {this.props.message}</b>
        </div>
      </>
    );
  }
}

export default DataNotFound;
