const modules = [
  {
    title: "Farmer / User Module",
    desc: "Enables farmers to register, manage their profile, access soil analysis, view crop predictions, check weather forecasts, explore APMC prices, and interact with the community.",
  },
  {
    title: "E-Commerce Module",
    desc: "Provides a digital marketplace for agricultural products including seeds, fertilizers, pesticides, and equipment with cart management, order tracking, and secure payment gateway integration.",
  },
  {
    title: "Soil Classification & Crop Prediction Module",
    desc: "Uses machine learning algorithms (Scikit-learn) to classify soil types based on input parameters and recommend suitable crops, maximizing yield potential for each field.",
  },
  {
    title: "APMC Live Market Rate Module",
    desc: "Fetches real-time commodity prices from APMC market APIs filtered by crop type and location, enabling farmers to choose optimal selling points and timing.",
  },
  {
    title: "Government Yojana Module",
    desc: "Aggregates government agricultural schemes and subsidies, checks farmer eligibility, and sends notifications for new or updated programs relevant to their region.",
  },
  {
    title: "Vendor Module",
    desc: "Allows agricultural vendors to list products, manage inventory, process orders, and directly interact with farmers through the integrated e-commerce platform.",
  },
  {
    title: "Admin Module",
    desc: "Provides centralized management of users, vendors, products, content, and system analytics with role-based access control for platform governance.",
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="section-title">System Modules</h2>
          <p className="section-subtitle">
            Each module is designed to address a specific aspect of the agricultural ecosystem
          </p>
        </div>
        <div className="space-y-6">
          {modules.map((m, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 card-hover flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {m.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
