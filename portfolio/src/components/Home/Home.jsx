import './Home.scss';
import Carrousell from '../Carrousell';
import Main from '../../Containers/Main';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faReact} from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    useEffect(()=>{
       
    },[])
    const arrayAsh = [
        './assets/images/AshAcademy.png',
        './assets/images/modal.png',
        './assets/images/prof1.jpg',
        './assets/images/prof2.jpg',
        './assets/images/prof4.jpg',
    ];
    const descriptionArray = [
        'ASH Academy. Proyecto realizado en React y Node',
        'Uso de modal para dar de alta profesores y alumnos',
    ];

    const [picture,setPicture] = useState(arrayAsh[0]);
    const [index, setIndex] = useState(null);
    window.onscroll = function() {myFunction()};
    function myFunction() {
        if (window.pageYOffset > 350) {
            document.getElementById("animation").className = "slideUpi";
  }}

    const handleImage = (img) => {
        const {src, index} = img;
        setPicture(src);
       
        const exitDesc = document.querySelector('.animatedImg');
        if (!exitDesc){
            document.querySelector('#desc1').className = 'animatedDesc';
            setIndex(index);
            document.querySelector("#pic1").className = 'animatedImg';
        }
        else{
            // document.querySelector('.animatedDesc')
        }   
    }   
    return(
        <>
            <div className="b-home">
               <Main/>
               <div className="b-home__title">
                   <h1 className="b-home__text">Ash Academy</h1>
               </div>
               <div id="animation" className="b-home__animation">
                    <div id="pic1" className="b-home__picture">
                        <img className="b-home__selectedImg" src={picture} alt=""/>
                        <p id="desc1" className="b-home__description">{descriptionArray[index]}</p>
                    </div>
                    
                    <Carrousell picture={handleImage} images={arrayAsh} id={1}/>
               </div>
            </div>
        </>
    )
}

export default Home;