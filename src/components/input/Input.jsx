import React from "react";
class Input extends React.Component {
  render() {
    return (
      <div className="input-container">
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={this.props.onChange}
          value={this.props.value}
          name={this.props.label}
          placeholder={this.props.placeholder}
          required
        />
      </div>
    );
  }
}
export default Input;
