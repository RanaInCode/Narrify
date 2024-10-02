import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../styles/blog.css";
import TimeTravelImage from "../images/time-travel-blog.jpg"
// export default function Blogs(){
//    const [title, setTitle] = useState("");
//    const [blog, setBlog] = useState("");

//    useEffect(()=>{
//      axios.get("http://localhost:3000/blogs")
//      .then((res)=>{
//       setTitle(res.data.blogs[1].title)
//       setBlog(res.data.blogs[1].blog)
//        console.log(res.data.blogs);
//      }).catch((err)=>{
//       console.log(err);
//      })
//    },[]);
//     return(
//       <>
//         <div className="blog-container">
//          <div className="blog-content">
//            <h1>{title}</h1>
//            <img style={{height:"400px", width:"100%"}} src={TimeTravelImage}></img>
//            <p style={{fontSize:"30px", color:"grey"}}>{blog}</p>
//          </div>
//          </div>
//       </>
//     )
//   }




export default function Blogs(){
  const [response, setResponse] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/blogs")
    .then((res)=>{
       setResponse(res.data.blogs);
       console.log(res.data.blogs);

    }).catch((err)=>{
     console.log(err);
    })
  },[]);
   return(
     <>
        {response.map((res)=>( <AllBlogs key={res._id} title={res.title} blog={res.blog} />))}
     </>
   )
 }

 function AllBlogs({title, blog}){
  return (
    <>
   <div className="blog-container">
   <div className="blog-content">
     <h1>{title}</h1>
     <img style={{height:"400px", width:"100%"}} src={TimeTravelImage}></img>
     <p style={{fontSize:"30px", color:"grey"}}>{blog}</p>
   </div>
   </div>
   <hr></hr>
   </>
  )
 }