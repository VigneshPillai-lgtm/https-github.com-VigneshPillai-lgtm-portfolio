/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { ThemeProvider } from "./hooks/use-theme"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vignesh-portfolio-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
