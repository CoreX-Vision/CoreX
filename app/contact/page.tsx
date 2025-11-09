"use client";
import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiChevronUp,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";
import ContactForm from "../components/ContactForm";

// Add this at the top of your file if not already
const countries = [{ code: "US" }, { code: "UK" }, { code: "LK" }];

const ContactPage = () => {
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
    setTimeout(() => setToast(null), 3000); // disappear after 3 seconds
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

  const handleCountryChange = (e: any) => {
    const selected = e.target.value;
    setCountry(countries.find((c) => c.code === selected)?.code || "LK");
    setOpen(false);

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
    <div className="w-full min-h-screen justify-center items-center">
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

      <div className="flex w-full flex-wrap-reverse lg:flex-nowrap justify-between py-20 items-start px-6 gap-6 lg:px-20 lg:gap-20">
        {/* left container */}
        <div className="lg:w-1/4 sticky top-0 flex flex-col  pt-30 py-[20px] justify-center items-start gap-10">
          <div className="flex flex-col w-full h-full justify-center items-start gap-2">
            <p className="text-[16px] font-bold text-text dark:text-white">
              Chat with us
            </p>
            <p className="text-[14px] font-normal text-core-gray dark:text-off-white/70">
              Speak to our friendly team via live chat
            </p>
            <a
              className="text-[14px] font-normal text-text  dark:text-off-white/70 flex items-center gap-2"
              href="https://www.facebook.com/profile.php?id=61582481331680"
              target="_blank"
            >
              <FiFacebook />
              Facebook
            </a>
            <a
              className="text-[14px] font-normal text-text  dark:text-off-white/70 flex items-center gap-2"
              href="https://www.instagram.com/corex_vision/"
              target="_blank"
            >
              <FiInstagram />
              Instagram
            </a>
            <a
              className="text-[14px] font-normal text-text  dark:text-off-white/70 flex items-center gap-2"
              href="https://www.linkedin.com/company/108993044/"
              target="_blank"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col w-full h-full justify-center items-start gap-2">
            <p className="text-[16px] font-bold text-text dark:text-white">
              Call us
            </p>
            <p className="text-[14px] font-normal text-core-gray  dark:text-off-white/70">
              Call our team
            </p>
            <a
              className="text-[14px] font-normal text-text  dark:text-off-white/70 flex items-center gap-2"
              href="tel:+94717841625"
            >
              <FiPhoneCall />
              +94 71 784-1625
            </a>
          </div>

          <div className="flex flex-col w-full h-full justify-center items-start gap-2">
            <p className="text-[16px] font-bold text-text dark:text-white">
              Visit us
            </p>
            <p className="text-[14px] font-normal  dark:text-off-white/70 text-core-gray">
              Chat to us in person at our location
            </p>
            <a
              className="text-[14px] font-normal text-text  dark:text-off-white/70 flex items-center gap-2"
              href="#"
            >
              <FiMapPin />
              Muddiyansage Watta Thalalla Gandara
            </a>
          </div>
        </div>
        {/* right container */}
        <div className="lg:w-3/4 px-6 lg:px-0 flex flex-col justify-center pt-4 lg:pt-30 items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-4">
            Contact Our Team
          </h1>
          <p className="text-gray-500 text-sm font-light text-center max-w-[600px] mb-10 dark:text-off-white/70">
            We build modern and scalable digital solutions that help businesses
            grow. From websites to mobile apps, our focus is on delivering
            performance, design, and reliability with every project.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
