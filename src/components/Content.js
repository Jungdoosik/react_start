import React, { Component } from "react";

class Content extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log(
      'asdasdasd',
      newProps.data,
      this.props.data
    );

    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log('Content render')
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href={"/nav/" + data[i].id}
            //data-id={data[i].id}
            //e.target.dataset.id
            onClick={function (id, e) {
              e.preventDefault();
              this.props.onChangePage(id)
            }.bind(this, data[i].id)}
          >
            {data[i].title}</a>
        </li>);
      i++;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default Content;