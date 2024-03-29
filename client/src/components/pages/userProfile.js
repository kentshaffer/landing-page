import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import avatar from '../images/profPic.png'
import profilePhoto from '../images/profPic.png'
import backgroundPhoto from '../images/landscapePlaceholder.png'
import '../styles/style.css'


export default function Profile() {
  return (
    <div>
      <div className='profileHeader'>
        <img className='backgroundPhoto' src={backgroundPhoto} alt='placeholder'></img>
        <img className='profilePhoto' src={profilePhoto} alt='placeholder'></img>
      </div>
      <div>
        <h2>Foo Bar</h2>
        <p>San Diego * out here for vibes * love to cook</p>
      </div>
      <h2>Your Posts</h2>
      <div className='post-card-div'>
        <div className='post-title-container'>
          <img className='avatar' src={avatar} alt='placeholder'></img>
          <div className='userName'>Foo Bar</div>
          <div className='postDate'>01/01/0101 01:01</div>
        </div>
        <div className='post-text'>this is a post</div>
        <button className='comment-btn'>See comments/Leave comment</button>
      </div>
    </div>
  );
}