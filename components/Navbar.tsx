"use client";

import { useAuthContext } from "@/hooks/useAuthContext";
import Link from "next/link";

const Navbar = () => {
  const { state } = useAuthContext();

  return (
    <header className='header'>
      <div className='menu-wrapper'>
        <Link href='/' className='logo'>
          dailyDo
        </Link>

        <nav className='nav'>
          {state && (
            <div className='links'>
              <h3>{state.user.user.name}</h3>
              <button>Logout</button>
            </div>
          )}

          {!state && (
            <div className='links'>
              <Link href='/login'>Login</Link>
              <Link href='/signup'>Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
