import React, { Component } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { Card, CardTitle, CardText } from "react-toolbox/lib/card";
import { getBabySkills } from "./../actions/age";
import "./../styles/AgeForm.css";

const propTypes = {
  hideAgeForm: func.isRequired
};

class AgeForm extends Component {
  state = {
    value: "ZeroToFour"
  };

  handleChange = value => {
    this.setState({ value });
  };

  handleAgeSubmit = async event => {
    event.preventDefault();
    const { dispatch } = this.props;
    await dispatch(getBabySkills(this.state.value));
    this.props.hideAgeForm();
  };

  render() {
    // const container = {
    //   display: "flex",
    //   justifyContent: "space-around",
    //   height: "250px",
    //   zIndex: "1100",
    //   width: "100%"
    // };

    return (
      <div>
        <h2>How old is your little one currently?</h2>
        <form>
          <div className="container">
            {/* <label className="option">
            <input type="radio" name="age" value="0 - 4 Months" />
            <div> */}
            <Card style={{ width: "350px" }} className="card">
              <CardTitle title="0 - 4 Months" />
            </Card>
            {/* </div>
          </label> */}
            {/* <label className="option">
            <input type="radio" name="age" value="5 - 8 Months" />
            <div> */}
            <Card style={{ width: "350px" }} className="card">
              <CardTitle title="5 - 8 Months" />
            </Card>
            {/* </div>
          </label> */}
            {/* <label className="option">
            <input type="radio" name="age" value="9 - 12 Months" />
            <div> */}
            <Card style={{ width: "350px" }} className="card">
              <CardTitle title="9 - 12 Months" />
            </Card>
            {/* //   </div>
          // // </label> */}
          </div>
        </form>
      </div>
    );
  }
}
AgeForm.propTypes = propTypes;

export default connect()(AgeForm);
