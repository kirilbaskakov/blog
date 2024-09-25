'use client';

import React, { useState } from 'react';

import VideoModal from '../VideoModal/VideoModal';

const VideoButton = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const onClick = () => setIsVideoOpen(true);

  const onClose = () => setIsVideoOpen(false);

  return (
    <>
      <button className="button secondary" onClick={onClick}>
        Video about us
      </button>
      {isVideoOpen && <VideoModal onClose={onClose} />}
    </>
  );
};

export default VideoButton;
