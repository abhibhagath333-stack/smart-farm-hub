import { Play, FileText } from "lucide-react";

const MediaSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Audio/Video Placeholder */}
          <div className="bg-card rounded-2xl border border-border p-8 text-center card-hover">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
              Project Explanation Audio / Video
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An audio/video walkthrough explaining the project concept, workflow, and benefits
              will be embedded here.
            </p>
            <div className="mt-6 h-32 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Media Placeholder</span>
            </div>
          </div>

          {/* PDF Placeholder */}
          <div className="bg-card rounded-2xl border border-border p-8 text-center card-hover">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
              Project Documentation (PDF)
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Downloadable documents including:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Project Report</li>
              <li>• System Architecture</li>
              <li>• UML Diagrams</li>
              <li>• Results & Screenshots</li>
            </ul>
            <div className="mt-6 h-14 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">PDF Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
