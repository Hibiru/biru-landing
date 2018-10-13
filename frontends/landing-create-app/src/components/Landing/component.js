import React, { Component } from 'react';

import logo from './logo.png';
import Emoji from '../Emoji';

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
            "Hello ! Je suis un chatbot qui vas t'aider à trouver <strong>les meilleurs bars</strong> autour de toi ! <Emoji label="Bière">🍻</Emoji>"
          </h6>
          <buton className={styles.ctaButton}>
            Viens discuter! <Emoji label="Feu">🔥</Emoji>
          </buton>
        </div>
        <div className={styles.messagingPanel}>
          <div className={styles.messageRow}>
            <div className={styles.messageBubble_left}>
              Hello toi ! <Emoji label="Coucou">👋</Emoji>
              <br />
              moi c’est Biru, le chatbot qui t’aide à trouver les bars sympas autour de toi
            </div>
          </div>
          <div className={styles.messageRow}>
            <div className={styles.messageBubble_right}>
              Cool <Emoji label="Cool">🤘</Emoji>
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
