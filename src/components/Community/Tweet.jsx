import React ,{useState} from 'react';
import '../Community/Community.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

const Tweet = (props) => {
  const {id,username,body,like,comment}=props
  console.log(comment)
  const [likes,setLikes]=useState()
  const [comments,setComments]=useState([])
  const [value,setValue]=useState('')

  function onChange(e){
    setValue(e.target.value)
  }
    const [count,setCount]=useState(0)
    const [display,setDisplay]=useState(false)
    const [listdisplay,setListDisplay]=useState(false)
    async function handleLike(){
      const response = await fetch(`https://forthefuture.onrender.com/api/v1/posts/${id}/like`, {
        origin:"https://forthefuture.onrender.com",
          mode:"cors",
          method:"PUT",
          headers:{
              "Content-Type":"application/json",
              "Authorization":localStorage.getItem('token'),
              "Access-Control-Allow-Origin" : "*"
          },
      });
      const json = await response.json()
      
      setLikes(json.likes.length)
    
     }
     function handleComment(){
      setDisplay(true)
     }


     async function handleSubmit(){
      setDisplay(false)
      setListDisplay(true)
      const response = await fetch(`https://forthefuture.onrender.com/api/v1/posts/${id}/comment`, {
      origin:"http://localhost/10000",
        mode:"cors",
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":localStorage.getItem('token'),
            "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify({text: value}),
      
    });
    const json = await response.json()
    console.log(json)
    console.log(json.comments)
    console.log(json.comments.length)
    setComments(json.comments)
    setCount(json.comments.length)
  
      

     }
  return (
    <div className="tweet-card">
      <div className="tweet-header">
        <div>
          <span className="tweet-username">{username}</span>
        </div>
      </div>
      <p className="tweet-content">{body}</p>
      <div className="tweet-actions">
        <div className="tweet-action" onClick={handleComment}>
        <FontAwesomeIcon icon={faComment} />  {!count=='0'?count:comment.length}
        </div>
        <div className="tweet-action" onClick={handleLike}>
        <FontAwesomeIcon icon={faHeart} />  {!likes=='0'?likes:like.length}
        </div>
        {!display?<></>: <div style={{display:{display}}} className="toggle">
      <div className="write-post write-post-toggle">
      <textarea
        value={value}
        onChange={onChange}
        placeholder="What's on your mind?"
      ></textarea>
      <button className='write-post-btn' onClick={handleSubmit}>Post</button>
    </div>
      </div>}
     
      </div>
      <div  className="comment-section">
        {comments!=[]?comment.map(c=>{
          return <>
          <p className="user">{c.user.username}</p>
        <p className="comment">{c.text}</p>
          </>
        }):comments.map(comment=>{
          return <>
          <p className="user">{comment.user.username}</p>
        <p className="comment">{comment.text}</p>
          </>
        })}
        
      </div>
      
    </div>
  );
}

export default Tweet;
