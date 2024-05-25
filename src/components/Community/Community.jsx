import React, { useState ,useEffect} from 'react';
import '../Community/Community.css';
import Tweet from './Tweet';
import { useNavigate } from 'react-router-dom';

function Community() {
  const Navigate=useNavigate();
    const [content, setContent] = useState('');
    const [blog,setBlog]=useState([])

    

    const handleInputChange = (event) => {
      
    if(!localStorage.getItem('token')){
      alert('Please register first')
      Navigate('/register')
    }
      setContent(event.target.value);
    };
    
    const handleSubmit = async(e)=>{
      
     
        e.preventDefault();
        const response = await fetch("https://forthefuture.onrender.com/api/v1/posts",{
          origin:"https://forthefuture.onrender.com",
          mode:"cors",
          method:"POST",
          headers:{
              "Content-Type":"application/json",
              "Authorization":localStorage.getItem('token'),
              "Access-Control-Allow-Origin" : "*"
          },
          body: JSON.stringify({content: content}),
      
              
    
            });
            const json = await response.json();
          
            if (json.success) {
                alert('Successfully posted')
            }
            else {
                alert(json.error, "Invalid Credentials")
            }
    
    
    }

    const getAllBlogs = async () => {
      //API CALL
      const response = await fetch("https://forthefuture.onrender.com/api/v1/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json()
      console.log(json)
      setBlog(json)
    }

      useEffect(() => {
          getAllBlogs()
      },[])
  return (

    <div className="app">
    <div className="write-post">
      <textarea
        value={content}
        onChange={handleInputChange}
        placeholder="What's on your mind?"
      ></textarea>
      <button onClick={handleSubmit}>Post</button>
    </div>
    <main>
      {blog.map(blogs => (
        <Tweet key={blogs._id} id={blogs._id} username={blogs.user.username} body={blogs.content}  like={blogs.likes} comment={blogs.comments}/>
      ))}
    </main>
  </div>
  );
}



export default Community;
