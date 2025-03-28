import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 168px;
  height: 108px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const VideoContent = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
`;

const VideoList = ({ thumbnailUrl, videoUrl }) => {
  const videoRef = useRef();

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 1;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (video.current) {
      videoRef.current.style.opacity = 0;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <VideoContent ref={videoRef} src={videoUrl} muted></VideoContent>
      <ImageContent src="{thumbnailUrl}" alt="thumbnailUrl" />
    </Wrapper>
  );
};

export default VideoList;
