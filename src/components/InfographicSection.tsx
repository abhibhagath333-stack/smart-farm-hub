import {
  Sprout,
  Cloud,
  BarChart3,
  Landmark,
  ShoppingCart,
  Users,
  ArrowRight,
  Cpu,
} from "lucide-react";
import dassLogo from "@/assets/dass-logo.png";

const flowSteps = [
  { icon: Users, label: "Farmer", color: "bg-primary" },
  { icon: Sprout, label: "Soil Data Input", color: "bg-leaf" },
  { icon: Cpu, label: "ML Crop Prediction", color: "bg-accent" },
  { icon: Cloud, label: "Weather API", color: "bg-primary" },
  { icon: BarChart3, label: "APMC Market Prices", color: "bg-gold" },
  { icon: Landmark, label: "Govt. Yojana Updates", color: "bg-earth" },
  { icon: ShoppingCart, label: "E-Commerce Flow", color: "bg-leaf-dark" },
  { icon: Users, label: "Community Interaction", color: "bg-primary" },
];

const InfographicSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="section-title">DASS System Architecture & Feature Overview</h2>
          <p className="section-subtitle">
            An integrated flow connecting farmers to intelligent digital services
          </p>
        </div>
        <div className="bg-card rounded-2xl border border-border shadow-md p-8 md:p-12">
          <div className="flex justify-center mb-10">
            <img src={dassLogo} alt="DASS Logo" className="w-16 h-16 rounded-xl" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center shadow-md`}
                  >
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground text-center max-w-[80px]">
                    {step.label}
                  </span>
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfographicSection;
