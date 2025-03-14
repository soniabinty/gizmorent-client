
import AboutGizmoRent from "./AboutGizmoRent";
import CategorySlider from "./Categories";
import RealTimeBooking from "./RealTimeBooking";
import Testimonial from './Testimonial';
import TopContributor from "./TopContributor";
import TopRented from "./TopRented";

const Home = () => {
  return (
    <div>
      <main className="md:mx-12">
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
        <TopContributor></TopContributor>
        <AboutGizmoRent></AboutGizmoRent>
        <RealTimeBooking></RealTimeBooking>
        <Testimonial />
      </main>
    </div>
  );
};

export default Home;
