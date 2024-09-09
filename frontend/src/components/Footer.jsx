import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 mt-8 gap-40">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center md:space-x-40 mb-8">
          {/* Quick Links */}
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold mb-2 text-yellow-300 text-2xl">Quick Links</h5>
            <nav className="flex flex-col space-y-2">
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
              <a href="/blog" className="hover:text-gray-400">
                Blog
              </a>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </nav>
          </div>

          {/* Latest Posts */}
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold mb-2 text-yellow-300 text-2xl">Latest Posts</h5>
            <nav className="flex flex-col space-y-2">
              <a href="/post/1" className="hover:text-gray-400">
                The Big Seminar for Your Right Investment
              </a>
              <a href="/post/2" className="hover:text-gray-400">
                The Best Place to Invest Your Money
              </a>
              <a href="/post/3" className="hover:text-gray-400">
                Let’s Build Your Business from Scratch
              </a>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold mb-2 text-yellow-300 text-2xl space-y-10">Contact Us</h5>
            <p className="space-y-10">+977-9814966756</p>
            <p className="">sarvavid2001@gmail.com</p>
            <p className="">Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
      <div className=" text-center text-xl text-yellow-200 ">
        <p>Copyright © {new Date().getFullYear()} . Sarvavid</p>
      </div>
    </footer>
  );
};

export default Footer;
