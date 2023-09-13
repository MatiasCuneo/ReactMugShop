import briefcase from './imgs/briefcase.svg';
import arrowright from './imgs/arrow-right.svg';
import bookmark from './imgs/bookmark.svg';
import instagram from './imgs/instagram.svg';
import facebook from './imgs/facebook.svg';
import twitter from './imgs/twitter.svg';

function App() {
  return (
    <div className="App">
      <main>
        <div className="bg"></div>
        <h1>Las Mejores Tazas ploteadas del Mercado</h1>
      </main>
      <div className="info">
          <div className="desc">
              <img src={briefcase} alt="briefcase" className="desc_icon"/>
              <div className="content_separator"></div>
              <section className="content">
                  <p>Venta al Mayorista y Minorista de tazas ploteadas de distintos estilos.</p>
                  <a href="#">
                      <p>Ver más</p>
                      <img src={arrowright} alt="arrow"/>
                  </a>
              </section>
          </div>
          <div className="desc_separator"></div>
          <div className="desc" id="right">
              <img src={bookmark} alt="bookmark" className="desc_icon"/>
              <div className="content_separator"></div>
              <section className="content">
                  <p>Compra y descubre a través de un gran catálogo de todo tipo de diseños.</p>
                  <a href="#">
                      <p>Ver más</p>
                      <img src={arrowright} alt="arrow"/>
                  </a>
              </section>
          </div>
      </div>
      <footer>
          <h4><strong>MugShop </strong>2023</h4>
          <div className="redes">
              <a href="#"><img src={instagram} alt="instagram" className="red"/></a>
              <a href="#"><img src={facebook} alt="facebook" className="red"/></a>
              <a href="#"><img src={twitter} alt="twitter" className="red"/></a>
          </div>
      </footer>
    </div>
  );
}

export default App;
