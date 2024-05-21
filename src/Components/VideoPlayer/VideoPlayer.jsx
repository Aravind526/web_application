import React, { useRef } from 'react'
import student_video from '../../assets/studentvideo.mp4'
import './VideoPlayer.css'
const VideoPlayer = ({playState,setPlayState}) => {

    const player= useRef(null);

    const closePlayer= (e) =>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={student_video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
