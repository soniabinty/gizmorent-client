import React from 'react';

const FAQSection = () => {
    return (
        <div className="flex justify-center items-center mb-20 p-4">
            <div className="bg-gray-50 px-8 py-16 rounded-xl w-full max-w-6xl text-center">
                <div className="flex justify-center -space-x-2 mb-4">
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co.com/h25Mptp/abnahid.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co.com/h25Mptp/abnahid.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co.com/h25Mptp/abnahid.jpg" />
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-gray-200 text-gray-800 w-12">
                                <span>+99</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Still have questions?</h2>
                <p className="text-gray-600 mt-5">
                    Can't find the answer you're looking for? Our friendly support team is here to help.
                </p>
                <button className="mt-7 bg-Primary text-white py-2 px-4 rounded-lg hover:bg-orange-600">
                    Get in touch
                </button>
            </div>
        </div>
    );
};

export default FAQSection;