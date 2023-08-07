"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSignup } from "@/hooks/useSignup";
import { useAuthContext } from "@/hooks/useAuthContext";
import Link from "next/link";

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, loading } = useSignup();
  const { state } = useAuthContext();
  const router = useRouter();

  const handleSignup = async (e: any) => {
    e.preventDefault();

    //Signup user
    await signup(name, email, password);
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
    <main className='signup-page'>
      <section>
        <form onSubmit={handleSignup} className='signup-form'>
          <h2>Signup</h2>

          <div className='form-ctrl'>
            <label htmlFor='name'>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              id='name'
              placeholder='e.g Samantha Parker'
              required
            />
          </div>
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
            Signup
          </button>

          {error && <p className='error'>{error}</p>}

          <div className='signup-link'>
            <p>
              {"Already have an Account? "}
              <Link href='/login'>Login</Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignupPage;
