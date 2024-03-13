
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubePlayer = () => {
  const [videoLinks, setVideoLinks] = useState([]);

  useEffect(() => {
    // Fetch video links from Flask backend
    const fetchVideoLinks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/videos');
        setVideoLinks(response.data.data);
      } catch (error) {
        console.error('Error fetching video links:', error);
        setVideoLinks([]); // Set videoLinks to an empty array in case of error
      }
    };

    fetchVideoLinks();
  }, []);
    const getVideoId = (link) => {
    const videoId = link.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-4">
        {videoLinks.length === 0 ? (
          <p>No videos found</p>
        ) : (
          videoLinks.map((link, index) => {
            const videoId = getVideoId(link);
            return (
              <div key={index} className="w-100px md:w-1/3">
                <iframe
                  title={`YouTube Video ${index + 1}`}
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
//   <div className="bg-blue-500 text-white p-4">
//       This is an example component with Tailwind CSS styles applied.
//     </div>
//   );
// };
export default YouTubePlayer;
