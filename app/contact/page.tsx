"use client";

import { FormEvent, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  User,
  ArrowUpRight,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ContactPage() {
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



  const dark = theme === "dark";

  const t = {
    bg: dark
      ? "bg-[#0A0A0A] text-[#E8E8E8]"
      : "bg-[#f3f5f8] text-[#1A1A2E]",

    card: dark
      ? "bg-[#141414] border border-[#2A2A2A]"
      : "bg-white border border-slate-200/60 shadow-sm",

    accent: dark ? "text-[#38BDF8]" : "text-[#2563EB]",

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

  const FacebookLogo = () => (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
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
      className="w-5 h-5"
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:akiraaganan0@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`min-h-screen ${t.bg}`}>
      <div className="max-w-[1480px] w-full mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row items-start gap-5">

          {/* =====================================================
              LEFT SIDEBAR
          ===================================================== */}

          <aside
            className={`sidebar-enter-left w-full lg:w-[290px] lg:flex-shrink-0 lg:sticky lg:top-6 lg:self-start h-auto min-h-0 lg:h-[calc(100vh-3rem)] rounded-2xl p-4 sm:p-6 flex flex-col ${t.card}`}
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
            aria-label="Profile information"
          >
            <div className="w-full mt-3 sm:mt-8">

              {/* PROFILE */}
              <div className="text-center">
                <div className="w-[128px] h-[128px] rounded-2xl overflow-hidden mx-auto mb-4 shadow-sm">
                  <img
                    src="/profile.jpg"
                    alt="Akira Yuki M. Aganan"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
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

              <div className={`w-full h-px my-5 ${t.divider}`} />

              {/* CONTACT INFORMATION */}
              <div className="space-y-4 text-left">

                <div className="group flex items-center gap-3 rounded-xl -mx-2 px-2 py-1.5 transition-all duration-200 hover:translate-x-1 hover:bg-slate-500/[0.04] focus-within:bg-slate-500/[0.06]">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:shadow-sm ${t.accentBg}`}
                  >
                    <Mail
                      size={17}
                      className={t.accent}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-[10px] font-medium uppercase tracking-wider mb-0.5 ${t.label}`}
                    >
                      EMAIL
                    </div>

                    <div
                      className={`text-[12px] font-bold leading-relaxed truncate ${
                        dark ? "text-white" : "text-black"
                      }`}
                    >
                      akiraaganan0@gmail.com
                    </div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 rounded-xl -mx-2 px-2 py-1.5 transition-all duration-200 hover:translate-x-1 hover:bg-slate-500/[0.04] focus-within:bg-slate-500/[0.06]">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:shadow-sm ${t.accentBg}`}
                  >
                    <Phone
                      size={17}
                      className={t.accent}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-[10px] font-medium uppercase tracking-wider mb-0.5 ${t.label}`}
                    >
                      PHONE
                    </div>

                    <div
                      className={`text-[12px] font-bold leading-relaxed ${
                        dark ? "text-white" : "text-black"
                      }`}
                    >
                      +63 908 362 0938
                    </div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 rounded-xl -mx-2 px-2 py-1.5 transition-all duration-200 hover:translate-x-1 hover:bg-slate-500/[0.04] focus-within:bg-slate-500/[0.06]">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:shadow-sm ${t.accentBg}`}
                  >
                    <MapPin
                      size={17}
                      className={t.accent}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-[10px] font-medium uppercase tracking-wider mb-0.5 ${t.label}`}
                    >
                      LOCATION
                    </div>

                    <div
                      className={`text-[12px] font-bold leading-relaxed ${
                        dark ? "text-white" : "text-black"
                      }`}
                    >
                      Bulacan, Philippines
                    </div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 rounded-xl -mx-2 px-2 py-1.5 transition-all duration-200 hover:translate-x-1 hover:bg-slate-500/[0.04] focus-within:bg-slate-500/[0.06]">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:shadow-sm ${t.accentBg}`}
                  >
                    <CheckCircle
                      size={17}
                      className={t.accent}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-[10px] font-medium uppercase tracking-wider mb-0.5 ${t.label}`}
                    >
                      AVAILABILITY
                    </div>

                    <div
                      className={`text-[12px] font-bold leading-relaxed ${
                        dark ? "text-white" : "text-black"
                      }`}
                    >
                      Open to opportunities
                    </div>
                  </div>
                </div>

              </div>

              <div className={`w-full h-px my-5 ${t.divider}`} />

              {/* SOCIAL LINKS */}
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

            {/* AVAILABILITY */}
            <div
              className={`flex items-start justify-center gap-2.5 text-[11px] leading-relaxed text-center mt-auto pt-6 ${t.label}`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />

              <span>
                Available for Software Engineer, IT support, and Data Analyst roles
              </span>
            </div>
          </aside>

          {/* =====================================================
              RIGHT MAIN
          ===================================================== */}

          <main
            className={`min-w-0 flex-1 rounded-2xl p-4 sm:p-6 lg:p-7 ${t.card}`}
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >

            {/* NAVIGATION */}
            <nav
              className={`flex items-center justify-between pb-4 border-b ${t.border}`}
              aria-label="Main navigation"
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
                  {
                    name: "About",
                    href: "/",
                  },
                  {
                    name: "Resume",
                    href: "/resume",
                  },
                  {
                    name: "Skills",
                    href: "/skills",
                  },
                  {
                    name: "Portfolio",
                    href: "/portfolio",
                  },
                  {
                    name: "Contact",
                    href: "/contact",
                  },
                ].map((item) => {
                  const active = item.name === "Contact";

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={
                        active ? "page" : undefined
                      }
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
                  aria-current={undefined}
                  onClick={() => {
                    if (window.location.pathname !== "/resume") {
                      sessionStorage.setItem("akira-internal-navigation", "1");
                    }
                  }}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${dark ? "text-[#B8B8B8] hover:text-white hover:bg-white/5" : "text-[#4A5A7A] hover:text-[#1A1A2E] hover:bg-[#F0F5FA]"}`}
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
                  aria-current={"page"}
                  onClick={() => {
                    if (window.location.pathname !== "/contact") {
                      sessionStorage.setItem("akira-internal-navigation", "1");
                    }
                  }}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${dark ? "bg-white/5 text-[#38BDF8]" : "bg-[#E8F0FE] text-[#2563EB]"}`}
                >
                  Contact
                </Link>
            </div>

            {/* =================================================
                CONTACT CONTENT
            ================================================= */}

            <motion.section
              aria-labelledby="contact-heading"
              className="py-7"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >

              {/* HEADER */}
              <div>
                <span
                  className={`text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold ${t.accent}`}
                >
                  GET IN TOUCH
                </span>

                <h2
                  id="contact-heading"
                  className={`text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-tight mt-2 ${t.title}`}
                >
                  Let's work together
                </h2>

                <p
                  className={`text-base leading-7 max-w-[820px] mt-3 ${t.muted}`}
                >
                  I'm currently open to Software Engineer,
                  IT Support, Data Analyst, Virtual Assistant, and
                  remote digital support opportunities.
                </p>
              </div>

              {/* CONTACT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-7">

                {/* EMAIL */}
                <a
                  href="mailto:akiraaganan0@gmail.com"
                  className={`group rounded-2xl border p-5 transition-all duration-300 motion-safe:transform-gpu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                    dark
                      ? "border-[#2A2A2A] bg-[#111111] hover:border-[#38BDF8]/70 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(56,189,248,0.08)]"
                      : "border-[#D1E0F0] bg-[#F8FAFC] hover:border-[#2563EB]/60 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${t.accentBg}`}
                    >
                      <Mail
                        size={19}
                        className={t.accent}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-sm ${t.muted}`}
                      >
                        Email me
                      </div>

                      <div
                        className={`text-sm sm:text-base font-bold mt-1 break-words ${
                          dark ? "text-white" : "text-black"
                        }`}
                      >
                        akiraaganan0@gmail.com
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className={`${t.muted} group-hover:${t.accent}`}
                      aria-hidden="true"
                    />

                  </div>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+639083620938"
                  className={`group rounded-2xl border p-5 transition-all duration-300 motion-safe:transform-gpu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                    dark
                      ? "border-[#2A2A2A] bg-[#111111] hover:border-[#38BDF8]/70 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(56,189,248,0.08)]"
                      : "border-[#D1E0F0] bg-[#F8FAFC] hover:border-[#2563EB]/60 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${t.accentBg}`}
                    >
                      <Phone
                        size={19}
                        className={t.accent}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-sm ${t.muted}`}
                      >
                        Call or message
                      </div>

                      <div
                        className={`text-sm sm:text-base font-bold mt-1 ${
                          dark ? "text-white" : "text-black"
                        }`}
                      >
                        +63 908 362 0938
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className={t.muted}
                      aria-hidden="true"
                    />

                  </div>
                </a>

                {/* LOCATION */}
                <div
                  className={`rounded-2xl border p-5 ${
                    dark
                      ? "border-[#2A2A2A] bg-[#111111]"
                      : "border-[#D1E0F0] bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${t.accentBg}`}
                    >
                      <MapPin
                        size={19}
                        className={t.accent}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-sm ${t.muted}`}
                      >
                        Based in
                      </div>

                      <div
                        className={`text-sm sm:text-base font-bold mt-1 ${
                          dark ? "text-white" : "text-black"
                        }`}
                      >
                        Bulacan, Philippines
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* SOCIAL LINKS */}
              <div className="flex flex-wrap gap-2 mt-3">

                <a
                  href="#"
                  aria-label="Facebook"
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
                    dark
                      ? "border-[#2A2A2A] bg-[#111111] text-[#B8B8B8] hover:border-[#38BDF8]"
                      : "border-[#D1E0F0] bg-[#F8FAFC] text-[#4A5A7A] hover:border-[#2563EB]"
                  }`}
                >
                  <span className="opacity-70">
                    <FacebookLogo />
                  </span>

                  Facebook

                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
                    dark
                      ? "border-[#2A2A2A] bg-[#111111] text-[#B8B8B8] hover:border-[#38BDF8]"
                      : "border-[#D1E0F0] bg-[#F8FAFC] text-[#4A5A7A] hover:border-[#2563EB]"
                  }`}
                >
                  <span className="opacity-70">
                    <LinkedInLogo />
                  </span>

                  LinkedIn

                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                  />
                </a>

              </div>

              {/* =================================================
                  CONTACT FORM
              ================================================= */}

              <div
                className={`rounded-2xl border p-6 mt-4 ${
                  dark
                    ? "border-[#2A2A2A] bg-[#111111]"
                    : "border-[#D1E0F0] bg-[#F8FAFC]"
                }`}
              >

                {/* FORM HEADER */}
                <div className="flex items-start gap-3 mb-6">

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${t.accentBg}`}
                  >
                    <User
                      size={19}
                      className={t.accent}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3
                      className={`text-lg font-semibold ${t.title}`}
                    >
                      Let's connect
                    </h3>

                    <p
                      className={`text-sm leading-6 mt-1 ${t.muted}`}
                    >
                      Have a role, project, or opportunity in
                      mind? Send me a message and I'll get back
                      to you as soon as I can.
                    </p>
                  </div>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* NAME + EMAIL */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-semibold mb-2 ${t.title}`}
                      >
                        Full name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={`w-full rounded-xl border px-4 py-3 text-base outline-none transition-all focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                          dark
                            ? "bg-[#151515] border-[#2A2A2A] text-white placeholder:text-[#666666] focus:border-[#38BDF8]"
                            : "bg-[#EEF4FB] border-[#C8D8EA] text-[#1A1A2E] placeholder:text-[#7A8AA0] focus:border-[#2563EB]"
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-semibold mb-2 ${t.title}`}
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={`w-full rounded-xl border px-4 py-3 text-base outline-none transition-all focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                          dark
                            ? "bg-[#151515] border-[#2A2A2A] text-white placeholder:text-[#666666] focus:border-[#38BDF8]"
                            : "bg-[#EEF4FB] border-[#C8D8EA] text-[#1A1A2E] placeholder:text-[#7A8AA0] focus:border-[#2563EB]"
                        }`}
                      />
                    </div>

                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-semibold mb-2 ${t.title}`}
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about the role, project, or opportunity."
                      className={`w-full resize-y rounded-xl border px-4 py-3 text-base leading-7 outline-none transition-all focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                        dark
                          ? "bg-[#151515] border-[#2A2A2A] text-white placeholder:text-[#666666] focus:border-[#38BDF8]"
                          : "bg-[#EEF4FB] border-[#C8D8EA] text-[#1A1A2E] placeholder:text-[#7A8AA0] focus:border-[#2563EB]"
                      }`}
                    />
                  </div>

                  {/* SEND BUTTON */}
                  <button
                    type="submit"
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                      dark
                        ? "bg-[#00A3F5] text-black hover:bg-[#22D3EE]"
                        : "bg-[#00A3F5] text-white hover:bg-sky-500"
                    }`}
                  >
                    Send message

                    <ArrowUpRight
                      size={15}
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                  </button>

                </form>
              </div>

            </motion.section>

            {/* FOOTER */}
            <div
              className={`pt-4 mt-6 text-center text-sm border-t ${
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