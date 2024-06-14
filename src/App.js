import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";

function App() {
  return (
    <div className="app h-[100%] flex justify-center text-xl transition-all transition-0.5 mt-4 ">
      <div className="login text-center w-[50%] ">
        <h1 className="my-6 font-extrabold ">LOGIN</h1>
        <div className="container border rounded-3xl shadow-2xl m-5">
          <div className="top space-x-4 mt-6 border-b-2 border-gray-400 leading-4 my-10">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
          </div>
          <p className="divider"><span>or</span></p>
          <form className="my-4 flex  flex-col">
            <label className="">E-mail</label>
            <input type="email" placeholder="Enter your email" className="border pl-[20%] w-[50%]" />
            <label>password</label>
            <input type="password" placeholder="Enter your password" className="pl-[20%] w-[50%]" />
            <div className="remember flex justify-center space-x-2">
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="bottom">
            <p>Forget your password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">Create Account</p>

          <div className="theme-toggle ">
            <h2 className="text-center p-2">light theme</h2>
            <i className="fas fa-toggle-on cursor-pointer "></i>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
