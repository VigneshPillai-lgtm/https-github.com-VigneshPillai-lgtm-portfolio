import { Moon, Sun } from "lucide-react"
import { useTheme } from "../hooks/use-theme"
import { motion } from "motion/react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative w-12 h-6 rounded-full border border-border p-1 flex items-center bg-muted transition-colors focus:outline-none"
        aria-label="Toggle theme"
      >
        <motion.div 
          className="w-4 h-4 rounded-full bg-foreground shadow-[0_0_10px_rgba(255,255,255,0.5)] flex items-center justify-center relative"
          animate={{ x: theme === 'dark' ? 22 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
        </motion.div>
      </motion.button>
      <span className="hidden lg:inline-block text-[10px] uppercase tracking-widest text-muted-foreground">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  )
}
