import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import '../App.scss'


function ProjectVideo(props) {
    const [play, setPlay] = useState(false);
    const handleMouseEnter = () => {
        setPlay(true);
    };
    const handleMouseLeave = () => {
        setPlay(false);
    }
    return (
        <div className='project-video' onMouseEnter={handleMouseEnter} onMouseOut={handleMouseLeave}>
            <ReactPlayer
                width="100%"
                playing={play}
                pip
                controls="false"
                config={{ file: { forceHLS: true } }}
                url={props.url}
            />
        </div>
    )
}

export default ProjectVideo
