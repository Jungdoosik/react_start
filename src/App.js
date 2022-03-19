import React, { Component } from 'react';
import './App.css';
import Content from "./components/Content"
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';


class App extends Component {
  //어떠한 component가 실행될때 render() 보다 먼저 작동되면서 그 component를 초기화시켜주고 싶을때
  //constructor를 밑처럼 하고 그안에다가 코드를 짠다.
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wid Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      content: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for Design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive...' }
      ]
    }
  }
  render() {

    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.content.length) {
        var data = this.state.content[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        //add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        /*
         this.state.content.push({
           id: this.max_content_id,
           title: _title,
           desc: _desc
         });
        */
        /*
        let _content = this.state.content.concat(
          {
            id: this.max_content_id,
            title: _title,
            desc: _desc
          }
        )
        */
        var newContent = Array.from(this.state.content);
        newContent.push({
          id: this.max_content_id,
          title: _title,
          desc: _desc

        })
        this.setState({ //초기화같은건가?
          content: newContent
        });

      }.bind(this)}></CreateContent>
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
        <Content
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.content}
        ></Content>
        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
