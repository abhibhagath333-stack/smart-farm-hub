import {
  Sprout,
  Brain,
  CloudSun,
  BarChart3,
  Landmark,
  ShoppingCart,
  Shield,
  Users,
  Unlink,
} from "lucide-react";

const features = [
  { icon: Sprout, title: "Smart Farming Platform", desc: "Unified digital hub for modern agricultural practices and decision-making." },
  { icon: Brain, title: "ML-Based Crop Prediction", desc: "Soil classification and crop recommendation powered by machine learning models." },
  { icon: CloudSun, title: "Real-Time Weather", desc: "Accurate weather forecasting integrated via live API for proactive farm planning." },
  { icon: BarChart3, title: "APMC Live Market Rates", desc: "Crop and location-wise live market pricing from APMC for better trade decisions." },
  { icon: Landmark, title: "Govt. Yojana Updates", desc: "Eligibility checks and notifications for government agricultural schemes." },
  { icon: ShoppingCart, title: "Agricultural E-Commerce", desc: "Buy seeds, fertilizers, and equipment directly through the platform." },
  { icon: Shield, title: "Secure Payments", desc: "Safe and reliable payment processing for all e-commerce transactions." },
  { icon: Users, title: "Farmer Community", desc: "Post discussions, share knowledge, and connect with fellow farmers." },
  { icon: Unlink, title: "Reduced Middlemen", desc: "Direct market access reducing exploitation and maximizing farmer profits." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-earth-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">
            A comprehensive suite of tools designed to digitally empower farmers
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
