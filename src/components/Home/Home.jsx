import './Home.scss';
import './icons/style.css';
import constants from '../../constants/arraysImg'
import Carrousell from '../Carrousell';
import Main from '../../Containers/Main';
import {useEffect, useState} from 'react';
const Home = (props) => {

    const arrayAsh = constants.arrayAsh;
    const descriptionAsh= constants.descriptionArray;
    const arrayReciclo = constants.arrayReciclo;
    const descriptionReciclo = constants.descriptionReciclo;

    const [picture,setPicture] = useState(arrayAsh[0]);
    const [picture2, setPicture2] = useState(arrayReciclo[0]);
    const [index1, setIndex1] = useState(null);
    const [index2, setIndex2] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', myFunction);
        return () => {
            window.removeEventListener('scroll', myFunction); //remove the listener;
        }
    },[]);

    function myFunction() {
        if (window.pageYOffset > 100) {
            document.getElementById("animation1").className = "slideUpi";
        }
        if (window.pageYOffset> 350) {
            document.getElementById("animation2").className = "slideUpi"
        }
    };

    const handleImage = (img) => {
        const {src, index, id} = img;
        if(id === 1) {
            setPicture(src);
            setIndex1(index);
        }
        if(id === 2){
            setIndex2(index)
            setPicture2(src);
        }
        const exitDesc = document.querySelector('.animatedImg');
        if (!exitDesc){
            // document.querySelector(`#pic${id}`).className = 'animatedImg';
            document.querySelector(`#desc${id}`).className = 'animatedDesc';
        }
        else{
            // document.querySelector(`#pic${id}`).className = 'animatedImg';
            document.querySelector(`#desc${id}`).className = 'animatedDesc';
        }   
    }   
    return(
        <>
            <div className="b-home">
               <Main/>
                <div className="b-home__fisrtContainer"> {/* primer proyecto*/}
                    <div id="animation1" className="b-home__animation">  {/*animation slide In */}
                        <div className="b-home__title">
                            <a href="https://ashacademy.netlify.app">
                                <h1 className="b-home__text">Ash Academy</h1>
                            </a>
                            <span class="b-home__icon icon-react"></span>
                            <span class="b-home__icon icon-node-dot-js"></span>
                            <span class="b-home__icon icon-mongodb"></span>
                            <span class="b-home__icon icon-heroku"></span>
                        </div>
                        <div className="b-home__container">
                            <div id="pic1" className="b-home__picture">
                                <img className="b-home__selectedImg" src={picture} alt=""/>
                            </div>
                            <p id="desc1" className="">{descriptionAsh[index1]}</p>
                        </div>
                        <Carrousell picture={handleImage} images={arrayAsh} id={1}/>
                    </div>
                </div>
                <div className="b-home__fisrtContainer"> {/* segundo proyecto */}
                        <div id="animation2" className="b-home__animation">  {/*animation slide In */}
                            <div className="b-home__title">
                                <a href="https://gitlab.com/daniel.gonzalez.guijarro/app_reciclo_back" target="_blank" rel="noreferrer">
                                    <h1 className="b-home__text">Reciclo Back</h1>
                                </a>
                                <a href="https://gitlab.com/M4rta/app_reciclo_front" target="_blank" rel="noreferrer">
                                    <h1 className="b-home__text">Reciclo front</h1>
                                </a>
                                <span class="b-home__icon icon-react"></span>
                                <span class="b-home__icon icon-node-dot-js"></span>
                                <span class="b-home__icon icon-mongodb"></span>
                            </div>
                            <div className="b-home__container">
                                <div id="pic2" className="b-home__picture">
                                    <img className="b-home__selectedImg" src={picture2} alt=""/>
                                </div>
                                <p id="desc2" className="b-home__description">{descriptionReciclo[index2]}</p>
                            </div>
                            <Carrousell picture={handleImage} images={arrayReciclo} id={2}/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Home;