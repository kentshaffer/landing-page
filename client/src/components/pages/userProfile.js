import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profilePhoto from '../images/profPic.png'
import '../styles/style.css'


export default function Profile() {
  return (
    <div>
      <h1>profile</h1>
      <div>
        header image
        <div>profile image</div>
      </div>
      <div>about me</div>
      <h2>Your Posts</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={profilePhoto} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
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