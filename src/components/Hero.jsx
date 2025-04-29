import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover, Learn, Grow</h1>
        <p>Explore a world of educational content tailored for your curiosity.</p>
        <a href="/videos" className="btn">Explore Videos</a>
      </div>
    </section>
  );
};

export default Hero;
