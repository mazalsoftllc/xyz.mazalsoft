import SectionContainer from "./SectionContainer";
const Services = () => {
  return (
    <SectionContainer
      name={"resume"}
      extraClass={"resume-section"}
      title={"Educación"}
      subTitle={"Fortalezas"}
      leftImage="static/img/title-2.png"
    >
      {/* Education module #1 */}
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">E-COMMERCE</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-shopping-cart-full" />
                  <span className="dark-color">Comercio electrónico</span>
                  <label>TIENDA E-COMMERCE, PLUGINS</label>
                </div>
                <div className="r-info">
                  <p>Mi educación en Comercio Electrónico con Google Learning comprendió un curso intensivo que abarcó desde los principios básicos del comercio electrónico
                     hasta el desarrollo de una compleja infraestructura de comercio electrónico.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-shopping-cart-full" />
                  <span className="dark-color">Marketing Digital</span>
                  <label>PRODUCTO, PRECIO, P. VENTA, PROMOCIÓN</label>
                </div>
                <div className="r-info">
                  <p>
                  Mi educación en Marketing Digital con Google Learning consiste en aprender habilidades
                  crecientes en los sistemas de Google en marketing, publicidad, análisis y contenido.
                  </p>
                  <br/>
                  <br/>

                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">INFORMÁTICA</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas ti-server" />
                  <span className="dark-color">Soporte de sistemas</span>
                  <label>ASISTENCIA FRONTEND/BACKEND</label>
                </div>
                <div className="r-info">
                  <p>
                  Tengo una amplia experiencia de trabajo en soporte técnico y administración de sistemas,
                  incluidas asignaciones de servidores, instalación de redes, seguridad de datos y mantenimiento de equipos.
                  </p>
                  <br/>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas ti-server" />
                  <span className="dark-color">Computación en la nube</span>
                  <label>ALMACEN DE OBJETOS, API REST</label>
                </div>
                <div className="r-info">
                  <p>
                  Mi educación en Computación en la Nube de Google Learning Digital ha sido muy variada y cubre una amplia gama de tópicos. Me he especializado en: configuración de infraestructura en la nube, creación de aplicaciones escalables,
                  entendimiento y uso de Google Cloud Platform.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
      {/* row */}
      
      {/* Education module #2 */}
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">NEGOCIOS</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-money" />
                  <span className="dark-color">Creación de empresas</span>
                  <label>STARTUPS FUNCIONALES</label>
                </div>
                <div className="r-info">
                  <p>
                   Adquirí conocimientos avanzados en Finanzas Digitales, Estrategia de Negocios Digitales, Investigación de Mercado Digital y Desarrollo de Productos Digitales.</p>
                  <br/>

                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-money" />
                  <span className="dark-color">Fundamentos en administración</span>
                  <label>ÉTICA, MODELOS DE NEGOCIO</label>
                </div>
                <div className="r-info">
                  <p>
                  
Mi educación en fundamentos de administración comprendió los principios básicos de la administración estratégica, gestión financiera, planificación de recursos humanos y estructuración de equipos.
                  </p>
                  <br/>
                  <br/>

                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">CINEMA</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas ti-video-camera" />
                  <span className="dark-color">AI Audiovisual</span>
                  <label>LENGUAJE AUDIOVISUAL</label>
                </div>
                <div className="r-info">
                  <p>
                  Mi educación en lenguaje audiovisual con AI me ha permitido desarrollar habilidades 
                  para trabajar con las últimas tecnologías de procesamiento de audio y vídeo. 
                  </p>
                  <br/>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas ti-video-camera" />
                  <span className="dark-color">Producción audiovisual</span>
                  <label>PLATAFORMAS , APPS MULTIMEDIA</label>
                </div>
                <div className="r-info">
                  <p>
                  Mi educación en producción audiovisual con plataformas LMS ha incluido cursos online y formación presencial, el último enfocado en la planificación,
                  grabación y edición de contenidos audiovisuales utilizando plataformas LMS.
                  </p>
                  <br/>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
      {/* row */}
       
      {/* Summary of my resume */} 
      <div className="skill-row m-30px-t sm-m-20px-t">
        <div className="sub-title m-30px-b">
          <h2 className="dark-color theme-after">Mis habilidades</h2>
        </div>
        <div className="row">
          <div className="col-md-6 p-30px-r sm-p-15px-r">
            <h3 className="dark-color">Front-end con Flutter</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>Aplicaciones para Windows</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Aplicaciones para MacOS</h6>
                <span className="theme-bg">84%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "84%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Aplicaciones móviles</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
          <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
            <h3 className="dark-color">Back-end</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>REST API</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Almacenamiento local</h6>
                <span className="theme-bg">84%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "84%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Firebase</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
            
          </div>
        </div>
      </div>

       {/* My resume with more details. */} 
      <div className="skill-row m-30px-t sm-m-20px-t">
        <div className="sub-title m-30px-b">
          <h2 className="dark-color theme-after">Leer más</h2>
        </div>
        <div className="row">
          
        <div className="btn-bar">
            <a href="#" className="btn btn-theme">
                  Descargar CV
            </a>
        </div>

          
        </div>
      </div>

    </SectionContainer>
  );
};
export default Services;
