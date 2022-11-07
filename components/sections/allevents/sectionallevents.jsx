function AllEventsSection(props) {
  const { events } = props;

  return (
    <section>
      <div className="h-[22rem] p-4 flex items-end pb-10">
        <div className="w-2/4 h-[70%] flex flex-col justify-between">
          <h2 className="text-4xl">All Events</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquam orci nec elit congue sodales a quis erat. Quisque eget est
            quis orci ornare interdum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Done aliquam orci nec elit congue sodales a quis
            erat. Quisque eget est quis orci ornare interdum. Done aliquam orci
            nec elit congue sodales a quis erat. Quisque eget est quis orci
            ornare interdum.
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
          {events.map((event) => (
            <li key={event.id}>
              <div className="h-10 w-full pr-4 pl-4 grid grid-cols-6 items-center text-2xl">
                <p className="col-span-3">{event.title}</p>
                <div className="flex items-center">
                  <img
                    className="h-5 w-5 mr-2 rounded-full"
                    src={`/images/flags/${event.country.toLowerCase()}.svg`}
                    alt=""
                    variant="flag"
                  ></img>
                  <p>Zurüch</p>
                </div>
                <p>Meetup</p>
                <p>16. November 2022</p>
              </div>
            </li>
          ))}
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
          <div className="pt-4 pb-4">
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <div className="h-10 w-full pr-4 pl-4 grid grid-cols-6 items-center text-2xl">
                    <p className="col-span-3">{event.title}</p>
                    <div className="flex items-center">
                      <img
                        className="h-5 w-5 mr-2 rounded-full"
                        src={`/images/flags/${event.country.toLowerCase()}.svg`}
                        alt=""
                        variant="flag"
                      ></img>
                      <p>Zurüch</p>
                    </div>
                    <p>Meetup</p>
                    <p>16. Mai 2022</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
      <div className="p-4">
        <form className="" action="/send-data-here" method="post">
          <label className="mb-5 text-[#B1B1B1]" for="email">
            SIGNUP FOR FUTURE EVENTS
          </label>
          <div className="flex justify-between border-solid border-b border-black mr-[3%]">
            <input
              type="email"
              className="w-[80%] h-10 placeholder:text-black placeholder:text-2xl focus:outline-none"
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
          <label className="mb-5 text-[#B1B1B1]" for="email">
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
            <button type="submit" className="text-2xl">
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AllEventsSection;
