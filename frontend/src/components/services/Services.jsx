import React, { useState, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/services");
        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setError("Unexpected data format received");
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const renderSkeleton = (count) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md">
          <Skeleton variant="rectangular" width="100%" height={150} />
          <Skeleton variant="text" width="80%" height={24} style={{ marginTop: "10px" }} />
          <Skeleton variant="text" width="100%" height={20} style={{ marginTop: "5px" }} />
          <Skeleton variant="text" width="60%" height={20} style={{ marginTop: "5px" }} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="services-list container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>

      {/* Render skeleton loader while loading */}
      {loading && renderSkeleton(6)}

      {/* Error message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Render actual service data when loading is done */}
      {!loading && services.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.map((service) => (
            <div key={service.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={`/services/${service.id}`} className="text-blue-500 hover:underline">Read More</a>
            </div>
          ))}
        </div>
      )}

      {/* No services available message */}
      {!loading && services.length === 0 && !error && (
        <p className="text-gray-500 mt-4">No services available</p>
      )}
    </div>
  );
};

export default Services;
