import { useEffect } from 'react';
import './Carrousell.scss';

const Carrousell = (props) => {
    const {images} = props;
    useEffect (() => {
        createCarrousell();
    })

    const createCarrousell = (images) =>{
    console.log(images)

    }
    return(
        <div id="Carrousell" className="b-carrousell">
            {images.map(el => {
                return (
                   <img className="b-carrousell__img" key={el} src={el} alt={el}/>
                );
            })};
        </div>
    )
} 
export default Carrousell;