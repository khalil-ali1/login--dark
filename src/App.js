import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center text-4xl transition-all transition-0.5 ">
    <div className="flex flex-col items-center w-[80%]  rounded-3xl shadow-2xl border">
      <div className="text-center">
        <h1 className="my-6 font-extrabold ">LOGIN</h1>
        <div className="">
          <div className="space-x-4 ">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
            <div className="border-red-500">
              <p className="border-b-2 mb-10">
                <span className="bg-slate-50">or</span>
              </p>
              <form className="border ">
                <label className="pl-5">E-mail</label>
                <input type="email" placeholder="Enter your email" />
                <br />
                <label>password</label>
                <input type="password" placeholder="Enter your password" />
                <div className="remember">
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
            </div>
            <div className="theme-toggle ">
              <h2 className="text-center p-2">light theme</h2>
              <i className="fas fa-toggle-on cursor-pointer "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
