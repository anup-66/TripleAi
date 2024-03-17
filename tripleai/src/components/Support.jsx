import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Profile from "../Images/dp.jpg";
import Db from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import support from "../Images/support.svg";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import Dashboard from "../Images/dashboard.svg";
import axios from "axios";

const Support = () => {
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
    <div className="flex flex-col">
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
          <img
            src={Profile}
            alt="icon"
            className="logo mr-[10px] w-[50px] rounded-full"
          />
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
              <Link to={"/HomePage"}>
              <p>Settings</p>
              </Link>
            </li>
            <li className="px-8 py-6 text-[22px] text-[#5f5f5f] font-serif flex hover:bg-[#c9cbcb] hover:text-black">
              <img src={support} alt="Support" className="mr-[20px]" />
              <Link to={"/support"}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col mt-[20px] ml-[400px] items-start justify-start">
        <h1 className="text-[50px] text-[#5f5f5f] font-bold font-serif">
          Support
        </h1>
        <p className="text-[18px] font-serif mt-[10px]">
          Have Any Queries? Feel free to reach out to us by submitting your
          query in the box. You can also reach out to us via email or a phone
          call.
        </p>
        <div className="flex items-center justify-center ml-[150px] mt-[20px]">
          <div className="bg-[#5f5f5f] h-[400px] w-[460px] ml-[50px] mt-[80px]">
            <div className="p-8 border border-black rounded bg-white shadow-2xl absolute ml-[-50px] mt-[-50px]">
              <form className="grid grid-cols-1">
                <label
                  htmlFor="name"
                  className="text-lg font-semibold font-mono"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="p-2 border-2 rounded w-[400px]"
                  required
                />

                <label
                  htmlFor="email"
                  className="text-lg font-semibold font-mono"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="p-2 border-2 rounded w-[400px]"
                  required
                />

                <label
                  htmlFor="message"
                  className="text-lg font-semibold font-mono"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  className="p-2 border-2 rounded w-[400px]"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#5f5f5f] text-white py-2 rounded font-mono w-[200px] ml-[100px] mt-[20px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="w-[50px] h-[100px] ml-[80px] text-[30px] flex flex-col items-center justify-center text-[#5f5f5f]">
            <SiGmail />
            <FaPhone className="mt-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
