import {
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoIosArrowForward,
} from "react-icons/io";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import {homes, lucknow, delhi} from "../Data/Homes";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Nav />

      <main>
        <div className="flex px-6 justify-between items-center mt-8 cursor-pointer">
          <h3 className="font-bold flex justify-center items-center text-xl">
            Trending Now <IoIosArrowForward />
          </h3>
          <span className="items-center justify-center flex text-2xl">
            <IoIosArrowDropleft /> <IoIosArrowDropright />
          </span>
        </div>
        <div className="flex-1 w-full flex items-start justify-start gap-6 p-6 overflow-x-auto">
          {homes.map((home) => (
            <div key={home.id} className="inline-block">
              <Card home={home} />
            </div>
          ))}
        </div>

        <div className="flex px-6 justify-between items-center cursor-pointer">
          <h3 className="font-bold flex justify-center items-center text-xl">
            Available in Lucknow <IoIosArrowForward />
          </h3>
          <span className="items-center justify-center flex text-2xl">
            <IoIosArrowDropleft /> <IoIosArrowDropright />
          </span>
        </div>
        <div className="flex-1 w-full flex items-start justify-start gap-6 p-6 overflow-x-auto">
          {lucknow.map((lko) => (
            <div key={lko.id} className="inline-block">
              <Card home={lko} />
            </div>
          ))}
        </div>

        <div className="flex px-6 justify-between items-center cursor-pointer">
          <h3 className="font-bold flex justify-center items-center text-xl">
            Homes in Delhi <IoIosArrowForward />
          </h3>
          <span className="items-center justify-center flex text-2xl">
            <IoIosArrowDropleft /> <IoIosArrowDropright />
          </span>
        </div>
        <div className="flex-1 w-full flex items-start justify-start gap-6 p-6 overflow-x-auto">
          {delhi.map((home) => (
            <div key={home.id} className="inline-block">
              <Card home={home} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
