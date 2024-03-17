import React, { useState, useEffect } from "react";
import Icon from "../Images/Icon.svg";
import Profile from "../Images/dp.jpg";
import Dashboard from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [name,setName] = useState([]);
    const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/profile");
      setName(response.data);
      console.log(response.data['email'])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    useEffect(() => {fetchData();},
    []);
  return (
    <div className="flex bg-[#f4f9f4]">
      <div className="bg-white h-screen fixed w-[320px] shadow-lg border">
        <div className="flex items-center justify-center mt-[30px]">
          <img
            src="/assets/tai.jpeg"
            alt="icon"
            className="logo mr-[10px] w-[70px]"
          />
          <h2 className="title px-1 text-[31.42px] text-[#5f5f5f] font-serif">
            Triple AI{" "}
          </h2>
        </div>
        <div className="flex items-center justify-center mt-[30px] ml-[30px]">
          <Link to={"/Profile"}>
          <img
            src={Profile}
            alt="icon"
            className="logo mr-[10px] w-[50px] rounded-full"
          />
            </Link>
          <div className="px-1">
            <p className="text-[16px] font-serif font-bold text-[#5f5f5f]">
              Hello! {name['username']}
            </p>
            <p className="font-thin font-serif text-[#5f5f5f] text-[14px]">
              {name['email']}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[20px]">
          <ul>
            <li className="px-8 py-6 text-[22px] text-[#5f5f5f] font-serif flex hover:bg-[#c9cbcb] hover:text-black">
              <img src={Dashboard} alt="dashboard" className="mr-[20px]" />
              <Link  to={"/Dashboard"}>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="px-8 py-6 text-[22px] text-[#5f5f5f] font-serif flex hover:bg-[#c9cbcb] hover:text-black">
              <img
                src={Transactions}
                alt="transactions"
                className="mr-[20px]"
              />
              <Link to = {"/HomePage"}>
              <p>Home</p>
              </Link>
            </li>
            <li className="px-8 py-6 text-[22px] text-[#5f5f5f] font-serif flex hover:bg-[#c9cbcb] hover:text-black">
              <img src={Performance} alt="Performance" className="mr-[20px]" />
              <Link to={"/Main"}>Learn</Link>
            </li>
            <li className="px-8 py-6 text-[22px] text-[#5f5f5f] font-serif flex hover:bg-[#c9cbcb] hover:text-black">
              <img src={News} alt="News" className="mr-[20px]" />
              <Link to={"/code"}>
              <p>Code</p>
              </Link>
            </li>
            <li className="px-8 py-6 text-[22px] text-[#5f5f5f] font-serif flex hover:bg-[#c9cbcb] hover:text-black">
              <img src={Settings} alt="Settings" className="mr-[20px]" />
              <Link to={"/Profile"}>
              <p>Profile</p>
              </Link>
            </li>
            <li className="px-8 py-6 text-[22px] text-[#5f5f5f] font-serif flex hover:bg-[#c9cbcb] hover:text-black">
              <img src={Support} alt="Support" className="mr-[20px]" />
              <Link to={"/support"}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex mt-[20px] w-[1150px] ml-[350px] items-center justify-center">
          <div>
            <input
              type="text"
              placeholder="Search Topics..."
              className="border-2 p-2 rounded-full w-[1040px] ml-[10px] font-serif"
            />
          </div>
          <button className="bg-[#5f5f5f] text-white font-bold text-[18px] text-center font-serif w-[150px] h-[50px] rounded-full ml-[20px]">
            Logout
          </button>
        </div>
        <div>
          <h1 className="text-[50px] text-[#5f5f5f] font-serif font-semibold ml-[350px] mt-[20px]">
            Welcome to TripleAI
          </h1>
          <p className="ml-[350px] text-[22px] font-serif font-thin mt-[20px]">
            <i>A One Stop Destination for Everything that you want to Learn!</i>
          </p>
        </div>
        <div className="w-[1120px] h-[1px] bg-[#5f5f5f] ml-[350px] mt-[30px]"></div>
        <p className="text-[#5f5f5f] font-serif text-[18px] ml-[350px] mt-[20px]">
          Check out some of the Trending Topics..
        </p>
        <div className="grid grid-cols-3 gap-20 ml-[350px] mt-[20px]">
          <div className="w-[300px] h-[350px] border shadow-lg">
            <img src="/assets/html.png" />
            <p className="w-[280px] text-center">
              Dive deep into a course filled with all the information that you
              need! Get immersed in the fantasy land of web development, where
              you can make mind-blowing websites.
            </p>
            <button className="w-[160px] h-[30px] bg-[#5f5f5f] text-white font-semibold ml-[120px] mt-[15px] rounded">
              Learn Now!
            </button>
          </div>
          <div className="w-[300px] h-[350px] border shadow-lg">
            <img src="/assets/react.jpg" />
            <p className="w-[280px] text-center mt-[10px] ml-[10px]">
              Wanna learn a framework that helps you become better at making
              websites? Then this course is just for you! Learn all you can
              about react.js. So what are you waiting for?
            </p>
            <button className="w-[160px] h-[30px] bg-[#5f5f5f] text-white font-semibold ml-[120px] mt-[15px] rounded">
              Learn Now!
            </button>
          </div>
          <div className="w-[300px] h-[350px] border shadow-lg">
            <img src="/assets/ai-ml.png" />
            <p className="w-[280px] text-center ml-[10px]">
              Using various AI tools, to making good ML models. Learn about the
              trendy AL/ML concepts and increase your hands-on experience by
              working on some cool projects.
            </p>
            <button className="w-[160px] h-[30px] bg-[#5f5f5f] text-white font-semibold ml-[120px] mt-[15px] rounded">
              Learn Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
