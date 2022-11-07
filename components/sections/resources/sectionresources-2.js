import Image from "next/image";

function ResourcesSectionTwo() {
  return (
    <section>
      <div className="h-[100vh] flex items-center p-4">
        <div className="h-[80%] w-[74%]">
          <div class="grid grid-cols-2 grid-rows-4 gap-4 h-[85%]">
            <div className="row-span-2 bg-[#F5F5F5]">1</div>
            <div className="row-span-3 relative">
              <Image
                src="/images/resources-1.png"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="row-span-2">
              {" "}
              <div className="flex">
                <div className="w-32">
                  <h3 className="text-xl">Resource 3</h3>
                </div>
                <div className="w-full pl-8">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec aliquam orci nec elit congue sodales a quis erat.
                    Quisque eget est quis orci ornare interdum. Suspendisse
                    tincidunt ligula quis ultrices solicitudin. Done tincidunt
                    pulvinar nisl, at interdum libero mollis ac.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {" "}
              <div className="flex">
                <div className="w-32">
                  <h3 className="text-xl">Resource 4</h3>
                </div>
                <div className="w-full pl-8">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Done aliquam orci nec elit congue sodales a quis erat.
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
