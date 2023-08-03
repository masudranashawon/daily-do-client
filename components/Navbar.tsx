import Link from "next/link";

const Navbar = () => {
  return (
    <header className='header'>
      <div className='menu-wrapper'>
        <Link href='/' className='logo'>
          dailyDo
        </Link>

        <nav className='nav'>
          <div className='links'>
            <Link href='/login' className='hover:text-sky-400 duration-300'>
              Login
            </Link>
            <Link href='/signup' className='hover:text-sky-400 duration-300'>
              Signup
            </Link>
          </div>

          {/* <div className='flex gap-5 lg:w-auto justify-around items-center relative w-screen'>
          <h3>Jesica Parker</h3>
          <button
            type='submit'
            className='bg-rose-500 text-white py-3 px-5 rounded-lg hover:bg-sky-50 hover:text-slate-900 duration-300'
          >
            Logout
          </button>
        </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
