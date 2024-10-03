import React from 'react';

import styles from './VideoModal.module.scss';

const VIDEO_URL = 'https://www.youtube.com/embed/hgitHNPf8aw?autoplay=1';

const VideoModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <iframe
          title="YouTube Video"
          src={VIDEO_URL}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          allow="autoplay"
          frameBorder="0"
        />
      </div>
    </>
  );
};

export default React.memo(VideoModal);
