import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import '../App.scss'


function ProjectVideo(props) {

    return (
        <div className='project-video'>
            <ReactPlayer
                width="100%"
                pip
                controls="false"
                url={props.url}
                title={props.title}
            />
        </div>
    )
}

export default ProjectVideo
