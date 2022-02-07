import React from "react";
import "./styles.css";

export default function Login() {
  return (
    <React.Fragment>
      <div id="login">
        <div class="container mt-100">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column" class="col-md-6 mt">
              <div id="login-box" class="col-md-12">
                <form id="login-form" class="form" action="" method="post">
                  <h3 class="text-center text-info">Login</h3>
                  <div class="form-group">
                    <label for="username" class="text-info">
                      Username:
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password" class="text-info">
                      Password:
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      name="submit"
                      class="btn btn-info btn-md"
                      value="submit"
                    />
                  </div>
                  <div id="register-link" class="text-right reg-me">
                    <a href="#" class="text-info ">
                      Register here
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
