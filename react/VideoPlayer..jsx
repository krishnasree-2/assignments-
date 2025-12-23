import { useRef, useState } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];

function VideoPlayer() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();
  const handleForward = () => (videoRef.current.currentTime += 5);
  const handleRewind = () => (videoRef.current.currentTime -= 5);

  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrevious = () => {
    setCurrentVideoIndex(
      (prev) => (prev - 1 + videos.length) % videos.length
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Video Player with useRef + useState</h2>

      <video
        key={currentVideoIndex}
        ref={videoRef}
        width="500"
        src={videos[currentVideoIndex]}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
        <button onClick={handleForward}>⏩ Forward</button>
        <button onClick={handleRewind}>⏪ Rewind</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePrevious}>⏮ Previous</button>
        <button onClick={handleNext}>⏭ Next</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
