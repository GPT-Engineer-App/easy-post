import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="text-xl">My Blog</Link>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  );
};

export default Navbar;