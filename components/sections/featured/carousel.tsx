import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import RoundArrowLeft from "../../icons/RoundArrowLeft";
import RoundArrowRight from "../../icons/RoundArrowRight";
import { getFeaturedEvents } from "../../../dummy-data";
import { useEffect } from "react";

export default class withCustomStatusArrowsAndIndicators extends Component {
  render() {
    const featuredEvents = getFeaturedEvents();
    console.log(featuredEvents);

    const carouselProp = {
      showStatus: true,
      useKeyboardArrows: true,
      infiniteLoop: true,
      autoPlay: false,
      stopOnHover: true,
      emulateTouch: false,
      transitionTime: 500,
      showArrows: false,
      renderArrowPrev: (clickHandler, hasPrev, label) => {
        return (
          <span className="arrow-left" onClick={clickHandler}>
            <RoundArrowLeft />
          </span>
        );
      },
      renderArrowNext: (clickHandler, hasNext, label) => {
        return (
          <span className="arrow-right" onClick={clickHandler}>
            <RoundArrowRight />
          </span>
        );
      },
    };

    return (
      <div>
        <Carousel {...carouselProp}>
          {featuredEvents.map((event) => (
            <div className="pl-4 h-[38rem] flex">
              <div className="w-2/4 pr-4 flex flex-col justify-between">
                <div className="h-20 flex items-center">
                  <p className="text-4xl text-black">Higlighted this week</p>
                </div>
                <div className="flex h-14 items-center"></div>
                <div className="flex w-full space-x-4 text-2xl h-10 items-center">
                  <p>{featuredEvents[0].title}</p>
                  <p className="opacity-50">{featuredEvents[1].title}</p>
                  <p className="opacity-30">{featuredEvents[2].title}</p>
                </div>
                <div className="pt-2 pb-2 text-left">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec aliquam orci nec elit. congue sodales a quis erat.
                    Quisque eget est quis orci ornare interdum. Suspendisse
                    tincidunt ligula quis ultrices solicitudin. Done tincidunt
                    pulvinar nisl, at interdum libero mollis ac. Donec ut
                    dignissim dui. Integer ac est congue, congue velit ut,
                    tempus purus. Donec ut dignissim dui. Integer ac est congue,
                    congue velit. ut, tempus purus..
                  </p>
                </div>
                <div>
                  <div className="w-full bg-black text-white h-10 flex items-center justify-center rounded-full text-xl mb-6">
                    <a>Explore More</a>
                  </div>
                  <div className="pt-3">
                    <ul>
                      <li>
                        <div className="h-10 border-solid border-t border-black flex items-center justify-between">
                          <p>Location</p>
                          <p>Zürich</p>
                        </div>
                      </li>
                      <li>
                        <div className="h-10 border-solid border-t border-black flex items-center justify-between">
                          <p>Date</p>
                          <div>10th Dec 2022</div>
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
                    <p className="text-xl text-white border-solid border-b-2">
                      Desci Zürich
                    </p>
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
