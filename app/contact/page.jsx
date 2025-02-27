"use client";

import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [feedbackType, setFeedbackType] = useState("Feedback");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    setError("");

    console.log({
      email,
      feedbackType,
      message,
    });

    alert("Feedback submitted successfully!");

    setEmail("");
    setFeedbackType("Feedback");
    setMessage("");
  };

  return (
    <div
      className="flex"
      style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      
      }}
      
    >
      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="flex flex-col lg:flex-row">
          
          <div className="bg-transparent-800 text-white p-8 rounded-lg lg:w-1/2 lg:mr-4 flex flex-col ">
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Talk!</h2>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Have feedback?</li>
              <li>Found Bad Data?</li>
              <li>Want to see new functionality?</li>
              <li>Anything else ...</li>
            </ul>
            <p className="mb-6 text-lg">We&apos;d love to hear from you!</p>
            
          </div>

          {/* Right Section - Feedback Form */}
          <div className="bg-transparent p-6 rounded-lg lg:w-1/2 lg:ml-4 mt-6 lg:mt-0">
            <h2 className="text-xl font-semibold mb-4">Feedback Form </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-medium font-bold text-white-700">Feedback Type</label>
                <div className="space-y-2">
                  {["Feedback", "Feature Request", "Issue", "Other"].map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="feedbackType"
                        value={type}
                        checked={feedbackType === type}
                        onChange={() => setFeedbackType(type)}
                        className="w-4 h-4"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-medium  font-bold text-white-700">Message</label>
                <textarea
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-gray-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
