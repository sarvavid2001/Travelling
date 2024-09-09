import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Failed to load blog details');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl">{error}</div>;
  }

  return (
    <div className="blog-details container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8">{blog.title}</h1>
        <p className="text-gray-700 text-lg lg:text-xl mb-8">{blog.description}</p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose prose-lg lg:prose-xl mb-8" dangerouslySetInnerHTML={{ __html: blog.content }} />
        <div className="text-gray-600 text-lg">
          <p><strong>Author:</strong> {blog.author}</p>
          <p><strong>Published on:</strong> {new Date(blog.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
