import briefcase from './imgs/briefcase.svg';
import arrowright from './imgs/arrow-right.svg';
import bookmark from './imgs/bookmark.svg';
import NavBar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
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
      <Footer />
    </div>
  );
}

export default App;
