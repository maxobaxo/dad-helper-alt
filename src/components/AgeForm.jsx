import React, { Component } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { Card, CardTitle, CardText, CardMedia } from "react-toolbox/lib/card";
import { getBabySkills } from "./../actions/age";
import styles from "./../styles/AgeForm.css";
import zeroToFour from "../static/ZeroToFour.jpg";
import fiveToEight from "../static/FiveToEight.jpg";
import nineToTwelve from "../static/NineToTwelve.jpg";

const propTypes = {
  hideAgeForm: func.isRequired
};

class AgeForm extends Component {
  state = {
    value: "ZeroToFour"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleAgeSubmit = async event => {
    event.preventDefault();
    const { dispatch } = this.props;
    await dispatch(getBabySkills(this.state.value));
    this.props.hideAgeForm();
  };

  render() {
    return (
      <div>
        <h2>How old is your little one currently?</h2>
        <form onSubmit={this.handleAgeSubmit}>
          <div className={styles.container}>
            <label>
              <input
                type="radio"
                name="age"
                value="ZeroToFour"
                onChange={this.handleChange}
              />
              <div className={styles.card}>
                <Card style={{ width: "350px" }}>
                  <CardMedia aspectRatio="wide" image={zeroToFour} />
                  <CardTitle title="0 - 4 Months" />
                </Card>
              </div>
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="FiveToEight"
                onChange={this.handleChange}
              />
              <div className={styles.card}>
                <Card style={{ width: "350px" }}>
                  <CardMedia aspectRatio="wide" image={fiveToEight} />
                  <CardTitle title="5 - 8 Months" />
                </Card>
              </div>
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="NineToTwelve"
                onChange={this.handleChange}
              />
              <div className={styles.card}>
                <Card style={{ width: "350px" }}>
                  <CardMedia aspectRatio="wide" image={nineToTwelve} />
                  <CardTitle title="9 - 12 Months" />
                </Card>
              </div>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
AgeForm.propTypes = propTypes;

export default connect()(AgeForm);
