import Image from "next/image";

function ResourcesSectionTwo() {
  return (
    <section className="">
      <div className="flex items-center lg:p-4 flex-col p-2  ">
        <div className="lg:h-[40rem] h-[60rem] lg:w-[70rem] flex lg:flex-row flex-col shrink">
          <div className="lg:h-full  lg:w-1/2 w-4/6 ">
            <div className="lg:h-3/6 h-[15rem] items-end">
              {" "}
              <a
                href="https://t.me/BlockchainForScience"
                target={"_blank"}
                className="relative grayscale hover:grayscale-0 duration-100 h-full "
              >
                <img
                  src="/images/resources-2.png"
                  alt="Image"
                  layout="fill" objectFit="cover"
                />
              </a>
            </div>
            <div className="lg:h-3/6 flex lg:flex-row flex-col mt-4">
              {" "}
              <div className="lg:w-2/6 lg:text-2xl text-xl lg:underline">
                Working Group
              </div>{" "}
              <div className="lg:w-4/6 lg:text-sm text-xs">
                DeSci WG - Check out this working group to get the most up to
                date alpha on what’s happening across the DeSci ecosystem.
              </div>
            </div>
          </div>

          {/* second half */}
          <div className="lg:h-full lg:w-1/2 w-2/2 lg:ml-4 lg:mt-0 mt-20 lg:block flex flex-col items-end ">
            {" "}
            <div className="lg:h-5/6 h-[15rem] lg:w-full w-4/6 text-white  ">
              {" "}
              <a
                href="https://twitter.com/UltraRareBio/status/1580988333693730821?s=20&t=9eCaWimS9cyzpc-dn4N6GQ"
                target={"_blank"}
                className="relative grayscale hover:grayscale-0 duration-100 h-full"
              >
                <img
                  src="/images/resources-3.png"
                  alt="Image"
                  className="h-full w-full"
                />
              </a>
            </div>
            <div className="lg:h-1/6 flex lg:flex-row flex-col mt-4 lg:items-start items-end">
              {" "}
              <div className="w-2/6 lg:text-2xl text-xl lg:static relative right-[7.5rem] lg:underline">
                Landscape
              </div>{" "}
              <div className="w-4/6 lg:text-sm text-xs">
                Explore all of the organizations and sectors that make up the
                DeSci space.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSectionTwo;
