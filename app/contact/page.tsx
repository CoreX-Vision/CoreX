"use client";
import React, { useState } from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";

const ContactPage = () => {
  const [country, setCountry] = useState("LK");
  const [phonePlaceholder, setPhonePlaceholder] = useState("+94 71 234 5678");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });

  // ✅ Update text inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Update checkbox values
  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const selected = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: selected };
    });
  };

  const handleCountryChange = (e: any) => {
    const selected = e.target.value;
    setCountry(selected);

    switch (selected) {
      case "US":
        setPhonePlaceholder("+1 (555) 000-0000");
        break;
      case "UK":
        setPhonePlaceholder("+44 7123 456789");
        break;
      case "LK":
        setPhonePlaceholder("+94 71 234 5678");
        break;
      default:
        setPhonePlaceholder("+94 71 234 5678");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, country }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          services: [],
        });
      } else {
        alert("Failed to send message: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-full lg:w-[60%] px-6 lg:px-0 py-20 flex flex-col justify-center items-center pt-30 gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
          Contact Our Team
        </h1>
        <p className="text-gray-500 font-light text-center max-w-[600px] mb-10">
          We build modern and scalable digital solutions that help businesses
          grow. From websites to mobile apps, our focus is on delivering
          performance, design, and reliability with every project.
        </p>

        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full">
              <label className="text-sm text-black mb-1">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm text-black mb-1">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm text-black mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm text-black mb-1">Phone number</label>
            <div className="flex gap-3">
              <select
                className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={country}
                onChange={handleCountryChange}
              >
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="LK">LK</option>
              </select>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={phonePlaceholder}
                className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm text-black mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave us a message..."
              className="border border-gray-300 rounded-lg p-3 text-sm min-h-[150px] focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <label className="text-sm text-black">Services</label>
            <div className="grid gap-3">
              {["Website design", "UX design", "Mobile App"].map(
                (service, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-black"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    {service}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all mt-4"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Footer Info Section */}
      <div className="w-full flex flex-col md:flex-row px-6 gap-6 lg:px-20 py-[20px] justify-center items-start">
        <div className="flex flex-col w-full h-full justify-center items-start gap-2">
          <p className="text-[16px] font-bold text-text">Chat with us</p>
          <p className="text-[14px] font-normal text-core-gray">
            Speak to our friendly team via live chat
          </p>
          <a
            className="text-[14px] font-normal text-text flex items-center gap-2"
            href="https://www.facebook.com/profile.php?id=61579803335718"
            target="_blank"
          >
            <FiFacebook />
            Facebook
          </a>
          <a
            className="text-[14px] font-normal text-text flex items-center gap-2"
            href="https://www.instagram.com/corex_vision/"
            target="_blank"
          >
            <FiInstagram />
            Instagram
          </a>
          <a
            className="text-[14px] font-normal text-text flex items-center gap-2"
            href="https://www.linkedin.com/company/108993044/"
            target="_blank"
          >
            <FiLinkedin />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col w-full h-full justify-center items-start gap-2">
          <p className="text-[16px] font-bold text-text">Call us</p>
          <p className="text-[14px] font-normal text-core-gray">
            Call our team
          </p>
          <a
            className="text-[14px] font-normal text-text flex items-center gap-2"
            href="tel:+94717841625"
          >
            <FiPhoneCall />
            +94 71 784-1625
          </a>
        </div>

        <div className="flex flex-col w-full h-full justify-center items-start gap-2">
          <p className="text-[16px] font-bold text-text">Visit us</p>
          <p className="text-[14px] font-normal text-core-gray">
            Chat to us in person at our location
          </p>
          <a
            className="text-[14px] font-normal text-text flex items-center gap-2"
            href="#"
          >
            <FiMapPin />
            Muddiyansage Watta Thalalla Gandara
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
