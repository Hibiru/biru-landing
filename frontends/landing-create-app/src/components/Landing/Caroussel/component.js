import React from 'react';
import PropTypes from 'prop-types';

import bar from './bar.png';

import styles from './caroussel.module.scss';

const Caroussel = () => (
  <div className={styles.caroussel}>
    <div className={styles.card}>
      <img src={bar} alt="bar" />
      <div className={styles.cardText}>
        <div className={styles.cardTitle}>
          Les petites gouttes
        </div>
        <div>🎉 Happy Hour : 17h-22h</div>
        <div>💰 Prix de la pinte : 3€ / 5€</div>
        <div>🚶 Distance : 4min (200m)</div>
      </div>
    </div>
    <div className={styles.card}>
      <img src={bar} alt="bar" />
      <div className={styles.cardText}>
        <div className={styles.cardTitle}>
          Les petites gouttes
        </div>
        <div>🎉 Happy Hour : 17h-22h</div>
        <div>💰 Prix de la pinte : 3€ / 5€</div>
        <div>🚶 Distance : 4min (200m)</div>
      </div>
    </div>
  </div>
);

Caroussel.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Caroussel;
