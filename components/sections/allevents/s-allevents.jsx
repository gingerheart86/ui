import AddToCalendarButton from "./AddToCalendarButton/AddToCalendarButton";
import EmailandEventCalForm from "../../modal-and-forms/email-event-cal-form";

function AllEventsSection(props) {
  const { upComingEvents, pastEvents } = props;

  return (
    <section id="events">
      <div className="p-4 flex items-end pb-10">
        <div className="lg:w-2/4 h-[70%] flex flex-col justify-between">
          <h2 className="lg:text-4xl text-xl py-10">
            All Events in your local time{" "}
          </h2>
          <p className="text-lg">
            DeSci global is the global hub for all DeSci events; a schelling
            point to collect, share, and uplift all DeSci events across the
            globe. Explore the events that have happened and get involved with
            new ones coming up.
          </p>
        </div>
      </div>
      <div className="lg:bg-desciblue bg-descigrey w-full pr-4 pl-4 h-10 grid lg:grid-cols-6 grid-cols-2 items-center lg:text-white text-lg">
        <div className="lg:col-span-3 ">UPCOMING</div>
        <div className="lg:block hidden">LOCATION</div>
        <div className="lg:block hidden">TYPE</div>
        <div className="lg:block flex justify-end">DATE</div>
      </div>
      <div className="pt-4 pb-4">
        <ul>
          {upComingEvents.map((event) => {
            const CALENDAR_EVENT = {
              title: event.event_title,
              description: event.event_description,
              startDate: new Date(event.event_gmt_date),
              endDate: new Date(event.event_gmt_end_date),
              durationInMinutes: 120,
              address: event.full_address,
            };

            return (
              <li key={event.id}>
                <div className="h-10 w-full pr-4 pl-4 grid lg:grid-cols-6 grid-cols-4 lg:items-center lg:text-2xl text-xs">
                  <div className="col-span-2">
                    <a
                      className="hover:underline"
                      target={"_blank"}
                      href={event.event_link}
                    >
                      {event.event_title}
                    </a>
                  </div>
                  <div className="lg:block hidden">
                    {" "}
                    <AddToCalendarButton
                      calendarEvent={CALENDAR_EVENT}
                      buttonText={"Add to Calendar"}
                    />
                  </div>
                  {/* https://codesandbox.io/s/8g6dl?file=/src/AddToCalendarButton/AddToCalendarButton.tsx:0-911 */}

                  <div className="items-center lg:flex hidden">
                    <img
                      className="h-5 w-5 mr-2 rounded-full"
                      src={`/images/flags/${event.event_country.toLowerCase()}.svg`}
                      alt=""
                      variant="flag"
                    ></img>
                    <p className="lg:block hidden">{event.event_city}</p>
                  </div>
                  <p className="lg:block hidden">{event.meetup_type}</p>
                  <p className="lg:block hidden">{event.event_local_date}</p>
                  <div className="lg:hidden flex justify-end col-span-2">
                    {" "}
                    <AddToCalendarButton
                      calendarEvent={CALENDAR_EVENT}
                      buttonText={event.event_local_date}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/*  . here invisible on mobile */}
      <div className="hidden lg:block">
        <div className="bg-descigrey w-full mt-5 pr-4 pl-4 h-10 grid grid-cols-6 items-center text-lg">
          <div className="col-span-3">PREVIOUS</div>
          <div>LOCATION</div>
          <div>TYPE</div>
          <div className="">DATE</div>
        </div>
        <div className="pt-4 pb-4">
          <ul>
            <div className="pt-4 pb-4 text-descigreyfont">
              <ul>
                {pastEvents.map((event) => (
                  <li key={event.id}>
                    <div className="h-10 w-full pr-4 pl-4 grid grid-cols-6 items-center text-2xl">
                      <div className="col-span-3">
                        <a
                          className="hover:underline "
                          target={"_blank"}
                          href={event.event_link}
                        >
                          {event.event_title}
                        </a>
                      </div>
                      <div className="flex items-center grayscale">
                        <img
                          className="h-5 w-5 mr-2 rounded-full"
                          src={`/images/flags/${event.event_country.toLowerCase()}.svg`}
                          alt=""
                          variant="flag"
                        ></img>
                        <p>{event.event_city}</p>
                      </div>
                      <p>Meetup</p>
                      <p>{event.event_date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <EmailandEventCalForm/>
    </section>
  );
}

export default AllEventsSection;
