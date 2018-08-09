import React, { Component } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { Card, CardTitle, CardMedia } from "react-toolbox/lib/card";
import { Button } from "react-toolbox/lib/button";
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
      <div className={styles.page}>
        <Card>
          <CardTitle title="How old is your little one currently?" />
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
                  <Card className={styles.cardFrame}>
                    <CardMedia aspectRatio="wide" image={zeroToFour} />
                    <CardTitle
                      className={styles.cardTitle}
                      title="0 - 4 Months"
                    />
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
                  <Card className={styles.cardFrame}>
                    <CardMedia aspectRatio="wide" image={fiveToEight} />
                    <CardTitle
                      className={styles.cardTitle}
                      title="5 - 8 Months"
                    />
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
                  <Card className={styles.cardFrame}>
                    <CardMedia aspectRatio="wide" image={nineToTwelve} />
                    <CardTitle
                      className={styles.cardTitle}
                      title="9 - 12 Months"
                    />
                  </Card>
                </div>
              </label>
            </div>
            <Button className={styles.button} type="submit" raised>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}
AgeForm.propTypes = propTypes;

export default connect()(AgeForm);
