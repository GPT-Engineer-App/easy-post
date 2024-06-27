import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-black text-green-500 flex justify-between">
      <Link to="/" className="text-xl font-mono">My Blog</Link>
      <div>
        <Link to="/" className="mr-4 font-mono">Home</Link>
        <Link to="/posts" className="font-mono">Posts</Link>
      </div>
    </nav>
  );
};

export default Navbar;