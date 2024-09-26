import React from 'react';

function FeaturedPost({ posts }) {
  return (
    <div className="featured-posts">
      <h2>Featured Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturedPost;
