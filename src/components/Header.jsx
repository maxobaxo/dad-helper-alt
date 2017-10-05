import React from 'react';
import { Jumbotron } from 'react-bootstrap'
;
function Header(props) {

  return(
    <div>
      <Jumbotron>
        <h1>How To Play With Your New Baby</h1>
      </Jumbotron>
      <div className="well">
        <h4>Are you a new parent?</h4>
        <p>Learn how to celebrate your child's achievements, and empower them to reach their developmental milestones.</p>
      </div>
    </div>
  )
}

export default Header;
