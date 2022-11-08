import ArrowDown from "../../icons/ArrowDown";
import ArrowDownRight from "../../icons/ArrowUpRight";
import Navigation from "./navigation";
import Backdrop from "../../modal/backdrop";
import Modal from "../../modal/modal";
import {useState} from "react";

function HeroSection() {
  const [modalIsOpen, setModalisOpen] = useState(false);

  function openModalHandler() {
    setModalisOpen(true);
  }

  function closeModalHandler() {
    setModalisOpen(false);
  }

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
                <li className="w-full flex flex-row group/edit hover:bg-white hover:text-black ease-in duration-200 hover:cursor-pointer" onClick={openModalHandler}>
                  <div className="w-full text-xl border-solid border-white p-2 border-t border-b ">
                    <href>Subscribe to future events</href>
                  </div>
                  <div className="w-12 h-12 ml-2 bg-desciblue flex items-center justify-center">
                    <div className="group-hover/edit:-rotate-90 duration-200">
                      {" "}
                      <ArrowDown />{" "}
                    </div>
                  </div>
                </li>
                <li className="w-full flex flex-row group/edit hover:bg-white hover:text-black ease-in duration-200 hover:cursor-pointer" onClick={openModalHandler}>
                  <div className="w-full text-xl border-solid border-white p-2 border-b ">
                    <href>Subscribe to event calendar</href>
                  </div>
                  <div className="w-12 h-12 ml-2 bg-descired flex items-center justify-center">
                    <div className="group-hover/edit:rotate-45 duration-200">
                      {" "}
                      <ArrowDownRight color="black" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && <Modal onCancle={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
    </section>
  );
}

export default HeroSection;
