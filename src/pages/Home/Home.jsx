
import AboutGizmoRent from "./AboutGizmoRent";
import BookYourGadgets from "./BookYourGadgets";
import CategorySlider from "./CategorySlider";
import RealTimeBooking from "./RealTimeBooking";

import TopContributor from "./TopContributor";
import TopRented from "./TopRented";
import Testimonial from "./Testimonial";

import SimpleSlider from "./SimpleSlider";





const Home = () => {
  return (
    <div>



        <SimpleSlider></SimpleSlider>

      <main className="space-y-10">


        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
        <TopContributor></TopContributor>
        <AboutGizmoRent></AboutGizmoRent>
        <RealTimeBooking></RealTimeBooking>
        <Testimonial />
  
        <BookYourGadgets></BookYourGadgets>

      </main>
    </div>
  );
};

export default Home;
