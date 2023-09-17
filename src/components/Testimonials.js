 
import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="testimonial-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className="dark-color theme-after">Comunicados oficiales</h2>
      </div>
      <Slider {...sliderProps.testimonial} id="client-slider-single">
        <div className="testimonial-col">
          <div className="say">
            <p>
            
              Mazalsoft se dedica a ofrecer soluciones integrales en Marketing Digital a empresas y emprendedores sin fronteras. Por lo tanto, nos complace anunciar que, muy pronto, cualquier cliente que desee crear una tarjeta de presentación digital no necesitará conocimientos en programación y podrá hacerlo en cuestión de minutos. Como un servicio adicional, la tarjeta de presentación digital también podrá ser compilada como una aplicación móvil para Android e iOS.

            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar1.png" alt title />
            </div>
            <div className="name ml-2">
              <span>Mauricio Chara</span>
              <label>CEO</label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <p>Estimados estudiantes de Mazalsoft,
               Nos complace compartir con ustedes una emocionante noticia: estamos trabajando arduamente en la creación de un nuevo curso de desarrollo de aplicaciones web a nivel profesional.
               En el último año, hemos visto un crecimiento significativo en nuestra oferta de capacitación en línea, y esto ha sido posible gracias a nuestra comunidad de estudiantes y su valioso apoyo.
               <br />
              <br />
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar1.png" alt title />
            </div>
            <div className="name ml-2">
              <span>Mauricio Chara</span>
              <label>CEO</label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <p>            
              Nos complace informarles que Mazalsoft ha realizado una actualización importante en su entorno de desarrollo web, migrando a NUXT.js. Esta poderosa herramienta de desarrollo nos brinda la capacidad de optimizar nuestros procesos de desarrollo, lo que se traduce en la creación de aplicaciones que abarcan una mayor variedad de plataformas.
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar1.png" alt title />
            </div>
            <div className="name ml-2">
              <span>Mauricio Chara</span>
              <label>CEO</label>
            </div>
          </div>
        </div>
      </Slider>{" "}
    </div>
  );
};
export default Testimonials;
