import React, {Component} from 'react';

//app just renders children based on path
export default class App extends Component {
  render() {
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
}