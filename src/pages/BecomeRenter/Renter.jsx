import Benefits from "./benefit";
import FeaturedRentalItems from "./FeaturedRentalItems";
import HeroSection from "./HeroSection";
import WhyRentWithUs from "./WhyRentWithUs";


const Renter = () => {
    return (
        <>
            <HeroSection />
            <div className="space-y-20 max-w-7xl mx-auto my-10">
                <WhyRentWithUs />
                <FeaturedRentalItems />
                <Benefits />
            </div>
        </>
    );
};

export default Renter;