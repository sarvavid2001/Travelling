import React, { useState, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/blogs");
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setError("Unexpected data format received");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const renderSkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-20">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row gap-4 border p-4 rounded-lg shadow-md"
        >
          {/* Skeleton for Image */}
          <div className="w-full ">
            <Skeleton
              variant="rectangular"
              className="custom-skeleton"
              height={500}
            />
          </div>

          {/* Skeleton for Text */}
          <div className="flex flex-col justify-center w-full ">
            <Skeleton variant="text" width="80%" height={32} />
            <Skeleton
              variant="text"
              width="100%"
              height={28}
              style={{ marginTop: "12px" }}
            />
            <Skeleton
              variant="text"
              width="60%"
              height={28}
              style={{ marginTop: "12px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="blog-list ">
      {/* Blog Section */}
      <div className="px-10 py-16">
        <h2 className="text-2xl lg:text-4xl font-bold mb-12 text-center">
          Travel Essentials Tips
        </h2>

        {/* Render actual blog data */}
        <div className="max-w-[1080px]  text-center grid grid-cols-1 lg:grid-cols-2 gap-20">
          {(loading || error) && renderSkeleton()}

          {blogs.length > 0 &&
            blogs.map((blog, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-6 bg-white border p-8 rounded-lg shadow-lg"
              >
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full lg:w-1/2 h-120 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-center lg:w-1/2">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg lg:text-xl">
                    {blog.description}
                  </p>
                  <a
                    href={`/blogs/${blog.id}`}
                    className="text-blue-500 hover:underline text-lg lg:text-xl"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}

          {!loading && blogs.length === 0 && !error && (
            <p className="text-gray-500 mt-4 text-center">No blogs available</p>
          )}
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 mt-6 text-center text-xl">{error}</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
