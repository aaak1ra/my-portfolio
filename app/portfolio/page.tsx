"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Menu,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function PortfolioPage() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const refreshRedirectHandled = useRef(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (refreshRedirectHandled.current) return;
    refreshRedirectHandled.current = true;

    const internalNavigation = sessionStorage.getItem("akira-internal-navigation") === "1";
    sessionStorage.removeItem("akira-internal-navigation");
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type === "reload" && !internalNavigation) {
      router.replace("/");
    }
  }, [router]);

  const [activeImages, setActiveImages] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{ projectNumber: string; imageIndex: number } | null>(null);


  const dark = theme === "dark";

  const t = {
    bg: dark
      ? "bg-[#0A0A0A] text-[#E8E8E8]"
      : "bg-[#f3f5f8] text-[#1A1A2E]",

    card: dark
      ? "bg-[#141414] border border-[#2A2A2A]"
      : "bg-white border border-slate-200/60 shadow-sm",

    accent: dark
      ? "text-[#38BDF8]"
      : "text-[#2563EB]",

    accentBg: dark
      ? "bg-[#38BDF8]/10"
      : "bg-[#2563EB]/10",

    border: dark
      ? "border-[#2A2A2A]"
      : "border-[#D1E0F0]",

    muted: dark
      ? "text-[#B8B8B8]"
      : "text-[#4A5A7A]",

    label: dark
      ? "text-[#666666]"
      : "text-slate-500",

    title: dark
      ? "text-white"
      : "text-[#1A1A2E]",

    divider: dark
      ? "bg-[#2A2A2A]"
      : "bg-[#D1E0F0]",
  };

  /* ============================================================
     FACEBOOK LOGO
  ============================================================ */

  const FacebookLogo = () => (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        fill={dark ? "#e2e8f0" : "#1c2547"}
      />

      <path
        d="M13.5 21v-6.5h2.2l.33-2.55h-2.53V10.3c0-.74.2-1.24 1.26-1.24h1.35V6.78a18 18 0 0 0-1.97-.1c-1.95 0-3.28 1.19-3.28 3.37v1.9H8.65v2.55h2.2V21z"
        fill={dark ? "#1c2547" : "#ffffff"}
      />
    </svg>
  );

  /* ============================================================
     LINKEDIN LOGO
  ============================================================ */

  const LinkedInLogo = () => (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill={dark ? "#e2e8f0" : "#1c2547"}
      />

      <path
        d="M6.94 8.5a1.28 1.28 0 1 1 0-2.56 1.28 1.28 0 0 1 0 2.56zM5.9 18.5h2.09V9.83H5.9zM10 18.5h2.09v-4.55c0-.87.34-1.49 1.2-1.49.86 0 1.17.62 1.17 1.49v4.55h2.1v-4.85c0-2.1-1.13-3.08-2.62-3.08-1.2 0-1.75.66-2.05 1.13V9.83H10z"
        fill={dark ? "#1c2547" : "#ffffff"}
      />
    </svg>
  );

  /* ============================================================
     CONTACT
  ============================================================ */

  const contact = [
    {
      icon: Mail,
      label: "Email",
      value: "akiraaganan0@gmail.com",
      truncate: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 908 362 0938",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bulacan, Philippines",
    },
    {
      icon: CheckCircle,
      label: "Availability",
      value: "Open to opportunities",
    },
  ];

  /* ============================================================
     PROJECTS
  ============================================================ */

  const projects: Array<{
    number: string;
    category: string;
    title: string;
    role: string;
    description: string;
    technologies?: string[];
    stackGroups?: { label: string; items: string[] }[];
    images: string[];
  }> = [
    {
      number: "01",
      category: "CAPSTONE · HARDWARE + MOBILE APP",
      title: "ICUT: AUTOMATED BATTERY-POWERED GRASSCUTTER WITH MOBILE MONITORING",
      role: "Hardware Integration · Mobile Monitoring · Team Project",
      description:
        "An automated, battery-powered grasscutter designed for manual and automatic operation. Its mobile interface allows users to monitor the system and control the grasscutter remotely through a wireless connection.",
      technologies: ["NodeMCU", "React", "Firebase", "C++", "Sensors", "Motors"],
      images: [
        "/projects/icut1.jpg",
        "/projects/icut2.jpg",
        "/projects/icut3.jpg",
        "/projects/icut4.jpg",
      ],
    },
    {
      number: "02",
      category: "ACADEMIC · GROUP PROJECT",
      title: "FORGCARD",
      role: "Web Developer · Team Project",
      description:
        "A digital business card maker that lets users create, customize, save, and manage professional cards using a selection of templates and manual design tools. Users can add contact details, social media links, photos, and logos, then share their cards through a unique QR code or link, or download and print them.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      images: [
        "/projects/forg1.jpg",
        "/projects/forg2.jpg",
        "/projects/forg3.jpg",
        "/projects/forg4.jpg",
        "/projects/forg5.jpg",
        "/projects/forg6.jpg",
      ],
    },
    {
      number: "03",
      category: "CLIENT PROJECT · CAFE WEBSITE",
      title: "Razon's Cafe",
      role: "Web Developer · Client Project",
      description:
        "A client-based coffee shop website created to present Razon's Cafe and its brand through an inviting, visually engaging online experience. The website gives visitors a convenient way to explore the cafe's offerings and learn more about the business.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      images: [
        "/projects/raz1.jpg",
        "/projects/raz2.jpg",
        "/projects/raz3.jpg",
        "/projects/raz4.jpg",
      ],
    },
    {
      number: "04",
      category: "CLIENT PROJECT · SURPLUS MANAGEMENT SYSTEM",
      title: "Lance Surplus",
      role: "Software Developer · Client Project",
      description:
        "A client based surplus management system designed to help a store manage surplus inventory, customer records, and sales transactions. It includes secure login, product and customer record management, stock quantity updates, billing, and simple notifications for low-stock or popular items.",
      technologies: ["C++", "VB.NET", "MySQL"],
      images: [
        "/projects/sur1.jpg",
        "/projects/sur2.jpg",
        "/projects/sur3.jpg",
        "/projects/sur4.jpg",
        "/projects/sur5.jpg",
      ],
    },
    {
      number: "05",
      category: "CLIENT PROJECT · PET SUPPLIES WEBSITE",
      title: "PetPal",
      role: "Web Developer · Client Project",
      description:
        "A client based pet supplies website designed to showcase pet food, toys, and accessories. Customers can browse and search the product catalog, manage a shopping cart, create accounts, review order history, and choose store pickup or home delivery, with payment options including PayPal and cash on delivery.",
      technologies: ["E-commerce", "Product Catalog", "Online Ordering", "PayPal", "Cash on Delivery"],
      images: [
        "/projects/pet1.jpg",
        "/projects/pet2.jpg",
        "/projects/pet3.jpg",
        "/projects/pet4.jpg",
        "/projects/pet5.jpg",
      ],
    },
    {
      number: "06",
      category: "ROBOTICS · EMBEDDED SYSTEMS",
      title: "Line Follower Robot",
      role: "Robotics Developer · Student Project",
      description:
        "An Arduino-based autonomous robot programmed in C++ to follow a marked path. It uses line-detection sensors to identify the track and controls its motors to adjust direction and stay aligned with the line as it moves.",
      technologies: ["Arduino", "C++", "Line Tracking Sensors", "Motor Driver", "DC Motors"],
      images: [
        "/projects/rob1.jpg",
        "/projects/rob2.jpg",
        "/projects/robot3.png",
      ],
    },
    {
      number: "07",
      category: "ELECTRONICS · CHRISTMAS DISPLAY",
      title: "2-feet Christmas Tree Display with Christmas Lights",
      role: "Electronics Design · Student Project",
      description:
        "A two-foot Christmas tree display featuring a vibrant, synchronized LED light show. The lights flash in coordinated patterns, creating a festive and eye-catching visual effect. Its dynamic lighting adds a unique touch to traditional Christmas decorations, making it an engaging centerpiece for the holiday season.",
      technologies: ["LED", "Resistors", "ICs", "PCB"],
      images: [
        "/projects/ChristmasTreeDisplay.mp4",
        "/projects/lite1.jpg",
        "/projects/lite2.jpg",
      ],
    },
  ];

  // Full-screen image viewer: Escape closes it; left/right arrows browse images.
  useEffect(() => {
    if (!lightbox) return;

    const selectedProject = projects.find(
      (project) => project.number === lightbox.projectNumber
    );
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setLightbox((current) => current ? {
          ...current,
          imageIndex: (current.imageIndex - 1 + selectedProject.images.length) % selectedProject.images.length,
        } : null);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setLightbox((current) => current ? {
          ...current,
          imageIndex: (current.imageIndex + 1) % selectedProject.images.length,
        } : null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  // Reveal project rows as they enter the viewport; no animation library required.
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-project-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("portfolio-is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("portfolio-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  /* ============================================================
     IMAGE FALLBACK
  ============================================================ */

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const image = event.currentTarget;

    image.style.display = "none";

    const fallback = image.nextElementSibling;

    if (fallback instanceof HTMLElement) {
      fallback.style.display = "flex";
    }
  };

  return (
    <div className={`min-h-screen ${t.bg}`}>
      <style>{`
        @keyframes portfolioHeaderIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .portfolio-header-enter { animation: portfolioHeaderIn 650ms cubic-bezier(.2,.7,.2,1) both; }
        .portfolio-reveal { opacity: 0; transform: translateY(28px) scale(.992); transition: opacity 650ms cubic-bezier(.2,.7,.2,1), transform 650ms cubic-bezier(.2,.7,.2,1); }
        .portfolio-reveal.portfolio-is-visible { opacity: 1; transform: translateY(0) scale(1); }
        .portfolio-media-frame { transition: transform 450ms cubic-bezier(.2,.7,.2,1), box-shadow 450ms ease; }
        .portfolio-media-frame:hover { transform: translateY(-3px); box-shadow: 0 18px 45px rgba(0,0,0,.16); }
        .portfolio-project-card { transition: transform 350ms ease, border-color 350ms ease, box-shadow 350ms ease; }
        .portfolio-project-card:hover { transform: translateY(-3px); box-shadow: 0 14px 34px rgba(0,0,0,.08); }
        .portfolio-timeline-dot { animation: portfolioDotPulse 2.8s ease-in-out infinite; }
        @keyframes portfolioDotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(229,139,114,.18); }
          50% { box-shadow: 0 0 0 7px rgba(229,139,114,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-header-enter, .portfolio-reveal, .portfolio-timeline-dot { animation: none !important; transition: none !important; }
          .portfolio-reveal { opacity: 1 !important; transform: none !important; }
          .portfolio-media-frame:hover, .portfolio-project-card:hover { transform: none; }
        }
      `}</style>
      <div className="max-w-[1480px] w-full mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row items-start gap-5">

          {/* ==================================================
              LEFT SIDEBAR
          ================================================== */}

          <aside
            aria-label="Profile information"
           className={`hidden lg:flex sidebar-enter-left w-full lg:w-[290px] lg:flex-shrink-0 lg:sticky lg:top-6 lg:self-start h-auto min-h-0 lg:h-[calc(100vh-3rem)] rounded-2xl p-4 sm:p-6 flex-col ${t.card}`}
            style={{
              fontFamily: "inherit",
            }}
          >
            <div className="w-full mt-3 sm:mt-8">

              {/* PROFILE */}

              <div className="text-center">
                <div className="w-[128px] h-[128px] rounded-2xl overflow-hidden mx-auto mb-4 shadow-sm">
                  <img
                    src="/profile.jpg"
                    alt="Akira Yuki M. Aganan"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div
                    className="w-full h-full bg-[#1A1A1A] flex items-center justify-center text-4xl"
                    aria-hidden="true"
                  >
                    👨‍💻
                  </div>
                </div>

                <span
                  className={`text-[12px] font-medium tracking-[0.16em] uppercase ${t.accent}`}
                >
                  HELLO, I'M
                </span>

                <h1
                  className={`text-lg sm:text-[20px] font-bold leading-snug break-words mt-2 mb-4 ${t.title}`}
                >
                  Akira Yuki M. Aganan
                </h1>

                <span
  className={`block rounded-xl px-4 py-3 text-[12px] font-medium leading-relaxed transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${t.accentBg} ${t.accent}`}
>
  Software Engineer | IT Support |
  <span className="block whitespace-nowrap">
    Data Analyst
  </span>
</span>
              </div>

              <div
                className={`w-full h-px my-5 ${t.divider}`}
                aria-hidden="true"
              />

              {/* CONTACT */}

              <div className="space-y-4 text-left">
                {contact.map(
                  ({
                    icon: Icon,
                    label,
                    value,
                    truncate,
                  }) => (
                    <div
                      key={label}
                      className="group flex items-center gap-3 rounded-xl -mx-2 px-2 py-1.5 transition-all duration-200 hover:translate-x-1 hover:bg-slate-500/[0.04] focus-within:bg-slate-500/[0.06]"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:shadow-sm ${t.accentBg}`}
                      >
                        <Icon
                          size={17}
                          className={t.accent}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div
                          className={`text-[10px] font-medium uppercase tracking-wider mb-0.5 ${t.label}`}
                        >
                          {label}
                        </div>

                        <div
                          className={`text-[12px] font-bold leading-relaxed ${
                            truncate ? "truncate" : ""
                          } ${
                            dark
                              ? "text-white"
                              : "text-black"
                          }`}
                        >
                          {value}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div
                className={`w-full h-px my-5 ${t.divider}`}
                aria-hidden="true"
              />

              {/* SOCIAL */}

              <div className="flex justify-center gap-3">
                <a
                  href="https://www.facebook.com/akirayukiaganan/"
                  aria-label="Facebook"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-md ${
                    dark
                      ? "bg-[#0a0f1f] border-[#1e2a4a] hover:border-[#38BDF8]"
                      : "bg-white border-slate-200 hover:border-[#2563EB]"
                  }`}
                >
                  <FacebookLogo />
                </a>

                <a
                  href="https://www.linkedin.com/in/akira-aganan-6bb690421/"
                  aria-label="LinkedIn"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-md ${
                    dark
                      ? "bg-[#0a0f1f] border-[#1e2a4a] hover:border-[#38BDF8]"
                      : "bg-white border-slate-200 hover:border-[#2563EB]"
                  }`}
                >
                  <LinkedInLogo />
                </a>
              </div>
            </div>

            {/* AVAILABILITY */}

            <div
              className={`flex items-start justify-center gap-2.5 text-[11px] leading-relaxed text-center mt-auto pt-6 ${t.label}`}
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"
                aria-hidden="true"
              />

               <span>
                Available for Software Engineer, IT support, Data Analyst, and and
                  other available roles
              </span>
            </div>
          </aside>

          {/* ==================================================
              RIGHT MAIN CONTENT
          ================================================== */}

          <main
            className={`min-w-0 flex-1 rounded-2xl p-4 sm:p-6 lg:p-7 ${t.card}`}
            style={{
              fontFamily: "inherit",
            }}
          >

            {/* ==================================================
                NAVIGATION
            ================================================== */}

            <nav
              aria-label="Primary navigation"
              className={`relative flex items-center justify-between pb-4 border-b ${t.border}`}
            >
              <Link
                href="/"
                aria-label="Go to About home page"
                className={`text-xl font-bold tracking-tight ${t.title}`}
               onClick={(event) => {
                  if (event.currentTarget.getAttribute("href") !== window.location.pathname) {
                    sessionStorage.setItem("akira-internal-navigation", "1");
                  }
                }}>
              
              </Link>

              <div className="hidden sm:flex gap-1 text-sm">

                <Link
                  href="/"
                  className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                    dark
                      ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                      : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                  }`}
                 onClick={(event) => {
                  if (event.currentTarget.getAttribute("href") !== window.location.pathname) {
                    sessionStorage.setItem("akira-internal-navigation", "1");
                  }
                }}>
                  About
                </Link>

                <Link
                  href="/resume"
                  className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                    dark
                      ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                      : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                  }`}
                 onClick={(event) => {
                  if (event.currentTarget.getAttribute("href") !== window.location.pathname) {
                    sessionStorage.setItem("akira-internal-navigation", "1");
                  }
                }}>
                  Resume
                </Link>

                <Link
                  href="/skills"
                  className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                    dark
                      ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                      : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                  }`}
                 onClick={(event) => {
                  if (event.currentTarget.getAttribute("href") !== window.location.pathname) {
                    sessionStorage.setItem("akira-internal-navigation", "1");
                  }
                }}>
                  Skills
                </Link>

                <Link
                  href="/portfolio"
                  aria-current="page"
                  className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                    dark
                      ? "bg-white/5 text-[#38BDF8]"
                      : "bg-[#E8F0FE] text-[#2563EB]"
                  }`}
                 onClick={(event) => {
                  if (event.currentTarget.getAttribute("href") !== window.location.pathname) {
                    sessionStorage.setItem("akira-internal-navigation", "1");
                  }
                }}>
                  Portfolio
                </Link>

                <Link
                  href="/contact"
                  className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                    dark
                      ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                      : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                  }`}
                 onClick={(event) => {
                  if (event.currentTarget.getAttribute("href") !== window.location.pathname) {
                    sessionStorage.setItem("akira-internal-navigation", "1");
                  }
                }}>
                  Contact
                </Link>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    dark
                      ? "bg-[#2A2A2A] text-[#B8B8B8] hover:text-white hover:bg-[#3A3A3A]"
                      : "bg-slate-100 text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-slate-200"
                  }`}
                >
                  {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                </button>

                {/* MOBILE BURGER BUTTON */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation-menu"
                  className={`sm:hidden w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                    dark
                      ? "bg-[#141414] border-[#2A2A2A] text-[#E8E8E8]"
                      : "bg-slate-50 border-slate-200 text-[#1A1A2E]"
                  }`}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {/* MOBILE DROPDOWN (MOBILE ONLY) */}
              {mobileMenuOpen && (
                <div
                  id="mobile-navigation-menu"
                  className={`sm:hidden flex flex-col gap-0.5 rounded-2xl border p-2 shadow-lg absolute z-50 w-[170px] right-3 top-full mt-3 ${
                    dark ? "bg-[#141414] border-[#2A2A2A]" : "bg-white border-slate-200"
                  }`}
                  aria-label="Mobile navigation"
                >
                  {[
                    { name: "About", href: "/" },
                    { name: "Resume", href: "/resume?from=nav" },
                    { name: "Skills", href: "/skills?from=nav" },
                    { name: "Portfolio", href: "/portfolio?from=nav" },
                    { name: "Contact", href: "/contact?from=nav" },
                  ].map((item) => {
                    const active = item.name === "Portfolio";
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (window.location.pathname !== item.href.split("?")[0]) {
                            sessionStorage.setItem("akira-internal-navigation", "1");
                          }
                        }}
                        className={`w-full rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          active
                            ? dark
                              ? "bg-white/5 text-[#38BDF8]"
                              : "bg-[#E8F0FE] text-[#2563EB]"
                            : dark
                              ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                              : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </nav>

            {/* ==================================================
                PORTFOLIO HEADER
            ================================================== */}

            <section
              aria-labelledby="portfolio-heading"
              className="py-7 portfolio-header-enter"
            >
              <span
                className={`text-sm tracking-[0.16em] uppercase font-semibold ${t.accent}`}
              >
                SELECTED WORK
              </span>

              <h2
                id="portfolio-heading"
                className={`text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight sm:leading-[1.05] break-words tracking-tight mt-2 max-w-[800px] break-words ${t.title}`}
              >
                Projects shaped by practical problems
              </h2>

              <p
                className={`text-base leading-7 max-w-[820px] mt-4 ${t.muted}`}
              >
                Software, mobile-app, hardware, research, and client projects
                presented through real project imagery.
                
              </p>
            </section>

            {/* ==================================================
                SELECTED WORK TIMELINE
            ================================================== */}

            <section aria-label="Selected projects" className="relative space-y-7 md:space-y-10">
              {projects.map((project, index) => {
                const reverse = index % 2 === 1;
                const imageIndex = activeImages[project.number] ?? 0;
                const projectImages = project.images;
                const currentImage = projectImages[imageIndex] ?? projectImages[0];
                const currentIsVideo = currentImage.toLowerCase().endsWith(".mp4");

                return (
                  <div
                    key={project.number}
                    data-project-reveal
                    className="portfolio-reveal relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_42px_minmax(0,1fr)] items-stretch gap-4 md:gap-0"
                  >
                    {/* IMAGE / SCREENSHOT PANEL */}
                    <div className={`${reverse ? "md:col-start-3 md:row-start-1" : "md:col-start-1 md:row-start-1"} min-w-0`}>
                      <div className={`portfolio-media-frame relative h-full min-h-[240px] sm:min-h-[280px] overflow-hidden rounded-2xl border ${dark ? "bg-[#101214] border-[#282828]" : "bg-white border-[#D1E0F0]"}`}>
                        <div className={`relative h-[240px] sm:h-[320px] lg:h-[350px] w-full overflow-hidden ${dark ? "bg-[#101214]" : "bg-[#F3F6FA]"}`}>
                          {projectImages.length > 1 ? (
                            <>
                              {/* PREVIOUS IMAGE PREVIEW — LEFT */}
                              {projectImages[(imageIndex - 1 + projectImages.length) % projectImages.length].toLowerCase().endsWith(".mp4") ? (
                                <img
                                  key={`${project.number}-prev-${(imageIndex - 1 + projectImages.length) % projectImages.length}`}
                                  src="/projects/lite1.jpg"
                                  alt={`${project.title} — video preview`}
                                  className="absolute left-[-9%] top-1/2 z-[1] h-[66%] w-[34%] -translate-y-1/2 rounded-xl object-cover opacity-55 blur-[0.2px] transition-all duration-300 sm:left-[-6%] sm:w-[33%]"
                                />
                              ) : (
                                <img
                                  key={`${project.number}-prev-${(imageIndex - 1 + projectImages.length) % projectImages.length}`}
                                  src={projectImages[(imageIndex - 1 + projectImages.length) % projectImages.length]}
                                  alt={`${project.title} — previous image preview`}
                                  className="absolute left-[-9%] top-1/2 z-[1] h-[66%] w-[34%] -translate-y-1/2 rounded-xl object-cover opacity-55 blur-[0.2px] transition-all duration-300 sm:left-[-6%] sm:w-[33%]"
                                  onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
                                />
                              )}

                              {/* NEXT IMAGE PREVIEW — RIGHT */}
                              {projectImages[(imageIndex + 1) % projectImages.length].toLowerCase().endsWith(".mp4") ? (
                                <img
                                  key={`${project.number}-next-${(imageIndex + 1) % projectImages.length}`}
                                  src="/projects/lite1.jpg"
                                  alt={`${project.title} — video preview`}
                                  className="absolute right-[-9%] top-1/2 z-[1] h-[66%] w-[34%] -translate-y-1/2 rounded-xl object-cover opacity-55 blur-[0.2px] transition-all duration-300 sm:right-[-6%] sm:w-[33%]"
                                />
                              ) : (
                                <img
                                  key={`${project.number}-next-${(imageIndex + 1) % projectImages.length}`}
                                  src={projectImages[(imageIndex + 1) % projectImages.length]}
                                  alt={`${project.title} — next image preview`}
                                  className="absolute right-[-9%] top-1/2 z-[1] h-[66%] w-[34%] -translate-y-1/2 rounded-xl object-cover opacity-55 blur-[0.2px] transition-all duration-300 sm:right-[-6%] sm:w-[33%]"
                                  onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
                                />
                              )}

                              {/* MAIN CENTER IMAGE */}
                              <div className="absolute inset-0 z-[2] flex items-center justify-center">
                                <div className={`relative h-[84%] w-[66%] overflow-hidden rounded-xl border shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:w-[62%] ${dark ? "border-white/15 bg-[#0A0A0A]" : "border-slate-200 bg-white"}`}>
                                  {currentIsVideo ? (
                                    <button
                                      type="button"
                                      aria-label={`Open ${project.title} video full screen`}
                                      onClick={() => setLightbox({ projectNumber: project.number, imageIndex })}
                                      className="absolute inset-0 h-full w-full cursor-pointer"
                                    >
                                      <video
                                        key={currentImage}
                                        src={currentImage}
                                        poster="/projects/lite1.jpg"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                        className="h-full w-full object-contain"
                                      />
                                      <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/25" aria-hidden="true">
                                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-black/60 text-2xl text-white shadow-xl">▶</span>
                                      </span>
                                    </button>
                                  ) : (
                                    <img
                                      key={currentImage}
                                      src={currentImage}
                                      alt={`${project.title} — image ${imageIndex + 1} of ${projectImages.length}`}
                                      className={`h-full w-full ${project.number === "01" && imageIndex === 0 ? "object-contain p-2" : "object-cover"} transition-opacity duration-300`}
                                      onError={(event) => {
                                        const image = event.currentTarget;
                                        image.style.display = "none";
                                        const fallback = image.parentElement?.querySelector("[data-image-fallback]");
                                        if (fallback instanceof HTMLElement) fallback.style.display = "flex";
                                      }}
                                    />
                                  )}
                                  <div data-image-fallback className={`absolute inset-0 hidden items-center justify-center p-5 text-center ${dark ? "bg-[#151515] text-[#38BDF8]" : "bg-[#F3F6FA] text-[#2563EB]"}`}>
                                    <div>
                                      <div className="mb-2 text-xs font-semibold tracking-[0.12em]">PROJECT {project.number}</div>
                                      <div className={`text-base font-semibold ${t.title}`}>{project.title}</div>
                                      <p className={`mt-2 text-sm leading-6 ${t.muted}`}>Add this image to the public/projects folder.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* OPEN CURRENT IMAGE IN FULL SCREEN */}
                              <button
                                type="button"
                                aria-label={`View image ${imageIndex + 1} of ${project.title} full screen`}
                                title="View full screen"
                                onClick={() => setLightbox({ projectNumber: project.number, imageIndex })}
                                className={`absolute right-3 top-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition hover:scale-105 ${dark ? "border-white/20 bg-black/70 text-white hover:bg-black/90" : "border-slate-200 bg-white/95 text-slate-800 hover:bg-white"}`}
                              >
                                <Maximize2 size={18} />
                              </button>

                              {/* PREVIOUS / NEXT CONTROLS */}
                              <button
                                type="button"
                                aria-label={`Previous image for ${project.title}`}
                                onClick={() => setActiveImages((previous) => ({
                                  ...previous,
                                  [project.number]: (imageIndex - 1 + projectImages.length) % projectImages.length,
                                }))}
                                className={`absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition hover:scale-105 ${dark ? "border-white/15 bg-black/65 text-white hover:bg-black/85" : "border-slate-200 bg-white/90 text-slate-800 hover:bg-white"}`}
                              >
                                <ChevronLeft size={18} />
                              </button>
                              <button
                                type="button"
                                aria-label={`Next image for ${project.title}`}
                                onClick={() => setActiveImages((previous) => ({
                                  ...previous,
                                  [project.number]: (imageIndex + 1) % projectImages.length,
                                }))}
                                className={`absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition hover:scale-105 ${dark ? "border-white/15 bg-black/65 text-white hover:bg-black/85" : "border-slate-200 bg-white/90 text-slate-800 hover:bg-white"}`}
                              >
                                <ChevronRight size={18} />
                              </button>

                              {/* IMAGE POSITION INDICATORS */}
                              <div className="absolute bottom-3 left-0 right-0 z-30 flex items-center justify-center gap-1.5">
                                {projectImages.map((image, dotIndex) => (
                                  <button
                                    key={image}
                                    type="button"
                                    aria-label={`Show image ${dotIndex + 1} of ${project.title}`}
                                    onClick={() => setActiveImages((previous) => ({ ...previous, [project.number]: dotIndex }))}
                                    className={`h-1.5 rounded-full transition-all ${dotIndex === imageIndex ? "w-5 bg-[#E58B72]" : `w-1.5 ${dark ? "bg-white/35 hover:bg-white/70" : "bg-slate-400/60 hover:bg-slate-500"}`}`}
                                  />
                                ))}
                              </div>
                            </>
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                              <img
                                key={currentImage}
                                src={currentImage}
                                alt={`${project.title} — project image`}
                                className="h-full w-full rounded-xl object-cover"
                                onError={(event) => {
                                  const image = event.currentTarget;
                                  image.style.display = "none";
                                  const fallback = image.parentElement?.querySelector("[data-image-fallback]");
                                  if (fallback instanceof HTMLElement) fallback.style.display = "flex";
                                }}
                              />
                              <div data-image-fallback className={`absolute inset-0 hidden items-center justify-center p-8 text-center ${dark ? "bg-[#151515] text-[#38BDF8]" : "bg-[#F3F6FA] text-[#2563EB]"}`}>
                                <div>
                                  <div className="mb-2 text-sm font-semibold tracking-[0.12em]">PROJECT {project.number}</div>
                                  <div className={`text-lg font-semibold ${t.title}`}>{project.title}</div>
                                  <p className={`mt-2 text-base leading-7 ${t.muted}`}>Add the project image to the public/projects folder.</p>
                                </div>
                              </div>
                              <button
                                type="button"
                                aria-label={`View ${project.title} full screen`}
                                title="View full screen"
                                onClick={() => setLightbox({ projectNumber: project.number, imageIndex: 0 })}
                                className={`absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition hover:scale-105 ${dark ? "border-white/20 bg-black/70 text-white hover:bg-black/90" : "border-slate-200 bg-white/95 text-slate-800 hover:bg-white"}`}
                              >
                                <Maximize2 size={18} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* CENTER TIMELINE */}
                    <div className="relative hidden md:flex md:col-start-2 md:row-start-1 justify-center" aria-hidden="true">
                      <span className={`absolute top-0 bottom-0 w-px ${dark ? "bg-[#292929]" : "bg-[#D8DDE5]"}`} />
                      <span className="relative mt-8 h-3 w-3 rounded-full border-2 border-[#E58B72] bg-[#E58B72]/25 shadow-[0_0_18px_rgba(229,139,114,0.28)]" />
                    </div>

                    {/* SIMPLE, READABLE PROJECT DETAILS */}
                    <article className={`portfolio-project-card ${reverse ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"} min-w-0 rounded-2xl border p-5 sm:p-7 transition-colors duration-300 ${dark ? "bg-[#101214] border-[#282828] hover:border-[#3A3A3A]" : "bg-white border-[#D1E0F0] hover:border-[#B9CEE3]"}`}>
                      <h3 className={`text-xl sm:text-2xl font-semibold leading-snug ${t.title}`}>
                        {project.title}
                      </h3>

                      <p className={`mt-4 text-base leading-8 ${t.muted}`}>
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {(project.technologies ?? project.stackGroups?.flatMap((group) => group.items) ?? []).map((technology) => (
                          <span
                            key={technology}
                            className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium leading-tight ${dark ? "bg-[#17191C] border-[#30343A] text-[#E2E8F0]" : "bg-[#F6F8FA] border-[#D8E1EA] text-[#35465A]"}`}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                );
              })}
            </section>

            {/* ==================================================
                FOOTER NOTE
            ================================================== */}

            <p
              className={`text-center text-[11px] leading-relaxed mt-6 ${t.label}`}
            >
              Selected project screenshots, research documents, user
              manuals, and other supporting materials are available
              for applicable projects.
            </p>

            {/* ==================================================
                FOOTER
            ================================================== */}

            <div
              className={`pt-4 mt-6 text-center text-xs border-t ${
                dark
                  ? "text-[#666666] border-[#2A2A2A]"
                  : "text-[#7A8AA0] border-[#D1E0F0]"
              }`}
            >
              © Akira Yuki Aganan. All rights reserved.
            </div>
          </main>
        </div>
      </div>

      {/* FULL-SCREEN IMAGE VIEWER */}
      {lightbox && (() => {
        const lightboxProject = projects.find(
          (project) => project.number === lightbox.projectNumber
        );
        if (!lightboxProject) return null;
        const lightboxImage = lightboxProject.images[lightbox.imageIndex] ?? lightboxProject.images[0];
        const lightboxIsVideo = lightboxImage.toLowerCase().endsWith(".mp4");

        return (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${lightboxProject.title} image viewer`}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close full-screen image viewer"
              title="Close (Esc)"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-[102] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X size={25} />
            </button>

            <div className="absolute left-4 top-4 z-[102] max-w-[calc(100%-5rem)] text-white sm:left-6 sm:top-6">
              <p className="text-sm font-semibold sm:text-base">{lightboxProject.title}</p>
              <p className="mt-1 text-sm text-white/70">{lightboxIsVideo ? "Video" : `Image ${lightbox.imageIndex + 1}`} · Item {lightbox.imageIndex + 1} of {lightboxProject.images.length} · Press Esc to close</p>
            </div>

            {lightboxProject.images.length > 1 && (
              <button
                type="button"
                aria-label="Previous full-screen image"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightbox((current) => current ? {
                    ...current,
                    imageIndex: (current.imageIndex - 1 + lightboxProject.images.length) % lightboxProject.images.length,
                  } : null);
                }}
                className="absolute left-3 top-1/2 z-[102] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-black/90 sm:left-6 sm:h-14 sm:w-14"
              >
                <ChevronLeft size={27} />
              </button>
            )}

            {lightboxIsVideo ? (
              <video
                key={`${lightboxProject.number}-${lightboxImage}`}
                src={lightboxImage}
                controls
                playsInline
                preload="none"
                onClick={(event) => event.stopPropagation()}
                className="max-h-[82vh] max-w-[92vw] object-contain sm:max-h-[86vh] sm:max-w-[88vw]"
              />
            ) : (
              <img
                key={`${lightboxProject.number}-${lightboxImage}`}
                src={lightboxImage}
                alt={`${lightboxProject.title} — full-screen image ${lightbox.imageIndex + 1}`}
                onClick={(event) => event.stopPropagation()}
                className="max-h-[82vh] max-w-[92vw] select-none object-contain sm:max-h-[86vh] sm:max-w-[88vw]"
              />
            )}

            {lightboxProject.images.length > 1 && (
              <button
                type="button"
                aria-label="Next full-screen image"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightbox((current) => current ? {
                    ...current,
                    imageIndex: (current.imageIndex + 1) % lightboxProject.images.length,
                  } : null);
                }}
                className="absolute right-3 top-1/2 z-[102] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-black/90 sm:right-6 sm:h-14 sm:w-14"
              >
                <ChevronRight size={27} />
              </button>
            )}

            {lightboxProject.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 z-[102] flex -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2">
                {lightboxProject.images.map((image, dotIndex) => (
                  <button
                    key={image}
                    type="button"
                    aria-label={`Open media item ${dotIndex + 1}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      setLightbox((current) => current ? { ...current, imageIndex: dotIndex } : null);
                    }}
                    className={`h-2 rounded-full transition-all ${dotIndex === lightbox.imageIndex ? "w-6 bg-[#E58B72]" : "w-2 bg-white/45 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })()}
      
      <style jsx global>{`
        @keyframes sidebarSlideLeft {
          from { opacity: 0; transform: translateX(-18px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .sidebar-enter-left {
          animation: sidebarSlideLeft 650ms cubic-bezier(.2,.7,.2,1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .sidebar-enter-left { animation: none !important; }
        }
      `}</style>
    </div>
  );
}