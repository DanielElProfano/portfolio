import { useEffect } from 'react';

import './Carrousell.scss';

const Carrousell = (props) => {
    const {images} = props;
    useEffect (() => {
    })

    const handleScrollLeft = () => {
        const container = document.querySelector('.b-carrousell__container');
        container.scrollLeft -= container.offsetWidth;
    }
    const handleScrollRight = () => {
        const container = document.querySelector('.b-carrousell__container');
        container.scrollLeft += container.offsetWidth;
    }
    return(
        <div id="Carrousell" className="b-carrousell">
            <div onClick={handleScrollRight} className="b-carrousell__arrow b-carrousell__arrow--left">
                <span>izq</span>
            </div>
            <div className="b-carrousell__container">
                {images.map(el => {
                    return (
                    <img className="b-carrousell__img" key={el} src={el} alt={el}/>
                    );
                })}
            </div>
             <div onClick={handleScrollLeft} className="b-carrousell__arrow b-carrousell__arrow--right">
             <span>dhc</span>
                </div>
        </div>
    )
} 
export default Carrousell;