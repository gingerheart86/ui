import ArrowDown from "../../icons/ArrowDown";
import ArrowDownRight from "../../icons/ArrowUpRight";
import Navigation from "./navigation";
import Backdrop from "../../modal/backdrop";
import ModalSubmitMail from "../../modal/modal-submit-mail";
import ModalSubmitEvent from "../../modal/modal-submit-event";

import { useState } from "react";

function HeroSection() {
  const [modalIsOpen, setModalisOpen] = useState(false);
  const [emailIsOpen, setEmailisOpen] = useState(false);

  function openModalHandler() {
    setModalisOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModalHandler() {
    setModalisOpen(false);
    document.body.style.overflow = "scroll";
  }

  function openEmailHandler() {
    setEmailisOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeEmailHandler() {
    setEmailisOpen(false);
    document.body.style.overflow = "scroll";
  }

  return (
    <section>
      <div className="lg:pt-4 lg:pr-4 lg:pl-4 pl-2 pr-2 lg:h-screen pt-10">
        <div className="lg:h-3/5">
          <div className="bg-hero bg-no-repeat lg:h-full lg:w-full bg-cover h-[8rem]">
            <Navigation />
          </div>
        </div>
        <div className="lg:h-2/5">
          <div class="lg:grid grid-cols-3 gap-0 h-full">
            <div class="col-span-2 flex items-center pr-1.5 py-4">
              <p className="lg:text-3xl font-normal">
                Desci.global provides you an calendar overview of upcoming and past descentralized science events. You can add events to your calendar and submit your own event.
                Join this schelling point to help extend DeSci to the ends of
                the globe.{" "}
              </p>
            </div>
            <div class="lg:bg-black lg:text-white lg:ml-2 flex items-center lg:pb-0 pb-10">
              <ul className="w-full lg:mt-6 mt-2">
              <li
                  className="w-full flex flex-row group/edit  hover:bg-white hover:text-black ease-in duration-200 hover:cursor-pointer"
                  onClick={openModalHandler}
                >
                  <div className="w-full lg:text-xl lg:font-normal font-semibold border-solid lg:border-white lg:p-2 py-2 border-t">
                    <href>Submit an Event</href>
                  </div>
                  <div className="w-12 h-12 ml-2 bg-desciblue flex items-center justify-center">
                    <div className="group-hover/edit:-translate-y-1 duration-200 rotate-180">
                      {" "}
                      <ArrowDown />{" "}
                    </div>
                  </div>
                </li>
                <li
                  className="w-full flex flex-row group/edit hover:bg-white hover:text-black ease-in duration-200 hover:cursor-pointer"
                  onClick={openEmailHandler}
                >
                  <div className="w-full lg:text-xl lg:font-normal font-semibold border-solid lg:border-white lg:p-2 py-2 border-t border-b ">
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
                  <div className="w-full lg:text-xl lg:font-normal font-semibold border-solid lg:border-white lg:p-2 py-2 border-b">
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
      {emailIsOpen && <ModalSubmitMail />}
      {emailIsOpen && <Backdrop onClick={closeEmailHandler} />}
      {modalIsOpen && <ModalSubmitEvent onClick={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </section>
  );
}

export default HeroSection;
