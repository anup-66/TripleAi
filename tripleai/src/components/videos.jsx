//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// const YouTubePlayer = () => {
//   const [videoLinks, setVideoLinks] = useState([]);
//
//   useEffect(() => {
//     // Fetch video links from Flask backend
//     const fetchVideoLinks = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/videos');
//         setVideoLinks(response.data.data);
//       } catch (error) {
//         console.error('Error fetching video links:', error);
//         setVideoLinks([]); // Set videoLinks to an empty array in case of error
//       }
//     };
//
//     fetchVideoLinks();
//   }, []);
//     const getVideoId = (link) => {
//     const videoId = link.split('v=')[1];
//     const ampersandPosition = videoId.indexOf('&');
//     if (ampersandPosition !== -1) {
//       return videoId.substring(0, ampersandPosition);
//     }
//     return videoId;
//   };
//
//   return (
//     <div className="container mx-auto px-4">
//       <div className="grid grid-cols-3 gap-4">
//         {videoLinks.length === 0 ? (
//           <p>No videos found</p>
//         ) : (
//           videoLinks.map((link, index) => {
//             const videoId = getVideoId(link);
//             return (
//               <div key={index} className="w-100px md:w-1/3">
//                 <iframe
//                   title={`YouTube Video ${index + 1}`}
//                   width="100%"
//                   height="200"
//                   src={`https://www.youtube.com/embed/${videoId}`}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };
// //   <div className="bg-blue-500 text-white p-4">
// //       This is an example component with Tailwind CSS styles applied.
// //     </div>
// //   );
// // };
// export default YouTubePlayer;


// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

// function YouTubePlayer() {
//   const [data, setData] = useState(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/data'); // Change the URL to match your Flask endpoint
//       setData(response.data);

//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleTopicClick = (index) => {
//     setSelectedTopic(index);
//   };

//   return (
//     <div>
//       {data && (
//         <>
//           <h1>Dynamic Table</h1>
//           <div style={{ display: 'flex' }}>
//             {data[0].map((topic, index) => (
//               <div key={index} style={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => handleTopicClick(index)}>
//                 {topic}
//               </div>
//             ))}
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             {selectedTopic !== null && (
//               <div>
//                 <p>{data[1][selectedTopic]}</p>
//                 <p>{data[2][selectedTopic]}</p>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
// export default YouTubePlayer;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // function YouTubePlayer() {
// //   const [data, setData] = useState(null);
// //   const [selectedTopic, setSelectedTopic] = useState(null);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5000/data"); // Change the URL to match your Flask endpoint
// //       setData(response.data);

// //       console.log(data);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };

// //   const handleTopicClick = (index) => {
// //     setSelectedTopic(index);
// //   };

// //   return (
// //     <div>
// //       {data && (
// //         <>
// //           <h1>Dynamic Table</h1>
// //           <div style={{ display: "flex" }}>
// //             {data[0].map((topic, index) => (
// //               <div
// //                 key={index}
// //                 style={{ margin: "0 10px", cursor: "pointer" }}
// //                 onClick={() => handleTopicClick(index)}
// //               >
// //                 {topic}
// //               </div>
// //             ))}
// //           </div>
// //           <div style={{ marginTop: "20px" }}>
// //             {selectedTopic !== null && (
// //               <div>
// //                 <p>{data[1][selectedTopic]}</p>
// //                 <p>{data[2][selectedTopic]}</p>
// //               </div>
// //             )}
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // }
// // export default YouTubePlayer;

import React, { useState, useEffect } from "react";
// import { FcDataSheet } from "react-icons/fc";
import { Link } from "react-router-dom";

import axios from "axios";

function YouTubePlayer() {
  const [isActive, setIsActive] = useState([]);
  const [isActive1, setIsActive1] = useState([]);
  const [isActive2, setIsActive2] = useState([]);
  const [isActive3, setIsActive3] = useState([]);
  const [isActive4, setIsActive4] = useState([]);
  const [isActive5, setIsActive5] = useState([]);
  const [isActive6, setIsActive6] = useState([]);
  const [isActive7, setIsActive7] = useState([]);

  const [data, setData] = useState(null);
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

  useEffect(() => {
    fetchData();
  }, []);
  const handleToggle = () => {
    setIsActive(!isActive);
    setSelectedTopic(null);
    setSelectedTopicIsActive(false);
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
    <div className="flex flex-col bg-[#f4f9f4]">
      <div className="h-[70px] w-full bg-gray-600 opacity-90 bg-gradient-to-r flex text-[22px] font-serif text-center items-center justify-center text-white font-semibold shadow-xl">
        <ul className="decoration-none flex">
          <li className="p-8">Home</li>
          <li className="p-8">Code</li>
          <li className="p-8">Transactions</li>
          <li className="p-8">Settings</li>
          <li className="p-8">Support</li>
        </ul>
      </div>
      <div className="w-[300px] h-screen shadow-2xl fixed mt-[70px] bg-slate-400 bg-opacity-45">
        <div className="flex mt-[20px]">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border-2 p-2 rounded-full w-[260px] ml-[10px]"
            />
          </div>
        </div>
        <div onClick={handleToggle} className="cursor-pointer">
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
                      <div
                        div
                        key={index}
                        onClick={() => handleTopicClick1(index)}
                        className="cursor-pointer hover:bg-slate-100"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                )}
                {selectedTopicIsActive1 && selectedTopic1 !== null && (
                  <div className="ml-[15px] text-[#323ca6] mt-[10px]">
                    <p>{data[0][0][1][selectedTopic1]}</p>
                    <p>{data[0][0][2][selectedTopic1]}</p>
                  </div>
                )}
              </>
            )}
          </div>
          <div onClick={handleToggle2} className="cursor-pointer">
            {isActive2
              ? "Recomneded readings or articlse"
              : "Recomneded readings or articlse"}
          </div>
          <div className="ml-[30px] mt-[20px]">
            {data && (
              <>
                {isActive2 && (
                  <div className="ml-[15px] mt-[10px]">
                    {data[0][1][0].map((topic, index) => (
                      <div
                        div
                        key={index}
                        onClick={() => handleTopicClick2(index)}
                        className="cursor-pointer hover:bg-slate-100"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                )}
                {selectedTopicIsActive2 && selectedTopic2 !== null && (
                  <div className="ml-[15px] text-[#323ca6] mt-[10px]">
                    <p>{data[0][1][1][selectedTopic2]}</p>
                  </div>
                )}
              </>
            )}
          </div>
          <div onClick={handleToggle3} className="cursor-pointer">
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
                        className="cursor-pointer hover:bg-slate-100"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          {/* <div>youtube videos</div> */}
          <div onClick={handleToggle4} className="cursor-pointer">
            {isActive4 ? "youtube videos" : "youtube videos"}
          </div>
          <div className="ml-[30px] mt-[20px]">
            {data && (
              <>
                {isActive4 && (
                  <div className="ml-[15px] mt-[10px]">
                    {data[0][3][0].map((topic, index) => (
                      <div
                        div
                        key={index}
                        onClick={() => handleTopicClick4(index)}
                        className="cursor-pointer hover:bg-slate-100"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                )}
                {selectedTopicIsActive4 && selectedTopic4 !== null && (
                  <div className="ml-[15px] text-[#323ca6] mt-[10px]">
                    <p>{data[0][3][1][selectedTopic4]}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mt-[30px] ml-[350px] w-[1100px]">
        <div>
          <h1 className="text-[27px] font-bold">Introduction to AI</h1>
          <p className="mt-[20px]">
            Artificial Intelligence (AI) refers to the simulation of human
            intelligence in machines that are programmed to think and act like
            humans. It involves the development of algorithms and computer
            programs that can perform tasks that typically require human
            intelligence such as visual perception, speech recognition,
            decision-making, and language translation. AI has the potential to
            revolutionize many industries and has a wide range of applications,
            from virtual personal assistants to self-driving cars. Before
            leading to the meaning of artificial intelligence let understand
            what is the meaning of Intelligence- Intelligence: The ability to
            learn and solve problems. This definition is taken from webster’s
            Dictionary. The most common answer that one expects is “to make
            computers intelligent so that they can act intelligently!”, but the
            question is how much intelligent? How can one judge intelligence?{" "}
          </p>
          <p className="mt-[20px]">
            Intelligence, as we know, is the ability to acquire and apply
            knowledge. Knowledge is the information acquired through experience.
            Experience is the knowledge gained through exposure(training).
            Summing the terms up, we get artificial intelligence as the “copy of
            something natural(i.e., human beings) ‘WHO’ is capable of acquiring
            and applying the information it has gained through exposure.”
          </p>
        </div>
      </div>
    </div>
  );
}
export default YouTubePlayer;

