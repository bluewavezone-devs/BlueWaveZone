import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-brown)] mb-4">Privacy Policy for Bluewavezone.co.za</h1>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-6"></div>
        <p className="text-gray-600">Effective date: November 1, 2023</p>
      </div>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to Bluewavezone.co.za. We specialize in the industrial extraction of bacteria and facilitate business-to-business introductions. 
            This Privacy Policy outlines our commitment to respecting your privacy and informs you of our practices concerning the collection, 
            use, and disclosure of information gathered through our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Collection of Information</h2>
          <p className="mb-4">
            Bluewavezone.co.za collects information solely with your consent; we require only the information necessary for the 
            fulfilment of our service to you. The types of personal information collected may include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Contact information such as name, company name, address, phone number, and email address.</li>
            <li>Business-related information that assists in the facilitation of business-to-business introductions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Use of Information</h2>
          <p className="mb-4">The information you provide to Bluewavezone.co.za is used to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Facilitate your access to our services and products.</li>
            <li>Communicate with you about inquiries, requests, and other business-related interactions.</li>
            <li>Enhance and tailor our service offerings to meet your business needs.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Disclosure of Information</h2>
          <p className="mb-4">
            Bluewavezone.co.za will not sell, rent, or lease your personal information to others. We will disclose information only under the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>With your explicit consent.</li>
            <li>To comply with valid legal processes such as a search warrant, subpoena, or court order.</li>
            <li>To protect the company's rights and property.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Data Retention</h2>
          <p className="mb-4">
            We will retain your personal information for as long as necessary to provide you with the services you have requested, 
            or as required by law, after which we will ensure that it is disposed of in a secure manner.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Data Security</h2>
          <p className="mb-4">
            Bluewavezone.co.za is committed to protecting the security of your information. We use a variety of security 
            technologies and procedures to help protect your personal information from unauthorized access, use, or disclosure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Request access to the personal information we hold about you.</li>
            <li>Request that we update or correct any information you believe is inaccurate.</li>
            <li>Request that we delete personal information under certain conditions.</li>
            <li>Withdraw your consent for us to use your information at any time, subject to legal or contractual restrictions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Changes to this Privacy Policy</h2>
          <p className="mb-4">
            Bluewavezone.co.za reserves the right to update this privacy policy at any time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Contact Information</h2>
          <p className="mb-4">
            Should you have any questions or concerns about this privacy policy or the handling of your personal information, please contact us at:
          </p>
          <p className="mb-4">
            <a href="mailto:admin@bluewavezone.co.za" className="text-[var(--color-teal)] hover:underline">admin@bluewavezone.co.za</a>
          </p>
          <p className="text-sm text-gray-600">
            By using the Bluewavezone.co.za website, you consent to the data practices described in this policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
