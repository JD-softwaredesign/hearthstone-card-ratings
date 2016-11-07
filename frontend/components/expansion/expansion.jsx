import React from 'react';
import { withRouter } from 'react-router';

class Expansion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {title: ""}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.current
    });
  }

  render() {
    return (
      <div>{this.state.current.title}</div>
    );
  }
}

export default withRouter(Expansion);
