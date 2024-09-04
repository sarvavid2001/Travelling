import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <img src={blog.image} alt={blog.title} />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      <p>Author: {blog.author}</p>
      <p>Published on: {new Date(blog.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogDetails;
