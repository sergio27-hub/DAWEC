import React, { Component } from 'react';

class FormularioRegistro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: '',
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: '', // Resetear el error al cambiar el campo
      },
    }));
  };

  validateForm = () => {
    const { username, email, password } = this.state;
    let errors = {
      username: '',
      email: '',
      password: '',
    };
    let isValid = true;

    // Validación del nombre de usuario
    if (username.trim() === '') {
      errors.username = 'El nombre de usuario es obligatorio';
      isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(username)) {
      errors.username = 'Ingrese un nombre de usuario válido (solo letras y espacios)';
      isValid = false;
    }

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Ingrese un correo electrónico válido';
      isValid = false;
    }

    // Validación de la contraseña
    if (password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      // Aquí puedes realizar acciones adicionales, como enviar el formulario
      console.log('Formulario válido. Enviar datos al servidor.');
    } else {
      console.log('Formulario inválido. Por favor, corrige los errores.');
    }
  };

  render() {
    const { username, email, password, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleInputChange}
            style={{
              borderColor: errors.username ? 'red' : '',
              color: errors.username ? 'red' : 'black',
            }}
          />
          <span style={{ color: 'red' }}>{errors.username}</span>
        </div>

        <div>
          <label>Correo electrónico:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            style={{ borderColor: errors.email ? 'red' : '', color: errors.email ? 'red' : 'black' }}
          />
          <span style={{ color: 'red' }}>{errors.email}</span>
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            style={{
              borderColor: errors.password ? 'red' : '',
              color: errors.password ? 'red' : 'black',
            }}
          />
          <span style={{ color: 'red' }}>{errors.password}</span>
        </div>

        <button type="submit">Registrar</button>
      </form>
    );
  }
}

export default FormularioRegistro;
