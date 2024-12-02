import './Intro.scss';

function Intro(){
    return(
        <section className="intro">
        <p className="intro__title">
            Our mission:
        </p>
        <p className="intro__details">
            Provide photographers a space to share photos of the neighborhoods they cherish, <span className='intro__details--italic'>expressed in their unique style.</span>
        </p>
    </section>
    );
    
}
export default Intro;