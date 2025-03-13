import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Testimonial = () => {
    const testimonials = [
        {
            image: img1,
            name: "Anay Kr",
            position: "Co-Founder at xyz",
            quote: "Explore the world of rental gadgets and unlock new possibilities. Drop your questions in the comments, and don't forget to subscribe to our channel for more updates on rental services, tech tips, and more!"
        },
        {
            image: img2,
            name: "Jamie Doe",
            position: "CEO at ABC",
            quote: "Need a gadget for a short time? We've got you covered! Ask us anything in the comments and make sure to subscribe for more insights on the best gadgets, rental tips, and tech trends."
        },
        {
            image: img3,
            name: "Jane Smith",
            position: "Marketing Head at 123 Corp",
            quote: "Rent smarter, not harder! Have questions? Leave them in the comments, and subscribe for more videos on how our gadget rental marketplace can make your life easier."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {testimonials.map((info, index) => (
                <div key={index} className="max-w-sm mx-auto bg-base-200 shadow-lg rounded-lg p-6 text-center relative">
                    <img 
                        className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md absolute -top-8 left-1/2 transform -translate-x-1/2" 
                        src={info.image} 
                        alt={info.name} 
                    />
                  
                    <div className="mt-8">
                        <p className="text-gray-600">
                            <span className="text-yellow-500 text-2xl font-bold">“</span>
                            {info.quote}
                            <span className="text-yellow-500 text-2xl font-bold">”</span>
                        </p>
                        <h3 className="mt-4 font-semibold text-lg text-gray-800">{info.name}</h3>
                        <p className="text-gray-500 text-sm">{info.position}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonial;
