import React from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import styles from './../styles/Header.css';

function Header(props) {

  return(
    <div >
      <Jumbotron className={styles.header}>
        <Grid>
          <Row>
            <Col md={12}>
              <h1>Get To Know Your Baby</h1>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
      <div className="well">
        <div>
          <h4>Are you a new parent?</h4>
          <p>Learn how to celebrate your child's achievements, and empower them to reach their developmental milestones.</p>
        </div>
      </div>
    </div>
  )
}

export default Header;
