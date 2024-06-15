import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";

function App() {
  return (
    <div className="app flex justify-center text-xl  text-center transition-all transition-0.5 mt-4 ">
      <div className="login w-[50%] xl:w-[25%] ">
        <h1 className="mt-20 mb-10 font-extrabold text-center">LOGIN</h1>
        <div className="contain flex flex-col justify-center border rounded-3xl shadow-2xl m-5 ">
          <div className="top flex px-[20%] justify-between my-8">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
          </div>
          <p className="divider border-b w-[100%] text-center leading-4  "><span className="px-8 bg-white">or</span></p>
          <form className="my-4 flex flex-col ">
            <label className="">E-mail</label>
            <input type="email" placeholder="Enter your email" className="border my-2 mx-[15%] text-center" />
            <label>password</label>
            <input type="password" placeholder="Enter your password" className="border my-2 mx-[15%] text-center" />
            <div className="remember my-2 flex justify-center space-x-2 w-[100%]">
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button className="border rounded-full bg-purple-400 mx-[25%]">Log In</button>
          </form>
          <div className="bottom ">
            <p className="my-3">Forget your password?</p>
            <a href="/" className="underline text-purple-400">Reset Password</a>
          </div>
          <p className="create my-3">Create Account</p>

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
