import React from 'react';
import Header from './Header';
import DadHelper from './DadHelper';
import styles from './../styles/App.css';

function App() {

  return(
    <div className={styles.app}>
      <Header />
      <DadHelper />
    </div>
  )
}

export default App;
