import React from 'react';
import { withRouter } from 'react-router';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  errorGenerator(errors) {
    if (errors) {
      return errors.map((e, idx) => (<p key={e.length + idx} className='error'>{e}</p>));
    }
  }

  componentWillReceiveProps(props) {
    if (props.signedIn) {
      this.props.router.push('/');
    }
    this.render();
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signIn({user: this.state});
  }

  toSignUpPage(e) {
    e.preventDefault();
    this.props.router.push('/signup');
  }

  render() {
    const { errors } = this.props;
    return (
      <div>
        <form>
          <input type='text'
            name="username"
            onChange={this.handleInput}
            value={this.state.username}
            placeholder="Username"/>
          <input type='password'
            name="password"
            onChange={this.handleInput}
            value={this.state.password}
            placeholder="Password"/>
          { this.errorGenerator(errors.username) }
          <button onClick={ this.handleSubmit.bind(this) }>Sign In</button>
          <button onClick={ this.toSignUpPage.bind(this) }>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInForm);
