import React, {useEffect, useState} from "react";
import Profile from "../Images/dp.jpg";
import Dashboard from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import {Link} from "react-router-dom";
import axios from "axios";

const Code = () => {
  const [heading, setHeading] = useState("");

  const [name,setName] = useState([]);
  const [code, setCode] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handlePost = () => {
    // Create a new post object
    const newPost = {
      heading: heading,
      code: code,
    };

    // If editing an existing post
    if (editingIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editingIndex] = newPost;
      setPosts(updatedPosts);
      setEditingIndex(null);
    } else {
      // Add the new post to the posts array
      setPosts([...posts, newPost]);
    }

    // Clear the input fields
    setHeading("");
    setCode("");
  };

  const handleEdit = (index) => {
    const postToEdit = posts[index];
    setHeading(postToEdit.heading);
    setCode(postToEdit.code);
    setEditingIndex(index);
  };
const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/profile");
      setName(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
useEffect(() => {fetchData();},
    []);
  const handleDelete = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <div className="bg-white h-screen fixed w-[320px] shadow-lg border mt-[-30px]">
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
      <div className="container mx-auto mt-8">
        <h1 className="text-[50px] font-serif text-[#5f5f5f] font-bold ml-[450px]">
          Code Forum
        </h1>
        <button className="w-[100px] h-[30px] bg-[#5f5f5f] text-white ml-[1300px] mt-[-50px] absolute rounded-full font-serif">
          Sign Out
        </button>
        <p className="ml-[450px] font-serif text-[18px] w-[900px] mt-[10px]">
          Welcome to the Code Forum where you can connect with developers world
          wide, upload your doubts, answer to other people's doubts, and also
          get replies from developers. Join a community of like-minded people to
          and explore the oceans of the coding world!
        </p>
        <div className="max-w-2xl mx-auto p-8 rounded-md shadow-2xl border bg-gray-200 mt-[40px]">
          <h1 className="text-[22px] font-bold mb-4 font-serif">
            Create a New Post
          </h1>
          {/* Heading Input */}
          <input
            type="text"
            placeholder="Heading"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
          {/* Code Input */}
          <textarea
            placeholder="Add your code here..."
            className="border border-gray-300 rounded-md p-2 mb-4 w-full h-32"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          {/* Post Button */}
          <button
            className="bg-[#5f5f5f] text-white px-4 py-2 rounded-md hover:bg-black mr-2 font-serif"
            onClick={handlePost}
          >
            {editingIndex !== null ? "Update" : "Post"}
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 font-serif"
            onClick={() => {
              setHeading("");
              setCode("");
              setEditingIndex(null);
            }}
          >
            Cancel
          </button>
        </div>
        {/* Display Posts */}
        <div className="max-w-2xl mx-auto mt-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 my-4 rounded-md shadow-2xl relative"
            >
              <h2 className="text-xl font-bold mb-2">{post.heading}</h2>
              <pre>{post.code}</pre>
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <button
                  className="bg-[#5f5f5f] text-white px-2 py-1 rounded-md hover:bg-black mr-2 font-serif"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 font-serif"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex fixed right-0 top-1/2 transform -translate-y-1/2 flex-col shadow-xl h-[200px]">
        <button className="transform rotate-90 text-white bg-[#5f5f5f] p-3">
          Upload
        </button>
        <button className="transform rotate-90 text-white bg-[#5f5f5f] mt-[60px] p-3">
          Replies
        </button>
        <button className="transform rotate-90 text-white bg-[#5f5f5f] mt-[60px] p-3">
          Contribute
        </button>
      </div>
    </div>
  );
};

export default Code;
