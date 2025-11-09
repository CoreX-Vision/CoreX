"use client";
import React, { useState } from "react";
import { FiArrowUpRight, FiChevronUp } from "react-icons/fi";

const countries = [{ code: "US" }, { code: "UK" }, { code: "LK" }];

interface ContactFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: string; message: string } | null>(
    null
  );
  const [country, setCountry] = useState("LK");
  const [open, setOpen] = useState(false);
  const [phonePlaceholder, setPhonePlaceholder] = useState("+94 71 234 5678");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const selected = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: selected };
    });
  };

  const handleCountryChange = (selected: string) => {
    setCountry(selected);
    setOpen(false);
    switch (selected) {
      case "US":
        setPhonePlaceholder("+1 (555) 000-0000");
        break;
      case "UK":
        setPhonePlaceholder("+44 7123 456789");
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
      showToast("Please fill in all required fields.", "error");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/sendContactEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, country }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        showToast("Message sent successfully!", "success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          services: [],
        });
        onSuccess?.();
      } else {
        showToast("Failed to send message: " + data.message, "error");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      showToast("Something went wrong. Please try again later.", "error");
    }
  };


  return (
    <div className="relative w-full">
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="loader border-t-4 border-b-4 border-white rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg text-white ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      <form
        className="w-full flex flex-col gap-6 dark:bg-dark-800"
        onSubmit={handleSubmit}
      >
        {/* First and Last Name */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-black dark:text-off-white/70 mb-1">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="border border-gray-300 dark:border-white/10 dark:text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-black dark:text-off-white/70 mb-1">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="border border-gray-300 dark:border-white/10 dark:text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-black dark:text-off-white/70 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="border border-gray-300 dark:border-white/10 dark:text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-black dark:text-off-white/70 mb-1">
            Phone number
          </label>
          <div className="flex gap-3">
            <div className="relative w-24 lg:w-20">
              <button
                type="button"
                className="w-full border border-gray-300 dark:border-white/10 dark:text-white rounded-lg p-3 text-sm flex justify-between items-center"
                onClick={() => setOpen(!open)}
              >
                {country}
                <FiChevronUp
                  className={`transform ${
                    open ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </button>
              {open && (
                <ul className="absolute z-10 mt-1 w-full text-center bg-white dark:bg-dark-800 border border-gray-300 dark:border-white/10 rounded-lg shadow-lg">
                  {countries.map((c) => (
                    <li
                      key={c.code}
                      className="p-3 text-sm hover:bg-primary/10 dark:hover:bg-primary/20 cursor-pointer"
                      onClick={() => handleCountryChange(c.code)}
                    >
                      {c.code}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={phonePlaceholder}
              className="border border-gray-300 dark:border-white/10 dark:text-white rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-black dark:text-off-white/70 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Leave us a message..."
            className="border border-gray-300 dark:border-white/10 dark:text-white rounded-lg p-3 text-sm min-h-[150px] focus:outline-none focus:ring-2 focus:ring-primary/40"
          ></textarea>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3 w-[200px]">
          <label className="text-sm text-black dark:text-off-white/70">
            Services
          </label>
          <div className="grid gap-3">
            {["Website design", "UX design", "Mobile App"].map((service) => (
              <label
                key={service}
                className="flex items-center gap-2 text-sm dark:text-off-white"
              >
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceChange(service)}
                  className="dark:accent-primary accent-black cursor-pointer w-4 h-4"
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black w-full lg:w-1/4 dark:bg-white dark:text-black group flex justify-center items-center text-white py-3 rounded-lg font-medium hover:bg-primary transition-all duration-500 cursor-pointer"
        >
          Send message
          <FiArrowUpRight className="ml-2 transform transition-transform duration-300 group-hover:rotate-45" />
        </button>

        {onClose && (
          <button
            type="button"
            className="absolute -top-4 cursor-pointer right-0 text-gray-500 hover:text-black dark:hover:text-white"
            onClick={onClose}
          >
            ✕
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
