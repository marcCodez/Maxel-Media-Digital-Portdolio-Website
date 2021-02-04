import React from 'react'
import '../../App.scss'
import ReactPlayer from 'react-player'
import ProjectVideo from '../ProjectVideo'


function Projects() {
    return (
        <>
            <section>
                <div className='container'>
                    <h2>My Work</h2>
                    <p>Check out some of my projects</p>
                
                    <div className='projects'>
                        <div className='project'>
                             <ProjectVideo  url='http://www.youtube.com/watch?v=Z12UvF82BJ0&t=0m25s'/>
                        </div>    

                    </div>
                </div>
            </section>
      
        </>
    )
}

export default Projects
