import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Skeleton } from '@mui/material';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setError('Unexpected data format received');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const renderSkeleton = (count) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md">
          <Skeleton variant="rectangular" width="300px  " height={150} gap={20}/>
          <Skeleton variant="text" width="80%" height={24} style={{ marginTop: '10px' }} />
          <Skeleton variant="text" width="100%" height={20} style={{ marginTop: '5px' }} />
          <Skeleton variant="text" width="60%" height={20} style={{ marginTop: '5px' }} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="blog-list container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>
      
      {/* Render actual blog data */}
      {blogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a href={`/blogs/${blog.id}`} className="text-blue-500 hover:underline">Read More</a>
            </div>
          ))}
        </div>
      )}

      {/* Always render skeleton loader */}
      {renderSkeleton(6)}

      {/* Error message */}
      {/* {error && <p className="text-red-500 mt-4">{error}</p>} */}

      {/* No blogs available message */}
      {!loading && blogs.length === 0 && !error && (
        <p className="text-gray-500 mt-4">No blogs available</p>
      )}
    </div>
  );
};

export default BlogList;