import React from 'react';
import { withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmation: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  errorGenerator(errors) {
    // errors will be in array
    if (errors) {
      return errors.map((e, idx) => {
        return <p key={e.length + idx} className='error'>{e}</p>;
      });
    }
  }

  componentWillReceiveProps(props) {
    // when user is signed in, redirect to home
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
    this.props.signUp({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    });
  }

  render() {
    const { password, confirmation, username } = this.state;
    const { errors } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text'
            name="username"
            onChange={this.handleInput}
            value={ username }
            placeholder="Username"/>
          { this.errorGenerator(errors.username) }

          <input type='password'
            name="password"
            onChange={this.handleInput}
            value={ password }
            placeholder="Password"/>
          { this.errorGenerator(errors.password) }

          <input type='password'
            name="confirmation"
            onChange={this.handleInput}
            placeholder="Password Confirmation"
            value={ confirmation }/>
          <p className='error'>
            { password !==  confirmation ? "The password confirmation doesn't match with password." : ""}
          </p>

          <button disabled={ password === '' || password !== confirmation }
            >Sign Up</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
