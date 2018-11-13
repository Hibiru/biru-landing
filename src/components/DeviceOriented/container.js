import React, { Component, Fragment } from 'react';
import styles from './DeviceOriented.module.scss';

class DeviceOriented extends Component {
  constructor(props) {
    super(props);
    this.deviceRef = React.createRef();
    window.addEventListener('deviceorientation', (event) => {
      // remember to use vendor-prefixed transform property
      // this.deviceRef.current.style.transform =
      //   `rotateX(${event.beta}deg)` +
      //   ` rotateY(${-event.gamma}deg)` +
      //   ` rotateZ(${event.alpha - 180}deg)`;

      // RotateX
      if (!this.initialBeta) this.initialBeta = event.beta;
      let newBeta = this.initialBeta - event.beta;
      newBeta = newBeta > 25 ? 25 : newBeta;
      newBeta = newBeta < -25 ? -25 : newBeta;

      // RotateY
      if (!this.initialGamma) this.initialGamma = event.gamma;
      let newGamma = this.initialGamma - event.gamma;
      newGamma = newGamma > 35 ? 35 : newGamma;
      newGamma = newGamma < -35 ? -35 : newGamma;

      // RotateZ
      if (!this.initialAlpha) this.initialAlpha = event.alpha;
      let newAlpha = this.initialAlpha - event.alpha;
      let borne1;
      let borne2;
      let newAlpha1;
      let newAlpha2;
      if (Math.abs(newAlpha) < 180) {
        newAlpha1 = newAlpha < -35 ? -35 : newAlpha;
        borne1 = this.initialAlpha - 325;
      } else {
        borne2 = this.initialAlpha - 325;
        newAlpha2 = Math.abs(newAlpha) < Math.abs(borne2) ? borne2 : newAlpha;
      }
      // if (newAlpha < 180) newAlpha = -newAlpha;
      // newAlpha = newAlpha < -35 ? -35 : newAlpha;
      // newAlpha = newAlpha < -35 ? -35 : newAlpha;
      // newAlpha = newAlpha > this.initialAlpha + 35 ? 35 : newAlpha;
      // newAlpha = newAlpha < this.initialAlpha - 35 ? -35 : newAlpha;
      // const getSignedNumber = (number, signedNumber) => (
      //   Math.sign(signedNumber) ? number : number * -1
      // );
      // newAlpha = Math.abs(newAlpha) > 22 ? getSignedNumber(22, newAlpha) : newAlpha;

      this.setState({
        initialBeta: Math.round(this.initialBeta),
        eventBeta: Math.round(event.beta),
        newBeta: Math.round(newBeta),
        initialGamma: Math.round(this.initialGamma),
        eventGamma: Math.round(event.gamma),
        newGamma: Math.round(newGamma),
        initialAlpha: Math.round(this.initialAlpha),
        eventAlpha: Math.round(event.alpha),
        newAlpha: Math.round(newAlpha),
        newAlpha1: Math.round(newAlpha1),
        newAlpha2: Math.round(newAlpha2),
        borne1: Math.round(borne1),
        borne2: Math.round(borne2),
      });
      this.deviceRef.current.style.transform =
      `rotateX(${(newBeta)}deg)` +
       ` rotateY(${newGamma}deg)`;
    });

    this.state = {
      initialBeta: null,
      newBeta: null,
      initialGamma: null,
      eventBeta: null,
      newGamma: null,
      eventGamma: null,
      initialAlpha: null,
      eventAlpha: null,
      newAlpha: null,
      newAlpha1: null,
      newAlpha2: null,
      borne1: null,
      borne2: null,
    };
  }

  render() {
    const { children } = this.props;
    // const { initialBeta, eventBeta, newBeta } = this.state;
    // const { initialGamma, eventGamma, newGamma } = this.state;
    const { initialAlpha, eventAlpha, newAlpha, newAlpha1, newAlpha2, borne1, borne2 } = this.state;
    console.log('initialAlpha', initialAlpha)
    console.log('eventAlpha', eventAlpha)
    console.log('newAlpha', newAlpha)
    return (
      <Fragment>
        {/* initialBeta: {initialBeta}
        <br/>
        eventBeta: {eventBeta}
        <br/>
        newBeta: {newBeta}
        <br/> */}
        {/* <div style={{ position: 'absolute', top:'0', left:'0' }}>
        initialAlpha: {initialAlpha}
        <br/>
        eventAlpha: {eventAlpha}
        <br/>
        newAlpha: {newAlpha}
        <br/>
        newAlpha1: {newAlpha1} | {borne1 ? `borne1: ${borne1}` : ''}
        <br/>
        newAlpha2: {newAlpha2} | {borne2 ? `borne2: ${borne2}` : ''}
        <br/>
        <br/>
      </div> */} 
        {/* initialGamma: {initialGamma}
        <br/>
        eventGamma: {eventGamma}
        <br/>
        newGamma: {newGamma}
        <br/> */}
        {React.cloneElement(children, { ref: this.deviceRef })}
      </Fragment>
    );
  }
}

export default DeviceOriented;
