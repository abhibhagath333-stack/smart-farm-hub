import heroImage from "@/assets/hero-agriculture.png";
import dassLogo from "@/assets/dass-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Digital Agriculture landscape with smart farming technology"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <img
          src={dassLogo}
          alt="DASS Logo"
          className="w-24 h-24 mx-auto mb-8 rounded-2xl shadow-2xl border-2 border-primary-foreground/20"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-primary-foreground leading-tight mb-6">
          Digital Agriculture
          <br />
          Support System
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/80 font-light tracking-wide mb-4">
          (DASS)
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/90 italic max-w-2xl mx-auto mb-10">
          "Empowering Farmers Through Intelligent Digital Solutions"
        </p>
        <a
          href="#abstract"
          className="inline-block bg-accent text-accent-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
        >
          Explore Project ↓
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
