import { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  return (
    <div className="app__video">
      <video
        ref={video}
        src='https://static.videezy.com/system/resources/previews/000/041/718/original/R024.mp4'
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              video.current?.pause();
            } else {
              video.current?.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
