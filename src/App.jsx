import { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ================= PROJECTS =================

  const projects = [
    {
      title: "Calculator",
      description:
        "A simple calculator application that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      technology: "ReactJS, Tailwind CSS, JavaScript",
      image: "🧮",

      link: "https://simple-calculator-dcit-26.vercel.app/",

      github:
        "https://github.com/leahmadrelejos/simple-calculator.git",
    },

    {
      title: "To-Do List Application",
      description:
        "A simple task management application where users can add, complete, and delete tasks.",
      technology: "ReactJS, Tailwind CSS",
      image: "📝",

      link: "https://todo-list-react-dcit-26.vercel.app/",

      github:
        "https://github.com/leahmadrelejos/todo-list-react.git",
    },
  ];

  // ================= FORM HANDLERS =================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setMessage("Please complete all fields.");
      return;
    }

    setMessage("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  // ================= MOBILE MENU =================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* ================= NAVIGATION ================= */}
      <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">
            My E-Portfolio
          </h1>

          {/* Desktop Menu */}
          <div className="hidden gap-6 md:flex">

            <a
              href="#home"
              className="hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#resume"
              className="hover:text-blue-600"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="hover:text-blue-600"
            >
              Contact
            </a>

          </div>

          {/* Mobile Button */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-white px-6 pb-4 md:hidden">

            <div className="flex flex-col gap-3">

              <a href="#home" onClick={closeMenu}>
                Home
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>

              <a href="#resume" onClick={closeMenu}>
                Resume
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>

            </div>

          </div>
        )}
      </nav>


      {/* ================= HOME ================= */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center bg-blue-50 px-6"
      >

        <div className="max-w-4xl text-center">

          <p className="mb-3 text-lg font-semibold text-blue-600">
            Welcome to My E-Portfolio
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-6xl">

            Hello, I'm{" "}

            <span className="text-blue-600">
              Leah Madrelejos
            </span>

          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">

            I am a 3rd-year college student taking up
            Information Technology. I chose IT because I am
            interested in learning how to code and gaining
            knowledge about technology.

          </p>

          <a
            href="#about"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Learn More
          </a>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="px-6 py-20"
      >

        <div className="mx-auto max-w-5xl">

          <h2 className="mb-10 text-center text-3xl font-bold">
            About Me
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Personal Background */}
            <div className="rounded-xl bg-white p-8 shadow">

              <h3 className="mb-4 text-2xl font-bold text-blue-600">
                Personal Background
              </h3>

              <p className="leading-7 text-gray-600">

                I am a 3rd-year college student at Cavite
                State University - Tanza Campus. I enjoy
                learning new technologies and creating
                simple websites and applications.

              </p>

            </div>


            {/* Skills and Interests */}
            <div className="rounded-xl bg-white p-8 shadow">

              <h3 className="mb-4 text-2xl font-bold text-blue-600">
                Skills and Interests
              </h3>

              <ul className="space-y-3 text-gray-600">

                <li>✓ HTML and CSS</li>
                <li>✓ ReactJS</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ JavaScript</li>
                <li>✓ Database Systems</li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* ================= PROJECTS ====================== */}
      {/* ================================================= */}

      <section
        id="projects"
        className="bg-gray-200 px-6 py-20"
      >

        <div className="mx-auto max-w-6xl">

          <h2 className="mb-10 text-center text-3xl font-bold">
            Projects / Work Samples
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (

              <div
                key={index}
                className="flex flex-col rounded-xl bg-white p-6 shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Project Icon */}
                <div className="mb-5 flex h-32 items-center justify-center rounded-lg bg-blue-100 text-5xl">
                  {project.image}
                </div>


                {/* Project Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {project.title}
                </h3>


                {/* Project Description */}
                <p className="mb-4 flex-grow text-gray-600">
                  {project.description}
                </p>


                {/* Technology */}
                <p className="mb-5 text-sm font-semibold text-blue-600">
                  {project.technology}
                </p>


                {/* Details Button Only */}
                <div className="flex flex-wrap gap-2">

                  <button
                    onClick={() => setSelectedProject(index)}
                    className="rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    Details
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECT MODAL ================= */}

      {selectedProject !== null && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="w-full max-w-lg rounded-xl bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Project Title */}
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {projects[selectedProject].title}
            </h2>


            {/* Project Description */}
            <p className="mb-4 leading-7 text-gray-600">
              {projects[selectedProject].description}
            </p>


            {/* Technology */}
            <p className="mb-6 text-gray-700">

              <strong>
                Technology:
              </strong>{" "}

              {projects[selectedProject].technology}

            </p>


            {/* ================= PROJECT LINKS ================= */}
            <div className="mb-6">

              <h3 className="mb-3 text-lg font-bold text-gray-900">
                Project Links
              </h3>

              <div className="flex flex-col gap-3">

                {/* Vercel / Live Project */}
                <a
                  href={projects[selectedProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  🚀 Open Live Project
                </a>


                {/* GitHub */}
                <a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  <FaGithub size={22} />
                  View GitHub Repository
                </a>

              </div>

            </div>


            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="w-full rounded-lg bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
            >
              Close
            </button>

          </div>

        </div>

      )}


      {/* ================= RESUME ================= */}
      <section
        id="resume"
        className="px-6 py-20"
      >

        <div className="mx-auto max-w-6xl">

          <h2 className="mb-10 text-center text-3xl font-bold">
            Resume / CV
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {/* ================= EDUCATION ================= */}
            <div className="rounded-xl bg-white p-6 shadow">

              <h3 className="mb-6 text-xl font-bold text-blue-600">
                Education
              </h3>

              <div className="space-y-6">

                {/* Elementary */}
                <div>

                  <p className="text-gray-600">
                    Elementary: Antonio B. Del Rosario Mem.
                    Elementary School
                  </p>

                  <p className="mt-2 text-gray-500">
                    2012 - 2018
                  </p>

                </div>


                {/* Junior High School */}
                <div>

                  <p className="text-gray-600">
                    Junior High School: Tanza National Trade
                    School - Annex
                  </p>

                  <p className="text-gray-600">
                    Course: Computer System Servicing
                  </p>

                  <p className="mt-2 text-gray-500">
                    2018 - 2022
                  </p>

                </div>


                {/* Senior High School */}
                <div>

                  <p className="text-gray-600">
                    Senior High School: Tanza National Trade
                    School - Main
                  </p>

                  <p className="text-gray-600">
                    Course: Computer Programming
                  </p>

                  <p className="mt-2 text-gray-500">
                    2022 - 2024
                  </p>

                </div>


                {/* College */}
                <div>

                  <p className="text-gray-600">
                    College: Cavite State University -
                    Tanza Campus
                  </p>

                  <p className="text-gray-600">
                    Course: Bachelor of Science in
                    Information Technology
                  </p>

                  <p className="mt-2 text-gray-500">
                    2024 - Present
                  </p>

                </div>

              </div>

            </div>


            {/* ================= EXPERIENCE ================= */}
            <div className="rounded-xl bg-white p-6 shadow">

              <h3 className="mb-3 text-xl font-bold text-blue-600">
                Experience
              </h3>

              <p className="mt-2 text-gray-500">
                Academic Projects
              </p>

              <p className="mt-4 leading-7 text-gray-600">

                Developed simple websites and applications
                as part of academic projects using ReactJS,
                JavaScript, and Tailwind CSS.

              </p>

            </div>


            {/* ================= SKILLS ================= */}
            <div className="rounded-xl bg-white p-6 shadow">

              <h3 className="mb-3 text-xl font-bold text-blue-600">
                Skills
              </h3>

              <ul className="space-y-2 text-gray-600">

                <li>✓ HTML & CSS</li>
                <li>✓ JavaScript</li>
                <li>✓ ReactJS</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Database Systems</li>

              </ul>

            </div>

          </div>


          {/* Download CV */}
          <div className="mt-8 text-center">

            <button
              onClick={() =>
                alert("You can add your PDF Resume here.")
              }
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Download CV
            </button>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-blue-50 px-6 py-20"
      >

        <div className="mx-auto max-w-3xl">

          {/* Contact Title */}
          <h2 className="mb-10 text-center text-3xl font-bold">
            Contact Information
          </h2>


          {/* ================= CONTACT INFORMATION ================= */}
          <div className="mb-8 rounded-xl bg-white p-6 shadow">

            {/* Email */}
            <p className="mb-4 text-gray-700">

              📧 <strong>Email:</strong>{" "}
              madrelejos@email.com

            </p>


            {/* Phone */}
            <p className="mb-4 text-gray-700">

              📱 <strong>Phone:</strong>{" "}
              0948-246-0725

            </p>


            {/* Social Media */}
            <div className="flex items-center gap-4">

              <strong className="text-gray-700">
                Social:
              </strong>


              {/* Facebook */}
              <a
                href="https://www.facebook.com/leahmadrelejos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blue-600 transition duration-200 hover:scale-110 hover:text-blue-800"
              >
                <FaFacebook size={30} />
              </a>


              {/* GitHub */}
              <a
                href="https://github.com/leahmadrelejos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-800 transition duration-200 hover:scale-110 hover:text-black"
              >
                <FaGithub size={30} />
              </a>

            </div>

          </div>


          {/* ================= CONTACT FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-8 shadow"
          >

            <h3 className="mb-6 text-xl font-bold">
              Send Me a Message
            </h3>


            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />


            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />


            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Send Message
            </button>


            {/* Form Message */}
            {message && (
              <p className="mt-4 text-center font-semibold text-blue-600">
                {message}
              </p>
            )}

          </form>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 px-6 py-6 text-center text-white">

        <p>
          © 2026 Leah Madrelejos | ReactJS E-Portfolio
        </p>

      </footer>

    </div>
  );
}

export default App;
