import React from "react";
import "./VideoModal.css";

const VideoModal = ({ videos, onClose }) => {
  if (!videos) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        {videos.map((video, index) => (
          <div key={index}>
            <h4>{video.description}</h4>{" "}
            {/* Kode til video beskrivelse teksten */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
        <button onClick={onClose}>Luk</button>
      </div>
    </div>
  );
};

export default VideoModal;
