import React from 'react';

export default class EditorDiary extends React.Component {
  componentDidMount() {
    this.props.onGet();
  }

  render() {
    return <div>
      {this.props.today}<br/>
      {this.props.age}
    </div>
  }
}
