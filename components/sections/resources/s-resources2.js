import Image from "next/image";

function ResourcesSectionTwo() {
  return (
    <section>
      <div className="h-[100vh] flex items-center p-4 justify-center">
        <div className="h-[80%] w-[74%]">
          <div class="grid grid-cols-2 grid-rows-4 gap-4 h-[85%]">
            <div className="row-span-2 bg-[#F5F5F5]">1</div>
            <a href="https://twitter.com/UltraRareBio/status/1580988333693730821?s=20&t=9eCaWimS9cyzpc-dn4N6GQ" target={"_blank"} className="row-span-3 relative grayscale hover:grayscale-0 duration-100">
              <Image
                src="/images/resources-3.png"
                layout="fill"
                objectFit="cover"
              />
            </a>
            <div className="row-span-2">
              {" "}
              <div className="flex">
                <div className="w-32">
                  <h3 className="text-xl">Working Group</h3>
                </div>
                <div className="w-full pl-8">
                  <p className="text-lg">
                    DeSci WG - Check out this working group to get the most up
                    to date alpha on what’s happening across the DeSci
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {" "}
              <div className="flex">
                <div className="w-32">
                  <h3 className="text-xl">Landscape</h3>
                </div>
                <div className="w-full pl-8">
                  <p className="text-lg">
                    Explore all of the organizations and sectors that make up
                    the DeSci space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSectionTwo;
