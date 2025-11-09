// pages/terms-and-conditions.tsx
import React from "react";
import Head from "next/head";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="w-full min-h-screen justify-center items-center">
      <div className="flex w-full flex-wrap-reverse lg:flex-nowrap justify-between py-20 items-start px-6 gap-6 lg:px-20 lg:gap-20">
        <main className="w-full mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6 dark:text-white">
            Terms & Conditions
          </h1>

          <p className="mb-4 dark:text-white">Effective Date: 2025/09/10</p>

          <p className="mb-4 dark:text-white">
            Welcome to CoreX Vision us. By accessing
            our website, you agree to comply with these Terms & Conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            1. Services
          </h2>
          <p className="mb-4 dark:text-white">
            We provide website and mobile application development services.
            Project details, deliverables, timelines, and pricing are agreed
            upon in individual contracts or quotes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            2. Intellectual Property
          </h2>
          <p className="mb-4 dark:text-white">
            All content on this website, including text, graphics, logos, and
            images, is our property or licensed to us. You may not use it
            without our written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            3. Client Responsibilities
          </h2>
          <p className="mb-4 dark:text-white">
            Clients must provide accurate information and timely feedback for
            project execution. Delays caused by the client may affect project
            timelines.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            4. Payment Terms
          </h2>
          <p className="mb-4 dark:text-white">
            Payment terms are outlined in each contract. Non-payment may result
            in suspension of services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            5. Limitation of Liability
          </h2>
          <p className="mb-4 dark:text-white">
            We are not liable for indirect, incidental, or consequential damages
            arising from using our services or website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            6. Third-Party Links
          </h2>
          <p className="mb-4 dark:text-white">
            Our website may contain links to third-party websites. We are not
            responsible for the content or practices of these external sites.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            7. Termination
          </h2>
          <p className="mb-4 dark:text-white">
            We reserve the right to terminate services if clients violate these
            Terms & Conditions or fail to meet payment obligations.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            8. Governing Law
          </h2>
          <p className="mb-4 dark:text-white">
            These Terms are governed by the laws of [Your Country/State].
            Disputes will be resolved in the competent courts of [Your
            Country/State].
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            9. Changes to Terms
          </h2>
          <p className="mb-4 dark:text-white">
            We may update these Terms & Conditions periodically. Updated
            versions will be posted on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
            10. Contact
          </h2>
          <p className="dark:text-white">
            For questions regarding these Terms & Conditions, email{" "}
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

export default TermsAndConditions;
