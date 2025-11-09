// pages/privacy-policy.tsx
import React from "react";
import Head from "next/head";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full min-h-screen justify-center items-center">
      <div className="flex w-full flex-wrap-reverse lg:flex-nowrap justify-between py-20 items-start px-6 gap-6 lg:px-20 lg:gap-20">
        <main className="w-full mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6 dark:text-white">
            Privacy Policy
          </h1>

          <p className="mb-4 dark:text-white">Effective Date: 2025/09/10</p>

          <p className="mb-4 dark:text-white">
            CoreX Vision we respects your privacy.
            This Privacy Policy explains how we collect, use, and protect the
            information you provide on our website and related services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            1. Information We Collect
          </h2>
          <ul className="list-disc ml-6 mb-4 dark:text-white">
            <li>
              Personal Information: Name, email, phone number, company details
              you provide via contact forms or project inquiries.
            </li>
            <li>
              Non-Personal Information: Browser type, IP address, device
              information, cookies, and analytics data.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 mb-4 dark:text-white">
            <li>To respond to inquiries and provide our services.</li>
            <li>To improve our website and services.</li>
            <li>
              To send updates, newsletters, or marketing materials (if
              consented).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            3. Cookies and Tracking
          </h2>
          <p className="mb-4 dark:text-white">
            We use cookies and similar technologies to enhance user experience,
            analyze website traffic, and improve our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            4. Sharing Your Information
          </h2>
          <p className="mb-4 dark:text-white">
            We do not sell or rent your personal information. We may share your
            data with trusted service providers who help us operate our
            business, but only for legitimate business purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            5. Data Security
          </h2>
          <p className="mb-4 dark:text-white">
            We implement reasonable security measures to protect your data, but
            no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            6. Your Rights
          </h2>
          <p className="mb-4 dark:text-white">
            Depending on your location, you may have the right to access,
            correct, or delete your personal data. Contact us at
            [email@example.com] for any requests.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            7. Changes to this Policy
          </h2>
          <p className="mb-4 dark:text-white">
            We may update this Privacy Policy occasionally. Updated versions
            will be posted on this page with the effective date.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            8. Contact Us
          </h2>
          <p className="dark:text-white">
            If you have questions about this policy, email us at{" "}
            <a
              href="mailto:corexvision99@gmail.com"
              className="text-primary underline"
            >
              corexvision99@gmail.com
            </a>
            .
          </p>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
