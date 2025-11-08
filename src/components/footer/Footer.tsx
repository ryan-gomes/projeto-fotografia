import "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Ryan Gomes Fotógrafo</h4>
        <p>Campina Grande, PB - Brasil</p>
      </div>
      <div><p>© 2025 Ryan Gomes Fotógrafo. Todos os direitos reservados.</p></div>
      <div className="socials">
        <div>
          <h4>Contatos</h4>
        </div>
        <div>
        <a href="https://www.instagram.com/ryangomesfotografo/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://wa.me/message/6KENCL2ITC67O1" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
