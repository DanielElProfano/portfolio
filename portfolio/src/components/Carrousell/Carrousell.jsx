import { useEffect, useState } from 'react';

import './Carrousell.scss';

const Carrousell = (props) => {
    const {images, id} = props;
    useEffect (() => {
    })

    const handleScrollLeft = () => {
        const container = document.querySelector(`.b-carrousell__container_${id}`);
        container.scrollLeft += container.offsetWidth;
    }
    const handleScrollRight = () => {
        const container = document.querySelector(`.b-carrousell__container_${id}`);
        container.scrollLeft -= container.offsetWidth;
    }
    const handleImage = (index, src) => {
        const source = {
            src,
            index,
            id
        }
        props.picture(source)
    }
    return(
        <>
            <div id={`Carrousell_${id}`} className="b-carrousell">
                <div onClick={handleScrollRight} className="b-carrousell__arrow b-carrousell__arrow--left">
                    <span>izq</span>
                </div>
            
                <div className={`b-carrousell__container_${id}`}>
                    {images.map((el, index) => {
                        return (
                        <img onClick={()=>handleImage(index, el)}className="b-carrousell__img" key={el} src={el} alt={el}/>
                        );
                    })}
                </div>
                <div onClick={handleScrollLeft} className="b-carrousell__arrow b-carrousell__arrow--right">
                <span>dhc</span>
            </div>
            </div>
           

        </>
        )
}
export default Carrousell;