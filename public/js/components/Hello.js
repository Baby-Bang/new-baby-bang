import React, {Component} from "react";
import {Link} from 'react-router';

class Value extends Component {
  render() {
    return (
      <div>
        <Link to="/login">
          <button onClick={this.props.onGet} className="btn btn-info">快点我吧</button>
        </Link>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Value;
