"use client";

import { useAuthContext } from "@/hooks/useAuthContext";
import { useLogout } from "@/hooks/useLogout";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { state } = useAuthContext();
  const { logout } = useLogout();

  const user: any = state.user;

  const handleLogout = () => {
    logout();
  };

  return (
    <header className='header'>
      <div className='menu-wrapper'>
        <Link href='/' className='logo'>
          dailyDo
        </Link>

        <nav className='nav'>
          {user && (
            <div className='links'>
              <p className='welcome-msg'>
                Welcome, <span className='user-name'>{user?.user?.name}</span>
              </p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}

          {!user && (
            <div className='links'>
              <Link href='/login'>Login</Link>
              <Link href='/signup'>Signup</Link>
              <p className='welcome-msg'>
                Welcome <span>Guest</span>
              </p>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
