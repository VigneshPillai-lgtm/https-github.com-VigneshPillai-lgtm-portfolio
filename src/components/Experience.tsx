import { motion } from "motion/react"
import { achievements, certifications } from "../data"

export function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-border">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">Achievements</h3>
            
            <div className="space-y-10">
              {achievements.map((item, idx) => (
                <div key={idx} className="border-t border-border pt-6 group">
                  <h3 className="text-xl font-serif italic mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm font-light text-foreground/80">{item.event}</p>
                  {item.year && <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-3">{item.year}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 md:col-start-7 md:pl-12 md:border-l border-border"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">Certifications</h3>
            
            <ul className="space-y-6">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-4 border-t border-border pt-6 group">
                  <span className="text-[10px] text-muted-foreground mt-1 font-mono">0{idx + 1}</span>
                  <span className="text-lg font-light group-hover:text-accent transition-colors">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
