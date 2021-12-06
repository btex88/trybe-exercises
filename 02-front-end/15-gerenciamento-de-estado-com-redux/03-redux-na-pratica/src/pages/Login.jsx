import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwd: '',
      isDisable: true,
    };

    this.handleChange = ({ target: { value, id } }) => {
      this.setState({ [id]: value }, () => {
        this.validateInput();
      });
    };

    this.validateInput = () => {
      const { email, passwd } = this.state;
      const re =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // extracted from: https://stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux
      if (re.test(email) && passwd.length >= 6) {
        this.setState({ isDisable: false });
      } else {
        this.setState({ isDisable: true });
      }
    };
  }

  render() {
    const { isDisable } = this.state;
    const { auth } = this.props;
    return (
      <form className="flex flex-col place-self-center justify-center w-2/3 max-h-full items-center content-around bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Input
          htmlFor="email"
          id="email"
          type="email"
          placeholder="Email"
          handleChange={this.handleChange}
        />

        <Input
          htmlFor="passwd"
          id="passwd"
          type="password"
          placeholder="Password"
          handleChange={this.handleChange}
        />

        {isDisable ? (
          <Link to="/clients" onClick={(e) => e.preventDefault()}>
            <Button disabled type="button" label="Login" />
          </Link>
        ) : (
          <Link to="/clients">
            <Button type="button" label="Login" onButtonClick={auth} />
          </Link>
        )}
      </form>
    );
  }
}

const mapStateProps = ({ userAuth: { authenticated } }) => ({ authenticated });

const mapDispatchProps = (dispatch) => ({
  auth: () => dispatch({ type: 'TRUE', authStatus: true }),
});

export default connect(mapStateProps, mapDispatchProps)(Login);
