import React, { useState } from "react";
import "./styles.css";
import { useHistory } from 'react-router-dom'


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(false);
  const history = useHistory()

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function login(e) {
    e.preventDefault();
    console.log("login()")
    console.log(form);
    if (form.email === "teste1" && form.password === "teste2") {
      console.log(form.email)
      console.log(form.password)
      console.log("Login Ok !")
      history.push('/products');
    } else {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 2000);
      console.log("Errouuuuu");
    }
  }

  function registerUser() {
    console.log("registerUser()")
    history.push('/register-user')
  }

  return (
    <React.Fragment>
      <div id="login">
        <div className="container mt-100">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6 mt">
              <div id="login-box" className="col-md-12">
              {message ? <div className="alert alert-danger message-login" role="alert">
                Email e/ou senha incorretos!
              </div> : ''}
                <form id="login-form" className="form" action="" method="post" onSubmit={login}>
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">
                      Email:
                    </label>
                    <input
                      onChange={formChange}
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Senha:
                    </label>
                    <input
                      onChange={formChange}
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-info">
                    Entrar
                  </button>
                  <div id="register-link" className="text-right register-here">
                    <a href="#" className="text-info" onClick={registerUser}>
                      Ainda não tem cadastro? Clique aqui!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}
