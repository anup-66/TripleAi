import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Pf from "../Images/dp.jpg";
import Db from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import support from "../Images/support.svg";
import axios from "axios";
import Support from "../Images/support.svg";

const Profile = () => {
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
            src={Pf}
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
              <img src={Db} alt="dashboard" className="mr-[20px]" />
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
      <div className="ml-[400px] mt-[100px] flex flex-col items-center justify-center p-10 border shadow-2xl w-[1000px]">
        <div className="">
          <img src={Pf} className="rounded-full w-[250px]" />
          <ul className="underline text-[18px] ml-[30px] font-serif mt-[30px]">
            <li className="p-4">
              <strong>Name:</strong> {name['username']}
            </li>
            <li className="p-4">
              <strong>Email ID:</strong> {name['email']}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
