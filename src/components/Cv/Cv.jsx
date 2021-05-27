import { useEffect } from 'react';
import './Cv.scss';

const Cv = (props) => {
 
    return(
        <div className="b-cv__main">
            <div className="b-cv__width">
                <img className="b-cv__img" src="./assets/images/CV/curriculum.jpg" alt="" />
            {/* <img className="b-cv__img" src="./assets/images/CV/2.jpg" alt="" /> */}
            {/* <img className="b-cv__img" src="./assets/images/CV/3.jpg" alt="" /> */}
            </div>
        </div>
    )
}

export default Cv;