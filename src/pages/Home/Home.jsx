
import AboutGizmoRent from "./AboutGizmoRent";
import BookYourGadgets from "./BookYourGadgets";
import CategorySlider from "./CategorySlider";
import RealTimeBooking from "./RealTimeBooking";
import Testimonial from "./Testimonial";
import TopContributor from "./TopContributor";
import SimpleSlider from "./SimpleSlider";

import TopRented from "./TopRented";


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
        <RealTimeBooking></RealTimeBooking>
        <BookYourGadgets></BookYourGadgets>
      </main>
    </div>
  );
};

export default Home;
