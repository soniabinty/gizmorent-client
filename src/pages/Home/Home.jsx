import AboutGizmoRent from "./AboutGizmoRent";
import BookYourGadgets from "./BookYourGadgets";
import CategorySlider from "./CategorySlider";

import TopRented from "./TopRented";
import Testimonial from "./Testimonial";
import FAQs from "./FAQs";

import RealTimeBooking from "./RealTimeBooking";
import SimpleSlider from "./SimpleSlider";
import TopContributor from "./TopContributor";
import DealsOfTheDay from "./DealsOfTheDay";

const Home = () => {
  return (
    <div className="relative ">
      <SimpleSlider></SimpleSlider>
      <main className="space-y-10 w-11/12 mx-auto max-w-7xl">
     
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
    <DealsOfTheDay></DealsOfTheDay>    
<RealTimeBooking></RealTimeBooking>

        <AboutGizmoRent></AboutGizmoRent>
        
        <TopContributor></TopContributor>
        <Testimonial></Testimonial>

        <BookYourGadgets></BookYourGadgets>
        <FAQs />
      </main>
    </div>
  );
};

export default Home;
