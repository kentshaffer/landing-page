import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import profilePhoto from '../images/profPic.png'
import backgroundPhoto from '../images/landscapePlaceholder.png'
import '../styles/style.css'


export default function Profile() {
  return (
    <div>
      <div>
        <h1>profile</h1>
        <img className='backgroundPhoto' src={backgroundPhoto} alt='placeholder'></img>
        <img className='profilePhoto' src={profilePhoto} alt='placeholder'></img>
        <div>about me</div>
      </div>
      <h2>Your Posts</h2>
      <div className='post-card-div'>
        <div className='post-title-container'>
          <img className='profilePhoto' src={profilePhoto} alt='placeholder'></img>
          <div className='userName'>Foo Bar</div>
          <div className='postDate'>01/01/0101 01:01</div>
        </div>
        <div className='post-text'>this is a post</div>
        <button className='comment-btn'>See comments/Leave comment</button>
      </div>
    </div>
  );
}