import { FileText } from "lucide-react";

const AbstractSection = () => {
  return (
    <section id="abstract" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Project Abstract
          </div>
          <h2 className="section-title">Project Overview</h2>
        </div>
        <div className="bg-card rounded-2xl shadow-md border border-border p-8 md:p-10">
          <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
            Agriculture forms the backbone of many developing economies, yet farmers continue to face
            significant challenges due to the absence of real-time data, limited access to modern
            tools, and dependency on traditional methods. The lack of timely information on soil
            health, weather patterns, crop suitability, and market prices leads to suboptimal
            decision-making and reduced yields. The <strong>Digital Agriculture Support System (DASS)</strong> is
            a comprehensive web application designed to address these critical gaps through digital
            transformation. DASS integrates machine learning–based soil classification and crop
            prediction, real-time weather forecasting, APMC live market pricing, government yojana
            notifications, agricultural e-commerce, and a farmer community interaction platform
            into a unified, user-friendly interface. By leveraging data-driven insights, the
            system empowers farmers to make informed decisions, enhance productivity, improve
            profitability, and reduce dependency on middlemen—ultimately contributing to a
            smarter, more sustainable agricultural ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;
