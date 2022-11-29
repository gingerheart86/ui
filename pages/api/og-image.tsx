import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import React from "react";
import { getAllEvents } from "../../services/sort-event-data";

export const config = {
  runtime: "experimental-edge",
};

export const experiments = {
  topLevelAwait: true,
}

const websiteUrl = "http://localhost:3000";

const font = fetch(new URL(`${websiteUrl}/fonts/ABC_Monument_Grotesk/ABCMonumentGrotesk-Medium.otf`, import.meta.url)).then(
  (res) => res.arrayBuffer(),
);






async function handler() {
  const fontData = await font;

  const { upcomingEventsAsc, pastEventsDesc, featuredEvents } = await getAllEvents();
  console.log(upcomingEventsAsc)

  return new ImageResponse(
    (
      <div tw="flex h-full ">
        <div tw="flex flex-col w-1/2 p-[48px]">
          <div tw="flex h-10" >
          <img
            tw="h-full"
            src={`${websiteUrl}/images/dynamic-og/og-logo-small.svg`}
            alt="Prism"
          />
          </div>
          <h1 tw="text-[52px]">Join global DeSci Events</h1>
          <p tw="text-[26px]">Event 1</p>
        </div>
        <div tw="flex w-1/2 h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            tw="w-full h-full"
            src={`${websiteUrl}/images/dynamic-og/og-logo.png`}
            alt="Prism"
          />
        </div>
      </div>

   
  ),
  {
    fonts: [
      {
        name: "Inter",
        data: fontData,
        weight: 500,
      }
    ],
  });
};

export default handler;
