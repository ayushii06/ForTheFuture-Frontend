import React, { useState ,useEffect} from 'react';
import '../Community/Community.css';
import Tweet from './Tweet';

function Community() {
    const [content, setContent] = useState('');
    const [blog,setBlog]=useState([])

    const handleInputChange = (event) => {
      setContent(event.target.value);
    };

    const user =localStorage.getItem('username')

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:10000/api/v1/blog/create",{
          origin:"http://localhost/10000",
          mode:"cors",
          method:"POST",
          headers:{
              "Content-Type":"application/json",
              "Access-Control-Allow-Origin" : "*"
          },
          body: JSON.stringify({ body: content, user: user}),
      });
            const json = await response.json();
            console.log(json)
            if (json.success) {
                alert('Successfully posted')
            
            }
            else {
                alert(json.error, "Invalid Credentials")
            }
    
    
    }

    const getAllBlogs = async () => {
      //API CALL
      const response = await fetch("http://localhost:10000/api/v1/blogs/getblog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json()
    
      setBlog(json.blogs)
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
        <Tweet key={blogs._id} username={blogs.user} body={blogs.body} like={blogs.like} comment={blogs.comment} />
      ))}
    </main>
  </div>
  );
}



export default Community;
