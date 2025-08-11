import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-brown)] mb-4">Terms of Use for Bluewavezone.co.za</h1>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-6"></div>
        <p className="text-gray-600">Effective date: November 1, 2023</p>
      </div>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using Bluewavezone.co.za, you accept and agree to be bound by the terms and provision of this agreement. 
            In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules 
            applicable to such services. Any participation in this service will constitute acceptance of this agreement. 
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Service Description</h2>
          <p className="mb-4">
            Bluewavezone.co.za provides a business-to-business platform focusing on the industrial extraction of bacteria. 
            Our services facilitate introductions and interactions between businesses in this industry.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">User Obligations</h2>
          <p className="mb-4">
            You agree to use Bluewavezone.co.za only for lawful purposes and in a way that does not infringe the rights of, 
            restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or 
            causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting 
            the normal flow of dialogue within Bluewavezone.co.za.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Our Privacy Policy, as it may change from time to time, is a part of these Terms of Use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">User Accounts</h2>
          <p className="mb-4">
            If you create an account on Bluewavezone.co.za, you are responsible for maintaining the security of your account, 
            and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Intellectual Property Rights</h2>
          <p className="mb-4">
            All content included on the Site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, 
            and software, is the property of Bluewavezone.co.za or its content suppliers and protected by international 
            copyright and intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Termination of Use</h2>
          <p className="mb-4">
            You agree that we may, at our sole discretion, suspend or terminate your access to all or part of our website 
            and resources with or without notice and for any reason, including, without limitation, breach of these Terms of Use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Governing Law</h2>
          <p className="mb-4">
            These Terms of Use and any dispute or claim arising out of, or related to them, shall be governed by and 
            construed in accordance with the internal laws of the Republic of South Africa without giving effect to 
            any choice or conflict of law provision or rule.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Changes to Terms</h2>
          <p className="mb-4">
            Bluewavezone.co.za reserves the right, in its sole discretion, to change the Terms under which 
            Bluewavezone.co.za is offered. The most current version of the Terms will supersede all previous versions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-brown)] mb-4">Contact Information</h2>
          <p className="mb-4">
            Bluewavezone.co.za welcomes your questions or comments regarding the Terms:
          </p>
          <p className="mb-4">
            <a href="mailto:admin@bluewavezone.co.za" className="text-[var(--color-teal)] hover:underline">admin@bluewavezone.co.za</a>
          </p>
          <p className="text-sm text-gray-600 font-medium">
            By using Bluewavezone.co.za's services or accessing the Bluewavezone.co.za website, you acknowledge that 
            you have read these terms and agree to be bound by them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
