import React, { useEffect, useState } from 'react';
import { FaCircle } from "react-icons/fa";
const Tracking = () => {
    // Sample data for the timeline based on your project steps
    const timelineData = [
        {
            time: '19 Mar 09:00 - 19 Mar 10:00',
            status: 'Confram Order',
            description: 'Order prepared for dispatch',
            isCompleted: true,
        },
        {
            time: '19 Mar 10:30 - 19 Mar 11:30',
            status: 'Ready to Deliver ',
            description: 'Order accepted for processing',
            isCompleted: true,
        },
        {
            time: '19 Mar 12:00 - 19 Mar 13:00',
            status: 'On the way',
            description: 'Order ready for final dispatch',
            isCompleted: true,
        },
        {
            time: '19 Mar 14:00 - 19 Mar 15:00', // Current date: March 19, 2025
            status: 'Delivered',
            description: 'Order out for delivery',
            isCompleted: true,
            isCurrent: true,
        },
        {
            time: '19 Mar 14:00 - 19 Mar 15:00', // Current date: March 19, 2025
            status: 'Ranting Timeing',
            description: 'Order out for delivery',
            isCompleted: true,
            isCurrent: true,
        },
        {
            time: '19 Mar 16:00 - 19 Mar 17:00',
            status: 'Return',
            description: 'Return process initiated',
            isCompleted: false,
        },
    ];

    // State to track the current step (optional, for dynamic updates)
    const [currentStep, setCurrentStep] = useState(4); // Set to "Delivery" step

    useEffect(() => {
        // Optional: Simulate progress (remove if not needed)
        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev < timelineData.length ? prev + 1 : prev));
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-100 p-6 flex flex-col sm:py-12 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Tracking</h3>
            <ul className="list-none">
                {timelineData.map((item, index) => {
                    const isLast = index === timelineData.length - 1;
                    const isCurrent = item.isCurrent || index === currentStep - 1;
                    const isCompleted = item.isCompleted;
                    const circleColor = isCurrent
                        ? 'bg-blue-400  text-blue-400'
                        : isCompleted
                            ? 'bg-green-400 text-green-400'
                            : 'bg-gray-400 text-gray-400';

                    return (
                        <li key={index} className="rounded-lg group cursor-pointer">
                            <div className="flex flex-row">
                                <div className="items-center flex flex-col justify-around ">
                                    <div className="border-l-2 h-full border-gray-400"></div>
                                    <div
                                        className={`bg-${circleColor} border-2 border-gray-400 rounded-full flex flex-grow justify-around`}
                                    >
                                        {/* <svg
                                            className="flex-none m-2 w-4 h-4 opacity-0 group-hover:opacity-100"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                            />
                                        </svg> */}
                                        <FaCircle className={`text-${circleColor}`} />
                                    </div>
                                    {!isLast && <div className="border-l-2 h-full border-gray-400"></div>}
                                </div>
                                <div className="flex flex-col group-hover:bg-white ml-2 p-2 pr-6 rounded-xl">
                                    <div className="ml-4 text-xl font-medium">{item.status}</div>
                                    <div className="ml-4 mb-2 text-xs">{item.time}</div>
                                    <div className="ml-4 text-sm">{item.description}</div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Tracking;