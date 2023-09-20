import instagram from '../../imgs/instagram.svg';
import facebook from '../../imgs/facebook.svg';
import twitter from '../../imgs/twitter.svg';

function Footer() {

    return(
        <footer>
            <h4><strong>MugShop </strong>2023</h4>
            <div className="redes">
                <a href="#"><img src={instagram} alt="instagram" className="red"/></a>
                <a href="#"><img src={facebook} alt="facebook" className="red"/></a>
                <a href="#"><img src={twitter} alt="twitter" className="red"/></a>
            </div>
        </footer>
    );
}

export default Footer;