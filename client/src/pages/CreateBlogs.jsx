import { useState } from "react";
import "../styles/createBlog.css";
import axios from "axios";

export default function CreateBlogs() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);


  function handleOnPublish(){
    axios.post("http://localhost:3000/create-blogs",{
      title: title,
      author: author,
      blog: content
    }).then((res)=>{
         console.log(res.data.msg);
         setMessage(res.data.msg);
         setIsError(false);
    }).catch((err)=>{
      console.log(err);
         console.log(err.response.data.msg);
         setMessage(err.response.data.msg);
         setIsError(true);
    })    
    }

  return (
   <>
   <div style={{color: isError? "red": "green", fontSize: "25px", display: "flex", justifyContent: "center", margin:"10px" }} className="message">{message}</div>
    <div className="blog-container">
      <div className="editor-section">
        <h1>Add new blog post</h1>
        <input
          type="text"
          placeholder="Title of the blog"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write content of your blog here"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author's name"
          id="name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="sidebar-section">
        <div className="publish-section">
          <h3>Publish</h3>
          <button>Save Draft</button>
          <button>Preview</button>
          <button onClick={handleOnPublish}>Publish</button>
        </div>

        <div className="featured-image-section">
          <h3>Featured Image</h3>
          <button>Set featured image</button>
        </div>

        <div className="categories-section">
          <h3>Categories</h3>
          <label>
            <input type="checkbox" /> Business & Web Ideas
          </label>
          <label>
            <input type="checkbox" /> Web Design
          </label>
          <label>
            <input type="checkbox" /> Blog
          </label>
        </div>
      </div>
    </div>
    </>
  );
}
