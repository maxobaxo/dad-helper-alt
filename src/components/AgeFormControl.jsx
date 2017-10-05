import React from 'react';
import AgeForm from './AgeForm';

class AgeFormControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {ageFormIsHidden: false};
    this.hideAgeForm = this.hideAgeForm.bind(this);
  }

  hideAgeForm() {
    this.setState({ageFormIsHidden: true})
  }

  render() {

    return(
      <div hidden={this.state.ageFormIsHidden}>
        <AgeForm hideAgeForm={this.hideAgeForm}/>
      </div>
    )
  }
}

export default AgeFormControl;
