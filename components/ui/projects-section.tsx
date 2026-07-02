'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { GlowCard } from '@/components/ui/spotlight-card';

type Project = {
  name: string;
  category: string;
  categoryColor: string;
  shortDesc: string;
  architecture: string;
  fullDesc: string;
  stack: string[];
  github: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    name: 'Insight-News',
    category: 'AI APPS',
    categoryColor: '#f97316',
    shortDesc:
      'AI-powered news aggregator for scraping, summarizing, and visualizing personalized news with real-time category insights.',
    architecture:
      'RSS Feed → Cheerio Scraper → Gemini / OpenAI Summarizer → MongoDB → React Dashboard',
    fullDesc:
      'Turns RSS feeds into categorized summaries using Cheerio, Gemini / OpenAI processing, MongoDB storage, and Recharts analytics. The dashboard keeps articles easier to scan with smart filtering and visual context.',
    stack: ['React', 'Vite', 'TailwindCSS', 'Express', 'MongoDB', 'Gemini AI', 'OpenAI', 'Recharts', 'GSAP', 'Framer Motion'],
    github: 'https://github.com/sk200005/Insight-News',
    liveUrl: 'https://insight-news-eight.vercel.app/',
  },
  {
    name: 'KrishiShield AI',
    category: 'AI SYSTEMS',
    categoryColor: '#f97316',
    shortDesc:
      'Crop risk and market advisory platform built around weather signals, price intelligence, and offline access.',
    architecture:
      'Weather API → Risk ML Model → FastAPI Backend → React Frontend (IndexedDB offline cache)',
    fullDesc:
      'Combines ML predictions, FastAPI services, IndexedDB offline caching, and multilingual UI support. It is designed for rural workflows where connectivity and quick advisory access matter.',
    stack: ['Python', 'FastAPI', 'Streamlit', 'React', 'Vite', 'IndexedDB', 'Docker'],
    github: 'https://github.com/atharv-lalage/KrishiShield-AI',
  },
  {
    name: 'YouTube Backend',
    category: 'BACKEND',
    categoryColor: '#3b82f6',
    shortDesc:
      'REST API backend for video upload, authentication, subscriptions, media storage, and user activity flows.',
    architecture:
      'Client → Express REST API → JWT Middleware → Cloudinary (media) → MongoDB Aggregation',
    fullDesc:
      'Uses Express, JWT, bcrypt, Cloudinary, Multer, and Mongoose aggregation pipelines in a clean MVC structure. The API covers uploads, comments, likes, subscriptions, and watch history.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Cloudinary', 'Multer'],
    github: 'https://github.com/sk200005/Youtube',
  },
  {
    name: 'Stock Prediction Support',
    category: 'ML SYSTEMS',
    categoryColor: '#ef4444',
    shortDesc:
      'AI stock assistant that combines market data ingestion, LLM-backed analysis, and chart-based review.',
    architecture:
      'Market Data Ingestion → LLM Analysis (Gemini / OpenAI) → MongoDB → React Analytics Dashboard',
    fullDesc:
      'Grounds Gemini and OpenAI insights in financial market data before presenting trends through React and Recharts. The interface helps compare AI-generated context with historical movement.',
    stack: ['React', 'Vite', 'TailwindCSS', 'Express', 'MongoDB', 'Gemini AI', 'OpenAI', 'Recharts', 'Axios'],
    github: 'https://github.com/sk200005/Stock-Prediction-Support',
  },
  {
    name: 'GradeX',
    category: 'EDTECH',
    categoryColor: '#10b981',
    shortDesc:
      'Student result analytics system for marks, attendance, reports, exports, and role-based access.',
    architecture:
      'CSV Import → MongoDB → Express API → EJS Server-Side Rendering → PDF / Excel Export',
    fullDesc:
      'Supports admin and student workflows with CSV imports, PDF reports, Excel exports, and Chart.js dashboards. Session-based authentication keeps academic records organized and accessible.',
    stack: ['Node.js', 'Express', 'MongoDB', 'EJS', 'bcryptjs', 'Chart.js', 'PDFKit', 'XLSX', 'Multer'],
    github: 'https://github.com/sk200005/GradeX',
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function getGlowColor(categoryColor: string) {
  switch (categoryColor) {
    case '#3b82f6':
      return 'blue';
    case '#10b981':
      return 'green';
    case '#ef4444':
      return 'red';
    default:
      return 'orange';
  }
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative flex w-full flex-col items-center bg-[#0a0a0a] px-5 py-12 sm:px-6 sm:py-20 md:py-28"
    >
      {/* Spacer — responsive */}
      <div className="h-8 sm:h-16 md:h-24" />
      {/* ── Header ── */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="mx-auto mb-20 max-w-2xl text-center"
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          What I&apos;ve Built
        </h2>
        <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
          
        </p>
        {/* Spacer — responsive */}
        <div className="h-6 sm:h-12 md:h-20" />
        {/* Amber underline accent */}
        <div className="mx-auto mt-6 h-[3px] w-12 rounded-full bg-amber-500" />
      </motion.div>

      {/* ── Cards grid ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="mx-auto flex w-full max-w-[1320px] flex-wrap items-stretch justify-center gap-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-[400px] flex-none sm:w-[400px]"
    >
      <GlowCard
        customSize
        glowColor={getGlowColor(project.categoryColor)}
        className="flex h-auto min-h-[600px] w-full flex-col rounded-2xl bg-zinc-950/90 p-5 text-center shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:min-h-[680px]"
      >
        <div className="flex flex-1 flex-col items-center gap-7 px-6 py-9 sm:px-8">
          {/* Header */}
          <div className="space-y-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: project.categoryColor }}
            >
              {project.category}
            </p>
            <h3 className="text-2xl font-bold leading-tight text-white">
              {project.name}
            </h3>
          </div>

          {/* Summary */}
          <p className="min-h-[88px] text-sm leading-relaxed text-zinc-300">
            {project.shortDesc}
          </p>

          {/* Architecture */}
          <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/45 px-6 py-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Architecture
            </p>
            <p className="text-sm leading-relaxed text-zinc-300">
              {project.architecture}
            </p>
          </div>

          {/* Full description */}
          <p className="min-h-[132px] border-y border-zinc-800 px-5 py-6 text-sm leading-relaxed text-zinc-500">
            {project.fullDesc}
          </p>

          {/* Tech stack tags */}
          <div className="w-full space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Stack
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-600 bg-zinc-900 px-3.5 py-2 text-sm font-semibold text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex w-full flex-col items-center gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 py-2.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-amber-400/70 bg-amber-500 px-4 py-2.5 text-sm font-bold text-zinc-950 shadow-[0_0_22px_rgba(245,158,11,0.22)] transition-all duration-200 hover:border-amber-300 hover:bg-amber-400"
              >
                <FiExternalLink className="h-4 w-4" />
                Live URL
              </a>
            )}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
