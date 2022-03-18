import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav"
import Article from './components/Article';
import Subject from './components/Subject';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

class App extends Component {
  //어떠한 component가 실행될때 render() 보다 먼저 작동되면서 그 component를 초기화시켜주고 싶을때
  //constructor를 밑처럼 하고 그안에다가 코드를 짠다.
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wid Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      nav: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for Design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive...' }
      ]
    }
  }
  render() {

    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.nav.length) {
        var data = this.state.nav[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }

    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}>
        </Subject>
        <Nav
          onChangePage={function (id) {
            console.log(id);
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.nav}
        ></Nav>
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  }
}

export default App;
