import React, { Component } from 'react';
import {Header, Hero} from 'parts';
import landingPage from 'json/landingPage.json';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} />
      </>
    )
  }
}
