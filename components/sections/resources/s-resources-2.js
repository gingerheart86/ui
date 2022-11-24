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
                href="https://ethereum.org/en/desci/"
                target={"_blank"}
                className="relative grayscale hover:grayscale-0 duration-100 h-full "
              >
                <img
                  src="/images/resources-2.png"
                  alt="Image"
                  className="h-full w-full"
                />
              </a>
            </div>
            <div className="lg:h-3/6 flex lg:flex-row flex-col mt-4">
              {" "}
              <div className="lg:w-2/6 lg:text-2xl text-xl">Community</div>{" "}
              <div className="lg:w-4/6">
                Join the Blockchain for Science community to stay connected with
                others.
              </div>
            </div>
          </div>

          {/* second half */}
          <div className="lg:h-full lg:w-1/2 w-2/2 lg:ml-4 lg:mt-0 mt-20 lg:block flex flex-col items-end ">
            {" "}
            <div className="lg:h-5/6 h-[15rem] lg:w-full w-4/6 text-white  ">
              {" "}
              <a
                href="https://ethereum.org/en/desci/"
                target={"_blank"}
                className="relative grayscale hover:grayscale-0 duration-100 h-full"
              >
                <img
                  src="/images/resources-1.png"
                  alt="Image"
                  className="h-full w-full"
                />
              </a>
            </div>
            <div className="lg:h-1/6 flex lg:flex-row flex-col mt-4 lg:items-start items-end">
              {" "}
              
              <div className="w-2/6 lg:text-2xl text-xl lg:static relative right-[7.5rem]">Overview</div>{" "}
              <div className="w-4/6">
                Explore this summary of decentralized science to better
                understand what this movement is about.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSectionTwo;
