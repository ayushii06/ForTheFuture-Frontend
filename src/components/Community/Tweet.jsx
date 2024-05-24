import React from 'react';
import '../Community/Community.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const Tweet = (props) => {
  const {username,body,like,comment}=props
  return (
    <div className="tweet-card">
      <div className="tweet-header">
        <div>
          <span className="tweet-username">{username}</span>
        </div>
      </div>
      <p className="tweet-content">{body}</p>
      <div className="tweet-actions">
        <div className="tweet-action">
        <FontAwesomeIcon icon={faComment} />  {comment}
        </div>
        <div className="tweet-action">
        <FontAwesomeIcon icon={faHeart} />  {like}
        </div>
      
      </div>
    </div>
  );
}

export default Tweet;
