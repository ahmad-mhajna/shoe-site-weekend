import React from "react";
import "./Card.css";
class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img src={this.props.imgSrc} alt="" className="card-poster" />
				<p className="card-text">{this.props.name}</p>
			</div>
		);
	}
}
export default Card;
