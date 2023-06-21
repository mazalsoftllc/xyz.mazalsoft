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
              className={`${activeBtn("photoshop")} theme-after`}
              onClick={handleFilterKeyChange("photoshop")}
              data-filter=".photoshop"
            >
              Apps de escritorio
            </li>{" "}
            <li
              className={`${activeBtn("website")} theme-after`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              Apps móviles
            </li>{" "}
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
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
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
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
