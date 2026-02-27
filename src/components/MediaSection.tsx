import { useState } from "react";
import { Play, FileText, ExternalLink, Download, X } from "lucide-react";

const MediaSection = () => {
  const [showPdfModal, setShowPdfModal] = useState(false);

  return (
    <>
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">

            {/* AUDIO CARD */}
            <div className="bg-card rounded-2xl border border-border p-8 text-center card-hover">
              <Play className="w-12 h-12 text-primary mx-auto mb-4" />

              <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                Project Explanation Audio
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                Audio walkthrough explaining the project concept, workflow,
                and benefits.
              </p>

              <div className="rounded-xl bg-muted/50 border border-border/50 p-6">
                <audio controls className="w-full">
                  <source src="/voice.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* PDF CARD */}
            <div className="bg-card rounded-2xl border border-border p-8 text-center card-hover">
              <FileText className="w-12 h-12 text-accent mx-auto mb-4" />

              <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                Project Documentation (PDF)
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                View, open externally, or download the complete project report.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setShowPdfModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition"
                >
                  View PDF
                </button>

                <a
                  href="/Synapsis.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition"
                >
                  <ExternalLink size={16} />
                  Open
                </a>

                <a
                  href="/Synapsis.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PDF MODAL ================= */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="relative bg-background rounded-2xl w-full max-w-4xl h-[80vh] shadow-xl overflow-hidden">

            {/* Close Button */}
            <button
              onClick={() => setShowPdfModal(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition"
            >
              <X size={18} />
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/Synapsis.pdf"
              title="Project Documentation PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MediaSection;