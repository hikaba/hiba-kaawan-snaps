import './Footer.scss';
function Footer (){
    return (
        <footer className="footer">
            <h1 className="footer__title">Snaps</h1>
            <div className="footer__content">
                <p className="footer__details">For photographers</p>
                <p className="footer__details">Hire talent</p>
                <p className="footer__details">Inspiration</p>
            </div>
            <div className="footer__content">
                <p className="footer__details">About</p>
                <p className="footer__details">Careers</p>
                <p className="footer__details">Support</p>
            </div>
            <div className="footer__content footer__content--flex">
                <img src="src/assets/icons/Facebook.svg" alt="facebook" className="footer__social-icon"/>
                <img src="src/assets/icons/X_twitter.svg" alt="x-twitter" className="footer__social-icon" />
                <img src="src/assets/icons/Instagram.svg" alt="instagram" className="footer__social-icon" />
                <img src="src/assets/icons/Pinterest.svg" alt="pinterest" className="footer__social-icon" />
            </div>
            <div className="footer__content footer__content--flex">
                <p className="footer__details footer__details--green">© 2024 Snaps</p>
                <p className="footer__details footer__details--green">Terms</p>
                <p className="footer__details footer__details--green">Privacy</p>
                <p className="footer__details footer__details--green">Cookies</p>
            </div>

        </footer>
        
    )
}

export default Footer