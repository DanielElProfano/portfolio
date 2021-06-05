import { useState } from 'react';
import './Cv.scss';

const Cv = (props) => {

    const loaded = () => {
        document.getElementById('curriculum-img').style.display="block";
    }
    return(
        <div className="b-cv__main">
            <div className="b-cv__width">
                <img id="curriculum-img" className="b-cv__img" onLoad={()=>loaded()} src="./assets/images/CV/curriculum.jpg" alt="" />
            </div>
        </div>
    )
}

export default Cv;