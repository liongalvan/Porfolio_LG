import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState, useRef} from "react";
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = ()=> {
    const[letterClass, setLetterClass]= useState('text-animate');
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

     const sendEmail = (e) =>{
         e.preventDefault()

         emailjs
            .sendForm(
                'service_zo93noj',
                'template_9puzxjq',
                form.current,
                '-9saUc7lmcC1Q8u2r'

                )
                .then(
                    () => {
                        alert('Message successfully sent!')
                        window.location.reload(false)
                    },
                    ()=>{
                        alert('Failed to send the message, please try again')
                    }
                )
     }

    return(
        <>
            <div className="container contact-page">
            <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}/>
                    </h1>
                    <p>I am open to changes and new opportunities, trying to do my best and learning along the way.
                    </p>
                    <p>I like challenges and new technologies, I enjoy working in a team and I adapt easily to changes.
                    </p>
                    <p>Contact me if you think I can join your project.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>

                    </div>

            </div>
            <div className='info-map'>
                Leandro | Galvan<br/>
                Argentina <br/>
                Buenos Aires<br/>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[-34.59319077958955, -58.37433759564964]} zoom={30}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[-34.59319077958955, -58.37433759564964]}>
                    <Popup>Leandro Lives, puedes encontrarme en esta incleible ciudad.</Popup>
                </Marker>
            </MapContainer>
            </div>
            </div>
        </>
    )
}

export default Contact;