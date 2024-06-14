import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center text-4xl transition-all transition-0.5 mt-10">
      <div className="text-center ">
        <h1 className="my-6 font-extrabold ">LOGIN</h1>
        <div className="border rounded-3xl shadow-2xl ">
          <div className="space-x-4 ">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
            <div >
              <p className="border-b-2 leading-4 my-10 ">
                <span className="px-10 bg-white">or</span>
              </p>
              <form className="my-4 w-[100%] flex flex-col ">
                <label className="pl-5">E-mail</label>
                <input type="email" placeholder="Enter your email" />
                
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
  );
}

export default App;
