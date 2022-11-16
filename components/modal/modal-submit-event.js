import React, { useState, useEffect } from "react";
import CountrySelector from "./CountrySelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TimeZone from "./TimeZoneSelect";
import LocationSearchInput from "./EventLocationInput";

function ModalSubmitEvent(props) {
  const schema = yup
    .object({
      name: yup.string().required().max(80),
      email: yup.string().required().email(),
      eventName: yup.string().required().max(80),
      eventWebsite: yup.string().required().max(80),
      eventDate: yup.date().required(),
      startTime: yup.string().required().max(80),
      endTime: yup.string().required().max(80),
    })
    .required();

  const [country, setCountry] = useState("");
  // const [timeZone, setTimeZone] = useState("");
  const [address, setAddress] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });


  const onSubmit = async (data) => {
    data.country = country;
    data.address = address;
    
    const date = new Date(data.eventDate);
    data.eventDate = date.toISOString();
    // data.timeZone = timeZone;
    alert(data.address)
    return
    console.log("Submitting Form")
   
    const response = await fetch("/api/postEvent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(alert(JSON.stringify(address)));
   console.log("Succesfully submitted", response);
  };

// useEffect to post data? 

  const getCountry = (data) => {
    setCountry(data.value);
  };


  const getAddress = (data) => {
    setAddress(data);
  };

  return (
    <div
      className="bg-white p-4 flex flex-col items-center calc w-[30rem] z-40 fixed top-[10vh] shadow-white-500/50"
      id="modal"
    >
      <div className="h-full w-full">
        <h2 className="text-4xl pt-4 pb-8">Submit an Event 📆 🔬</h2>
        <div>
          <p className="text-lg">
            Submit your event and contribute to the descentralized science
            ecosystem.{" "}
          </p>
        </div>
        {/* ##email newsletter */}

        <div className="my-14">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            {console.log(errors)}
            <label className=" pb-8 text-[#B1B1B1]" htmlFor="email">
              you Event will be posted after ~ 24 hours
            </label>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              <input
                type="text"
                className="w-[80%] h-10 placeholder:text-black placeholder:text-l focus:outline-none focus:placeholder:opacity-0"
                placeholder="Event Name"
                id="eventName"
                name="eventName"
                {...register("eventName")}
              />
              {errors.eventName?.message}
            </div>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              <input
                type="text"
                className="w-[80%] h-10 placeholder:text-black placeholder:text-l focus:outline-none focus:placeholder:opacity-0 "
                placeholder="Your full name"
                id="name"
                name="name"
                {...register("name")}
              />
              {errors.name && "Name is required."}
            </div>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              <input
                type="email"
                className="w-[80%] h-10 placeholder:text-black placeholder:text-l focus:outline-none focus:placeholder:opacity-0"
                placeholder="your@email.com"
                id="email"
                name="email"
                {...register("email")}
              />
              {errors.email?.message}
            </div>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              <input
                type="url"
                className="w-[80%] h-10 placeholder:text-black placeholder:text-l focus:outline-none focus:placeholder:opacity-0"
                placeholder="Event Website / Meetup Link"
                id="eventWebsite"
                name="eventWebsite"
                {...register("eventWebsite")}
              />
              {errors.eventWebsite?.message}
            </div>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              <input
                type="date"
                className="w-[80%] h-10 placeholder:text-black placeholder:text-l focus:outline-none focus:placeholder:opacity-0"
                placeholder="Event Website / Meetup Link"
                id="eventDate"
                name="eventDate"
                {...register("eventDate")}
              />
              {errors.eventDate?.message}
            </div>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              <input
                type="time"
                className="w-[80%] h-10 placeholder:text-black placeholder:text-l focus:outline-none focus:placeholder:opacity-0"
                placeholder="Approx. Start Time"
                id="startTime"
                name="startTime"
                {...register("startTime")}
                value="10:00"
              />
            </div>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              <input
                type="time"
                className="w-[80%] h-10 placeholder:text-black placeholder:text-l focus:outline-none focus:placeholder:opacity-0"
                placeholder="Approx. End Time"
                id="endTime"
                name="endTime"
                {...register("endTime")}
                value="12:00"
              />
            </div>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              <CountrySelector onChange={getCountry} />
            </div>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              {/* <TimeZone onChange={getData} /> */}
            </div>
            <LocationSearchInput setAddress={getAddress}/>            
            <button type="submit" className="text-l mt-5">
              {isSubmitting ? "Submittin" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalSubmitEvent;
