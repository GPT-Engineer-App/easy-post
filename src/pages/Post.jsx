import { useParams, Link } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const post = { id, title: `Blog Post ${id}`, content: `This is the content of blog post ${id}.` };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      <Link to="/posts" className="text-blue-500">Back to Posts</Link>
    </div>
  );
};

export default Post;