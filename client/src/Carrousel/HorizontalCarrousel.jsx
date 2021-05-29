import React, { Component } from "react";
import Card from "./Card";

export default class HorizontalCarrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_card: 0,
    };
    this.num = 100;
  }

  handleNext = () => {
    if (this.state.current_card < this.card_container.children.length - 1) {
      let new_current_card = this.state.current_card + 1;
      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${
          350 * this.state.current_card
        }px)`;
      });
    }
    return;
  };
  handlePrevious = () => {
    if (this.state.current_card > 0) {
      let new_current_card = this.state.current_card - 1;
      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${
          350 * this.state.current_card
        }px)`;
      });
      return;
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handlePrevious}>Previous</button>
        <button onClick={this.handleNext}>Next</button>
        <div className="view-port" style={styles.view_port}>
          <div
            ref={(ref_id) => (this.card_container = ref_id)}
            className="card-container"
            style={styles.card_container}
          >
            <Card card_number="0" />
            <Card card_number="1" />
            <Card card_number="2" />
            <Card card_number="3" />
            <Card card_number="4" />
            <Card card_number="5" />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  view_port: {
    position: "absolute",
    top: "50px",
    left: "50%",
    transform: "transform(-50%, -50%)",
    width: "350px",
    height: "200px",
    backgroundColor: "red",
    // overflow: "hidden",
  },
  card_container: {
    display: "flex",
    flexDirection: "row",
    width: "fit-content",
  },
};
