import { personalInfo } from "../data"

export function Footer() {
  return (
    <footer className="px-4 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex gap-8">
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
      </div>
      
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground italic font-serif">
        © {new Date().getFullYear()} Vignesh Pillai
      </p>
      
      <div className="text-[10px] uppercase tracking-widest text-foreground hover:text-accent transition-colors">
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </div>
    </footer>
  )
}
