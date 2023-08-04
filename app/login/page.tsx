"use client";

import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className='login-page'>
      <section>
        <form className='login-form'>
          <h2>Login</h2>

          <div className='form-ctrl'>
            <label htmlFor='email'>Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              id='email'
              placeholder='e.g samanta@gmail.com'
              required
            />
          </div>

          <div className='form-ctrl flex flex-col gap-2'>
            <label htmlFor='password'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              id='password'
              placeholder='Enter your password'
              required
            />
          </div>

          <button type='submit' className='submit'>
            Login
          </button>

          <div className='signup-link'>
            <p>
              {"Haven't Account? "}
              <Link href='/signup'>Create an Account</Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
