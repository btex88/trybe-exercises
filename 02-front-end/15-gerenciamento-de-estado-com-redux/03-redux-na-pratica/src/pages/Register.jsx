import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TiArrowBack } from 'react-icons/ti';
import Input from '../components/Input';
import Button from '../components/Button';
import fetchRandomId from '../data/fetchRandomId';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: 0,
      id: '',
      isDisable: true,
    };

    this.handleChange = ({ target: { value, id } }) => {
      this.setState({ [id]: value }, () => {
        this.validateInput();
      });
    };

    this.validateInput = () => {
      const { email, name, age } = this.state;
      const re =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // extracted from: https://stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux
      if (re.test(email) && name.length >= 3 && Number(age) >= 18) {
        this.setState({ isDisable: false });
      } else {
        this.setState({ isDisable: true });
      }
    };

    this.setUserId = () => {
      fetchRandomId().then((id) => this.setState({
        id,
      }));

    };

    this.clearInput = () => {
      this.setState({ name: '', email: '', age: 0, id: '' }, () => {
        this.setState({ isDisable: true });
      });
    };
  }

  componentDidMount() {
    this.setUserId();
  }

  render() {
    const { isDisable, name, email, age, id } = this.state;
    console.log(this.props.data);
    const { addNewUser } = this.props;
    return (
      <div className="flex flex-col w-10/12 items-center">
        <Link to="/clients" className="absolute top-4 left-4 flex flex-col items-center">
          <TiArrowBack className="text-3xl "/>
          <span>Voltar</span>
        </Link>
        <span className="text-3xl m-8">Cadastro de novo cliente</span>
        <form className="mt-12 flex flex-col items-center">
          <div>
            <Input
              htmlFor="name"
              id="name"
              type="text"
              label="Nome"
              value={name}
              placeholder="Nome"
              handleChange={this.handleChange}
            />
            <Input
              htmlFor="email"
              id="email"
              type="email"
              value={email}
              label="Email"
              placeholder="Email"
              handleChange={this.handleChange}
            />
            <Input
              htmlFor="age"
              id="age"
              type="number"
              value={age}
              label="Idade"
              handleChange={this.handleChange}
            />
          </div>
          <div className="my-4">
            {isDisable ? (
              <Button disabled type="button" label="Cadastrar Novo Cliente" />
            ) : (
              <Button
                data={{ name, email, age, id }}
                type="button"
                label="Cadastrar Novo Cliente"
                onButtonClick={addNewUser}
                clearInput={this.clearInput}
                setUserId={this.setUserId}
              />
            )}
          </div>
        </form>
        <div className="flex flex-row"></div>
      </div>
    );
  }
}

const mapStateToProps = ({ registeredUsers: { data } }) => ({ data });

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (obj) => dispatch({ type: 'ADD', newUser: obj }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
