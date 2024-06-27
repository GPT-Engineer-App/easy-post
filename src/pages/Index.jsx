import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-green-500 font-mono">
      <div>
        <h1 className="text-3xl text-center blinking-cursor">Welcome to My Blog</h1>
        <p className="text-center">
          <Link to="/posts" className="text-green-500">View Blog Posts</Link>
        </p>
      </div>
    </div>
  );
};

export default Index;