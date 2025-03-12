import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Testimonial = () => {
    const testimonials = [
        {
            image: img1,
            name: "Avinash Kr",
            position: "Co-Founder at xyz",
            quote: "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing, and Photoshop."
        },
        {
            image: img2,
            name: "John Doe",
            position: "CEO at ABC",
            quote: "This platform has been a game changer for our business. Highly recommended!"
        },
        {
            image: img3,
            name: "Jane Smith",
            position: "Marketing Head at 123 Corp",
            quote: "Fantastic tutorials that helped me improve my skills in web design and marketing."
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
