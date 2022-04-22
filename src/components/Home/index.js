import {Link} from 'react-router-dom'
import { useEffect, useState} from "react";
import AnimatedLetters from '../AnimatedLetters';
import'./index.scss';
import Logo from './logo';

const Home = () =>{
    const[letterClass, setLetterClass]= useState('text-animate')
    const nameArray=['L', 'e', 'a', 'n','d','r','o','|', 'G', 'a', 'l','v','a','n']
    const jobArray=['F','u','l','l','S','t','a','c','k',' ','d','e','v','e','l','o','p','e','r','.']
    
 
    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
    
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _13`}>i </span>
                    <span className={`${letterClass} _14`}>, I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={14}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={20}/>
                </h1>
                <h2>JavaScript Developers / React / Node / Web3 </h2>
                <Link to="/contact" className='flat-buttom'>CONTACT ME </Link>
            </div>
            <Logo/>
        </div>
        </>
    )
} 


export default Home;