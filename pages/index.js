import { getAllEvents } from "../services/sort-event-data";
import { getAllEventsDummy } from "../dummy-data";

import HeroSection from "../components/sections/hero/s-hero";
import AllEventsSection from "../components/sections/allevents/s-allevents";
import ResourcesSectionOne from "../components/sections/resources/s-resources";
import ResourcesSectionTwo from "../components/sections/resources/s-resources2";
import VideoSection from "../components/sections/videos/sectionvideos";
import ContributeSection from "../components/sections/ contribute/s-contribute";
import ContributorsSection from "../components/sections/ contribute/s-contributors";
import PartnerLogoSection from "../components/sections/partners/s-partners";
import Footer from "../components/sections/footer/footer";
import FeaturedSection from "../components/sections/featured/s-featured";
import FeaturedSectionMobile from "../components/sections/featured/s-featured-mobile";


export default function Home(props) {
  const { upcomingEventsAsc, pastEventsDesc, featuredEvents } = props;
  const {events} = getAllEventsDummy();

  return (
    <>
      <HeroSection />
      <FeaturedSection featuredEvents={featuredEvents}/>
      <FeaturedSectionMobile featuredEvents={featuredEvents}/>
      <AllEventsSection upComingEvents={upcomingEventsAsc} pastEvents={pastEventsDesc}/>
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

export async function getStaticProps(context) {
  const { upcomingEventsAsc, pastEventsDesc, featuredEvents } = await getAllEvents();

  upcomingEventsAsc.forEach((event) => {
    event.event_date = event.event_date.toISOString().substring(0, 10);
    event.event_local_date = new Date(
      event.event_local_date
    ).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  });

  pastEventsDesc.forEach((event) => {
    event.event_date = event.event_date.toISOString().substring(0, 10);
    event.event_local_date = new Date(
      event.event_local_date
    ).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  });

  if (!pastEventsDesc) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  return {
    props: {
      upcomingEventsAsc,
      pastEventsDesc,
      featuredEvents
    },
    revalidate: 10,
  };
}