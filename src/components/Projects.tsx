import { motion } from "motion/react"
import { Github, Folder, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { personalInfo } from "../data"

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export function Projects() {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const githubUrl = personalInfo.github;
        const username = githubUrl.endsWith('/') ? githubUrl.slice(0, -1).split('/').pop() : githubUrl.split('/').pop();
        
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data: GithubRepo[] = await response.json();
        
        const filteredData = data.filter(repo => repo.name.toLowerCase() !== username?.toLowerCase());
        setRepos(filteredData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [])

  return (
    <section id="projects" className="py-24 bg-background text-foreground border-b border-border">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-base uppercase tracking-[0.3em] text-muted-foreground font-bold">Latest Repositories</h3>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader2 className="w-10 h-10 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {repos.map((project, idx) => {
                const title = project.name.replace(/[-_]/g, ' ')
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="relative flex flex-col bg-muted/60 dark:bg-muted/30 rounded-3xl overflow-hidden group min-h-[420px] border border-border/80 shadow-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-accent/10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    <div className="absolute top-8 right-8 z-20 flex gap-3">
                      {project.html_url && (
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:scale-110 hover:bg-foreground hover:text-background transition-all bg-background backdrop-blur-sm cursor-pointer text-foreground shadow-sm" aria-label="GitHub Repository">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:scale-110 hover:bg-foreground hover:text-background transition-all bg-background backdrop-blur-sm cursor-pointer text-foreground shadow-sm" aria-label="Live Project">
                          <span className="text-xl font-bold">↗</span>
                        </a>
                      )}
                      {!project.homepage && !project.html_url && (
                        <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center bg-background backdrop-blur-sm shadow-sm text-foreground">
                          <Folder className="w-5 h-5" />
                        </div>
                      )}
                    </div>

                    <div className="relative p-8 flex flex-col justify-end h-full z-10 w-full mt-auto">
                      <p className="text-accent text-sm md:text-base uppercase tracking-widest mb-3 font-bold drop-shadow-sm">Repository {String(idx + 1).padStart(2, '0')}</p>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic mb-6 text-foreground font-semibold">{title}</h2>
                      
                      <div className="space-y-4 mb-10 w-full max-w-2xl">
                        <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed font-medium">
                          {project.description || 'No description provided for this repository.'}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.language && (
                          <span className="px-5 py-2 border border-border rounded-full text-xs font-bold uppercase tracking-wider bg-background/80 shadow-sm text-foreground">
                            {project.language}
                          </span>
                        )}
                        {project.topics && project.topics.slice(0, 3).map((t, i) => (
                          <span 
                            key={i} 
                            className="px-5 py-2 border border-border rounded-full text-xs font-bold uppercase tracking-wider bg-background/80 shadow-sm text-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

