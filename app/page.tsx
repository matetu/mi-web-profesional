import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0f] text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-[#0c0c0f]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm font-medium text-cyan-400">
            M.
          </a>
          <div className="flex gap-8">
            <a href="#about" className="text-sm text-zinc-400 transition hover:text-zinc-100">
              About
            </a>
            <a href="#projects" className="text-sm text-zinc-400 transition hover:text-zinc-100">
              Projects
            </a>
            <a href="#contact" className="text-sm text-zinc-400 transition hover:text-zinc-100">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
        <p className="mb-4 font-mono text-sm text-cyan-400">
          Systems Engineering · AI Automation
        </p>
        {/* CORRECCIÓN SEO: Solo un H1. */}
        <h1 className="mb-6 text-center text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I&apos;m <span className="text-cyan-400">Mateo</span>
        </h1>
        {/* CORRECCIÓN SEO: Subtítulo descriptivo en H2. */}
        <h2 className="max-w-xl text-center text-lg text-zinc-400 sm:text-xl font-normal">
          Building the bridge between engineering and artificial intelligence —
          one system at a time.
        </h2>
        <a
          href="#about"
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm text-zinc-300 transition hover:border-cyan-500/50 hover:text-cyan-400"
        >
          Learn more
          <span className="text-cyan-400">↓</span>
        </a>
      </section>

      {/* About Me */}
      <section id="about" className="border-t border-zinc-800/60 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          {/* CORRECCIÓN SEO: Cambié los H2/H3 desordenados por H2 y P. */}
          <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
            Engineering & Language
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            I&apos;m a second-year Systems Engineering student at{" "}
            <span className="text-zinc-200">UTN FRC</span> (Universidad
            Tecnológica Nacional — Facultad Regional Córdoba). I focus on
            building robust systems using <strong>Python</strong> and exploring how AI can solve real
            engineering problems. I hold a{" "}
            <span className="text-zinc-200">C1 Advanced English</span> certificate, which
            helps me work with global resources and collaborate across borders.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-zinc-800/60 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
            What I&apos;m building
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Catalog Management System",
                description: "A Python/Flask application featuring CRUD operations, JSON data persistence, and an Admin Panel.",
                tag: "Python / Flask",
              },
              {
                title: "AI Auto Advisor",
                description: "Developing a FastAPI backend that connects to an AI for technical car advice and mechanics.",
                tag: "FastAPI / AI",
              },
              {
                title: "Infrastructure & Tools",
                description: "Experienced with Git, Linux (Mint), and hardware analysis for optimized environments.",
                tag: "DevOps",
              },
            ].map((project, i) => (
              <article
                key={i}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <span className="mb-3 inline-block font-mono text-xs text-cyan-400/90">
                  {project.tag}
                </span>
                {/* CORRECCIÓN SEO: Los títulos de las tarjetas ahora son H3 (subsecciones del H2). */}
                <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-800/60 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mb-10 text-zinc-400">
            Open to collaborations, internships, and interesting conversations
            about engineering, AI, and automotive technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:alvarezgazzemateo@gmail.com" className="rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm text-zinc-300 transition hover:border-cyan-500/50 hover:text-cyan-400">
              Email
            </a>
            <a href="https://www.linkedin.com/in/mateo-alvarez-gazze-5538a6354" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm text-zinc-300 transition hover:border-cyan-500/50 hover:text-cyan-400">
              LinkedIn
            </a>
            <a href="https://github.com/matetu" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm text-zinc-300 transition hover:border-cyan-500/50 hover:text-cyan-400">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 px-6 py-8">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-zinc-500">
            © {new Date().getFullYear()} Mateo
          </p>
          <p className="font-mono text-xs text-zinc-600">
            Systems Engineering · UTN FRC
          </p>
        </div>
      </footer>
    </main>
  );
}