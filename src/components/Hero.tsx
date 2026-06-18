import { motion } from "motion/react"
import { Github, Linkedin, MapPin, Download } from "lucide-react"
import { personalInfo, summary } from "../data"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div 
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants}>
            <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">IoT Student & Developer</p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tighter leading-[1] mb-8 font-serif italic">
              Hi, I'm <br className="hidden md:block"/> 
              <span className="not-italic font-sans font-light tracking-tighter">{personalInfo.name}</span>
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-12">
              {summary}
            </p>
          </motion.div>

          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-6 mb-8 max-w-xl">
            <div className="flex items-start gap-4">
              <span className="text-[10px] text-muted-foreground mt-1 font-mono">01</span>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-1">Kristu Jayanti University - BCA (IoT)</h4>
                <p className="text-[10px] text-muted-foreground uppercase">2024 — 2027 / Bengaluru</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[10px] text-muted-foreground mt-1 font-mono">02</span>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-1">Seeking Internship</h4>
                <p className="text-[10px] text-muted-foreground uppercase">Embedded & IoT Systems</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href="#" /* Resume link would go here */
              className="px-6 py-3 border border-border rounded-full text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all flex items-center gap-3"
            >
              Download Full Resume <Download className="w-4 h-4 ml-1" />
            </a>
            <div className="flex gap-4 sm:ml-auto">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
