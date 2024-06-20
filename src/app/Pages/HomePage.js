import Banner from "../Components/Banner";
import AboutHomePage from "../Components/AboutHomePage";
import { BiUpArrowAlt } from "react-icons/bi";

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutHomePage />
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center active">
      {/* <i class="bi bi-arrow-up-short"></i> */}
      <BiUpArrowAlt  className="icon"/>
      </a>
    </>
  );
};

export default HomePage;
