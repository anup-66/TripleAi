import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Profile from "../Images/dp.jpg";
import Db from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

// import { FcDataSheet } from "react-icons/fc";
import { Link } from "react-router-dom";

import axios from "axios";
import Dashboard from "../Images/dashboard.svg";

function Study() {
  const [isActive, setIsActive] = useState([]);
  const [isActive1, setIsActive1] = useState([]);
  const [isActive2, setIsActive2] = useState([]);
  const [isActive3, setIsActive3] = useState([]);
  const [isActive4, setIsActive4] = useState([]);
  const [isActive5, setIsActive5] = useState([]);
  const [isActive6, setIsActive6] = useState([]);
  const [isActive7, setIsActive7] = useState([]);

  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedTopic1, setSelectedTopic1] = useState(null);
  const [selectedTopic2, setSelectedTopic2] = useState(null);
  const [selectedTopic3, setSelectedTopic3] = useState(null);
  const [selectedTopic4, setSelectedTopic4] = useState(null);
  const [selectedTopic5, setSelectedTopic5] = useState(null);
  // const [isActive, setIsActive] = useState(false);
  const [selectedTopicIsActive, setSelectedTopicIsActive] = useState(false);
  const [selectedTopicIsActive1, setSelectedTopicIsActive1] = useState(false);

  const [selectedTopicIsActive2, setSelectedTopicIsActive2] = useState(false);
  const [selectedTopicIsActive3, setSelectedTopicIsActive3] = useState(false);
  const [selectedTopicIsActive4, setSelectedTopicIsActive4] = useState(false);
  const [selectedTopicIsActive5, setSelectedTopicIsActive5] = useState(false);
  const [selectedTopicIsActive6, setSelectedTopicIsActive6] = useState(false);

  const [name,setName] = useState([]);
    const fetchData3 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/profile");
      setName(response.data);
      console.log(response.data['email'])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/data?search=${searchQuery}`);
      // Handle the response data as needed
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
  }, []);
  // useEffect(() => {
  //   fetchData2();
  // }, []);
  const handleToggle = () => {
    setIsActive(!isActive);
    setSelectedTopic(null);
    setSelectedTopicIsActive(false);
  };
  const getVideoId = (link) => {
    const videoId = link.split('v=')[1];
    console.log(videoId);
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  };
  const handleToggle1 = () => {
    setIsActive1(!isActive1);
    setSelectedTopic1(null);
    setSelectedTopicIsActive1(false);
  };
  const handleToggle2 = () => {
    setIsActive2(!isActive2);
    setSelectedTopic2(null);
    setSelectedTopicIsActive2(false);
  };
  const handleToggle3 = () => {
    setIsActive3(!isActive3);
    setSelectedTopic3(null);
    setSelectedTopicIsActive3(false);
  };
  const handleToggle4 = () => {
    setIsActive4(!isActive4);
    setSelectedTopic4(null);
    setSelectedTopicIsActive4(false);
  };
  const handleToggle5 = () => {
    setIsActive5(!isActive5);
    setSelectedTopic5(null);
    setSelectedTopicIsActive5(false);
  };
  // const handleToggle6 = () => {
  //   setIsActive6(!isActive6);
  //   setSelectedTopic6(null);
  //   setSelectedTopicIsActive6(false);
  // };
  // const handleToggle1 = ()=>{
  //   setIsActive1(!isActive1)
  // };
  // const handleToggle1 = ()=>{
  //   setIsActive1(!isActive1)
  // };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/info");
      setData1(response.data.info);
      setData2(response.data.para);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleTopicClick = (index) => {
    if (index === selectedTopic) {
      // Toggle the visibility of selected topic data
      setSelectedTopicIsActive(!selectedTopicIsActive);
    } else {
      setSelectedTopic(index);
      setSelectedTopicIsActive(true);
    }
  };
  const handleTopicClick1 = (index) => {
    if (index === selectedTopic1) {
      // Toggle the visibility of selected topic data
      setSelectedTopicIsActive1(!selectedTopicIsActive1);
    } else {
      setSelectedTopic1(index);
      setSelectedTopicIsActive1(true);
    }
  };
  const handleTopicClick2 = (index) => {
    if (index === selectedTopic2) {
      // Toggle the visibility of selected topic data
      setSelectedTopicIsActive2(!selectedTopicIsActive2);
    } else {
      setSelectedTopic2(index);
      setSelectedTopicIsActive2(true);
    }
  };
  const handleTopicClick3 = (index) => {
    if (index === selectedTopic3) {
      // Toggle the visibility of selected topic data
      setSelectedTopicIsActive3(!selectedTopicIsActive3);
    } else {
      setSelectedTopic3(index);
      setSelectedTopicIsActive3(true);
    }
  };
  const handleTopicClick4 = (index) => {
    if (index === selectedTopic4) {
      // Toggle the visibility of selected topic data
      setSelectedTopicIsActive4(!selectedTopicIsActive4);
    } else {
      setSelectedTopic4(index);
      setSelectedTopicIsActive4(true);
    }
  };
  const handleTopicClick5 = (index) => {
    if (index === selectedTopic5) {
      // Toggle the visibility of selected topic data
      setSelectedTopicIsActive5(!selectedTopicIsActive5);
    } else {
      setSelectedTopic5(index);
      setSelectedTopicIsActive5(true);
    }
  };


  return (
    <div className="flex flex-col bg-slate-100">
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
              {name["email"]}
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
      <div className="w-[750px]">
        {/*<input*/}
        {/*  type="text"*/}
        {/*  placeholder="Search Topics..."*/}
        {/*  className="border-2 p-2 rounded-full w-full ml-[350px] mt-[20px]"*/}
        {/*/>*/}
        <input
      type="text"
      placeholder="Search Topics..."
      className="border-2 p-2 rounded-full w-full ml-[350px] mt-[20px]"
      value={searchQuery}
      onChange={handleChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
    />
      </div>

      <div className="w-[750px] ml-[350px] mt-[20px]">
        <h1 className="text-[50px] font-serif text-[#5f5f5f] font-bold">
          Videos
        </h1>
        <p className="text-[18px] font-serif">
          Welcome to the Videos section of TripleAI! You can search for any
          topics and we assure you that you will get the best roadmap to learn
          that skill efficiently and in a comparatively lesser time.{" "}
        </p>
        <div className="shadow-lg bg-opacity-70 mt-[40px] text-[18px] font-serif">
          <div
            onClick={handleToggle}
            className="cursor-pointer mt-[20px] border p-4 shadow-md"
          >
            {isActive ? "Introduction to Python" : "Introduction to Python"}
          </div>
          <div className="ml-[30px] mt-[20px]">
            <div onClick={handleToggle1} className="cursor-pointer">
              {isActive1
                ? "All Basic concepts and fundamentals"
                : "All Basic concepts and fundamentals"}
            </div>

            <div className="ml-[30px] mt-[20px]">
              {data && (
                <>
                  {isActive1 && (
                    <div className="ml-[15px] mt-[10px]">
                      {data[0][0][0].map((topic, index) => (
                        <div key={index} className="cursor-pointer">
                          <div
                            onClick={() => handleTopicClick1(index)}
                            className="p-4 w-[90%] border shadow-md flex items-center justify-start"
                          >
                            <div className="w-[40%]">{topic}</div>
                            <MdOutlineKeyboardArrowDown
                              size={22}
                              className="ml-[65%]"
                            />
                          </div>
                          {/* Selected topic */}
                          {selectedTopicIsActive1 &&
                            selectedTopic1 === index && (
                              <div className="ml-[15px] text-[#323ca6] mt-[10px]">
                                <p>{data[0][0][1][selectedTopic1]}</p>
                                <p>{data[0][0][2][selectedTopic1]}</p>
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            <div onClick={handleToggle2} className="cursor-pointer mt-[20px]">
              {isActive2
                ? "Recomneded readings or articles"
                : "Recomneded readings or articles"}
            </div>

            <div className="ml-[30px] mt-[20px]">
              {data && (
                <>
                  {isActive2 && (
                    <div className="ml-[15px] mt-[10px]">
                      {data[0][1][0].map((topic, index) => (
                        <div key={index} className="cursor-pointer">
                          <div
                            onClick={() => handleTopicClick2(index)}
                            className="p-4 w-[90%] border shadow-md flex items-center justify-start"
                          >
                            <div className="w-[40%]">{topic}</div>
                            <MdOutlineKeyboardArrowDown
                              size={22}
                              className="ml-[65%]"
                            />
                          </div>
                          {/* Selected topic */}
                          {selectedTopicIsActive2 &&
                            selectedTopic2 === index && (
                              <div className="ml-[15px] text-[#323ca6] mt-[10px]">
                                <p>{data[0][1][1][selectedTopic2]}</p>
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            <div onClick={handleToggle3} className="cursor-pointer mt-[20px]">
              {isActive3 ? "Keywords" : "Keywords"}
            </div>
            <div className="ml-[30px] mt-[20px]">
              {data && (
                <>
                  {isActive3 && (
                    <div className="ml-[15px] mt-[10px]">
                      {data[0][2].map((topic, index) => (
                        <div
                          div
                          key={index}
                          onClick={() => handleTopicClick3(index)}
                          className="cursor-pointer"
                        >
                          <div className="p-4 w-[90%] flex">
                            👉🏾
                            {topic}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            {/* <div>youtube videos</div> */}
            <div onClick={handleToggle4} className="cursor-pointer mb-[10px]">
              {isActive4 ? "YouTube videos" : "YouTube videos"}
            </div>

            <div className="ml-[30px] mt-[20px]">
              {data && (
                <>
                  {isActive4 && (
                    <div className="ml-[15px] mt-[10px]">
                      {data[0][3][0].map((topic, index) => (
                        <div key={index} className="cursor-pointer">
                          <div
                            onClick={() => handleTopicClick4(index)}
                            className="p-4 w-[90%] border shadow-md flex items-center justify-start"
                          >
                            <div className="w-[80%]">{topic}</div>
                            <MdOutlineKeyboardArrowDown
                              size={22}
                              className="ml-[25%]"
                            />
                          </div>
                          {/* Selected topic */}
                          {selectedTopicIsActive4 &&
                            selectedTopic4 === index && (
                              <div className="ml-[15px] text-[#323ca6] mt-[10px]">
                                <p>{data[0][3][1][selectedTopic4]}</p>
                                <div className="responsive-video">
                                <iframe
                                  title="YouTube Video"
                                  width="560"
                                  height="315"
                                  src = {`https://www.youtube.com/embed/${getVideoId(data[0][3][1][selectedTopic4])}`}
                                  // src={data[0][3][1][selectedTopic4]} // Assuming data[0][3][1][selectedTopic4] contains the YouTube video link
                                  // frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Study;
