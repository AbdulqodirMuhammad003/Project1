import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="fullItem">
        <div className=" ">
          <img
            src={this.props.item.image}
            alt=""
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.description}</p>
          <b>{this.props.item.price}$</b>
          <div
            className="add-to-cart"
            onClick={() => {
              this.props.onAdd(this.props.item);
            }}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
