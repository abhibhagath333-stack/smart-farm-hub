import { Leaf } from "lucide-react";

const ConclusionSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-3xl text-center">
        <Leaf className="w-10 h-10 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Conclusion</h2>
        <p className="text-primary-foreground/90 leading-relaxed text-base md:text-lg mb-6">
          The Digital Agriculture Support System (DASS) represents a meaningful step toward
          digitally empowering farmers with intelligent, accessible, and data-driven tools.
          By consolidating soil analysis, crop prediction, real-time weather and market data,
          government scheme notifications, and e-commerce into a single platform, DASS
          addresses the fragmented information landscape that has long hindered agricultural
          productivity and profitability.
        </p>
        <p className="text-primary-foreground/80 leading-relaxed text-base md:text-lg mb-6">
          The system is designed with future scalability in mind—supporting integration of
          IoT-based field sensors, advanced deep learning models, multilingual interfaces,
          and mobile application extensions to reach an even broader farming community.
        </p>
        <p className="text-primary-foreground/70 text-sm italic">
          Built with the vision of a smarter, more sustainable agricultural ecosystem.
        </p>
      </div>
    </section>
  );
};

export default ConclusionSection;
