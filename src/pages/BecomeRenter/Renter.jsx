import FAQs from "../Home/FAQs";
import Testimonial from "../Home/Testimonial";
import FeaturedRentalItems from "./FeaturedRentalItems";
import FeaturedRentals from "./FeaturedRentals";
import HeroSection from "./HeroSection";
import WhyRentWithUs from "./WhyRentWithUs";


const Renter = () => {
    return (
        <>
            <HeroSection />
            <div className="space-y-24 max-w-7xl mx-auto my-10">
                <WhyRentWithUs />
                <FeaturedRentals />
                <FeaturedRentalItems />
                <Testimonial />
                <FAQs />
            </div>
        </>
    );
};

export default Renter;