import React, { useState } from "react";
import "../../../App.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    serviceInterestedIn: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending data to a server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      serviceInterestedIn: "",
      message: "",
    });
  };

  const serviceOptions = [
    "BFS Machine",
    "Water Treatment System",
    "Other Service",
  ];

  return (
    <div className="md:ml-0 ml-[20%] md:w-[50%] w-[100%] md:ml-0 max-w-lg mx-auto w-full flex justify-center place-items-center custom-font md:m-10 m-10 md:rounded-[33px] md:border md:p-10 md:border-[#8AA6AA] md:my-4 md:mt-10 md:mb-10 p-4 rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="md:flex md:space-x-4">
          <div className="md:w-1/2 w-3/5">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border border-black rounded-md p-2"
            />
          </div>
          <div className="md:w-1/2 w-3/5">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border border-black rounded-md p-2"
            />
          </div>
        </div>
        <div className="md:flex md:space-x-4">
          <div className="md:w-1/2 w-3/5">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full border border-black rounded-md p-2"
            />
          </div>
          <div className="md:w-1/2 w-3/5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-black rounded-md p-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="serviceInterestedIn">Service Interested In</label>
          <select
            id="serviceInterestedIn"
            name="serviceInterestedIn"
            value={formData.serviceInterestedIn}
            onChange={handleInputChange}
            className="md:w-full w-3/5 border border-black rounded-md p-2"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write here"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            className="md:w-full w-3/5 border border-black rounded-md p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#8AA6AA] text-white px-4 py-2 w-3/5 md:w-full rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
