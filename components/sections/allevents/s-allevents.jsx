import AddToCalendarButton from "./AddToCalendarButton/AddToCalendarButton";

function AllEventsSection(props) {
  const { upComingEvents, pastEvents } = props;

  return (
    <section id="events">
      <div className="p-4 flex items-end pb-10">
        <div className="w-2/4 h-[70%] flex flex-col justify-between">
          <h2 className="text-4xl py-10">All Events</h2>
          <p className="text-lg">
            DeSci global is the global hub for all DeSci events; a schelling
            point to collect, share, and uplift all DeSci events across the
            globe. Explore the events that have happened and get involved with
            new ones coming up.
          </p>
        </div>
      </div>
      <div className="bg-desciblue w-full pr-4 pl-4 h-10 grid grid-cols-6 items-center text-white text-lg">
        <div className="col-span-3">UPCOMING</div>
        <div>LOCATION</div>
        <div>TYPE</div>
        <div className="">DATE</div>
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
                <div className="h-10 w-full pr-4 pl-4 grid grid-cols-6 items-center text-2xl">
                  <div className="col-span-2">
                    <a
                      className="hover:underline "
                      target={"_blank"}
                      href={event.event_link}
                    >
                      {event.event_title}
                    </a>
                  </div>
                  <div>
                    {" "}
                    <AddToCalendarButton calendarEvent={CALENDAR_EVENT} />
                  </div>
                  {/* https://codesandbox.io/s/8g6dl?file=/src/AddToCalendarButton/AddToCalendarButton.tsx:0-911 */}

                  <div className="flex items-center">
                    <img
                      className="h-5 w-5 mr-2 rounded-full"
                      src={`/images/flags/${event.event_country.toLowerCase()}.svg`}
                      alt=""
                      variant="flag"
                    ></img>
                    <p>{event.event_city}</p>
                  </div>
                  <p>{event.meetup_type}</p>
                  <p>16. November 2022</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
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
      <div className="p-4">
        <form className="" action="/send-data-here" method="post">
          <label className="mb-5 text-[#B1B1B1]" htmlFor="email">
            SIGNUP FOR FUTURE EVENTS
          </label>
          <div className="flex justify-between border-solid border-b border-black mr-[3%]">
            <input
              type="email"
              className="w-[80%] h-10 placeholder:text-black placeholder:text-2xl focus:outline-none focus:placeholder:opacity-0"
              placeholder="your@email.com"
              id="first"
              name="first"
            />
            <button type="submit" className="text-2xl">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="p-4">
        <form className="" action="/send-data-here" method="post">
          <label className="mb-5 text-[#B1B1B1]" htmlFor="email">
            SUBSCRIBE TO CALENDAR
          </label>
          <div className="flex justify-between border-solid border-b border-black mr-[3%]">
            <input
              type="email"
              className="w-[80%] h-10 placeholder:text-black placeholder:text-2xl focus:outline-none"
              placeholder="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2IQ6uZjtq2x3IEGTwDU2JTJ2u&."
              id="first"
              name="first"
            />
            <a
              href="https://calendar.google.com/calendar/u/0/r?cid=6dd693i2gh2u6930fsospb1g2nhega27@import.calendar.google.com"
              target="_blank"
              type="submit"
              className="text-2xl bg-white"
            >
              Add
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AllEventsSection;
