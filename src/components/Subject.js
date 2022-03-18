import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';


class Subject extends Component {
  render() {//클래스안에 속하는 함수는 function 생략
    return (
      <header>
        <h1><a href='/' onClick={function (e) {
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;