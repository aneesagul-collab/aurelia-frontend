import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Code2,
  Layers3,
  Menu,
  MonitorSmartphone,
  Palette,
  Send,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone size={22} />,
    title: "Responsive Design",
    text: "Interfaces that adapt smoothly to desktop, tablet and mobile screens.",
  },
  {
    icon: <Zap size={22} />,
    title: "Smooth Interactions",
    text: "Clean animations and transitions that make the interface feel alive.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Clean Development",
    text: "Organized React components with reusable and maintainable code.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Form Validation",
    text: "Client-side validation gives users immediate and clear feedback.",
  },
  {
    icon: <Layers3 size={22} />,
    title: "Dynamic Content",
    text: "React state and reusable data structures keep content interactive.",
  },
  {
    icon: <Palette size={22} />,
    title: "Modern UI",
    text: "A polished visual system with consistent spacing, colors and typography.",
  },
];

const principles = [
  "Mobile-first responsive layouts",
  "Consistent spacing and typography",
  "Clear navigation and content hierarchy",
  "Reusable React components",
  "Client-side form validation",
  "Smooth animations and transitions",
  "Accessible focus states",
  "Clean and maintainable code",
];

const projects = [
  {
    title: "Responsive Interface",
    description:
      "A flexible interface designed to provide a consistent experience across different screen sizes.",
    tags: ["React", "CSS", "Responsive"],
  },
  {
    title: "Interactive Dashboard",
    description:
      "A dynamic dashboard concept using reusable components and interactive UI elements.",
    tags: ["React", "State", "Components"],
  },
  {
    title: "Modern Contact Flow",
    description:
      "A user-friendly contact experience with validation, feedback and smooth interactions.",
    tags: ["Forms", "Validation", "UX"],
  },
];

const testimonials = [
  {
    text: "Good frontend design should be simple to understand, easy to use and pleasant to interact with.",
    author: "Frontend Principle",
  },
  {
    text: "Responsive design is not only about fitting a screen. It is about creating a comfortable experience.",
    author: "Responsive Design",
  },
  {
    text: "Small transitions can make an interface feel much more polished without making it complicated.",
    author: "Interaction Design",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const nextProject = () => {
    setActiveProject((current) => (current + 1) % projects.length);
  };

  const previousProject = () => {
    setActiveProject(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial(
      (current) => (current + 1) % testimonials.length
    );
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const project = projects[activeProject];
  const testimonial = testimonials[activeTestimonial];

  return (
    <div className="app">

      {/* Background decoration */}
      <div className="background-orb orb-one"></div>
      <div className="background-orb orb-two"></div>
      <div className="background-grid"></div>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark">
            A
          </span>

          <span>Aurelia</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("principles")}>
            Best Practices
          </button>

          <button onClick={() => scrollToSection("work")}>
            Work
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </nav>

        <button
          className="nav-cta"
          onClick={() => scrollToSection("contact")}
        >
          Let's Talk
          <ArrowRight size={15} />
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section className="hero" id="home">
          <div className="container hero-grid">

            <div className="hero-content">

              <div className="eyebrow">
                Frontend Development
              </div>

              <h1>
                Build interfaces
                <span> people enjoy.</span>
              </h1>

              <p className="hero-description">
                A modern frontend experience built with React,
                responsive layouts, interactive components,
                validation and smooth user interactions.
              </p>

              <div className="hero-actions">

                <button
                  className="primary-button"
                  onClick={() => scrollToSection("work")}
                >
                  Explore Work
                  <ArrowRight size={17} />
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("principles")}
                >
                  View Practices
                </button>

              </div>

              <div className="hero-stats">

                <div>
                  <strong>100%</strong>
                  <span>Responsive</span>
                </div>

                <div>
                  <strong>React</strong>
                  <span>Interactive UI</span>
                </div>

                <div>
                  <strong>UX</strong>
                  <span>User Focused</span>
                </div>

              </div>

            </div>

            <div className="hero-visual">

              <div className="visual-glow"></div>

              <div className="visual-card">

                <div className="visual-header">

                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="visual-status">
                    <span className="status-dot"></span>
                    Live UI
                  </span>

                </div>

                <div className="visual-content">

                  <div className="visual-icon">
                    <Sparkles size={27} />
                  </div>

                  <div className="visual-title">
                    <span>Frontend</span>
                    <strong>Experience</strong>
                  </div>

                  <div className="visual-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="visual-progress">
                    <div>
                      <span>Responsive</span>
                      <strong>100%</strong>
                    </div>

                    <div className="progress-track">
                      <span></span>
                    </div>
                  </div>

                </div>

              </div>

              <div className="floating-card floating-one">
                <Check size={15} />
                Smooth UI
              </div>

              <div className="floating-card floating-two">
                <Zap size={15} />
                Fast
              </div>

            </div>

          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services">
          <div className="container">

            <div className="section-heading">
              <div className="eyebrow">
                What I Focus On
              </div>

              <h2>
                Frontend built around
                <span> good practices.</span>
              </h2>

              <p>
                These principles help create interfaces that are
                responsive, interactive, accessible and easier to maintain.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article
                  className="service-card"
                  key={service.title}
                  style={{
                    animationDelay: `${index * 0.08}s`,
                  }}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <div className="service-number">
                    0{index + 1}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <div className="card-arrow">
                    <ArrowRight size={16} />
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PRINCIPLES ================= */}
        <section id="principles" className="principles-section">
          <div className="container">

            <div className="section-heading">
              <div className="eyebrow">
                Best Practices
              </div>

              <h2>
                Small details make a
                <span> better interface.</span>
              </h2>

              <p>
                A good frontend is not only about appearance.
                It should also be responsive, understandable and easy to use.
              </p>
            </div>

            <div className="principles-wrapper">

              <div className="principles-intro">

                <div className="big-icon">
                  <Code2 size={32} />
                </div>

                <h3>
                  A clean development
                  mindset.
                </h3>

                <p>
                  Every part of the interface should have a clear
                  purpose and provide a comfortable experience for users.
                </p>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("contact")}
                >
                  Discuss a Project
                  <ArrowRight size={16} />
                </button>

              </div>

              <div className="principles-list">
                {principles.map((principle, index) => (
                  <div
                    className="principle"
                    key={principle}
                  >
                    <span className="principle-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{principle}</span>

                    <Check
                      className="principle-check"
                      size={16}
                    />
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ================= WORK ================= */}
        <section id="work">
          <div className="container">

            <div className="section-heading">
              <div className="eyebrow">
                Interactive Examples
              </div>

              <h2>
                Explore the
                <span> interface.</span>
              </h2>

              <p>
                React state is used here to create interactive
                content without reloading the page.
              </p>
            </div>

            <div className="work-card" key={project.title}>

              <div className="work-info">

                <span className="work-number">
                  0{activeProject + 1} / 0{projects.length}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span
                      className="work-tag"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              <div className="work-visual">

                <div className="work-orbit orbit-large"></div>
                <div className="work-orbit orbit-small"></div>

                <div className="work-center">
                  <Layers3 size={42} />
                </div>

              </div>

            </div>

            <div className="slider-controls">

              <button
                className="slider-button"
                onClick={previousProject}
                aria-label="Previous project"
              >
                <ArrowLeft size={18} />
              </button>

              <div className="slider-dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={
                      activeProject === index
                        ? "slider-dot active"
                        : "slider-dot"
                    }
                    onClick={() => setActiveProject(index)}
                    aria-label={`Show project ${index + 1}`}
                  />
                ))}
              </div>

              <button
                className="slider-button"
                onClick={nextProject}
                aria-label="Next project"
              >
                <ArrowRight size={18} />
              </button>

            </div>

          </div>
        </section>

        {/* ================= TESTIMONIAL ================= */}
        <section className="testimonial-section">
          <div className="container">

            <div className="testimonial-card">

              <div className="quote-mark">
                “
              </div>

              <blockquote key={testimonial.text}>
                {testimonial.text}
              </blockquote>

              <div className="testimonial-author">
                — {testimonial.author}
              </div>

              <div className="testimonial-controls">

                <button
                  className="slider-button"
                  onClick={() =>
                    setActiveTestimonial(
                      (current) =>
                        (current - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={16} />
                </button>

                <div className="testimonial-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={
                        activeTestimonial === index
                          ? "testimonial-dot active"
                          : "testimonial-dot"
                      }
                      onClick={() =>
                        setActiveTestimonial(index)
                      }
                      aria-label={`Show testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  className="slider-button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={16} />
                </button>

              </div>

            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact">
          <div className="container">

            <div className="section-heading">
              <div className="eyebrow">
                Get In Touch
              </div>

              <h2>
                Let's create something
                <span> useful.</span>
              </h2>

              <p>
                Try the form below. It includes client-side
                validation and instant feedback.
              </p>
            </div>

            <div className="contact-grid">

              <div className="contact-info">

                <div className="contact-icon">
                  <Send size={22} />
                </div>

                <h3>
                  Have an idea?
                </h3>

                <p>
                  A good contact experience should clearly tell
                  users what information is needed and what happens next.
                </p>

                <div className="contact-points">

                  <div>
                    <Check size={16} />
                    <span>Clear input labels</span>
                  </div>

                  <div>
                    <Check size={16} />
                    <span>Instant validation</span>
                  </div>

                  <div>
                    <Check size={16} />
                    <span>Success feedback</span>
                  </div>

                </div>

              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={errors.name ? "input-error" : ""}
                    />

                    {errors.name && (
                      <span className="form-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={errors.email ? "input-error" : ""}
                    />

                    {errors.email && (
                      <span className="form-error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your idea..."
                    className={errors.message ? "input-error" : ""}
                  ></textarea>

                  {errors.message && (
                    <span className="form-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  className="primary-button submit-button"
                  type="submit"
                >
                  Send Message
                  <Send size={16} />
                </button>

                {submitted && (
                  <div className="form-success">
                    ✓ Your message has been validated successfully.
                  </div>
                )}

              </form>

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-inner">

          <div className="footer-brand">
            <span className="brand-mark">
              A
            </span>

            <div>
              <strong>Aurelia</strong>
              <span>Frontend Development</span>
            </div>
          </div>

          <p>
            Built with React • Responsive • Interactive
          </p>

          <button
            className="back-top"
            onClick={() => scrollToSection("home")}
          >
            Back to top
            <ChevronDown size={15} className="rotate-up" />
          </button>

        </div>
      </footer>

    </div>
  );
}

export default App;