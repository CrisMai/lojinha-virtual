import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { addUser } from "../../store/ducks/users";
import { saveUser } from "../../store/fetchActions";
import validaCPF from "../../util/validaCpf";
import "./styles.css";


export default function RegisterUser() {
  const history = useHistory()
  const [form, setForm] = useState(
    {
      nome: "",
      email: "",
      password: "",
      data: "",
      cpf: "",
    });

  const userMock = {
    email: "John@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: {
      firstname: "John",
      lastname: "Doe"
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496"
      }
    },
    phone: "1-570-236-7033"
  }
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [msgCpf, setMsgCPF] = useState(false);

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    dispatch(addUser(form));
  }, [dispatch]);


  function addNewUser(e) {
    e.preventDefault();
    if (!validaCPF(form.cpf)) {
      console.log("cpf invalido!")
      setMsgCPF(true);
      setTimeout(() => {
        setMsgCPF(false);
      }, 2000)
      return false;
    }
    dispatch(saveUser(userMock));
    dispatch(addUser(form));
    console.log(users);
    setForm({
      nome: "",
      email: "",
      password: "",
      data: "",
      cpf: "",
    });
    setMsgSuccess(true)
    setTimeout(() => {
      history.push("/products");
      setMsgSuccess(false);
    }, 1500);
  }

  function back() {
    history.push('/login');
  }

  return (
    <React.Fragment>
      <div id="reg-user">
        <div className="container register-user">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6 mt">
              {msgSuccess ? <div className="alert alert-success message-restier-user" role="alert">
                Cadastro realizado com sucesso!
              </div> : ''}
              <div id="login-box" className="col-md-12 register-user">
                <form id="login-form" className="form" action="" method="post" onSubmit={addNewUser}>
                  <button className="btn btn-primary btn-info btn-back" onClick={back}>
                    Voltar
                  </button>
                  <h3 className="text-center text-info">Cadastro de novo usuário</h3>
                  <div className="form-group">
                    <label htmlFor="nome" className="text-info">
                      Nome:
                    </label>
                    <input
                      onChange={formChange}
                      type="text"
                      name="nome"
                      id="nome"
                      className="form-control"
                      value={form.nome}
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">
                      Email:
                    </label>
                    <input
                      onChange={formChange}
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={form.email}
                      placeholder="Digite seu e-mail"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Senha:
                    </label>
                    <input
                      onChange={formChange}
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      value={form.password}
                      minlength="8"
                      placeholder="Digite sua senha"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="data" className="text-info">
                      Data Nascimento:
                    </label>
                    <input
                      onChange={formChange}
                      type="date"
                      name="data"
                      id="data"
                      className="form-control"
                      value={form.data}
                      required
                    />
                  </div>
                  <div className="form-group">
                    {msgCpf ? <div className="alert alert-danger" role="alert">
                      CPF inválido!
                    </div> : ''}
                    <label htmlFor="cpf" className="text-info">
                      CPF:
                    </label>
                    <input
                      onChange={formChange}
                      type="cpf"
                      name="cpf"
                      id="cpf"
                      className="form-control"
                      placeholder="Digite seu CPF"
                      value={form.cpf}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-info">
                    Cadastrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}
