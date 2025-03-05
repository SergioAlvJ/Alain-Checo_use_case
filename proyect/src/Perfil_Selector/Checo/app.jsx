import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css'; // Importa el archivo CSS

export default function ChecoProfile() {
  return (
    <div className="min-vh-100 bg-light text-dark d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">Sergio De Los Santos</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
              <li className="nav-item"><a href="#work-experience" className="nav-link">Work Experience</a></li>
              <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
              <li className="nav-item"><a href="#awards" className="nav-link">Awards & Certifications</a></li>
              <li className="nav-item"><a href="#hobbies" className="nav-link">Hobbies</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container flex-grow-1 py-5" style={{ marginTop: '56px' }}>
        <section id="home" className="mb-5 text-center">
          <h1>Hi! I'm Sergio De Los Santos</h1>
          <p>I am currently a student at the Polytechnic University of the State of Nayarit, and I work in the afternoons to support my studies.</p>
        </section>

        <Section id="education" title="Education" items={[
          "Software Engineering - Polytechnic University of the State of Nayarit (2023 - Present).",
          "Technical Preparatory School in Computer Science - Conalep (2019-2022).",
          "Everardo García Valle General 12U Secondary School (2016-2019)."
        ]} />

        <Section id="work-experience" title="Work Experience" items={[
          "Waiter at Secrets and Dreams Punta de Mita (2022) - Experience in drink preparation and customer service in Spanish and English.",
          "Waiter/Cook at Cinemex Forum Tepic Platinum."
        ]} />

        <Section id="skills" title="Skills" items={[
          "Problem-solving",
          "Python Programming",
          "Git & GitHub",
          "Web Development",
          "Teamwork & Adaptability"
        ]} />

        <Section id="awards" title="Awards & Certifications" items={[
          "IT Technician Certificate.",
          "Cisco Packet Certificate.",
          "English B1 Level."
        ]} />

        {/* Hobbies Section */}
        <section id="hobbies" className="resume-section mb-5">
          <h2 className="text-primary">My Hobbies</h2>
          <div className="row hobbies-container">
            <div className="col-md-3 mb-4">
              <div className="card hobby-card shadow-sm">
                <img src="https://imgs.search.brave.com/6uOD67VXnWJhEgQUqTvBTPgrI6hAhaHNlP-3fXRTlvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/NDY3MzI5NC9waG90/by92aWRlby1nYW1p/bmctY29uc29sZS1t/YW4tcGxheWluZy1y/cGctc3RyYXRlZ3kt/Z2FtZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9aFRzWWRE/TGJOS25FNWd4ZVk4/WWM0LTVkcnF6c0sy/RGlZenUxdmRrTUFP/ST0" className="card-img-top" alt="Play Videogames" />
                <div className="card-body">
                  <p className="card-text">Play Videogames (RPG, Survival, and Shooters)</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card hobby-card shadow-sm">
                <img src="https://imgs.search.brave.com/c2z8gMfSRuq6KQMTTnyu_VedX-FHWKIkLL5ewCmMbVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L1Nwb3RpZnlf/bG9nb193aXRoX3Rl/eHQuc3Zn" className="card-img-top" alt="Listen to Music" />
                <div className="card-body">
                  <p className="card-text">Listen to Music</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card hobby-card shadow-sm">
                <img src="https://imgs.search.brave.com/8XElviwqsVKrMi6KeNVrVHIS8tO2UY9TvL5WhFD_1TM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV84NjM0/MDAtTUxBNzE2OTc5/MDYxNzBfMDkyMDIz/LVYud2VicA" className="card-img-top" alt="Read Books" />
                <div className="card-body">
                  <p className="card-text">Read Books</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card hobby-card shadow-sm">
                <img src="https://imgs.search.brave.com/D8LRzyB8cc6rtXu2LmQam8FcYcIZp4IXVJhAD8ZXhYA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Rwbm90aWNpYXMu/Y29tL3Jlc2l6ZXIv/djIvQ1ZMSFlQWEdD/UkdSWEVHTU9YMlhV/STc1WEEuanBnP3Nt/YXJ0PXRydWUmYXV0/aD00YTU2ZjVkM2Yw/YWI1YTdmMzMyMWJm/YzE3N2I5ZDg1YmJh/NWNiNTUzNzc3YTE1/NmVkYzdiMzM1NmVi/MTEzOTcwJndpZHRo/PTY0MCZoZWlnaHQ9/MzYw" className="card-img-top" alt="Chambear" />
                <div className="card-body">
                  <p className="card-text">Chambear</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light py-3 text-center">
        <p>© Sergio De Los Santos. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Section({ id, title, items }) {
  return (
    <section id={id} className="resume-section mb-5 p-4 bg-white rounded shadow-sm">
      <h2 className="text-primary">{title}</h2>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </section>
  );
}