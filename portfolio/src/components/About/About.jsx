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
                </div>
                <div class="b-about__title b-about__title--2">
                    <h1 class="b-about__h1">Tecnologías</h1><h1 class="b-about__h1 b-about__h1--red">Front</h1>
                    <div  class="b-about__comentarios">
                        <p class="b-about__text b-about__text--big"> </p>
                            <p class="b-about__text b-about__text--big b-about__text--red">React</p>
                            <p class="b-about__text b-about__text--big b-about__text--red">Angular</p>
                    
                    </div>  
                </div>           
        </section>

        </div>
    )
} 

export default About;