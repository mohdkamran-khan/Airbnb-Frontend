// src/components/Footer.jsx
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdCopyright } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-[#dcdcdc] cursor-context-menu">
      <div className="max-w-screen mx-auto px-4 md:px-10 py-8">
        <h1 className="text-[22px] font-medium mb-4 cursor-text">
          Inspiration for future getaways
        </h1>
        <span className="text-gray-500 cursor-pointer">
          Popular &nbsp; Arts & Culture &nbsp; Beach &nbsp; Mountains &nbsp;
          Outdoors &nbsp; Things to do
        </span>

        <hr className="mt-4 mb-6" />

        <div className="flex flex-wrap justify-between items-start gap-6">
          <div className="space-y-4 w-1/2 sm:w-1/4 lg:w-auto">
            <div className="cursor-pointer">
              <div className="font-semibold">Dallas</div>
              <div className="text-gray-500 hover:text-gray-800">
                Villa rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">Portland</div>
              <div className="text-gray-500 hover:text-gray-800">
                Villa rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">West Palm Beach</div>
              <div className="text-gray-500 hover:text-gray-800">
                Cottage rentals
              </div>
            </div>
          </div>

          <div className="space-y-4 w-1/2 sm:w-1/4 lg:w-auto">
            <div className="cursor-pointer">
              <div className="font-semibold">Cleveland</div>
              <div className="text-gray-500 hover:text-gray-800">
                House rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">Amsterdam</div>
              <div className="text-gray-500 hover:text-gray-800">
                Monthly rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">St. Petersburg</div>
              <div className="text-gray-500 hover:text-gray-800">
                Holiday rentals
              </div>
            </div>
          </div>

          <div className="space-y-4 w-1/2 sm:w-1/4 lg:w-auto">
            <div className="cursor-pointer">
              <div className="font-semibold">Galveston</div>
              <div className="text-gray-500 hover:text-gray-800">
                Villa rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">Raleigh</div>
              <div className="text-gray-500 hover:text-gray-800">
                Apartment rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">Montreal</div>
              <div className="text-gray-500 hover:text-gray-800">
                Holiday rentals
              </div>
            </div>
          </div>

          <div className="space-y-4 w-1/2 sm:w-1/4 lg:w-auto">
            <div className="cursor-pointer">
              <div className="font-semibold">Kaua'i County</div>
              <div className="text-gray-500 hover:text-gray-800">
                Flat rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">Philadelphia</div>
              <div className="text-gray-500 hover:text-gray-800">
                House rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">Charlotte</div>
              <div className="text-gray-500 hover:text-gray-800">
                Apartment rentals
              </div>
            </div>
          </div>

          <div className="space-y-4 w-1/2 sm:w-1/4 lg:w-auto">
            <div className="cursor-pointer">
              <div className="font-semibold">Whistler</div>
              <div className="text-gray-500 hover:text-gray-800">
                Apartment rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">Gulf Shores</div>
              <div className="text-gray-500 hover:text-gray-800">
                Holiday rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">Playa del Carmen</div>
              <div className="text-gray-500 hover:text-gray-800">
                Cottage rentals
              </div>
            </div>
          </div>

          <div className="space-y-4 w-full sm:w-auto">
            <div className="cursor-pointer">
              <div className="font-semibold">Barcelona</div>
              <div className="text-gray-500 hover:text-gray-800">
                Apartment rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold">Tokyo</div>
              <div className="text-gray-500 hover:text-gray-800">
                Villa rentals
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="font-semibold flex items-center">
                Show more <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-x-40 md:flex-row justify-start md:space-x-16 mt-16 mb-2 gap-6">
          <div className="space-y-2">
            <div className="font-semibold cursor-text">Support</div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Help Centre
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Get help with a safety issue
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              AirCover
            </div>
            <div className="text-gray-600">Anti-discrimination</div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Disability support
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Cancellation options
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Report neighbourhood concern
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-semibold cursor-text">Hosting</div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Airbnb your home
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Airbnb your experience
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Airbnb your service
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              AirCover for Hosts
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Hosting Resources
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Community forum
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Hosting responsibly
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Join a free Hosting class
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Find a co-host
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Refer a host
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-semibold cursor-text">Airbnb</div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              2025 Summer Release
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Newsroom
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Careers
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Investors
            </div>
            <div className="text-gray-600 cursor-pointer hover:border-b-[1px] border-black w-fit">
              Airbnb.org emergency stays
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[80px] border-t border-[#dcdcdc] pt-6 flex flex-col md:flex-col lg:flex-row items-start lg:items-center justify-between px-10 py-20 overflow-x-auto gap-4">
        <h2 className="flex items-center gap-1 text-ellipsis flex-wrap">
          <MdCopyright /> 2025 Airbnb, Inc.&ensp;·
          <span className="hover:border-b-[1px] border-black w-fit">
            &ensp; Privacy &ensp;
          </span>{" "}
          ·
          <span className="hover:border-b-[1px] border-black w-fit">
            {" "}
            &ensp;Terms&ensp;{" "}
          </span>{" "}
          ·
          <span className="hover:border-b-[1px] border-black w-fit">
            {" "}
            &ensp;Company Details&ensp;{" "}
          </span>
        </h2>

        <h2 className="flex items-center gap-3 font-semibold cursor-pointer flex-wrap">
          <TfiWorld /> English (IN) &emsp; ₹ INR &ensp; <FaFacebook /> &ensp;{" "}
          <RiTwitterXLine /> &ensp; <FaInstagram />
        </h2>
      </div>
    </footer>
  );
}
