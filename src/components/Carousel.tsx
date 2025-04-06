"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ShiningButton from "./animata/button/shining-button";
import { useRouter } from "next/navigation";

function Carousel({ ...props }) {
  const counter = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const slider: HTMLElement | null = document.getElementById("slider");
    const bar: HTMLElement | null = document.getElementById("bar");

    const interval = setInterval(() => {
      // console.log(counter)
      if (slider) {
        if (counter.current === 2) {
          counter.current = 0;
          const nodes = slider.children;
          Array.from(nodes).forEach((node) =>
            node.classList.replace("opacity-0", "opacity-100")
          );
        } else {
          slider?.children[3 - counter.current - 1]?.classList.replace(
            "opacity-100",
            "opacity-0"
          );
          counter.current += 1;
        }
        const bars = bar?.children || [];
        Array.from(bars).forEach((node, index) => {
          if (index === counter.current) {
            node.classList.add("bg-black");
            node.classList.add("scale-125");
          } else {
            node.classList.remove("bg-black");
            node.classList.remove("scale-125");
          }
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        {...props}
        className="w-[100vw] md:h-[86vh] h-[90vh] animate-animate-appear cursor-pointer relative overflow-hidden m-auto"
      >
        <div
          className="w-full h-full absolute top-0 left-0 transition duration-500 scroll-smooth opacity-100"
          id="slider"
        >
          <Image
            src="/images/dp2.jpg"
            fill={true}
            alt=""
            className="absolute left-0 top-0 w-full md:h-full h-[90%] transition-opacity duration-500 opacity-100  md:object-fit object-cover"
          />
          <Image
            src="/images/iem.jpeg"
            fill={true}
            alt=""
            className="absolute transition-opacity duration-500 opacity-100 left-0 top-0 w-full md:h-full object-fit h-[90%]"
          />
          <Image
            src="/images/dp3.jpg"
            fill={true}
            alt=""
            className="absolute transition-opacity duration-500 opacity-100 left-0 top-0 w-full md:h-full h-[90%] md:object-fit object-cover"
            onLoad={(e) =>
              e.currentTarget.parentElement?.classList.replace(
                "opacity-0",
                "opacity-100"
              )
            }
          />

          <div
            id="bar"
            className="absolute flex items-center shadow-xl border-[1px] border-white justify-center gap-2 rounded-md bg-white opacity-60 px-2 md:bottom-10 bottom-56 left-[50%] translate-x-[-50%] p-1"
          >
            <div className="rounded-full size-2 border-[1px] border-black bg-black scale-125"></div>
            <div className="rounded-full size-2 border-[1px] border-black"></div>
            <div className="rounded-full size-2 border-[1px] border-black"></div>
          </div>
          <div className="w-full h-full bg-black absolute z-40 bg-opacity-60 flex flex-col items-center justify-center gap-2 md:gap-10 text-white">
            <h1 className="md:text-[5rem] text-2xl font-bold">IEM-ICDC 2025</h1>
            <p className="md:text-3xl text md:w-full w-[80%] text-center text-gray-200">
              3rd International Conference on <br />
              Computational Intelligence, Data Science and Cloud Computing
            </p>
            <h3 className="text-xl text-gray-300">April 11-12, 2025</h3>
            <p className="md:text-xl md:w-full w-[80%] text-sm text-center font-bold justify-self-start my-0 text-gray-300">
              Organized by <br /> Department of Information Technology & Department of
              Computer Science & Engineering <br /> Institute of Engineering &
              Management, Kolkata, India
            </p>

            <div className="w-full flex items-center justify-evenly mt-10 md:mt-0">
              <ShiningButton
                label="Registration"
                onClick={() => router.push("/registrations")}
              />
              <ShiningButton
                label="Know More"
                onClick={() => window.scrollTo(0, 650)}
              />
              <ShiningButton
                label="Venue"
                onClick={() => router.push("/venue")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
