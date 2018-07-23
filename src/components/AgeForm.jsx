import React from "react";
import { Accordion, Panel, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { func } from "prop-types";
import { getBabySkills } from "./../actions/age";

const propTypes = {
  hideAgeForm: func.isRequired
};

class AgeForm extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleAgeSubmit = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(getBabySkills(this.state.value));
    this.props.hideAgeForm();
  };

  render() {
    const submitButton = (
      <Button bsStyle="success" bsSize="xs" type="submit">
        Submit
      </Button>
    );

    return (
      <div>
        <form onSubmit={this.handleAgeSubmit}>
          <Accordion>
            <Panel
              bsStyle="success"
              header="How old is your little one currently?"
              footer={submitButton}
            >
              <select
                name="age"
                value={this.state.value}
                onChange={this.handleChange}
                required
              >
                <option value="" disabled>
                  Select an Age Range
                </option>
                <option value="ZeroToFour">0 - 4 Months</option>
                <option value="FiveToEight">5 - 8 Months</option>
                <option value="NineToTwelve">9 - 12 Months</option>
              </select>
            </Panel>
          </Accordion>
        </form>
      </div>
    );
  }
}
AgeForm.propTypes = propTypes;

export default connect()(AgeForm);
