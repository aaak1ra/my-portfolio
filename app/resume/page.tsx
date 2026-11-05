"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  FileText,
  Moon,
  Sun,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Download,
  X,
  ZoomIn,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function ResumePage() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const refreshRedirectHandled = useRef(false);

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

  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    images: string[];
    activeImage: number;
  } | null>(null);

  const dark = theme === "dark";

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCertificate(null);
      if (event.key === "ArrowRight") {
        setSelectedCertificate((current) => {
          if (!current || current.images.length < 2) return current;
          return { ...current, activeImage: (current.activeImage + 1) % current.images.length };
        });
      }
      if (event.key === "ArrowLeft") {
        setSelectedCertificate((current) => {
          if (!current || current.images.length < 2) return current;
          return { ...current, activeImage: (current.activeImage - 1 + current.images.length) % current.images.length };
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCertificate]);

  // ============================================================
  // THEME COLORS
  // ============================================================
  const t = {
    bg: dark
      ? "bg-[#0A0A0A] text-[#E8E8E8]"
      : "bg-[#f3f5f8] text-[#1A1A2E]",

    card: dark
      ? "bg-[#141414] border border-[#2A2A2A]"
      : "bg-white border border-slate-200/60 shadow-sm",

    accent: dark ? "text-[#38BDF8]" : "text-[#2563EB]",

    accentBg: dark ? "bg-[#38BDF8]/10" : "bg-[#2563EB]/10",

    border: dark ? "border-[#2A2A2A]" : "border-[#D1E0F0]",

    muted: dark ? "text-[#B8B8B8]" : "text-[#4A5A7A]",

    label: dark ? "text-[#B8B8B8]" : "text-[#475569]",

    title: dark ? "text-white" : "text-[#1A1A2E]",

    divider: dark ? "bg-[#2A2A2A]" : "bg-[#D1E0F0]",
  };

  // ============================================================
  // SOCIAL MEDIA ICONS
  // ============================================================
  const FacebookLogo = () => (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      aria-hidden="true"
      focusable="false"
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
      focusable="false"
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

  // ============================================================
  // CONTACT INFORMATION
  // ============================================================
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

  // ============================================================
  // EXPERIENCE
  // ONLY ONE EXPERIENCE
  // ============================================================
  const experience = {
    date: "May 2025 — July 2025",
    title: "IT SUPPORT INTERN",
    company: "Grace Medical Center",
    location: "CSJDM, Bulacan",
    logo: "/gracemed_logo.jpg",
    description:
      "Provided IT support for clinical and administrative operations by assisting with hardware and software troubleshooting, configuring and maintaining desktops, printers, and network devices, and ensuring the accuracy of operational records. Gained hands-on experience in technical support, system maintenance, and resolving day-to-day IT issues in a healthcare environment.",
  };

  // ============================================================
  // EDUCATION
  // Keep this focused on your degree; no achievements are displayed.
  // ============================================================
  const education = {
    date: "2022 - 2026",
    degree: "Bachelor of Science in Computer Engineering",
    school: "Bulacan State University",
  };

  // ============================================================
  // CERTIFICATIONS
  // CERTIFICATE NAMES + MANUAL IMAGE PATHS
  // Add your own image files to public/certificates/ using these filenames.
  // Cisco has two image slots; the other certificates each have one image slot.
  // You can change any filename below to match the image names you choose.
  // ============================================================
  const certifications = [
    {
      title: "CISCO: Networking Basics",
      images: [
        "/certificates/cisco-networking-basics-1.jpg",
        "/certificates/cisco-networking-basics-2.jpg",
      ],
    },
    {
      title: "Huawei: AI Basics: Overview of AI",
      images: ["/certificates/huawei-ai-basics-overview-of-ai.png"],
    },
    {
      title: "Huawei: Basics of Network Layer Protocols Micro Certification",
      images: ["/certificates/huawei-basics-of-network-layer-protocols.png"],
    },
    {
      title: "MATLAB: Computer Vision Onramp",
      images: ["/certificates/matlab-computer-vision-onramp.jpg"],
    },
  ];

  return (
    <div className={`${poppins.className} min-h-screen ${t.bg}`} style={{ fontSize: "16px" }}>
      <div className="max-w-[1480px] w-full mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row items-start gap-5">

          {/* ==================================================
              LEFT SIDEBAR
          ================================================== */}
          <aside
            aria-label="Resume profile and contact information"
            className={`sidebar-enter-left w-full lg:w-[290px] lg:flex-shrink-0 lg:sticky lg:top-6 lg:self-start h-auto min-h-0 lg:h-[calc(100vh-3rem)] rounded-2xl p-4 sm:p-6 flex flex-col ${t.card}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="w-full mt-3 sm:mt-8">

              {/* PROFILE */}
              <div className="text-center">
                <div className="w-[128px] h-[128px] rounded-2xl overflow-hidden mx-auto mb-4 shadow-sm">
                  <img
                    src="/profile.jpg"
                    alt="Portrait of Akira Yuki M. Aganan"
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

              <div className={`w-full h-px my-5 ${t.divider}`} />

              {/* CONTACT */}
              <div className="space-y-4 text-left">
                {contact.map(({ icon: Icon, label, value, truncate }) => (
                  <div key={label} className="group flex items-center gap-3 rounded-xl -mx-2 px-2 py-1.5 transition-all duration-200 hover:translate-x-1 hover:bg-slate-500/[0.04] focus-within:bg-slate-500/[0.06]">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:shadow-sm ${t.accentBg}`}
                      aria-hidden="true"
                    >
                      <Icon size={17} className={t.accent} />
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
                ))}
              </div>

              <div className={`w-full h-px my-5 ${t.divider}`} />

              {/* SOCIAL LINKS */}
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook profile"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 ${
                    dark
                      ? "bg-[#0a0f1f] border-[#1e2a4a] hover:border-[#38BDF8]"
                      : "bg-white border-slate-200 hover:border-[#2563EB]"
                  }`}
                >
                  <FacebookLogo />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn profile"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 ${
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
              className={`flex items-start justify-center gap-2.5 text-xs leading-relaxed text-center mt-auto pt-6 ${t.label}`}
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

          {/* ==================================================
              RIGHT MAIN CONTENT
          ================================================== */}
          <main
            id="main-content"
            className={`min-w-0 flex-1 rounded-2xl p-4 sm:p-6 lg:p-7 ${t.card}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >

            {/* ==================================================
                NAVIGATION
            ================================================== */}
            <nav
              aria-label="Primary navigation"
              className={`flex items-center justify-between pb-4 border-b ${t.border}`}
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
                JAL.
              </Link>

              <div className="hidden sm:flex gap-1 text-sm">
                {[
                  { name: "About", href: "/" },
                  { name: "Resume", href: "/resume" },
                  { name: "Skills", href: "/skills" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => {
                  const active = item.name === "Resume";

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                        active
                          ? dark
                            ? "bg-white/5 text-[#38BDF8]"
                            : "bg-[#E8F0FE] text-[#2563EB]"
                          : dark
                            ? "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                            : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"
                      }`}
                     onClick={(event) => {
                  if (event.currentTarget.getAttribute("href") !== window.location.pathname) {
                    sessionStorage.setItem("akira-internal-navigation", "1");
                  }
                }}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  dark ? "Switch to light mode" : "Switch to dark mode"
                }
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  dark
                    ? "bg-[#2A2A2A] text-[#B8B8B8] hover:text-white hover:bg-[#3A3A3A]"
                    : "bg-slate-100 text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-slate-200"
                }`}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>
            {/* MOBILE NAVIGATION — horizontally scrollable on narrow screens */}
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
                      sessionStorage.setItem("akira-internal-navigation", "1");
                    }
                  }}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${dark ? "text-[#B8B8B8] hover:text-white hover:bg-white/5" : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"}`}
                >
                  About
                </Link>
                <Link
                  key="Resume"
                  href="/resume?from=nav"
                  aria-current={"page"}
                  onClick={() => {
                    if (window.location.pathname !== "/resume") {
                      sessionStorage.setItem("akira-internal-navigation", "1");
                    }
                  }}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${dark ? "bg-white/5 text-[#38BDF8]" : "bg-[#E8F0FE] text-[#2563EB]"}`}
                >
                  Resume
                </Link>
                <Link
                  key="Skills"
                  href="/skills?from=nav"
                  aria-current={undefined}
                  onClick={() => {
                    if (window.location.pathname !== "/skills") {
                      sessionStorage.setItem("akira-internal-navigation", "1");
                    }
                  }}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${dark ? "text-[#B8B8B8] hover:text-white hover:bg-white/5" : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"}`}
                >
                  Skills
                </Link>
                <Link
                  key="Portfolio"
                  href="/portfolio?from=nav"
                  aria-current={undefined}
                  onClick={() => {
                    if (window.location.pathname !== "/portfolio") {
                      sessionStorage.setItem("akira-internal-navigation", "1");
                    }
                  }}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${dark ? "text-[#B8B8B8] hover:text-white hover:bg-white/5" : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"}`}
                >
                  Portfolio
                </Link>
                <Link
                  key="Contact"
                  href="/contact?from=nav"
                  aria-current={undefined}
                  onClick={() => {
                    if (window.location.pathname !== "/contact") {
                      sessionStorage.setItem("akira-internal-navigation", "1");
                    }
                  }}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${dark ? "text-[#B8B8B8] hover:text-white hover:bg-white/5" : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"}`}
                >
                  Contact
                </Link>
            </div>

            {/* ==================================================
                RESUME CONTENT
            ================================================== */}
            <section
              aria-labelledby="journey-heading"
              className="py-6"
            >

              {/* ==================================================
                  INTRO + DOWNLOAD
              ================================================== */}
              <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.65fr] gap-5 items-stretch">

                {/* INTRO — scroll-triggered entrance animation */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex flex-col justify-center"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`text-sm tracking-[0.22em] uppercase font-semibold ${t.accent}`}
                  >
                    MY JOURNEY
                  </motion.span>

                  <motion.h2
                    id="journey-heading"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
                    className={`text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-tight mt-2 ${t.title}`}
                  >
                    Experience & education
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
                    className={`text-base leading-7 max-w-[760px] mt-3 ${t.muted}`}
                  >
                    Hands-on experience in IT support, system troubleshooting, and application development, supported by an academic foundation in Computer Engineering and professional certifications.
                  </motion.p>
                </motion.div>

              </div>

              {/* ==================================================
                  EXPERIENCE + EDUCATION
              ================================================== */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-6 mt-6 items-start">

                {/* ==================================================
                    EXPERIENCE
                ================================================== */}
                <motion.section
                  aria-labelledby="experience-heading"
                  initial={{ opacity: 0, y: 28, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
                  className={`self-start rounded-2xl border p-5 lg:p-6 ${
                    dark
                      ? "border-[#2A2A2A] bg-[#111111]"
                      : "border-[#D1E0F0] bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <BriefcaseBusiness
                      size={19}
                      className={t.accent}
                      aria-hidden="true"
                    />

                    <h3
                      id="experience-heading"
                      className={`text-[16px] font-semibold ${t.title}`}
                    >
                      Experience
                    </h3>
                  </div>

                  {/* SINGLE EXPERIENCE */}
                  <article aria-labelledby="experience-company">
                    {/* COMPANY HEADER */}
                    <header className="flex items-start gap-3">

                      {/* COMPANY LOGO */}
                      <div
                        className={`relative w-12 h-12 rounded-xl shrink-0 overflow-hidden border flex items-center justify-center ${
                          dark
                            ? "bg-white border-[#2A2A2A]"
                            : "bg-white border-slate-200"
                        }`}
                      >
                        <span
                          className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${
                            dark ? "text-[#111111]" : "text-[#1A1A2E]"
                          }`}
                          aria-hidden="true"
                        >
                          G
                        </span>

                        <img
                          src={experience.logo}
                          alt=""
                          aria-hidden="true"
                          className="relative w-full h-full object-contain p-1.5 bg-white"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>

                      {/* COMPANY INFORMATION */}
                      <div className="min-w-0">
                        <h4
                          id="experience-company"
                          className={`text-[16px] font-bold leading-snug ${t.title}`}
                        >
                          {experience.company}
                        </h4>

                        <p className={`text-sm mt-0.5 ${t.muted}`}>
                          {experience.location}
                        </p>
                      </div>
                    </header>

                    {/* JOB TITLE + DATE */}
                    <div className="mt-4">
                      <h5
                        className={`text-sm font-semibold tracking-[0.12em] uppercase ${t.accent}`}
                      >
                        {experience.title}
                      </h5>

                      <time
                        dateTime="2025-06/2025-09"
                        className={`block text-sm mt-1 ${dark ? "text-[#B8B8B8]" : "text-[#52657D]"}`}
                      >
                        {experience.date}
                      </time>
                    </div>

                    <div className={`w-full h-px my-4 ${t.divider}`} />

                    {/* EXPERIENCE DESCRIPTION */}
                    <p
                      className={`text-base leading-7 ${t.muted}`}
                    >
                      {experience.description}
                    </p>
                  </article>
                </motion.section>

                {/* ==================================================
                    EDUCATION
                ================================================== */}
                <motion.section
                  aria-labelledby="education-heading"
                  initial={{ opacity: 0, y: 28, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
                  className={`rounded-2xl border p-5 lg:p-6 ${
                    dark
                      ? "border-[#2A2A2A] bg-[#111111]"
                      : "border-[#D1E0F0] bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <GraduationCap
                      size={20}
                      className={t.accent}
                      aria-hidden="true"
                    />

                    <h3
                      id="education-heading"
                      className={`text-[16px] font-semibold ${t.title}`}
                    >
                      Education
                    </h3>
                  </div>

                  <div>
                    <div className={`text-xs font-semibold ${t.accent}`}>
                      {education.date}
                    </div>

                    <h4
                      className={`text-base sm:text-lg font-bold leading-relaxed mt-2 ${t.title}`}
                    >
                      {education.degree}
                    </h4>

                    <p className={`text-sm mt-2 ${t.muted}`}>
                      {education.school}
                    </p>

                    <div className={`w-full h-px my-4 ${t.divider}`} />

                    {/* RESUME DOWNLOAD — replaces the unused achievement space */}
                    <div
                      className={`group relative mt-4 overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                        dark
                          ? "border-[#2A2A2A] bg-[#0C0C0C] hover:border-sky-400/40 hover:shadow-[0_8px_30px_rgba(56,189,248,0.08)]"
                          : "border-blue-100 bg-white hover:border-blue-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
                      }`}
                    >
                      <div
                        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${
                          dark ? "bg-sky-400/10" : "bg-blue-400/10"
                        }`}
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            dark
                              ? "bg-sky-400/10 text-sky-300"
                              : "bg-blue-100 text-blue-700"
                          }`}
                          aria-hidden="true"
                        >
                          <FileText size={20} strokeWidth={1.8} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className={`text-sm font-bold ${t.title}`}>
                            My Resume
                          </h4>
                          <p className={`mt-1 text-sm leading-6 ${t.muted}`}>
                            View my experience, skills, and education in one place.
                          </p>
                          <a
                            href="/developer-resume.pdf"
                            download
                            aria-label="Download resume PDF"
                            className={`mt-3 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 ${
                              dark
                                ? "bg-[#00A3F5] text-black"
                                : "bg-[#2563EB] text-white"
                            }`}
                          >
                            <Download size={15} strokeWidth={2.2} aria-hidden="true" />
                            <span>Download Resume</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </div>

              {/* ==================================================
                  CERTIFICATIONS
              ================================================== */}
              <section
                aria-labelledby="certifications-heading"
                className={`rounded-2xl border p-5 lg:p-6 mt-6 ${
                  dark
                    ? "border-[#2A2A2A] bg-[#111111]"
                    : "border-[#D1E0F0] bg-[#F8FAFC]"
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award
                    size={20}
                    className={t.accent}
                    aria-hidden="true"
                  />

                  <h3
                    id="certifications-heading"
                    className={`text-[16px] font-semibold ${t.title}`}
                  >
                    Certifications
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
                  {certifications.map((cert, index) => (
                    <motion.button
                      key={cert.title}
                      type="button"
                      onClick={() => setSelectedCertificate({ title: cert.title, images: cert.images, activeImage: 0 })}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.99 }}
                      aria-label={`View certificate: ${cert.title}`}
                      className={`group overflow-hidden rounded-2xl border text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                        dark
                          ? "border-[#2A2A2A] bg-[#0c0c0c] hover:border-sky-400/50 hover:shadow-[0_12px_35px_rgba(56,189,248,0.08)] focus-visible:ring-offset-[#111111]"
                          : "border-slate-200 bg-white hover:border-blue-400 hover:shadow-[0_12px_35px_rgba(37,99,235,0.10)] focus-visible:ring-offset-white"
                      }`}
                    >
                      <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden p-3 sm:p-4 ${dark ? "bg-[#171717]" : "bg-[#F1F5F9]"}`}>
                        <img
                          src={cert.images[0]}
                          alt={`${cert.title} certificate preview`}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                        />
                        {cert.images.length > 1 && (
                          <span className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                            2 certificate images
                          </span>
                        )}
                      </div>
                      <div className="flex min-h-[66px] items-center px-4 py-3.5">
                        <h4 className={`text-sm font-semibold leading-6 ${t.title}`}>
                          {cert.title}
                        </h4>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            </section>

            {/* CERTIFICATE LIGHTBOX */}
            <AnimatePresence>
              {selectedCertificate && (
                <motion.div
                  className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
                  role="dialog"
                  aria-modal="true"
                  aria-label={`Certificate preview: ${selectedCertificate.title}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedCertificate(null)}
                >
                  <motion.div
                    className={`relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border shadow-2xl ${
                      dark
                        ? "border-white/15 bg-[#101010]"
                        : "border-white/50 bg-white"
                    }`}
                    initial={{ opacity: 0, scale: 0.94, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 10 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
                      <h3 className={`min-w-0 text-sm font-semibold sm:text-base ${t.title}`}>
                        {selectedCertificate.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => setSelectedCertificate(null)}
                        aria-label="Close certificate preview"
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                          dark
                            ? "text-white/75 hover:bg-white/10 hover:text-white"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-3 pt-0 sm:p-5 sm:pt-0">
                      <div className="relative flex h-full min-h-0 w-full items-center justify-center">
                        <img
                          src={selectedCertificate.images[selectedCertificate.activeImage]}
                          alt={`${selectedCertificate.title} image ${selectedCertificate.activeImage + 1}`}
                          className="max-h-[calc(92vh-125px)] w-auto max-w-full rounded-lg object-contain"
                        />
                        {selectedCertificate.images.length > 1 && (
                          <>
                            <button
                              type="button"
                              aria-label="Previous certificate image"
                              onClick={() => setSelectedCertificate((current) => !current ? current : { ...current, activeImage: (current.activeImage - 1 + current.images.length) % current.images.length })}
                              className="absolute left-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:left-3"
                            >
                              <span aria-hidden="true" className="text-2xl leading-none">‹</span>
                            </button>
                            <button
                              type="button"
                              aria-label="Next certificate image"
                              onClick={() => setSelectedCertificate((current) => !current ? current : { ...current, activeImage: (current.activeImage + 1) % current.images.length })}
                              className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:right-3"
                            >
                              <span aria-hidden="true" className="text-2xl leading-none">›</span>
                            </button>
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                              {selectedCertificate.activeImage + 1} / {selectedCertificate.images.length}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ==================================================
                FOOTER
            ================================================== */}
            <div
              className={`pt-4 mt-6 text-center text-xs border-t ${
                dark
                  ? "text-[#A3A3A3] border-[#2A2A2A]"
                  : "text-[#52657D] border-[#D1E0F0]"
              }`}
            >
              © Akira Yuki Aganan. All rights reserved.
            </div>
          </main>
        </div>
      </div>
      
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