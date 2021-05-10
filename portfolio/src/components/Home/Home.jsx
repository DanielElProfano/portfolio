import './Home.scss';
import Carrousell from '../Carrousell';
import Main from '../../Containers/Main';

const Home = () => {

    const arrayAsh = [
        './assets/images/AshAcademy.png',
        './assets/images/modal.png',
        './assets/images/prof1.jpg',
        './assets/images/prof2.jpg',
        './assets/images/prof4.jpg',
    ];
    console.log(arrayAsh)

    return(
        <>
            <div className="b-home">
               <Main/>
                <Carrousell images={arrayAsh}/>
               {/* <Carrousell images={arrayAsh}/> */}
            </div>
        </>
    )
}

export default Home;