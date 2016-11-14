import React from 'react';
import { withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCardComment({comment: this.state.comment,
                                  user_id: this.props.user_id,
                                  card_id: this.props.card_id});
    this.setState({comment: ""});
  }

  render() {
    return (
      <div id="comment">
        <form>
          <input type='text'
            name="comment"
            onChange={this.handleInput}
            value={this.state.comment}
            placeholder="Write your comment here"/>
          <button onClick={ this.handleSubmit.bind(this) }>+</button>
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);
