import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Fotografia que conta histórias</h1>
          <p>Capturando emoções que o tempo não pode apagar.</p>
        </div>
      </section>

      <main className={styles.body}>
        <section id="sobre" className={styles.sobre}>
          <h2>Sobre Mim</h2>
          <p>Olá! Sou Ryan Gomes, fotógrafo profissional com paixão por capturar momentos únicos e especiais...</p>
        </section>

        <section id="portfolio" className={styles.portfolio}>
          <h2>Trabalhos em Destaque</h2>
          <div className={styles.gallery}>
            <div className={styles.photo}>Foto 1</div>
            <div className={styles.photo}>Foto 2</div>
            <div className={styles.photo}>Foto 3</div>
            <div className={styles.photo}>Foto 4</div>
          </div>
        </section>

        <section id="depoimentos" className={styles.depoimentos}>
          <h2>Depoimentos</h2>
          <div className={styles.gallery}>
            <div className={styles.photo}>Foto 1</div>
            <div className={styles.photo}>Foto 2</div>
            <div className={styles.photo}>Foto 3</div>
            <div className={styles.photo}>Foto 4</div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h2>Contato</h2>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
