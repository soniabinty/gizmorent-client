
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

      <main className="space-y-10 w-11/12 mx-auto max-w-7xl'">


        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
      
        <AboutGizmoRent></AboutGizmoRent>
        <RealTimeBooking></RealTimeBooking>
        <Testimonial />
    <TopContributor></TopContributor>

        <BookYourGadgets></BookYourGadgets>

      </main>
    </div>
  );
};

export default Home;
