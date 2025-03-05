import React from "react";
import { Github, Mail, ExternalLink, Code2, Database, Cpu, Server } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AlainProfile() {
  return (
    <div id="main-bod" className="min-vh-100 bg-dark text-light">
      {/* Hero Section */}
      <header id="hero" className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden">
        <div
          className="position-absolute w-100 h-100 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
          }}
        ></div>
        <div className="container position-relative z-10">
          <div className="text-center mx-auto">
            <h1 className="display-1 font-weight-bold mb-4 text-transparent bg-gradient bg-clip-text from-blue-400 to-purple-500">
              Full Stack Developer
            </h1>
            <p className="lead text-muted mb-4">Jessie Alain Peña Ramirez</p>
            <div className="d-flex justify-content-center gap-2">
              <a href="#contact" className="btn btn-primary">
                Contáctame
              </a>
              <a href="#projects" className="btn btn-outline-light">
                Ver Proyectos
              </a>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-4">
              <a href="https://github.com/GSXRixxus" className="text-muted">
                <Github size={24} />
              </a>
              <a href="mailto:rixxus01binari@gmail.com" className="text-muted">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-dark-50">
        <div className="container">
          <h2 className="display-4 text-center mb-5">Tecnologías y Habilidades</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="bg-dark p-3 rounded-lg text-center transition">
                <Code2 className="w-12 h-12 mb-3 text-primary" />
                <h3 className="h5 mb-2">Frontend</h3>
                <p className="text-muted">React, CSS</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="bg-dark p-3 rounded-lg text-center transition">
                <Server className="w-12 h-12 mb-3 text-success" />
                <h3 className="h5 mb-2">Backend</h3>
                <p className="text-muted">Node.js, Python, Java</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="bg-dark p-3 rounded-lg text-center transition">
                <Database className="w-12 h-12 mb-3 text-purple" />
                <h3 className="h5 mb-2">Bases de Datos</h3>
                <p className="text-muted">MySQL, MongoDB</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="bg-dark p-3 rounded-lg text-center transition">
                <Cpu className="w-12 h-12 mb-3 text-warning" />
                <h3 className="h5 mb-2">Arquitectura</h3>
                <p className="text-muted">Gestión de proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="display-4 text-center mb-5">Proyectos Destacados</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="bg-dark p-3 rounded-lg overflow-hidden text-center transition">
                <h3 className="h5 mb-2">Proyecto Web</h3>
                <p className="text-muted mb-3">He creado múltiples páginas web. Puedes ver mi GitHub.</p>
                <a href="https://github.com/GSXRixxus" className="btn btn-link text-primary">
                  Ver proyecto <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark-50">
        <div className="container">
          <div className="mx-auto text-center">
            <h2 className="display-4 mb-4">¿Tienes un proyecto en mente?</h2>
            <p className="lead text-muted mb-4">Estoy disponible para proyectos freelance y oportunidades laborales.</p>
            <a href="mailto:rixxus01binari@gmail.com" className="btn btn-primary">
              Contáctame
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-dark text-light py-4">
        <p className="mb-0">© 2025 Alain Peña. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
