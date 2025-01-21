const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h2>Building Digital Experiences that inspire.</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Solutions
        </p>
        <button className="get-resume-btn">Download Resume</button>
      </div>
      <div className="hero-image">
        <img className="hero" src="/images/hero.jpg" alt="Hero Images" />
        <div className="tech-stack-icons">
          <span>
            <img
              className="tech-icon"
              src="/images/icons/reactjs.svg"
              alt="react icon"
            />
          </span>
          <span>
            <img
              className="tech-icon"
              src="/images/icons/html.svg"
              alt="html icon"
            />
          </span>
          <span>
            <img
              className="tech-icon"
              src="/images/icons/css.svg"
              alt="css icon"
            />
          </span>
          <span>
            <img
              className="tech-icon"
              src="/images/icons/javascript.svg"
              alt="js icon"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
