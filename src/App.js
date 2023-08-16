function App() {
  return (
    <div className="App">
      <main>
        <div className="bg"></div>
        <h1>Las Mejores Tazas ploteadas del Mercado</h1>
      </main>
      <div className="info">
          <div className="desc">
              <img src="imgs/briefcase.svg" alt="briefcase" className="desc_icon"/>
              <div className="content_separator"></div>
              <section className="content">
                  <p>Venta al Mayorista y Minorista de tazas ploteadas de distintos estilos.</p>
                  <a href="#">
                      <p>Ver más</p>
                      <img src="imgs/arrow-right.svg" alt="arrow"/>
                  </a>
              </section>
          </div>
          <div className="desc_separator"></div>
          <div className="desc" id="right">
              <img src="imgs/bookmark.svg" alt="bookmark" className="desc_icon"/>
              <div className="content_separator"></div>
              <section className="content">
                  <p>Compra y descubre a través de un gran catálogo de todo tipo de diseños.</p>
                  <a href="#">
                      <p>Ver más</p>
                      <img src="imgs/arrow-right.svg" alt="arrow"/>
                  </a>
              </section>
          </div>
      </div>
      <footer>
          <h4><strong>MugShop </strong>2023</h4>
          <div className="redes">
              <a href="#"><img src="imgs/instagram.svg" alt="instagram" className="red"/></a>
              <a href="#"><img src="imgs/facebook.svg" alt="facebook" className="red"/></a>
              <a href="#"><img src="imgs/twitter.svg" alt="twitter" className="red"/></a>
          </div>
      </footer>
    </div>
  );
}

export default App;
