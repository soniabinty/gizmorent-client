import {
    AlertTriangle,
    CalendarClock,
    CreditCard,
    FileEdit,
    ShieldCheck,
    Undo2,
    User,
} from "lucide-react";
import React from "react";

const TermsAndCondition = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center text-Primary">Terms & Conditions</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <ShieldCheck className="text-Primary" size={20} />
                    1. Introduction
                </h2>
                <p>
                    Welcome to <strong>Gizmo Rent</strong>. These Terms and Conditions ("Terms") govern your use of
                    our website and rental services. By accessing or using our services, you agree to follow and
                    be bound by these terms.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <User className="text-Primary" size={20} />
                    2. User Responsibilities
                </h2>
                <p>
                    Users must provide accurate details during account creation and are responsible for
                    maintaining the confidentiality of their login credentials. Misuse or fraudulent use may
                    result in account suspension.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <CalendarClock className="text-Primary" size={20} />
                    3. Rental Terms
                </h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>All gadgets are rented on a per-day basis unless otherwise stated.</li>
                    <li>Devices must be returned in the same condition they were received.</li>
                    <li>Late returns may incur additional charges as per the delay period.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <CreditCard className="text-Primary" size={20} />
                    4. Payments
                </h2>
                <p>
                    Payments are required before renting via secure, approved payment methods. We ensure all
                    transactions are protected with encrypted gateways for your safety.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Undo2 className="text-Primary" size={20} />
                    5. Cancellations & Refunds
                </h2>
                <p>
                    To get a refund, cancellations must be made at least 24 hours in advance. Refunds are
                    processed within 5–7 business days to the original payment method.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="text-Primary" size={20} />
                    6. Limitation of Liability
                </h2>
                <p>
                    Gizmo Rent shall not be held liable for any indirect or consequential loss. Users must
                    follow all usage and safety instructions while handling rented gadgets.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FileEdit className="text-Primary" size={20} />
                    7. Changes to Terms
                </h2>
                <p>
                    We reserve the right to update or modify these Terms at any time. Continued use of our
                    services implies your acceptance of the revised terms.
                </p>
            </section>
        </div>
    );
};

export default TermsAndCondition;
