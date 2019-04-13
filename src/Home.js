import React, { Component, Fragment } from 'react';
import logo_white from './mahalo_logo_white.svg'

export default class Home extends Component {
  render(){
    return(
      <div>
        <Fragment>
          <img className='logo' src={ logo_white } alt='mahalo my guy' />
          </Fragment>
        <div className='box'>
          <h1>Getting to know if you're ovulating can be scary.</h1>
          <h1 className="line2"> Check your risk of pregnancy with us.</h1>
        </div>
          <button className="btn">Check</button>
      </div>
    )
  }
}
