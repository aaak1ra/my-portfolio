
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Code,
  Layers,
  Cpu,
  Sparkles,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function SkillsPage() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const refreshRedirectHandled = useRef(false);

  useEffect(() => {
    if (refreshRedirectHandled.current) return;
    refreshRedirectHandled.current = true;

    const internalNavigation =
      sessionStorage.getItem("akira-internal-navigation") === "1";

    sessionStorage.removeItem("akira-internal-navigation");

    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type === "reload" && !internalNavigation) {
      router.replace("/");
    }
  }, [router]);

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
      ? "text-[#A3A3A3]"
      : "text-slate-600",

    title: dark
      ? "text-white"
      : "text-[#1A1A2E]",

    divider: dark
      ? "bg-[#2A2A2A]"
      : "bg-[#D1E0F0]",
  };

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

  const skillGroups = [
    {
      icon: Code,
      title: "Development",
      skills: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "C++",
        "C",
        "Next.js",
        "Python",
        "Java",
        "PHP",
        "TypeScript",
      ],
    },

    {
      icon: Layers,
      title: "Data & Technical Tools",
      skills: [
        "MySQL",
        "Git",
        "GitHub",
        "Visual Studio Code",
      ],
    },

    {
      icon: Cpu,
      title: "Embedded Systems & IoT",
      skills: [
        "Arduino",
        "Raspberry Pi",
        "ESP32",
      ],
    },

    {
      icon: Sparkles,
      title: "AI & Digital Support",
      skills: [
        "ChatGPT",
        "Claude",
        "AI-assisted workflows",
        "Troubleshooting",
      ],
    },
  ];

  return (
    <div className={`min-h-screen ${t.bg}`}>
      <div className="max-w-[1480px] w-full mx-auto px-4 sm:px-6 py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-5 min-h-[calc(100vh-3rem)]">

          {/* LEFT SIDEBAR */}

          <aside
            className={`sidebar-enter-left w-full lg:w-[290px] lg:flex-shrink-0 lg:sticky lg:top-6 lg:self-start h-auto min-h-0 lg:h-[calc(100vh-3rem)] rounded-2xl p-4 sm:p-6 flex flex-col ${t.card}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            aria-label="Profile information"
          >
            <div className="w-full mt-3 sm:mt-8">
              <div className="text-center">

                <div className="w-[128px] h-[128px] rounded-2xl overflow-hidden mx-auto mb-4 shadow-sm">
                  <img
                    src="/profile.jpg"
                    alt="Akira Yuki M. Aganan"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
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

              <div className="space-y-4 text-left">
                {contact.map(
                  ({ icon: Icon, label, value, truncate }) => (
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
                          } ${dark ? "text-white" : "text-black"}`}
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

              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                    dark
                      ? "bg-[#0a0f1f] border-[#1e2a4a] hover:border-[#38BDF8]"
                      : "bg-white border-slate-200 hover:border-[#2563EB]"
                  }`}
                >
                  <FacebookLogo />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                    dark
                      ? "bg-[#0a0f1f] border-[#1e2a4a] hover:border-[#38BDF8]"
                      : "bg-white border-slate-200 hover:border-[#2563EB]"
                  }`}
                >
                  <LinkedInLogo />
                </a>
              </div>
            </div>

            <div
              className={`flex items-start justify-center gap-2.5 text-[11px] leading-relaxed text-center mt-auto pt-6 ${t.label}`}
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"
                aria-hidden="true"
              />

              <span>
                Available for Software Engineer, IT support, and Data Analyst roles
              </span>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT */}

          <main
            className={`min-w-0 flex-1 rounded-2xl p-4 sm:p-6 lg:p-7 flex flex-col min-h-0 lg:min-h-[calc(100vh-3rem)] ${t.card}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >

            {/* NAVIGATION */}

            <nav
              aria-label="Primary navigation"
              className={`flex items-center justify-between pb-4 border-b ${t.border}`}
            >
              <Link
                href="/"
                aria-label="Go to About home page"
                className={`text-xl font-bold tracking-tight ${t.title}`}
                onClick={(event) => {
                  if (
                    event.currentTarget.getAttribute("href") !==
                    window.location.pathname
                  ) {
                    sessionStorage.setItem(
                      "akira-internal-navigation",
                      "1"
                    );
                  }
                }}
              >
                JAL.
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
                    if (
                      event.currentTarget.getAttribute("href") !==
                      window.location.pathname
                    ) {
                      sessionStorage.setItem(
                        "akira-internal-navigation",
                        "1"
                      );
                    }
                  }}
                >
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
                    if (
                      event.currentTarget.getAttribute("href") !==
                      window.location.pathname
                    ) {
                      sessionStorage.setItem(
                        "akira-internal-navigation",
                        "1"
                      );
                    }
                  }}
                >
                  Resume
                </Link>

                <Link
                  href="/skills"
                  aria-current="page"
                  className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                    dark
                      ? "bg-white/5 text-[#38BDF8]"
                      : "bg-[#E8F0FE] text-[#2563EB]"
                  }`}
                  onClick={(event) => {
                    if (
                      event.currentTarget.getAttribute("href") !==
                      window.location.pathname
                    ) {
                      sessionStorage.setItem(
                        "akira-internal-navigation",
                        "1"
                      );
                    }
                  }}
                >
                  Skills
                </Link>

                <Link
                  href="/portfolio"
                  className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                    dark
                      ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                      : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                  }`}
                  onClick={(event) => {
                    if (
                      event.currentTarget.getAttribute("href") !==
                      window.location.pathname
                    ) {
                      sessionStorage.setItem(
                        "akira-internal-navigation",
                        "1"
                      );
                    }
                  }}
                >
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
                    if (
                      event.currentTarget.getAttribute("href") !==
                      window.location.pathname
                    ) {
                      sessionStorage.setItem(
                        "akira-internal-navigation",
                        "1"
                      );
                    }
                  }}
                >
                  Contact
                </Link>
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  dark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  dark
                    ? "bg-[#2A2A2A] text-[#B8B8B8] hover:text-white hover:bg-[#3A3A3A]"
                    : "bg-slate-100 text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-slate-200"
                }`}
              >
                {dark ? (
                  <Sun size={18} aria-hidden="true" />
                ) : (
                  <Moon size={18} aria-hidden="true" />
                )}
              </button>
            </nav>

            {/* MOBILE NAVIGATION */}

            <div
              className={`sm:hidden mt-3 -mx-1 flex gap-1 overflow-x-auto px-1 pb-2 ${t.border}`}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <Link
                key="About"
                href="/"
                aria-current={undefined}
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    sessionStorage.setItem(
                      "akira-internal-navigation",
                      "1"
                    );
                  }
                }}
                className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  dark
                    ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                    : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                }`}
              >
                About
              </Link>

              <Link
                key="Resume"
                href="/resume?from=nav"
                aria-current={undefined}
                onClick={() => {
                  if (window.location.pathname !== "/resume") {
                    sessionStorage.setItem(
                      "akira-internal-navigation",
                      "1"
                    );
                  }
                }}
                className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  dark
                    ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                    : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                }`}
              >
                Resume
              </Link>

              <Link
                key="Skills"
                href="/skills?from=nav"
                aria-current={"page"}
                onClick={() => {
                  if (window.location.pathname !== "/skills") {
                    sessionStorage.setItem(
                      "akira-internal-navigation",
                      "1"
                    );
                  }
                }}
                className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  dark
                    ? "bg-white/5 text-[#38BDF8]"
                    : "bg-[#E8F0FE] text-[#2563EB]"
                }`}
              >
                Skills
              </Link>

              <Link
                key="Portfolio"
                href="/portfolio?from=nav"
                aria-current={undefined}
                onClick={() => {
                  if (window.location.pathname !== "/portfolio") {
                    sessionStorage.setItem(
                      "akira-internal-navigation",
                      "1"
                    );
                  }
                }}
                className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  dark
                    ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                    : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                }`}
              >
                Portfolio
              </Link>

              <Link
                key="Contact"
                href="/contact?from=nav"
                aria-current={undefined}
                onClick={() => {
                  if (window.location.pathname !== "/contact") {
                    sessionStorage.setItem(
                      "akira-internal-navigation",
                      "1"
                    );
                  }
                }}
                className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  dark
                    ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                    : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* SKILLS HEADER */}

            <motion.section
              aria-labelledby="skills-heading"
              className="py-5 lg:py-6 shrink-0"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <span
                className={`text-[11px] tracking-[0.22em] uppercase font-semibold ${t.accent}`}
              >
                SKILLS & TOOLS
              </span>

              <h2
                id="skills-heading"
                className={`text-3xl sm:text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-tight mt-2 ${t.title}`}
              >
                Technical skills. Practical support.
              </h2>

              <p
                className={`text-base leading-7 max-w-[760px] mt-3 ${t.muted}`}
              >
                Combining technical knowledge, creativity, and problem-solving skills to develop solutions, adapt to new technologies, and continuously improve.
              </p>
            </motion.section>

            {/* SKILL CARDS */}

            <motion.section
              aria-label="Technical skills and tools"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 md:auto-rows-fr content-stretch"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.12,
                  },
                },
              }}
            >
              {skillGroups.map(
                ({ icon: Icon, title, skills }) => (
                  <motion.article
                    key={title}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 22,
                        scale: 0.985,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      },
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className={`h-full rounded-2xl border p-5 lg:p-6 transition-colors duration-300 flex flex-col ${
                      dark
                        ? "bg-[#111111] border-[#2A2A2A] hover:border-[#38BDF8]/60 hover:shadow-[0_12px_35px_rgba(56,189,248,0.06)]"
                        : "bg-white border-[#D1E0F0] hover:border-[#2563EB]/50 hover:shadow-[0_12px_35px_rgba(37,99,235,0.07)]"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${t.accentBg} ${t.accent}`}
                    >
                      <Icon
                        size={23}
                        aria-hidden="true"
                      />
                    </div>

                    <h3
                      className={`text-base font-semibold mb-4 leading-snug ${t.title}`}
                    >
                      {title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`inline-flex items-center rounded-full border px-3 py-2 text-xs sm:text-[13px] font-medium leading-snug ${
                            dark
                              ? "bg-[#18202A] border-[#314355] text-[#D7E4F0]"
                              : "bg-[#F0F5FA] border-[#C9DCEC] text-[#16466E]"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                )
              )}
            </motion.section>

            {/* FOOTER */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className={`pt-4 mt-5 text-center text-sm leading-relaxed border-t ${
                dark
                  ? "text-[#666666] border-[#2A2A2A]"
                  : "text-[#7A8AA0] border-[#D1E0F0]"
              }`}
            >
              © Akira Yuki Aganan. All rights reserved.
            </motion.div>

          </main>
        </div>
      </div>

      <style jsx global>{`
        @keyframes sidebarSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .sidebar-enter-left {
          animation: sidebarSlideLeft 650ms cubic-bezier(.2,.7,.2,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .sidebar-enter-left {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
