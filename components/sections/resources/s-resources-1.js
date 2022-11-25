
function ResourcesSectionOne() {
  return (
    <section className="lg:py-40 pt-20">
      <h2 className="lg:text-4xl text-2xl pb-10 lg:ml-4 ml-2 ">Resources</h2>
      <div className="flex items-center lg:p-4 flex-col p-2 lg:py-[5rem] ">
        <div className="lg:h-[40rem] h-[60rem] lg:w-[70rem] flex  items-end lg:flex-row flex-col shrink">
          <div className="lg:h-full lg:w-1/2 w-2/2">
            {" "}
            <div className="lg:h-5/6 h-[15rem] lg:w-full w-4/6 text-white ">
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
            <div className="lg:h-1/6 flex lg:flex-row flex-col mt-4">
              {" "}
              <div className="w-2/6 lg:text-2xl text-lg lg:underline">Overview</div>{" "}
              <div className="w-4/6 lg:text-sm text-xs">
                Explore this summary of decentralized science to better
                understand what this movement is about.
              </div>
            </div>
          </div>
          {/* second half */}
          <div className="lg:h-full  lg:w-1/2 w-4/6 lg:mt-0 mt-20 lg:ml-4 ">
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
              <div className="lg:w-2/6 lg:text-2xl text-lg lg:underline">Community</div>{" "}
              <div className="lg:w-4/6 lg:text-sm text-xs">
                Join the Blockchain for Science community to stay connected with
                others.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSectionOne;
