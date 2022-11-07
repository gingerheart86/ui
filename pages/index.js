import { getAllEvents } from "../dummy-data";

import HeroSection from "../components/sections/hero/sectionhero";
import FeaturedSection from "../components/sections/featured/sectionfeatured";
import AllEventsSection from "../components/sections/allevents/sectionallevents";
import ResourcesSectionOne from "../components/sections/resources/sectionresources-1";
import ResourcesSectionTwo from "../components/sections/resources/sectionresources-2";
import VideoSection from "../components/sections/videos/sectionvideos";
import ContributeSection from "../components/sections/ contribute/sectioncontribute";
import ContributorsSection from "../components/sections/ contribute/sectioncontributors";
import PartnerLogoSection from "../components/sections/partners/sectionpartners";


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