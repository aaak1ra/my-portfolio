"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Moon,
  Sun,
  ArrowUpRight,
  Search,
  Hammer,
  RefreshCw,
} from "lucide-react";
import { useTheme } from "./context/ThemeContext";
export default function Home() {
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
  const [phTime, setPhTime] = useState("");
  useEffect(() => {
    const updatePhilippineTime = () => {
      const time = new Intl.DateTimeFormat("en-PH", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setPhTime(`${time} PHT`);
    };
    updatePhilippineTime();
    const interval = setInterval(updatePhilippineTime, 1000);
    return () => clearInterval(interval);
  }, []);
  const dark = theme === "dark";
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
    label: dark ? "text-[#666666]" : "text-slate-500",
    title: dark ? "text-white" : "text-[#1A1A2E]",
    divider: dark ? "bg-[#2A2A2A]" : "bg-[#D1E0F0]",
  };
  const FacebookLogo = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
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
  const workApproach = [
    {
      number: "",
      icon: Search,
      title: "Understand",
      description:
        "I start by understanding the problem and what the user actually needs.",
    },
    {
      number: "",
      icon: Hammer,
      title: "Build",
      description: "I turn ideas into practical, reliable solutions.",
    },
    {
      number: "",
      icon: RefreshCw,
      title: "Improve",
      description:
        "I test, refine, document, and keep looking for better ways to solve it.",
    },
  ];
  const statusPillClass = `inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default ${
    dark
      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
      : "bg-emerald-50 text-emerald-600 border border-emerald-200/60"
  }`;
  return (
    <div className={`min-h-screen ${t.bg}`}>
      <div className="max-w-[1480px] w-full mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row items-start gap-5">
          {/* LEFT SIDEBAR */}
          <aside
            className={`page-enter page-enter-left w-full lg:w-[290px] lg:flex-shrink-0 lg:sticky lg:top-6 lg:self-start h-auto min-h-0 lg:h-[calc(100vh-3rem)] rounded-2xl p-4 sm:p-6 flex flex-col ${t.card}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="w-full mt-3 sm:mt-8">
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
              <div className="space-y-4 text-left">
                {contact.map(({ icon: Icon, label, value, truncate }) => (
                  <div key={label} className={`group flex items-center gap-3 rounded-xl -mx-2 px-2 py-1.5 transition-all duration-200 hover:translate-x-1 hover:bg-slate-500/[0.04] focus-within:bg-slate-500/[0.06]`}>
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
                ))}
              </div>
              <div className={`w-full h-px my-5 ${t.divider}`} />
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
          {/* MAIN CONTENT */}
          <main className={`page-enter page-enter-right min-w-0 flex-1 rounded-2xl p-4 sm:p-6 lg:p-7 ${t.card}`}>
            {/* NAVIGATION */}
            <nav
              className={`page-stagger flex items-center justify-between pb-4 border-b ${t.border}`}
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
                
              </Link>
              <div className="hidden sm:flex gap-1 text-sm">
                {[
                  { name: "About", href: "/" },
                  { name: "Resume", href: "/resume?from=nav" },
                  { name: "Skills", href: "/skills?from=nav" },
                  { name: "Portfolio", href: "/portfolio?from=nav" },
                  { name: "Contact", href: "/contact?from=nav" },
                ].map((item) => {
                  const active = item.name === "About";
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
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:rotate-12 hover:scale-105 ${
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
                  aria-current={"page"}
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      sessionStorage.setItem("akira-internal-navigation", "1");
                    }
                  }}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${dark ? "bg-white/5 text-[#38BDF8]" : "bg-[#E8F0FE] text-[#2563EB]"}`}
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
            {/* CENTERED HERO */}
            <section className="min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] flex flex-col items-center justify-center text-center px-2 sm:px-6 py-8 lg:py-10">
              {/* STATUS PILLS — REPLACES THE OLD ROLE LABEL */}
              <div className="animate-pop flex flex-wrap items-center justify-center gap-2 mb-6 max-w-3xl">
                <div className={statusPillClass}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Open to work
                </div>
                <div className={statusPillClass}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  BULACAN • PHILIPPINES
                </div>
                <div className={statusPillClass}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {phTime || "00:00:00 PHT"}
                </div>
              </div>
              <h2
                className={`animate-rise delay-100 text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-semibold leading-[1.02] tracking-tight max-w-5xl ${t.title}`}
              >
                Driven to build.
                <br />
                Ready to solve.
              </h2>
              <p
                className={`animate-rise delay-200 text-base sm:text-lg leading-8 max-w-2xl mt-4 ${t.muted}`}
              >
                I combine an interest in software engineering with hands-on IT
                support experience. Through academic projects and my OJT,
                I've gained practical exposure to application development,
                database management, system maintenance, and troubleshooting.
                I'm ready to apply what I've learned, adapt to new technologies,
                and contribute to real-world projects.
              </p>
              {/* ACTION BUTTONS */}
              <div className="animate-rise delay-300 flex flex-wrap justify-center gap-3 mt-5">
                <Link
                  href="/portfolio"
                  onClick={(event) => {
                    event.preventDefault();
                    window.location.assign("/portfolio");
                  }}
                  className={`px-7 py-3 rounded-full font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 flex items-center gap-2 ${
                    dark
                      ? "bg-[#00a3f5] text-black hover:bg-[#22D3EE]"
                      : "bg-[#00a3f5] text-white hover:bg-sky-500"
                  }`}
                >
                  View my work
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  onClick={(event) => {
                    event.preventDefault();
                    window.location.assign("/contact");
                  }}
                  className={`px-7 py-3 rounded-full font-medium text-sm border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    dark
                      ? "border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10"
                      : "border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10"
                  }`}
                >
                  Contact me
                </Link>
              </div>
            </section>
            {/* HOW I WORK */}
            <section className={`animate-rise delay-200 pt-6 mt-1 border-t ${t.border}`}>
              <div className="mb-5">
                <span
                  className={`text-xs tracking-widest uppercase font-medium ${t.accent}`}
                >
                  How I Work
                </span>
                <h2 className={`text-2xl lg:text-3xl font-bold mt-2 ${t.title}`}>
                  Simple process. Better results.
                </h2>
                <p className={`text-sm leading-relaxed mt-3 max-w-2xl ${t.muted}`}>
                  I focus on understanding the problem, creating a practical
                  solution, and improving it through testing and feedback.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {workApproach.map(
                  ({ number, icon: Icon, title, description }) => (
                    <article
                      key={number}
                      className={`work-card rounded-xl border p-5 lg:p-6 transition-transform duration-200 hover:-translate-y-1 ${
                        dark
                          ? "bg-[#111111] border-[#2A2A2A] hover:border-[#38BDF8]/50"
                          : "bg-[#F0F5FA] border-[#D1E0F0] hover:border-[#2563EB]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center ${t.accentBg}`}
                        >
                          <Icon
                            size={21}
                            className={t.accent}
                            aria-hidden="true"
                          />
                        </div>
                        <span
                          className={`text-sm font-semibold tracking-wider ${t.accent}`}
                        >
                          {number}
                        </span>
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${t.title}`}>
                        {title}
                      </h3>
                      <p className={`text-sm leading-7 ${t.muted}`}>
                        {description}
                      </p>
                    </article>
                  )
                )}
              </div>
            </section>
            {/* FOOTER */}
            <footer
              className={`animate-rise delay-300 pt-5 mt-7 text-center text-xs border-t ${
                dark
                  ? "text-[#666666] border-[#2A2A2A]"
                  : "text-[#7A8AA0] border-[#D1E0F0]"
              }`}
            >
               © Akira Yuki Aganan. All rights reserved.
            </footer>
          </main>
        </div>
      </div>
      <style jsx global>{`
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes aboutPop {
          0% { opacity: 0; transform: translateY(10px) scale(0.96); }
          70% { opacity: 1; transform: translateY(-2px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes aboutSlideLeft {
          from { opacity: 0; transform: translateX(-18px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes aboutSlideRight {
          from { opacity: 0; transform: translateX(18px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .page-enter-left { animation: aboutSlideLeft 650ms cubic-bezier(.2,.7,.2,1) both; }
        .page-enter-right { animation: aboutSlideRight 650ms cubic-bezier(.2,.7,.2,1) both; }
        .animate-rise { animation: aboutFadeUp 650ms cubic-bezier(.2,.7,.2,1) both; }
        .animate-pop { animation: aboutPop 650ms cubic-bezier(.2,.7,.2,1) both; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .work-card { animation: aboutFadeUp 700ms cubic-bezier(.2,.7,.2,1) both; }
        .work-card:nth-child(1) { animation-delay: 180ms; }
        .work-card:nth-child(2) { animation-delay: 300ms; }
        .work-card:nth-child(3) { animation-delay: 420ms; }
        @media (prefers-reduced-motion: reduce) {
          .page-enter-left, .page-enter-right, .animate-rise, .animate-pop, .work-card {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
