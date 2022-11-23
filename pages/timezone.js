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
  const { events } = getAllEventsDummy();

  return (
    <>
      <h1 className="text-4xl">
        Could you send a screenshot which Dates + Times you see?{" "}
      </h1>
      <ul>
        {upcomingEventsAsc.map((event) => {
          const CALENDAR_EVENT = {
            title: event.event_title,
            description: event.event_description,
            startDate: new Date(event.event_gmt_date),
            endDate: new Date(event.event_gmt_end_date),
            durationInMinutes: 120,
            address: event.full_address,
          };

          const leDate = new Date(event.event_local_date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" })



          return (
            <li key={event.id}>
              <div className="h-10 w-full pr-4 pl-4 grid lg:grid-cols-6 grid-cols-4 items-center lg:text-2xl text-xs bg-red-200">
                <div className="col-span-2 bg-green-200">
                  <a
                    className="hover:underline "
                    target={"_blank"}
                    href={event.event_link}
                  >
                    {event.event_title}
                  </a>
                </div>
                <div className="lg:block hidden col-span-2"> 
                {/* https://codesandbox.io/s/8g6dl?file=/src/AddToCalendarButton/AddToCalendarButton.tsx:0-911 */}

                <p>{leDate}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  const { upcomingEventsAsc, pastEventsDesc, featuredEvents } =
    await getAllEvents();

  upcomingEventsAsc.forEach((event) => {
    event.event_date = event.event_date.toISOString().substring(0, 10);
  });

  pastEventsDesc.forEach((event) => {
    event.event_date = event.event_date.toISOString().substring(0, 10);
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
      featuredEvents,
    },
    revalidate: 10,
  };
}
