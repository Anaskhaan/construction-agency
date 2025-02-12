import { ArrowRight } from "lucide-react";
import { useState } from "react";
import TradesPreviewMobile from "./TradesPreviewMobile";

const servicesData = [
  {
    name: "Concrete Estimating Service",
    icon: "/tradeicon1.webp",
    alt: "icon1",
    title: () => (
      <h1 className="text-2xl tracking-wider  font-bold text-black mb-4">
        Concrete
        <span className="text-[#0163be]">Estimating</span>
        Service
      </h1>
    ),

    content:
      " Concrete estimating services from BidWorks Estimating are crucial for accurately predicting the costs associated with concrete work, including materials, labor, and associated fees. Whether your project requires foundations, slabs, footings, or walls, BidWorks Estimating provides precise estimates to help you budget accurately, allocate resources effectively, and keep the project on track.  Concrete Estimating Services cover everything from calculating the volume of concrete needed to evaluating the costs of reinforcement materials, such as rebar and additives.  ",
    image: "tradespreview-1.webp",
    link: "#concrete-service",
  },
  {
    name: "Concrete Estimating Service",

    alt: "icon2",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl  tracking-wider font-bold text-black mb-4">
        Concrete
        <span className="text-[#0163be]">Estimating</span>
        Service
      </h1>
    ),
    content:
      " Concrete estimating services from BidWorks Estimating are crucial for accurately predicting the costs associated with concrete work, including materials, labor, and associated fees. Whether your project requires foundations, slabs, footings, or walls, BidWorks Estimating provides precise estimates to help you budget accurately, allocate resources effectively, and keep the project on track.  Concrete Estimating Services cover everything from calculating the volume of concrete needed to evaluating the costs of reinforcement materials, such as rebar and additives.  ",
    image: "tradespreview-1.webp",
    link: "#masonry-service",
  },
  {
    name: "Concrete Estimating Service",

    alt: "icon3",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl tracking-wider  font-bold text-black mb-4">
        Concrete
        <span className="text-[#0163be]">Estimating</span>
        Service
      </h1>
    ),
    content:
      " Concrete estimating services from BidWorks Estimating are crucial for accurately predicting the costs associated with concrete work, including materials, labor, and associated fees. Whether your project requires foundations, slabs, footings, or walls, BidWorks Estimating provides precise estimates to help you budget accurately, allocate resources effectively, and keep the project on track.  Concrete Estimating Services cover everything from calculating the volume of concrete needed to evaluating the costs of reinforcement materials, such as rebar and additives.  ",
    image: "tradespreview-1.webp",
    link: "#plumbing-service",
  },
];

const TradesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-row items-start gap-6 p-6 ">
        {/* Tabs */}
        <div className="w-full lg:w-1/3">
          <ul className="bg-[white] shadow-md rounded-md overflow-hidden">
            {servicesData.map((service, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center   p-4 border-b border-gray-200 ${
                  activeIndex === index ? "bg-blue-50 font-semibold" : ""
                } hover:bg-blue-50`}
              >
                <img src={service.icon} alt={service.alt} />
                <div className=" mt-3 ml-3 space-x-3">{service.name}</div>
              </li>
            ))}
            <li className="p-2 gap-2 text-center flex items-center justify-center text-white bg-[#0163be]  hover:underline cursor-pointer">
              See All <ArrowRight />
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="w lg:w-2/3 bg-[#EEF7FF] shadow-md rounded-md p-6">
          <h2 className=" ">{servicesData[activeIndex].title()}</h2>
          <div className=" relative">
            <p className="text-gray-600 mb-4">
              {servicesData[activeIndex].content.split(". ")[2]}.
            </p>
            <p className="text-gray-600 mb-6">
              {servicesData[activeIndex].content
                .split(". ")
                .slice(1)
                .join(". ")}
            </p>

            <a
              href={servicesData[activeIndex].link}
              className=" absolute  lg:top-[135.5px] lg:left-[360px] left-0 underline px-6 py-2  text-[#0163be] font-medium rounded "
            >
              View More
            </a>
          </div>
          <img
            src={servicesData[activeIndex].image}
            alt={servicesData[activeIndex].title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
        </div>
      </div>
      <div className="block lg:hidden">
        <TradesPreviewMobile servicesData={servicesData} />
      </div>

      <div className="mt-10 relative bg-[#0163be] w-11/12 mx-auto text-white p-8 rounded-md flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="lg:text-3xl text-xl relative font-semibold">
            Struggling To Stay Ahead With Your Bids?
          </h3>
          <div className=" absolute lg:top-8 top-2 lg:left-8 left-2 lg:w-24 w-36 h-36 lg:h-24 bg-white rounded-full opacity-35"></div>
          <p className="lg:text-md text-xs  lg:w-9/12 w-full  lg:mb-0 mb-4">
            Leave The Stress Of Managing Bids Behind! With BidWorks Estimating,{" "}
            Our Precise And Reliable Services Empower You To Win More Projects
            Effortlessly.
          </p>
        </div>
        <a
          href="#"
          className="flex text-sm bg-white  absolute lg:right-32 lg:bottom-16 bottom-2 text-black lg:px-8 px-2 py-1  rounded-3xl  hover:bg-gray-200"
        >
          Get A Free Quote <ArrowRight className="ml-2" />
        </a>
        <div className="relative w-full flex justify-center">
          <svg
            className="lg:w-[200px] w-[180px] h-[40px]   absolute lg:left-56 lg:top-4 top-6  lg:rotate-[340deg] rotate-[130deg]"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 21.2 Q 17.67 10, 33.33 20 T 66.67 20 T 100 21"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="3 3"
              strokeOpacity="0.5"
              fill="none"
            />
            <polygon points="0,20 3,18 3,22" fill="white" />
            <polygon points="100,20 97,18 97,22" fill="white" />
          </svg>
        </div>

        <div className=" absolute lg:bottom-2 lg:right-2 bottom-3 right-6 w-16  h-16 bg-white rounded-full opacity-35"></div>
      </div>
    </>
  );
};

export default TradesPreview;
