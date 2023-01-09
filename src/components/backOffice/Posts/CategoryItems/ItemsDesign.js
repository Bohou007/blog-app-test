import React, { Component } from "react";
import "../../../../assets/css/check.css";

class ItemsDesign extends Component {
  render() {
    let for_check = "item-" + this.props.id;
    return (
      <>
        <label className="card-item" for={for_check}>
          <input
            value={this.props.id}
            defaultChecked={this.props.checked}
            id={for_check}
            className="card__input"
            name="category_id"
            type="checkbox"
            onChange={this.props.handleChange}
          />
          <div className="card__body">
            <header className="card__body-header">
              <p className="card__body-header-title">{this.props.title}</p>
            </header>
          </div>
        </label>
      </>
    );
  }
}

export default ItemsDesign;
