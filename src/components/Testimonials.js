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
              Mazalsoft está comprometido con la oferta de soluciones integrales en comercio electrónico a empresas y emprendedores en América del Sur. Por lo tanto, anunciamos que a partir de ahora, cualquier cliente que desee crear una tienda de comercio electrónico en América del Sur deberá disponer de una cuenta habilitada con Stripe. 

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
            <p>Queridos estudiantes de Mazalsoft,
               Estamos muy entusiasmados y emocionados de anunciarles que hemos alcanzado los 5,000 alumnos en nuestra Learning Management System de Udemy.
               Nuestros planes de capacitación en línea se han expandido de manera significativa desde su comienzo hace un año. Gracias a nuestra comunidad de estudiantes y sus apoyo.
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
            Estamos encantados de anunciar que Mazalsoft ha actualizado su lenguaje de programación principal a Flutter. Esta eficiente herramienta de desarrollo nos permitirá optimizar en tiempo de desarrollo, generar aplicaciones con mayor alcance de plataformas. Más aún, será posible trabajar con una sola línea de código, permitiendo una completa atención y soporte al cliente.
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
