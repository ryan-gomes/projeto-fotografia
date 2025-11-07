//import "./Body.css";

const Body = () => {
  return (
    <main className="body">
        <section id="sobre" className="sobre">
            <h2>Sobre Mim</h2>
            <p>Olá! Sou Ryan Gomes, fotógrafo profissional com paixão por capturar momentos únicos e especiais. Com anos de experiência, ofereço serviços de fotografia para eventos, retratos e muito mais.</p>
        </section>

        <section id="portfolio" className="portfolio">
            <h2>Trabalhos em Destaque</h2>
            <div className="gallery">
                <div className="photo">Foto 1</div>
                <div className="photo">Foto 2</div>
                <div className="photo">Foto 3</div>
                <div className="photo">Foto 4</div>
            </div>
        </section>

        <section id="depoimentos" className="depoimentos">
            <h2>Depoimentos</h2>
            <div className="gallery">
                <div className="photo">Foto 1</div>
                <div className="photo">Foto 2</div>
                <div className="photo">Foto 3</div>
                <div className="photo">Foto 4</div>
            </div>
        </section>

        <section id="contact" className="contact">
            <h2>Contato</h2>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <textarea placeholder="Mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
  );
}

export default Body;