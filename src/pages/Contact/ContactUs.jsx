import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");
    const [time, setTime] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        const currentTime = new Date().toLocaleString("en-BD", {
            timeZone: "Asia/Dhaka"
        });
        form.current.time.value = currentTime;
        setTime(currentTime);
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_USER_ID,

            )
            .then(
                () => {
                    setStatus("SUCCESS");
                    form.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    setStatus("FAILED");
                }
            );
    };

    return (
        <section className="" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="text-center mb-12">
                    <p className="text-base font-semibold uppercase tracking-wide text-sky-600">
                        Contact
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Let us know how we can help you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left: Contact Info */}
                    <div>
                        <p className="text-lg text-gray-600 mb-8">
                            Reach out to us for rentals, support, or general inquiries.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex">
                                <div className="h-10 w-10 flex items-center justify-center rounded bg-Primary text-white text-lg">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Our Address
                                    </h3>
                                    <p className="text-gray-600">House 42, Road 8, Dhanmondi</p>
                                    <p className="text-gray-600">Dhaka 1209, Bangladesh</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="h-10 w-10 flex items-center justify-center rounded bg-Primary text-white text-lg">
                                    <FaPhoneAlt />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                    <p className="text-gray-600">Mobile: +880 1777-123456</p>
                                    <p className="text-gray-600">Email: support@gizmorent.com</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="h-10 w-10 flex items-center justify-center rounded bg-Primary text-white text-lg">
                                    <FaClock />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Working Hours
                                    </h3>
                                    <p className="text-gray-600">Saturday - Thursday: 10AM - 8PM</p>
                                    <p className="text-gray-600">Friday: Closed</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white p-6 md:p-10 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">
                            Ready to Get Started?
                        </h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="w-full mb-4 rounded border border-gray-300 py-2 px-4"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                required
                                className="w-full mb-4 rounded border border-gray-300 py-2 px-4"
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Write your message..."
                                required
                                className="w-full mb-4 rounded border border-gray-300 py-2 px-4"
                            ></textarea>
                            <input type="hidden" name="time" value={time} />

                            <button
                                type="submit"
                                className="w-full bg-Primary hover:bg-sky-700 text-white py-3 font-semibold rounded-md transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Status Message */}
                        {status === "SUCCESS" && (
                            <p className="mt-4 text-green-600">Message sent successfully!</p>
                        )}
                        {status === "FAILED" && (
                            <p className="mt-4 text-red-600">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
