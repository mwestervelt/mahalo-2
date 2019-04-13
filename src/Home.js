import React, { Component } from 'react';
import logo_white from './mahalo_logo_white.svg'

export default class Home extends Component {
  render(){
    return(
      <div className='logo-div'>
        <img className='logo' src={ logo_white } alt='logo' />
        <h1 className='title'>hello i'm an h1</h1>
      </div>

    )
  }
}
