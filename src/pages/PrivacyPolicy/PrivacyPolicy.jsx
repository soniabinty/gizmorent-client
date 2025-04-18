import React from "react";
import { HiOutlineCog, HiOutlineDocumentText, HiOutlineInformationCircle, HiOutlineLockClosed, HiOutlineMailOpen, HiOutlineRefresh, HiOutlineShieldCheck, HiOutlineUserGroup } from "react-icons/hi";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-3xl font-bold text-[#ff6b00] mb-10 text-center flex items-center justify-center gap-2">
                <HiOutlineShieldCheck className="text-4xl text-[#ff6b00]" />
                Privacy Policy
            </h1>

            {/* Intro */}
            <section className="mb-8">
                <p className="text-lg">
                    At <strong>Gizmo Rent</strong>, we are committed to protecting your personal information and your
                    right to privacy. This Privacy Policy outlines how we collect, use, and safeguard your data when you
                    visit our website or use our services.
                </p>
            </section>

            {/* Section 1 */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <HiOutlineInformationCircle className="text-[#ff6b00]" />
                    1. Information We Collect
                </h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Personal data such as name, email address, and contact number.</li>
                    <li>Rental history and transaction details.</li>
                    <li>Technical data such as IP address, browser type, and usage behavior.</li>
                </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <HiOutlineCog className="text-[#ff6b00]" />
                    2. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Provide and improve our rental services.</li>
                    <li>Communicate with you regarding orders or inquiries.</li>
                    <li>Send promotional or service-related emails (with your consent).</li>
                </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <HiOutlineUserGroup className="text-[#ff6b00]" />
                    3. Sharing Your Data
                </h2>
                <p>
                    We do not sell or rent your personal data. However, we may share your information with third-party
                    service providers who assist in operations like payment processing and customer support, under strict
                    confidentiality agreements.
                </p>
            </section>

            {/* Section 4 */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <HiOutlineLockClosed className="text-[#ff6b00]" />
                    4. Data Security
                </h2>
                <p>
                    We implement appropriate security measures to protect your personal data from unauthorized access,
                    alteration, disclosure, or destruction.
                </p>
            </section>

            {/* Section 5 */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <HiOutlineDocumentText className="text-[#ff6b00]" />
                    5. Your Rights
                </h2>
                <p>
                    You have the right to access, correct, or delete your personal data. You may also opt out of receiving
                    promotional emails at any time.
                </p>
            </section>

            {/* Section 6 */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <HiOutlineCog className="text-[#ff6b00]" />
                    6. Cookies
                </h2>
                <p>
                    We use cookies to enhance your experience and analyze site traffic. You can manage cookie preferences
                    through your browser settings.
                </p>
            </section>

            {/* Section 7 */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <HiOutlineRefresh className="text-[#ff6b00]" />
                    7. Changes to This Policy
                </h2>
                <p>
                    We may update this Privacy Policy occasionally to reflect changes in our practices or legal
                    requirements. Updated versions will be posted on this page.
                </p>
            </section>

            {/* Section 8 */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <HiOutlineMailOpen className="text-[#ff6b00]" />
                    8. Contact Us
                </h2>
                <p>
                    If you have any questions about this Privacy Policy, feel free to contact us at{" "}
                    <a href="mailto:support@gizmorent.com" className="text-[#ff6b00] underline">
                        support@gizmorent.com
                    </a>
                    .
                </p>
            </section>


        </div>
    );
};

export default PrivacyPolicy;
