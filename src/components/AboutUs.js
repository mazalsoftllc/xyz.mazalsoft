import SectionContainer from "./SectionContainer";

const AboutUs = () => {
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"Acerca de mí"}
      subTitle={"QUIEN SOY"}
      leftImage="static/img/title-1.png"
      leftImageTitle={"@mauriciollc"}
    >
      <div className="row">
        <div className="col-md-4">
          <img src="static/img/my-pic.png" title alt />
        </div>
        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">Soy Mauricio Chara</h3>
            <p className="m-0px">
              Un desarrollador de aplicaciones versátil con amplia experiencia en construir y diseñar soluciones informáticas
              para el uso en la web y en dispositivos móviles. Me destaco por mis habilidades de problem solving
              y mi orientación al trabajo en equipo, impulsando proyectos innovadores y soluciones de alta calidad.
            </p>
          </div>{" "}
          {/* about-text */}
          <div className="row m-30px-t">
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-ruler-pencil" />
                <div className="feature-content">
                  <h5 className="dark-color">Desarrollo</h5>
                  <p>
                  Soy un desarrollador de software con experiencia en la creación de aplicaciones web, móviles y de escritorio orientadas a la facilidad de uso y al rendimiento.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-image" />
                <div className="feature-content">
                  <h5 className="dark-color">Audiovisual</h5>
                  <p>
                  Soy un especialista en Marketing Digital con amplia experiencia en desarrollo de estrategias de marketing digital, incluyendo campañas de publicidad en línea, contenido, SEO y redes sociales.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-brush-alt" />
                <div className="feature-content">
                  <h5 className="dark-color">Componentes web</h5>
                  <p>
                  
Soy un desarrollador de complementos con mucha experiencia, especializado en crear herramientas útiles y rápidas que se integran fácilmente en sitios web modernos.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-mobile" />
                <div className="feature-content">
                  <h5 className="dark-color">Aplicaciones móviles</h5>
                  <p>
                  Soy un desarrollador de aplicaciones full stack con experiencia en la creación de aplicaciones Android e iOS.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
          </div>{" "}
          {/* row */}
          <div className="btn-bar">
            <a href="#" className="btn btn-theme">
            Mi tienda virtual
            </a>
          </div>
        </div>
      </div>{" "}
      {/* row */}
      {/* 
     ==========================
       Links of interest
     ==========================
     */}
      <div className="counter-row m-50px-t p-40px-t lg-m-35px-t lg-p-25px-t sm-p-15px-t">
        <div className="row">
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-comments-smiley" />
                <div className="count dark-color"><a href="#" className="">¡Vamos a chatear!</a></div>
                <h6>+57 3153774638</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-video-clapper" />
                <div className="count dark-color"><a href="#" className="">¡Es hora de aprender!</a></div>
                <h6>Membresía</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-youtube" />
                <div className="count dark-color"><a href="#" className="">¡Aprende en Youtube!</a></div>
                <h6>Suscríbete a mi canal</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-twitter" />
                <div className="count dark-color"><a href="#" className="">¡Sigue mis Tweets!</a></div>
                <h6>Sígueme en Twitter</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
        </div>{" "}
        {/* row */}
      </div>
    </SectionContainer>
  );
};
export default AboutUs;
