import './Footer.scss';

const Footer = () => {
    return(
        <footer class="b-footer">
        <div class="b-footer_container">
          <div className="b-footer__links">
              <div className="b-footer__description">
                  <span>Front</span>
                  <a href="https://github.com/DanielElProfano/portfolio" target="_blank" rel="noreferrer">
                      <img className="b-footer__icon" src="/assets/icons/github.png" target="_blank" alt="github icon"></img>
                  </a>
              </div>
              <div className="b-footer__description">
                  linkedin
                  <a href="https://www.linkedin.com/in/daniel-gonzalez-guijarro" target="_blank" rel="noreferrer">
                      <img className="b-footer__icon" src="./assets/icons/linkedin.png" target="_blank" alt="github icon"></img>
                  </a>
              </div>
              </div>
        </div>
      </footer>
    )
};

export default Footer