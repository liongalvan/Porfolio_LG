import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faGitAlt, faHtml5, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';



const About = () => {
    const[letterClass, setLetterClass]= useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

    return(
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e',]}
                        idx={15}/>
                    </h1>
                    <p>👀 I am interested in web development, I like to learn and I am always looking for something new regarding Web3 and AI.</p>
                    <p>🌱 I currently work with JavaScript, React, Angular and Node. I'm not an expert but I like Python and Django. I'm also testing with Solidity.</p>
                
                </div>

            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#333"/>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#333"/>
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color="#333"/>
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#333"/>
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color="#333"/>
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#333"/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About;