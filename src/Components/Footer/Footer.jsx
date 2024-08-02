import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram, faLinkedin, faSquareWhatsapp } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer>
      <div className="footer-Container">
        <h3>Entre em contato conosco:</h3>
        
        <div className="quadro1">
          <div>
          <p class="fontStrong"><FontAwesomeIcon icon={faLocationDot} className="footer-Icon"/> Endereço:</p>
            <p>Av. Barão de Studart, 2626</p>
            <p>Joaquim Távora / Fortaleza - CE</p>
            <p class="fontStrong"><FontAwesomeIcon icon={faEnvelope} className="footer-Icon"/> E-mail:</p>
            <p> fujicom.ce@fujicom.com.br</p>
          </div>
          <div>
            <p class="fontStrong"><FontAwesomeIcon icon={faPhone} className="footer-Icon"/> Telefones:</p>
            <p>(85)  4009.6730</p>
            <p>(85) 98168.1845</p>
            <p>(85) 95034.2592</p>
            <div>
            {/* <FontAwesomeIcon icon={faInstagram} className="footer-Icon"/> 
            <FontAwesomeIcon icon={faLinkedin} className="footer-Icon"/> 
            <FontAwesomeIcon icon={faSquareWhatsapp} className="footer-Icon"/>  */}
            </div>
          </div>
        </div>
        </div>
        <hr />
        <p className="textRodape">Fujicom 2024</p>
      
    </footer>
  );
}
