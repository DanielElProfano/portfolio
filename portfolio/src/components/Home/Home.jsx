import './Home.scss';
import Carrousell from '../Carrousell';

const Home = () => {

    const arrayAsh = [
        './assets/images/AshAcademy.png',
        './assets/images/modal.png',
    ];
    console.log(arrayAsh)

    return(
        <>
            <div className="b-home">
               <Carrousell images={arrayAsh}/>
            </div>
            <div >
                <img className="b-home__img" src="./assets/images/modal.png" alt=""/>
            </div>
        </>
    )
}

export default Home;