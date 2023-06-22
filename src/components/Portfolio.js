import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";
import Testimonials from "./Testimonials";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(
      document.querySelector(".portfolio-cols"),
      function (instance) {
        isotope.current = new Isotope(".portfolio-cols", {
          itemSelector: ".portfolio-item",
          // layoutMode: "fitRows",
          percentPosition: true,
          masonry: {
            columnWidth: ".portfolio-item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }
    );
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <SectionContainer
      name={"portfolio"}
      title={"Mis proyectos"}
      subTitle={"Portafolio destacado"}
      leftImage="static/img/title-2.png"
    >
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            {" "}
            <li
              className={`${activeBtn("*")} theme-after`}
              onClick={handleFilterKeyChange("*")}
            >
              Todo
            </li>{" "}
            <li
              className={`${activeBtn("desktop-apps")} theme-after`}
              onClick={handleFilterKeyChange("desktop-apps")}
              data-filter=".desktop-apps"
            >
              Apps de escritorio
            </li>{" "}
            <li
              className={`${activeBtn("mobile-apps")} theme-after`}
              onClick={handleFilterKeyChange("mobile-apps")}
              data-filter=".mobile-apps"
            >
              Apps móviles
            </li>{" "}
            <li
              className={`${activeBtn("audiovisual")} theme-after`}
              onClick={handleFilterKeyChange("audiovisual")}
              data-filter=".audiovisual"
            >
              Audiovisual
            </li>

            <li
              className={`${activeBtn("components")} theme-after`}
              onClick={handleFilterKeyChange("components")}
              data-filter=".components"
            >
              Componentes
            </li>
 

          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            <li className="portfolio-item components">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-1.png" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="https://youtu.be/pCXSybZkcOE"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-1.png"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="https://www.udemy.com/user/edgar-mauricio-chara-hurtado/" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Mazalsoft</h5>
                  <span>App web mazalsoft.xyz</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}  


            <li className="portfolio-item audiovisual">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-academia-appgyver.png" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="https://youtu.be/pCXSybZkcOE"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-academia-appgyver.png"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="https://www.udemy.com/user/edgar-mauricio-chara-hurtado/" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Academia de Mazalsoft</h5>
                  <span>Curso de AppGyver en español</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}  
          
          </ul>{" "}
          {/* row */}
        </div>{" "}
        {/* portfolio content */}
      </div>
      {/* 
          ==========================
            Testimonials
          ==========================
          */}
      <Testimonials />
    </SectionContainer>
  );
};
export default Portfolio;
