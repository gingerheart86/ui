import ArrowDown from "../../icons/ArrowDown";
import ArrowDownRight from "../../icons/ArrowUpRight";
import Navigation from "./navigation";
import Backdrop from "../../modal/backdrop";
import ModalSubmitMail from "../../modal/modal-submit-mail";
import { useState } from "react";

function HeroSection() {
  const [modalIsOpen, setModalisOpen] = useState(false);

  function openModalHandler() {
    setModalisOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModalHandler() {
    setModalisOpen(false);
    document.body.style.overflow = "scroll";
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
                Desci.global provides you an calendar overview of upcoming and past descentralized science events. You can add events to your calendar and submit your own event.
                Join this schelling point to help extend DeSci to the ends of
                the globe.{" "}
              </p>
            </div>
            <div class="bg-black text-white ml-2 flex items-center">
              <ul className="w-full mt-6">
                <li
                  className="w-full flex flex-row group/edit hover:bg-white hover:text-black ease-in duration-200 hover:cursor-pointer"
                  onClick={openModalHandler}
                >
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
                <li className="w-full flex flex-row group/edit hover:bg-white hover:text-black ease-in duration-200 hover:cursor-pointer">
                  <div className="w-full text-xl border-solid border-white p-2 border-b ">
                    <a
                      href="https://calendar.google.com/calendar/u/0/r?cid=6dd693i2gh2u6930fsospb1g2nhega27@import.calendar.google.com"
                      target="_blank"
                    >
                      Subscribe to event calendar
                    </a>
                  </div>
                  <div className="w-12 h-12 ml-2 bg-descired flex items-center justify-center">
                    <div></div>
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
      {modalIsOpen && (
        <ModalSubmitMail
          onCancle={closeModalHandler}
          onConfirm={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </section>
  );
}

export default HeroSection;
