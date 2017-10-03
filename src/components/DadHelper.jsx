import React from 'react';
import AgeFormControl from './AgeFormControl';
import DisplaySkills from './DisplaySkills';
import { connect } from 'react-redux';

class DadHelper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <AgeFormControl />
        <DisplaySkills />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterState: state
  }
}

export default connect(mapStateToProps)(DadHelper);
