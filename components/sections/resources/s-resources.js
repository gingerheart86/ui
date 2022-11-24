import Image from "next/image";

function ResourcesSectionOne() {
  return (
    <section id="resources">
      <div className="lg:h-[100vh] flex items-center lg:justify-center px-2 lg:px-0">
        <div className="h-[80%] lg:w-[74%] w-[100%]">
          <h2 className="lg:text-4xl text-2xl text-black lg:pt-5 py-8 lg:py-0  lg:min-h-[15%]">
            Resources
          </h2>
          <div class="lg:grid flex flex-col lg:grid-cols-2 lg:grid-rows-4 gap-4 lg:h-[85%] lg:w-[100%] w-[70%]">
            <a
              href="https://ethereum.org/en/desci/"
              target={"_blank"}
              className="row-span-3 relative grayscale hover:grayscale-0 duration-100 lg:h-[100%] h-80"
            >
              <Image
                src="/images/resources-1.png"
                layout="fill"
                objectFit="cover"
              />
            </a>
            <a
              href="https://t.me/BlockchainForScience"
              target={"_blank"}
              className="row-span-2 relative grayscale hover:grayscale-0 duration-100 lg:h-[100%] h-80 lg:order-none order-3"
            >
              {" "}
              <Image
                src="/images/resources-2.png"
                layout="fill"
                objectFit="cover"
              />
            </a>
            <div className="row-span-2">
              {" "}
              <div className="lg:flex">
                <div className="w-32">
                  <h3 className="text-xl">Community</h3>
                </div>
                <div className="w-full lg:pl-8">
                  <p className="text-lg">
                    Join the Blockchain for Science community to stay connected
                    with others.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col pt-4 lg:order-none order-last">
              <div className="w-32">
                <h3 className="text-xl">Overview</h3>
              </div>
              <div className="w-full lg:pl-8 ">
                <p className="text-lg">
                  Explore this summary of decentralized science to better
                  understand what this movement is about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSectionOne;
