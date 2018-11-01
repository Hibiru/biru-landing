import React, { Component } from 'react';

import logo from './logo.png';
import Emoji from '../Emoji';
import DeviceOriented from '../DeviceOriented';

import styles from './Landing.module.scss';

class Landing extends Component {
  componentDidMount() {
   
  }

  render() {
    return (
      <div className={styles.landing}>
        <div className={styles.ctaPanel}>
          <div className={styles.logoWrapper}>
            <DeviceOriented>
              <img style={{ willChange: 'transform', filter: "drop-shadow(0 20px 30px rgba(51, 51, 51, 0.5))"}} src={logo} className={styles.logo} alt="logo-biry" />
            </DeviceOriented>
          </div>
          <h6 className={styles.catchPhrase}>
            "Hello ! Je suis un chatbot qui vas t'aider à trouver <strong>les meilleurs bars</strong> autour de toi ! <Emoji label="Bière">🍻</Emoji>"
          </h6>
          <button className={styles.ctaButton}>
            Viens discuter! <Emoji label="Feu" children="🔥" />
          </button>
        </div>
        <div className={styles.messagingPanel}>
          <div className={styles.messageRow}>
            <div className={styles.messageBubble_left}>
              Hello toi ! <Emoji label="Coucou" children="👋" />
              <br />
              moi c’est Biru, le chatbot qui t’aide à trouver les bars sympas autour de toi
            </div>
          </div>
          <div className={styles.messageRow}>
            <div className={styles.messageBubble_right}>
              Cool <Emoji label="Cool" children="🤘" />
              <br />
              Mais…commet ça marche ?
            </div>
          </div>
          <div className={styles.messageRow}>
            <div className={styles.messageBubble_left}>
              Partage ta position ou donne moi une station de métro et je m’occupe du reste 🕵️‍♀️
            </div>
          </div>
          <div className={styles.messageRow}>
            <div className={styles.ctaBubble}>
              Je partage ma position !
            </div>
          </div>
          <div className={styles.messageRow}>
            <div className={styles.messageBubble_left}>
              Regarde ce que je t’ai trouvé :
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Landing;
