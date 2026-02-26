import { Sprout, TrendingUp, Lightbulb, Globe } from "lucide-react";

const points = [
  {
    icon: Sprout,
    title: "Agriculture & Economy",
    text: "Agriculture is the cornerstone of economic stability and food security in developing nations. It employs a vast workforce and remains the primary source of livelihood for millions of families.",
  },
  {
    icon: TrendingUp,
    title: "Existing Challenges",
    text: "Farmers struggle with unpredictable weather, fluctuating market prices, lack of soil health awareness, limited access to government schemes, and exploitation by middlemen in the supply chain.",
  },
  {
    icon: Lightbulb,
    title: "Motivation Behind DASS",
    text: "The motivation to build DASS stems from the urgent need to bridge the digital divide in agriculture—providing farmers with intelligent, accessible tools that consolidate fragmented information sources.",
  },
  {
    icon: Globe,
    title: "Why a Web-Based System?",
    text: "A web-based intelligent system offers device-agnostic accessibility, real-time data synchronization, centralized management, and scalability—making it the ideal platform for nationwide agricultural support.",
  },
];

const IntroSection = () => {
  return (
    <section className="section-padding bg-earth-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="section-title">Introduction</h2>
          <p className="section-subtitle">
            Understanding the agricultural landscape and the need for digital intervention
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 card-hover flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
