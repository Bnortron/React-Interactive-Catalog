import React from "react";

function Title(props) {
  return <h1>{props.title}</h1>;
}

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: "images/img1.jpg",
      alt: "image 1",
      editing: false,
    };

    this.editClick = this.editClick.bind(this);
    this.saveClick = this.saveClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAltChange = this.handleAltChange.bind(this);
  }

  editClick() {
    this.setState({ editing: true });
  }

  saveClick() {
    this.setState({ editing: false });
  }

  handleNameChange(event) {
    this.setState({ filename: event.target.value });
  }

  handleAltChange(event) {
    this.setState({ alt: event.target.value });
  }

  renderNormal() {
    return (
      <div>
        <Title title="Lab06 - React Application" />
        <h2>{this.state.alt}</h2>
        <img
          src={this.state.filename}
          alt={this.state.alt}
          onClick={this.editClick}
        />
      </div>
    );
  }

  renderEdit() {
    return (
      <div>
        <Title title="Lab06-React Application" />
        <p>File Name:</p>
        <select value={this.state.filename} onChange={this.handleNameChange}>
          <option value="images/img1.jpg">Image 1</option>
          <option value="images/img2.jpg">Image 2</option>
          <option value="images/img3.jpg">Image 3</option>
          <option value="images/img4.jpg">Image 4</option>
        </select>
        <br />
        <p>Alt:</p>
        <input
          type="text"
          value={this.state.alt}
          onChange={this.handleAltChange}
        />
        <br />
        <button onClick={this.saveClick}>Save</button>
      </div>
    );
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    } else {
      return this.renderNormal();
    }
  }
}

function Lab06App() {
  return <Catalog />;
}

export default Lab06App;
