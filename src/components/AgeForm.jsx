import React from 'react';
import { Button } from 'react-bootstrap';
import { getBabySkills } from './../actions/age';
import { connect } from 'react-redux';

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
  }

  render() {
    return(
      <div className="well">
        <form onSubmit={this.handleAgeSubmit}>
          <h3>How old is your little one currently?</h3>
          <select ref="_age" required>
            <option selected disabled>Select an Age Range</option>
            <option value="ZeroToFour">0 - 4 Months</option>
            <option value="FiveToEight">5 - 8 Months</option>
            <option value="NineToTwelve">9 - 12 Months</option>
          </select>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default connect()(AgeForm);
