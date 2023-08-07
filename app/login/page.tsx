"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useLogin } from "@/hooks/useLogin";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();
  const { state } = useAuthContext();
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    //Login user
    await login(email, password);
  };

  useEffect(() => {
    if (state?.user) {
      router.push("/");
    }
  }, [router, state?.user]);

  if (state?.user) {
    return null;
  }

  return (
    <main className='login-page'>
      <section>
        <form onSubmit={handleLogin} className='login-form'>
          <h2>Login</h2>

          <div className='form-ctrl'>
            <label htmlFor='email'>Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              id='email'
              placeholder='e.g samantha@gmail.com'
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

          <button disabled={loading} type='submit' className='submit'>
            Login
          </button>

          {error && <p className='error'>{error}</p>}

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
