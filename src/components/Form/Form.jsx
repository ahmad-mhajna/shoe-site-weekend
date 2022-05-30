import React from "react";
import Button from "../Button/Button";
import Input from "../input/Input";
class Form extends React.Component {
  render() {
    return (
      <form action="/" onSubmit={this.props.onSubmit}>
        <Input
          label="Name"
          placeholder="Enter Name..."
          value={this.props.shoe.name}
          onChange={(event) => {
            this.props.setShoe({
              ...this.props.shoe,
              name: event.target.value,
            });
          }}
        />
        <Input
          label="Brand"
          placeholder="Enter Brand..."
          value={this.props.shoe.brand}
          onChange={(event) => {
            this.props.setShoe({
              ...this.props.shoe,
              brand: event.target.value,
            });
          }}
        />
        <Input
          label="Price"
          placeholder="Enter Price..."
          value={this.props.shoe.price}
          type="number"
          onChange={(event) => {
            this.props.setShoe({
              ...this.props.shoe,
              price: +event.target.value,
            });
          }}
        />
        <Button type="submit" text="Add" />
      </form>
    );
  }
}
export default Form;
