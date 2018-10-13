import React, { Component } from 'react';

import logo from './logo.png';

import styles from './Landing.module.scss';

class Landing extends Component {
  render() {
    return (
      <div className={styles.landing}>
        <div className={styles.ctaPanel}>
          <div className={styles.logoWrapper}>
            <img src={logo} className={styles.logo} alt="logo-biry" />
          </div>
          <h6 className={styles.catchPhrase}>
            "Hello ! Je suis un chatbot qui vas t'aider à trouver <strong>les meilleurs bars</strong> autour de toi ! <span role="img" aria-label="Bière">🍻</span>"
          </h6>
          <buton className={styles.ctaButton}>
            Viens discuter! <span role="img" aria-label="Feu">🔥</span>
          </buton>
        </div>
        <div className={styles.examplePanel}>
          example
        </div>
      </div>
    );
  }
}

export default Landing;
