import React from 'react'
import '../../App.scss'
import ReactPlayer from 'react-player'
import ProjectVideo from '../ProjectVideo'


function Projects() {
    return (
        <>
            <section class="text-center pb-3 space-top">
                <div className='container'>
                    <h2 className='section-title'>My Work</h2>
                    <div className='underline'></div>
                    <p className='sub-text'>Check out some of my projects</p>
             
                
                    <div className='projects'>
                        <div className='project'>
                             <ProjectVideo  url='http://www.youtube.com/watch?v=Z12UvF82BJ0&t=0m25s'/>
                             
  
                        </div> 
                        <div className='project'>
                            <ProjectVideo  url='https://youtu.be/1zmp8eVvavg'/>
                        </div>
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=PbMBsEsRlrE'/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://youtu.be/ibY-ZKUVvyA'/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://youtu.be/pZYnPs9caO8'/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=zKwkc92ubGA'/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=9X08-17Uoyc'/>
                        </div>   
                        <div className='project'>
                            <ProjectVideo  url='https://youtu.be/s1Ht_11s-1k'/>
                        </div>  
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=rSlDqYWwKlE'/>
                        </div>  
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=MiVtLIN__1c'/>
                        </div>  
                        <div className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=O9E1153wZx4'/>
                        </div>   

                    </div>
                    </div>
            </section>
      
        </>
    )
}

export default Projects
