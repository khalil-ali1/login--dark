import React from "react";
import useLocalStorage from "use-local-storage";
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="login">
        <h1>login</h1>
        <div className="container">
          <div className="top">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
            <div>
              <p className="divider"><span>or</span></p>
              <form>
                <label>E-mail</label>
                <input type="email" placeholder="Enter your email"/>
                <label>password</label>
                <input type="password" placeholder="Enter your password"/>
                <div className="remember">
                <input type="checkbox" checked='checked' />
                <p>Remember Me</p>
                </div>
                <button>Log In</button>
              </form>
              <div className="bottom">
                <p>Forget your password?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
