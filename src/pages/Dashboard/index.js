import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { v4 as uuidv4 } from "uuid";
import { MdDeleteOutline } from "react-icons/md";
import "./index.css";
const Dashboard = ({ edit }) => {
  const [videos, setVideos] = useState(() => {
    // Retrieve saved videos from localStorage
    const savedVideos = localStorage.getItem("videos");
    return savedVideos ? JSON.parse(savedVideos) : [];
  });
  const [videoUrl, setVideoUrl] = useState("");
  const [title, setTitle] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const popupStyles = {
    borderRadius: "10px",
    position: "fixed",
    top: "50%",
    left: "50%",
    height: "400px",
    width: "400px",
    transform: "translate(-50%, -50%)",
    padding: "40px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const addVideo = (e) => {
    e.preventDefault();
    const newVideo = {
      id: uuidv4(),
      title,
      url: videoUrl,
    };
    if (!title || !videoUrl) {
      return;
    } else {
      const updatedVideos = [...videos, newVideo];
      setVideos(updatedVideos);
      setTitle("");
      setVideoUrl("");
      togglePopup();
    }
    // setVideos([...videos, newVideo]);
  };
  const deleteVideo = (id) => {
    const updatedVideos = videos.filter((video) => video.id !== id);
    setVideos(updatedVideos);
  };
  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);
  console.log(videos);
  return (
    <>
      {edit ? (
        <>
          <div>
            <button
              className="btn btn-secondary mt-3 mb-4"
              onClick={togglePopup}
            >
              Add Video
            </button>
            {showPopup && (
              <form onSubmit={addVideo} style={popupStyles}>
                <input
                  className="mb-5"
                  placeholder="Title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  className="mb-5"
                  placeholder="Video URL"
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
                <div>
                  <button className="mb-5 me-3 btn btn-primary" type="submit">
                    Add
                  </button>
                  <button
                    className="mb-5 me-3 btn btn-warning"
                    type="button"
                    onClick={togglePopup}
                  >
                    Close
                  </button>
                </div>
              </form>
            )}
          </div>

          <ul className="video-list">
            {videos.map((video) => (
              <li key={video.id}>
                <ReactPlayer
                  url={video.url}
                  controls
                  width="300px"
                  height="535px"
                />
                <div className="video-titleContainer">
                  <p className="video-title">{video.title}</p>
                  <button
                    className="delete-button"
                    onClick={() => deleteVideo(video.id)}
                  >
                    <MdDeleteOutline size={30} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <ul className="video-list">
            {videos.map((video) => (
              <li key={video.id}>
                <ReactPlayer
                  url={video.url}
                  controls
                  width="300px"
                  height="535px"
                />
                <p className="video-titles">{video.title}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Dashboard;