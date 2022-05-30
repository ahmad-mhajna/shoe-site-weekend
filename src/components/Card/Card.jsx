import React from "react";
import "./Card.css";
import Button from "../Button/Button";
class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p className="card-text">{this.props.shoe.name}</p>
        <p className="card-text">{this.props.shoe.brand}</p>
        <p className="card-text">{this.props.shoe.price}</p>
        <Button text="Edit" onClick={this.props.editShoe} />
        <Button text="Delete" onClick={this.props.deleteShoe} />
      </div>
    );
  }
}
export default Card;
