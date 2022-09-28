import './App.css';
import Post from './Post'

const post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

function App() {

  return (
    <div className="App">
      <Post 
      title={post.title}
      author={post.author}
      body={post.body}
      comments={post.comments}
      />
    </div>
  );
}

export default App;