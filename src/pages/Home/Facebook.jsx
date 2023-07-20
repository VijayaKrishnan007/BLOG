import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
  state = {
    isLoginIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  }

  componentClicked = () => {
    console.log('Click com');
  }

  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLoginIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: '/assets/images/designer-1.jpg',
    });
  }

  render() {
    let fbContent;
      fbContent = (
        <FacebookLogin
          appId="995266607506999"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );

    return (
      <>{fbContent}</>
    );
  }
}