import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="absolute bottom-0 w-full h-16 bg-amber-300 rounded-b-2xl">
      <div className="flex">
        <Link
          to="/"
          className="w-1/3 h-16 align-middle flex items-center justify-center hover:bg-amber-900 active:bg-amber-900"
        >
          <span>Daily</span>
        </Link>
        <Link
          to="/log"
          className="w-1/3 h-16 align-middle flex items-center justify-center hover:bg-amber-900 active:bg-amber-900"
        >
          <span>Log</span>
        </Link>
        <Link
          to="/setting"
          className="w-1/3 h-16 align-middle flex items-center justify-center hover:bg-amber-900 active:bg-amber-900"
        >
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar
