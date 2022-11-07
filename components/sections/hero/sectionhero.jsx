import ArrowDown from "../../icons/ArrowDown";
import ArrowDownRight from "../../icons/arrowDownRight";
import Navigation from "./navigation";

function HeroSection() {
  return (
    <section>
      <div className="pt-4 pr-4 pl-4 h-screen">
        <div className="h-3/5">
          <div className="bg-hero bg-no-repeat h-full w-full bg-cover">
            <Navigation />
          </div>
        </div>
        <div className="h-2/5 ">
          <div class="grid grid-cols-3 gap-0 h-full">
            <div class="col-span-2 flex items-center pr-1.5">
              <p className="text-3xl font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquam orci nec elit congue sodales a quis erat. Quisque eget
                est quis orci ornare interdum. Suspendisse tincidunt ligula quis
                ultrices sollicitudin. Donec aliquam orci nec elit congue
                sodales a quis erat.{" "}
              </p>
            </div>
            <div class="bg-black text-white ml-2 flex items-center">
              <ul className="w-full mt-6">
                <li className="w-full flex flex-row">
                  <div className="w-full text-xl border-solid border-white p-2 border-t border-b ">
                    <href>Subscribe to future events</href>
                  </div>
                  <div className="w-12 h-12 ml-2 bg-desciblue flex items-center justify-center">
                    <ArrowDown />
                  </div>
                </li>
                <li className="w-full flex flex-row">
                  <div className="w-full text-xl border-solid border-white p-2 border-b ">
                    <href>Subscribe to event calendar</href>
                  </div>
                  <div className="w-12 h-12 ml-2 bg-descired flex items-center justify-center">
                    <ArrowDownRight />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
