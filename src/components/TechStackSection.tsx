const stack = [
  { category: "Frontend", items: "HTML, CSS, JavaScript" },
  { category: "Backend", items: "ASP.NET, Flask" },
  { category: "Languages", items: "Python, C#" },
  { category: "Database", items: "MySQL" },
  { category: "ML Libraries", items: "Scikit-learn, Pandas, NumPy" },
  { category: "APIs", items: "Weather API, APMC Market Data API" },
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="section-padding bg-earth-light">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle">
            Built with a robust combination of modern web and ML technologies
          </p>
        </div>
        <div className="bg-card rounded-2xl border border-border shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  Technologies
                </th>
              </tr>
            </thead>
            <tbody>
              {stack.map((s, i) => (
                <tr
                  key={i}
                  className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/50"}`}
                >
                  <td className="px-6 py-4 font-medium text-foreground">{s.category}</td>
                  <td className="px-6 py-4 text-muted-foreground">{s.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
