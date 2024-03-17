// "use client";
import React, { useState, useEffect } from "react";
// import Icon from "../Images/tai.jpeg";
import Profile from "../Images/dp.jpg";
import Db from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import Icon from "../Images/Icon.svg";
import {Link} from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const data = [
    { name: "Python", value: 32 },
    { name: "React", value: 15 },
    { name: "HTML", value: 55 },
    { name: "CSS", value: 10 },
    { name: "DSA", value: 40 },
  ];
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
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#5f5f7f"];
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
      <div className="flex flex-col mt-[20px] w-[1150px] items-center justify-center">
        <button className="absolute ml-[1500px] bg-[#5f5f5f] text-[20px] w-[100px] h-[45px] text-white font-serif rounded-full mt-[-300px] hover:bg-black">
          Logout
        </button>
        <h1 className="text-[50px] text-[#5f5f5f] font-bold font-serif">
          Dashboard
        </h1>

        <div className="flex items-center justify-center ml-[500px]">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer className="transition ease-in-out delay-150">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data.map((ok,index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="h-[100px] w-[1000px] text-[20px] font-serif mt-[-60px]">
            <p className="transition ease-in-out transform translate-x-20">
              Here is your division of the modules completed from the past 1
              week. This visually engaging chart offers a clear representation
              of key data points, including statistics on programming language
              usage such as Python, React, HTML, and CSS. You can choose to
              continue with the same courses or start new ones. happy Learning!
            </p>
          </div>
        </div>
        <div className="w-[1050px] h-[1px] bg-[#aaaaaa] ml-[680px] mt-[30px]"></div>
      </div>
      <div className="flex flex-col items-start justify-start ml-[400px] mb-[40px]">
        <p className="text-[#5f5f5f] font-serif text-[18px] mt-[20px]">
          Continue Learning..
        </p>
        <div className="grid grid-cols-3 gap-10 mt-[20px]">
          <div className="w-[300px] h-[230px] border rounded hover:scale-105 shadow-md">
            <div className="ml-[20px] mt-[20px]">
              <img src={Icon} alt="Performance" className="w-[40px]" />
              <p className="text-[18px] text-[#5f5f5f] font-serif font-semibold mt-[20px]">
                React Beginners Course
              </p>
              <div className="w-[90%] h-2 bg-gray-200 rounded mt-[10px]">
                <div
                  className="h-full bg-blue-500 rounded"
                  style={{ width: 40.5 }}
                ></div>
                <div className="mt-[20px] text-[18px] font-serif text-[#5f5f5f]">
                  <p>46 Videos</p>
                  <p>Total Duration: 10hrs 23mins</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[230px] border rounded hover:scale-105 shadow-md">
            <div className="ml-[20px] mt-[20px]">
              <img src={Icon} alt="Performance" className="w-[40px]" />
              <p className="text-[18px] text-[#5f5f5f] font-serif font-semibold mt-[20px]">
                DSA Course
              </p>
              <div className="w-[90%] h-2 bg-gray-200 rounded mt-[10px]">
                <div
                  className="h-full bg-blue-500 rounded"
                  style={{ width: 108 }}
                ></div>
                <div className="mt-[20px] text-[18px] font-serif text-[#5f5f5f]">
                  <p>112 Videos</p>
                  <p>Total Duration: 24hrs 56mins</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[230px] border rounded hover:scale-105 shadow-md">
            <div className="ml-[20px] mt-[20px]">
              <img src={Icon} alt="Performance" className="w-[40px]" />
              <p className="text-[18px] text-[#5f5f5f] font-serif font-semibold mt-[20px]">
                Python Fundamentals
              </p>
              <div className="w-[90%] h-2 bg-gray-200 rounded mt-[10px]">
                <div
                  className="h-full bg-blue-500 rounded"
                  style={{ width: 86.4 }}
                ></div>
                <div className="mt-[20px] text-[18px] font-serif text-[#5f5f5f]">
                  <p>90 Videos</p>
                  <p>Total Duration: 15hrs 02mins</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[230px] border rounded hover:scale-105 shadow-md">
            <div className="ml-[20px] mt-[20px]">
              <img src={Icon} alt="Performance" className="w-[40px]" />
              <p className="text-[18px] text-[#5f5f5f] font-serif font-semibold mt-[20px]">
                HTML
              </p>
              <div className="w-[90%] h-2 bg-gray-200 rounded mt-[10px]">
                <div
                  className="h-full bg-blue-500 rounded"
                  style={{ width: 148.5 }}
                ></div>
                <div className="mt-[20px] text-[18px] font-serif text-[#5f5f5f]">
                  <p>30 Videos</p>
                  <p>Total Duration: 8hrs 31mins</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[230px] border rounded hover:scale-105 shadow-md">
            <div className="ml-[20px] mt-[20px]">
              <img src={Icon} alt="Performance" className="w-[40px]" />
              <p className="text-[18px] text-[#5f5f5f] font-serif font-semibold mt-[20px]">
                CSS
              </p>
              <div className="w-[90%] h-2 bg-gray-200 rounded mt-[10px]">
                <div
                  className="h-full bg-blue-500 rounded"
                  style={{ width: 27 }}
                ></div>
                <div className="mt-[20px] text-[18px] font-serif text-[#5f5f5f]">
                  <p>152 Videos</p>
                  <p>Total Duration: 36hrs 45mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
