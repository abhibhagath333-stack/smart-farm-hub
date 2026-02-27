import { GraduationCap, User } from "lucide-react";

const students = [
  { name: "Nithin P B", usn: "U01BE23SOO72" },
  { name: "Mahendra M V", usn: "U01BE23SOO66" },
  { name: "Sachidananda C S", usn: "U01BE23SOO71" },
  { name: "Abhisheka H M", usn: "U01BE23SO128" },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-earth-light">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="section-title">Team & Guide</h2>
          <p className="section-subtitle">The team behind the Digital Agriculture Support System</p>
        </div>

        {/* Students */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {students.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-5 flex items-center gap-4 card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{s.name}</h4>
                <p className="text-sm text-muted-foreground">{s.usn}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guide */}
        <div className="bg-card rounded-xl border-2 border-primary/30 p-6 flex items-center gap-4 max-w-md mx-auto card-hover">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <User className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-0.5">Project Guide</p>
            <h4 className="font-serif font-semibold text-lg text-foreground">Mrs. Chaitra S</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
