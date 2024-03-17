import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import Study from "./Study";
import GlobalChat from "./GlobalChat"; // Import the GlobalChat component

// const socket = io("http://localhost:5000");

function Main() {
  return (
    <div className="flex bg-slate-100">
      <Study /> {/* Render the YouTubePlayer component */}
      <GlobalChat /> {/* Render the GlobalChat component */}
    </div>
  );
}

export default Main;
