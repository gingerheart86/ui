import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import RoundArrowLeft from "../../icons/RoundArrowLeft";
import RoundArrowRight from "../../icons/RoundArrowRight";
import { getFeaturedEvents } from "../../../dummy-data";

export default class withCustomStatusArrowsAndIndicators extends Component {
  render() {
    const featuredEvents = getFeaturedEvents();

    const carouselProp = {
      showStatus: true,
      useKeyboardArrows: true,
      infiniteLoop: true,
      autoPlay: false,
      stopOnHover: true,
      emulateTouch: false,
      transitionTime: 500,
      showArrows: false,
      selectedItem: 0,
      renderIndicator: (clickHandler, isSelected: boolean, index: number) => {
        if (isSelected == true) {
          return (
            <div>
              <div
                className="space-x-4 text-2xl h-10 flex items-center cursor-pointer text-[#0A22F5] leading-6	text-left"
                onClick={clickHandler}
              >
                <p className="break-words">{featuredEvents[index].title}</p>
              </div>
            </div>
          );
        }
        if (isSelected == false) {
          return (
            <div>
              <div
                className="space-x-4 text flex items-center h-10 cursor-pointer text-[#464646ae] max-w-[15rem] leading-5	text-left"
                onClick={clickHandler}
              ><div className="h-6 w-6 hover:scale-110 duration-100"><img src="/images/global.svg"></img></div></div>
            </div>
          );
        }
      },

      renderArrowPrev: (clickHandler, hasPrev, label) => {
        return (
          <span className="arrow-left cursor-pointer" onClick={clickHandler}>
            <RoundArrowLeft />
          </span>
        );
      },
      renderArrowNext: (clickHandler, hasNext, label) => {
        return (
          <span className="arrow-right cursor-pointer" onClick={clickHandler}>
            <RoundArrowRight />
          </span>
        );
      },
    };

    return (
      <div>
        <Carousel {...carouselProp}>
          {featuredEvents.map((event) => (
            <div className="pl-4 h-[38rem] flex" key={event.id}>
              <div className="w-2/4 pr-4 flex flex-col justify-between">
                <div className="h-20 flex items-center">
                  <p className="text-4xl text-black">Featured Events</p>
                </div>
                <div className="pt-2 pb-2 text-left text-descigreyfont absolute w-[45vw] top-[34%]">
                  <p className="text-l ">
                    {event.description.substring(0, 600) + "..."}
                  </p>
                </div>
                <div>
                  <div className="w-full bg-black text-white h-10 flex items-center justify-center rounded-full text-xl mb-6 hover:bg-descigreyfont hover:text-white cursor-pointer ">
                    <a href={event.website} target={"_blank"}>
                      Event Website
                    </a>
                  </div>
                  <div className="pt-3">
                    <ul>
                      <li>
                        <div className="h-10 border-solid border-t border-black flex items-center justify-between">
                          <p>Location</p>
                          <p>{event.location}</p>
                        </div>
                      </li>
                      <li>
                        <div className="h-10 border-solid border-t border-black flex items-center justify-between">
                          <p>Date</p>
                          <div>{event.date}</div>
                        </div>
                      </li>
                      <li>
                        <div className="h-10 border-solid border-t border-b border-black flex items-center justify-between">
                          <p>Type</p>
                          <p>Online</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-2/4  bg-featured bg-no-repeat bg-cover flex justify-end">
                <div className="w-[33%] ">
                  <div className="ml-4 mt-2 h-16 flex items-center">
                    <a
                      href={event.website}
                      target={"_blank"}
                      className="text-xl text-white border-solid border-b-2 cursor-pointer"
                    >
                      {event.title}
                    </a>
                  </div>
                </div>
                <div className="w-[65%] mr-4 h-full bg-desciblue opacity-30"></div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
