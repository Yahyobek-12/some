import React from 'react';
import videos from './Assets/video-5.mp4';

const VideoPlayer = () => {
  return (
    <div>
      <h2>Video Player</h2>
      <video controls width="500" height="300">
        <source src={videos} type="video/mp4" />
        {/* Add additional source tags for different video formats (e.g., WebM, Ogg) */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
