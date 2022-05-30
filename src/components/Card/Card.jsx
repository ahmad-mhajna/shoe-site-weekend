import React from "react";
import "./Card.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p className="card-text">{this.props.shoe.name}</p>
        <p className="card-text">{this.props.shoe.brand}</p>
        <p className="card-text">{this.props.shoe.price}</p>
        <Link
          onClick={() => {
            this.props.editShoe(this.props.shoe);
          }}
          to="/form"
        >
          Edit
        </Link>
        <Button
          text="Delete"
          onClick={this.props.deleteShoe}
          id={this.props.shoe.id}
        />
      </div>
    );
  }
}
export default Card;
