import AboutGizmoRent from "./AboutGizmoRent";
import BookYourGadgets from "./BookYourGadgets";
import CategorySlider from "./CategorySlider";
import FAQs from "./FAQs";
import FilterBar from "./FilterBar";
import RealTimeBooking from "./RealTimeBooking";
import SimpleSlider from "./SimpleSlider";
import Testimonial from "./Testimonial";
import TopContributor from "./TopContributor";
import TopRented from "./TopRented";

const Home = () => {
  return (
    <div>
      <SimpleSlider></SimpleSlider>
      <main className="space-y-10 max-w-7xl mx-auto">
        <FilterBar />
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
        <TopContributor></TopContributor>
        <AboutGizmoRent></AboutGizmoRent>
        <RealTimeBooking></RealTimeBooking>
        <Testimonial />
        <BookYourGadgets></BookYourGadgets>
        <FAQs />
      </main>
    </div>
  );
};

export default Home;
