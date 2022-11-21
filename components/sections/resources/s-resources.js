import Image from "next/image";

function ResourcesSectionOne() {
  return (
    <section id="resources">
      <div className="h-[100vh] flex items-center justify-center">
        <div className="h-[80%] w-[74%]">
          <h2 className="text-4xl text-black pt-5 min-h-[15%]">Resources</h2>
          <div class="grid grid-cols-2 grid-rows-4 gap-4 h-[85%]">
            <a
              href="https://ethereum.org/en/desci/"
              target={"_blank"}
              className="row-span-3 relative grayscale hover:grayscale-0 duration-100"
            >
              <Image
                src="/images/resources-1.png"
                layout="fill"
                objectFit="cover"
              />
            </a>
            <a href="https://t.me/BlockchainForScience" target={"_blank"} className="row-span-2 relative grayscale hover:grayscale-0 duration-100">
              {" "}
              <Image
                src="/images/resources-2.png"
                layout="fill"
                objectFit="cover"
              />
            </a>
            <div className="row-span-2">
              {" "}
              <div className="flex">
                <div className="w-32">
                  <h3 className="text-xl">Community</h3>
                </div>
                <div className="w-full pl-8">
                  <p className="text-lg">
                    Join the Blockchain for Science community to stay connected
                    with others.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex pt-4">
              <div className="w-32">
                <h3 className="text-xl">Overview</h3>
              </div>
              <div className="w-full pl-8">
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
