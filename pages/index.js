import { getAllEvents } from "../dummy-data";

import HeroSection from "../components/sections/hero/s-hero";
import FeaturedSection from "../components/sections/featured/s-featured";
import AllEventsSection from "../components/sections/allevents/s-allevents";
import ResourcesSectionOne from "../components/sections/resources/s-resources";
import ResourcesSectionTwo from "../components/sections/resources/s-resources2";
import VideoSection from "../components/sections/videos/sectionvideos";
import ContributeSection from "../components/sections/ contribute/s-contribute";
import ContributorsSection from "../components/sections/ contribute/s-contributors";
import PartnerLogoSection from "../components/sections/partners/s-partners";
import Footer from "../components/sections/footer/footer";
import Backdrop from "../components/modal/backdrop";
import Modal from "../components/modal/modal";


export default function Home(props) {
  const { events } = props;
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <AllEventsSection events={events} />
      <ResourcesSectionOne />
      <ResourcesSectionTwo />
      <VideoSection />
      <ContributeSection />
      <ContributorsSection events={events}/>
      <PartnerLogoSection />
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const events = getAllEvents();
  return {
    props: {
      events: events,
    },
  };
}