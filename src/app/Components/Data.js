import client1 from "../../../assets/img/clients/client-1.png";
import client2 from "../../../assets/img/clients/client-2.png";
import client3 from "../../../assets/img/clients/client-3.png";
import client4 from "../../../assets/img/clients/client-4.png";
import client5 from "../../../assets/img/clients/client-5.png";
import client6 from "../../../assets/img/clients/client-6.png";
import { BsDribbble } from "react-icons/bs";
import {
  BiFile,
  BiWorld,
  BiTachometer,
  BiSmile,
  BiStopwatch,
  BiGlobe,
} from "react-icons/bi";
import {
  RiWindowLine,
  RiCodeBoxLine,
  RiCreativeCommonsByLine,
  RiPlayCircleLine,
  RiSearchEyeFill,
  RiTodoLine,
  RiMapPinLine,
  RiBarChartGroupedLine,
  RiContactsBook3Line,
  RiDiscLine,
  RiCalendarEventLine,
  RiAdvertisementFill,
} from "react-icons/ri";
const services = [
  {
    role: "Design",
    about:
      "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
    icon: <BsDribbble size={35} color="white" className="inline" />,
  },
  {
    role: "Development",
    about:
      "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
    icon: <BiFile size={35} color="white" className="inline" />,
  },
  {
    role: "Marketing",
    about:
      "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
    icon: <BiWorld size={35} color="white" className="inline" />,
  },
  {
    role: "Support",
    about:
      "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're al,ways available.",
    icon: <BiTachometer size={35} color="white" className="inline" />,
  },
];

const process = [
  {
    role: "1. Planning",
    about:
      "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
  },
  {
    role: "2. Design",
    about:
      "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
  },
  {
    role: "3. Development",
    about:
      "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
  },
  {
    role: "4. Marketing",
    about:
      "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
  },
];

const clients = [
  {
    imgName: client1,
  },
  {
    imgName: client2,
  },
  {
    imgName: client3,
  },
  {
    imgName: client4,
  },
  {
    imgName: client5,
  },
  {
    imgName: client6,
  },
];

const feature = [
  {
    text: "Web design",
    img: <RiWindowLine color="#ffbb2c" />,
  },
  {
    text: "Development",
    img: <RiCodeBoxLine color="#5578ff" />,
  },
  {
    text: "Branding",
    img: <RiCreativeCommonsByLine color="#e80368" />,
  },
  {
    text: "Media buying",
    img: <RiPlayCircleLine color="#e361ff" />,
  },

  {
    text: "Search engine",
    img: <RiSearchEyeFill color="#47aeff" />,
  },
  {
    text: "Brand strategy",
    img: <RiTodoLine color="#ffa76e" />,
  },
  {
    text: "Local search marketing",
    img: <RiMapPinLine color="#dbce11" />,
  },
  {
    text: "Lead Tracking &amp; Management ",
    img: <RiBarChartGroupedLine color="#dbce11" />,
  },
  {
    text: "Contact management ",
    img: <RiContactsBook3Line color="#b2904f" />,
  },
  {
    text: "Media management ",
    img: <RiDiscLine color="#b20969" />,
  },
  {
    text: "Social scheduling",
    img: <RiCalendarEventLine color="#ff5828" />,
  },
  {
    text: "Ad retargeting",
    img: <RiAdvertisementFill color="#29cc61" />,
  },
];

const counter = [
  {
    icon: <BiSmile className="counter-icon" />,
    end: 3835039,
    text: "Organic Reach (Global)",
  },
  {
    icon: <BiStopwatch className="counter-icon" />,
    end: 14081,
    text: "Watch Hours(Asia)",
  },
  {
    icon: <BiFile className="counter-icon" />,
    end: 85,
    text: "Campaigns",
  },

  {
    icon: <BiGlobe className="counter-icon" />,
    end: 17,
    text: "Excellent CTR %(Asia)",
  },
];
export default { services, process, clients, feature, counter };
