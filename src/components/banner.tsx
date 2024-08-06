import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";

export function Banner() {
  return (
    <div className="bg-gray-50 border border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-sm">
      <div className="font-light text-gray-500 dark:text-gray-400 p-4 mx-auto max-w-7xl flex items-center md:justify-between justify-center gap-x-4 gap-y-2 flex-wrap">
        <div className="flex items-center space-x-4 hover:cursor-pointer">
          <EnvelopeIcon className="lg:h-6 lg:w-6 h-4 w-4 text-primary" />
          <p className="hover:text-primary">kraftyguy@gmail.com</p>
        </div>

        <div className="hidden md:flex items-center space-x-4 hover:cursor-pointer">
          <MapPinIcon className="lg:h-6 lg:w-6 h-4 w-4 text-primary" />
          <p className="hover:text-primary">DSS-104, BLOCK F, MOHALI CITI CENTRE, Aerocity, Punjab 140306</p>
        </div>

        <div className="flex items-center md:ml-auto space-x-4 hover:cursor-pointer">
          <PhoneIcon className="lg:h-6 lg:w-6 h-4 w-4 text-primary" />
          <p className="hover:text-primary">+91 70278 60053</p>
        </div>
      </div>
    </div>
  );
};

