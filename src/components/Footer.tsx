import { LocateFixed, Mail, Phone } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full h-[40vh] bg-blue-200 mt-10 flex flex-col items-center justify-between">
      <div className="w-full h-[90%] flex md:flex-row flex-col items-center md:justify-between justify-center md:gap-0 gap-10 md:px-32 px-4">
        <div className=" md:h-full flex flex-col items-center justify-center gap-0">
          <div className="flex items-center justify-start">
            <Image
              src="/images/logo.png"
              width={200}
              height={100}
              alt=""
              className=" hidden md:block"
            />
          </div>
          <p className="md:text-sm text-xs text-blue-900 text-center">
            3rd International Conference on
            <br />
            Computational Intelligence, Data Science and Cloud Computing
            <br />
            April 11-12, 2025
          </p>
        </div>
        <div className=" md:flex md:flex-col grid grid-cols-2 items-center justify-center md:gap-4 gap-1 md:text text-xs text-blue-900">
          <div className="flex items-center justify-start gap-2">
            <LocateFixed />
            <p className=" line-clamp-2">
              Institute of Engineering & Management, <br /> Salt Lake, Kolkata{" "}
              <br />
              West Bengal, India{" "}
            </p>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <Mail />
            <p>icdc@iem.edu.in</p>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <Phone />
            <p>+91 9674032480</p>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <Phone />
            <p>+91 94334 95413</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-200 w-full text-center text-blue-900 pb-1 md:text text-sm">
        Copyright @2025 IEM-ICDC . All Rights Reserved.{" "}
      </div>
    </div>
  );
};
