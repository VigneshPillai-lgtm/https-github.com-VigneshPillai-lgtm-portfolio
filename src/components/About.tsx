import { motion } from "motion/react"
import { skills, education } from "../data"

export function About() {
  return (
    <section id="about" className="py-24 border-b border-border">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">Technical Skills</h3>
            <div className="space-y-10">
              {skills.map((category, idx) => (
                <div key={idx} className="border-t border-border pt-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-4">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full hover:border-foreground hover:text-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 lg:pl-12 lg:border-l border-border"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">Education Track</h3>
            <div className="space-y-12">
              {education.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <span className="text-[10px] text-muted-foreground mt-1 font-mono">0{idx + 1}</span>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-serif italic mb-2 group-hover:text-accent transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-light text-foreground/80 mb-2">
                        {item.institution}
                      </p>
                      <div className="flex sm:items-center flex-col sm:flex-row gap-2 sm:gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                        <span>{item.period}</span>
                        <span className="hidden sm:block w-4 h-px bg-border"></span>
                        <span>{item.details}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
