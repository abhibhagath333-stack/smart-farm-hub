import dassLogo from "@/assets/dass-logo.png";

const navLinks = [
  { label: "Abstract", href: "#abstract" },
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Team", href: "#team" },
];

const BlogNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={dassLogo} alt="DASS Logo" className="w-8 h-8 rounded-full" />
          <span className="font-serif font-bold text-lg text-foreground">DASS</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar;
