import './About.scss';

const About = () => {
    return(
        <div>
            <section class="b-about__section">
                <div class="b-about__title">
                    <h1 class="b-about__h1">Daniel González</h1>
                    <h3 class="b-about__h3">FullStack web developer </h3>
                    <h3 class="b-about__h3">Trust, hardworker, empathy.</h3>

                </div>
                <div class="b-about__image"></div>
                    <div class="b-about__img">
                    <div class="b-about__circle">
                        
                    </div>
                </div>
            </section>
            <section class="b-about__section b-about__section--2">
                
                <div class="b-about__image b-about__image--2">
                    <div class="b-about__img b-about__img--2"></div>
                    <div class="b-about__circle b-about__circle--2"></div>
                    <div class="b-about__img b-about__img--3"></div>
                    <div class="b-about__img b-about__img--4"></div>
                </div>
                <div class="b-about__title b-about__title--2">
                    <h1 class="b-about__h1">Tecnologías</h1><h1 class="b-about__h1 b-about__h1--red">Heroe.</h1>
                    <div  class="b-about__comentarios">
                        <p class="b-about__text b-about__text--big">Realizada por </p>
                            <p class="b-about__text b-about__text--big b-about__text--red">Daniel González</p>
                            <p class="b-about__text b-about__text--big">, parar todos los heroes del mundo.</p>
                        <div class="b-about__comentarios b-about__comentarios--prog">
                            <p class="b-about__text b-about__text--margin">Programada en Angular CLI 10</p>
                            <p class="b-about__text b-about__text--red">Librerías & herramientas usadas:</p>
                            <div class="b-about__flex-cols">
                                <div class="b-about__cols">
                                    <li class="b-about__text b-about__text--margin"><i>Ngx-sppiner.</i></li>
                                    <li class="b-about__text b-about__text--margin"><i>Ngx-infinite-scroll.</i></li>
                                    <li class="b-about__text b-about__text--margin"><i>Ngx Swiper-wrapper.</i></li>
                                    <li class="b-about__text b-about__text--margin"><i>Ng Serve.</i></li>
                                    <li class="b-about__text b-about__text--margin"><i>Ng Translate.</i></li>
                                    <li class="b-about__text b-about__text--margin"><i>Ng drag & drop.</i></li>
                                </div>
                                <div class="b-about__cols">
                                    <li class="b-about__text b-about__text--margin"><i>Angular-animation.</i></li>
                                    <li class="b-about__text b-about__text--margin"><i>RXJS.</i></li>
                                    <li class="b-about__text b-about__text--margin"><i>Reactive forms.</i></li>
                                    <li class="b-about__text b-about__text--margin"><i>Modals.</i></li>
                                    <li class="b-about__text b-about__text--margin"><i>Ng2-charts.</i></li>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
        </section>

        </div>
    )
} 

export default About;