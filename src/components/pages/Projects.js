import React, {useEffect} from 'react'
import '../../App.scss'
import ReactPlayer from 'react-player'
import ProjectVideo from '../ProjectVideo'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Projects() {
    useEffect(() => {
        AOS.init({ 
            duration: 1500
        });
    }, [])
    return (
        <>
            <section class="text-center pb-3 space-top">
                <div className='container'>
                    <h2 data-aos="zoom-in" className='section-title'>MY WORK</h2>
                    <div data-aos="zoom-in" className='underline'></div>
             
                
                    <div className='projects'>
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/XvJvJMaL6X8' title="CLUB REELCOMPILATIONS"/> 
                        </div>
                        <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://www.dropbox.com/s/sq40c2jr5fnwx4w/CRUISE_PROMO.mp4?dl=0' title="cruise promo"/> 
                        </div>
                   
                        {/* <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://www.dropbox.com/s/sq40c2jr5fnwx4w/CRUISE_PROMO.mp4?dl=0' title="Cruise promo"/> 
                        </div> */}
                        {/* <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtube.com/shorts/0dLg8FrAQ5Y' title="dj promo"/> 
                        </div> */}
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/-JgfW9hrO7g' title="Cy and Marielle"/> 
                        </div>
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/3kZ18vNjAzY' title="Crossover upstaged"/> 
                        </div>
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://www.youtube.com/watch?v=CIq_yP6SSE4' title="MDA promo video"/> 
                        </div>
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://www.youtube.com/watch?v=vH9WS_N3skk' title="UNSW MODSOC 2022"/> 
                        </div>
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://www.youtube.com/watch?v=GPXLKHE7YqU' title="Tony's Girl Style"/> 
                        </div>
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://www.youtube.com/watch?v=fCvYn26ugiM' title="Alice's Hip Hop"/> 
                        </div>
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://www.youtube.com/watch?v=XkViJ8OABY4' title="Taemin| Beatrice's Kpop"/> 
                        </div>
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://www.youtube.com/watch?v=TyRRqucXYkg' title="Jaye's Kpop"/> 
                        </div>
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/dFyDkElDMSk' title="RAENGIRL Promo"/> 
                        </div> 
                        <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/0YzKMJ9uLqc' title="t-wreckz Someone Else"/> 
                        </div> 
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://www.youtube.com/watch?v=QnO52yyP0bM' title="t-wreckz sorry"/> 
                        </div> 
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/KwHGi-0uoCo' title="Modsoc x D2MG"/> 
                        </div> 
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/w_MgVugL9pE' title="Sesame Street Broadway"/> 
                        </div> 
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/8tsU01FNO8I' title="Iron Gym Platinum"/> 
                        </div> 
                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/qezBKmfDa3Y' title="SoulXpress Usyd promo video"/> 

                        </div> 

                    <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='https://youtu.be/8Dk2215smvw' title="Stop music video by Tk"/> 
                        </div> 
                    <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://youtu.be/971yh19K23k' title="UNSW MODSOC 2021 PROMO VIDEO"/>
                    </div>
                        <div data-aos="fade-up" className='project'>
                             <ProjectVideo  url='http://www.youtube.com/watch?v=Z12UvF82BJ0&t' title="Dante 20 music video"/> 
                        </div> 
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://youtu.be/1zmp8eVvavg' title="Share With Oscar uni project video" />
                        </div>
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=PbMBsEsRlrE' title="dante thursday music video"/>
                        </div>   
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://youtu.be/ibY-ZKUVvyA' title="Steps to Problem Solving: An Engineer's Guide - Book Teaser"/>
                        </div>   
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://youtu.be/pZYnPs9caO8' title="Steps to Problem Solving: An Engineer's Guide - Official Book Trailer"/>
                        </div>   
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=zKwkc92ubGA' title="Robin's Breaking (Beginners Class)"/>
                        </div>   
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=9X08-17Uoyc' title="Lionel's Girl Style (Beginners Class)"/>
                        </div>   
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://youtu.be/s1Ht_11s-1k' title="Fashion Shoot"/>
                        </div>  
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=rSlDqYWwKlE' title="Barber in 60"/>
                        </div>  
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=MiVtLIN__1c' title="Sesame Street Broadway"/>
                        </div>  
                        <div data-aos="fade-up" className='project'>
                            <ProjectVideo  url='https://www.youtube.com/watch?v=O9E1153wZx4' title="101KISSA"/>
                        </div>   

                    </div>
                    </div>
            </section>
      
        </>
    )
}

export default Projects
