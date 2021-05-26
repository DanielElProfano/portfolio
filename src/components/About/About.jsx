import './About.scss';

const About = () => {
    return(
        <div>
            <section className="b-about__section">
                <div className="b-about__img">
                    <img className="b-about__img-container" src="./assets/images/londres.jpg" alt="Daniel" />
                </div>
                <div className="b-about__title">
                    <h1 className="b-about__h1">Daniel González</h1>
                    <h3 className="b-about__h3">FullStack web developer </h3>
                    <h3 className="b-about__h3">Trust, hardworker, empathy.</h3>
                </div>
            </section>
            <section className="b-about__section2">
                <div className="b-about__image b-about__image--2">
                    <div className="b-about__img b-about__img--2"></div>
                    <div className="b-about__circle b-about__circle--2"></div>
                    <div className="b-about__img b-about__img--3"></div>
                </div>
                <div className="b-about__title b-about__title--2">
                    <h1 className="b-about__h1">Tecnologías</h1>
                    <h1 className="b-about__h1 b-about__h1--color">Front</h1>
                    <div  className="b-about__comentarios">
                        <p className="b-about__text b-about__text--big b-about__text--color">React</p>
                        <p className="b-about__text b-about__text--big b-about__text--color">Angular</p>
                        <p className="b-about__text b-about__text--big b-about__text--color">Javascript</p>
                    </div>  
                    <h1 className="b-about__h1 b-about__h1--color">Back</h1>
                    <div  className="b-about__comentarios">
                        <p className="b-about__text b-about__text--big b-about__text--color">Node JS</p>
                        <p className="b-about__text b-about__text--big b-about__text--color">PHP</p>
                    </div>  
                </div>           
            </section>
        </div>
    )
} 

export default About;