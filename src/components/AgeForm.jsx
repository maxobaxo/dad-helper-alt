import React from 'react';
import { Accordion, Panel, Button } from 'react-bootstrap';
import { getBabySkills } from './../actions/age';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AgeForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleAgeSubmit = this.handleAgeSubmit.bind(this);
  }

  handleAgeSubmit(event) {
    event.preventDefault();

    const { _age } = this.refs;
    const { dispatch } = this.props;
    dispatch(getBabySkills(_age.value));
    this.props.hideAgeForm();
  }

  render() {
    const submitButton = (
      <Button bsStyle="success" bsSize="xs" type="submit">Submit</Button>
    );

    return(
      <div>
        <form onSubmit={this.handleAgeSubmit}>
          <Accordion>
            <Panel bsStyle="success" header="How old is your little one currently?" footer={submitButton}>
              <select ref="_age" required>
                <option selected disabled>Select an Age Range</option>
                <option value="ZeroToFour">0 - 4 Months</option>
                <option value="FiveToEight">5 - 8 Months</option>
                <option value="NineToTwelve">9 - 12 Months</option>
              </select>

            </Panel>
          </Accordion>
        </form>
      </div>
    )
  }
}

AgeForm.propTypes = {
  hideAgeForm: PropTypes.func
}

export default connect()(AgeForm);
