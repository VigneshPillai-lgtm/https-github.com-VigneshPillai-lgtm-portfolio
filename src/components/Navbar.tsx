import { ThemeToggle } from "./ThemeToggle"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="flex h-20 items-center justify-between px-4 sm:px-12">
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center font-serif italic text-xl shrink-0">
            V
          </a>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.3em] font-medium">Vignesh Pillai</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center flex-1 justify-center">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
