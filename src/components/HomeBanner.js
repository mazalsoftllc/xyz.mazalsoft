import { useContext } from "react";
import { AlexioContext } from "../Context";
import TypingAnimation from "./TypingAnimation";

const HomeBanner = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = () => ("home" === nav ? "" : "page--inactive");
  return (
    <div
      className={`page home-banner white-bg ${activePageClass("home")}`}
      id={"home"}
      onClick={() => changeNav("home", false)}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <img src="static/img/title-2.png" title alt />
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h6 className="dark-color theme-after">Hola, a tod@s</h6>
                    <h1 className="dark-color blue-after">¡Soy Mauricio Chara!</h1>
                    <p>
                      Desarrollador <TypingAnimation />
                    </p>
                    <div className="btn-bar">
                      <a href="https://www.udemy.com/user/edgar-mauricio-chara-hurtado/" className="btn btn-theme">
                      ¡Es hora de aprender!
                      </a>
                    </div>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a className="facebook" href="https://www.facebook.com/mazalsoftllc">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="twitter" href="https://www.twitter.com/mazalsoftllc">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="google" href="https://www.instagram.com/mazalsoftllc">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="linkedin" href="https://www.linkedin.com/in/mazalsoft">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
