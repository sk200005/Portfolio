'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Mail, Code2 } from 'lucide-react';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const socials = [
  { icon: FaGithub,     href: 'https://github.com/sk200005',   label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/swayam-korde-7b76bb285/',  label: 'LinkedIn' },
  { icon: FiMail,       href: 'mailto:swayamkorde2005@gmail.com',  label: 'Email' },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export function HeroBlock() {
  return (
    <section
      id="hero"
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Three.js floating-dots background */}
      <DottedSurface />

      {/* Soft radial glow at dot-convergence horizon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full rounded-full z-[1]"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 55%, rgba(255,255,255,0.09), transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Edge vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0a0a0a 100%)',
        }}
      />

      {/* ── Hero content — distributed top and bottom ── */}
      <div className="relative z-[2] mx-auto w-full max-w-3xl px-6 text-center">
        <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.1 }}
  className="flex min-h-[100svh] flex-col items-center justify-center gap-12 sm:gap-20 md:gap-28"
>
          {/* ── Top Section (Upper-middle) ── */}
          <div className="flex flex-col items-center justify-center">
            {/* ── Avatar ── */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 160, damping: 14 }}
                className="relative"
              >
                <div
                  className="absolute -inset-3 rounded-full blur-2xl opacity-25"
                  style={{ background: 'radial-gradient(circle, #a1a1aa, transparent)' }}
                />
                <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-zinc-500 via-zinc-700 to-zinc-900 opacity-80" />
                <div className="relative h-36 w-36 rounded-full overflow-hidden border-2 border-zinc-700 shadow-2xl">
                  <Image
                    src="/avatar.png"
                    alt="Swayam — profile photo"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="144px"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* ── Availability badge ── */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-5 py-2 text-xs font-medium uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
                <Code2 className="h-3 w-3" />
                Available for opportunities
              </span>
            </motion.div>

            {/* ── Name ── */}
            <motion.h1
              variants={itemVariants}
              className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl"
            >
              Hi, I&apos;m{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #e4e4e7 0%, #a1a1aa 100%)' }}
              >
                Swayam
              </span>
            </motion.h1>
            <br />
            {/* ── Role + Bio grouped ── */}
            <motion.div variants={itemVariants} className="mb-16 flex flex-col items-center gap-4 sm:mb-24 md:mb-32">
              <p className="text-lg font-semibold tracking-wide text-zinc-400 sm:text-xl md:text-2xl">
                Full-Stack Developer • Generative AI 
              </p>
              <p className="mx-auto max-w-2xl text-base font-extralight italic leading-7 tracking-wide text-zinc-400 sm:text-lg sm:leading-9 md:text-xl">
  Designing and engineering modern web experiences where aesthetics meet
  performance.
</p>
      </motion.div>
          </div>

          {/* ── Bottom Section (CTA + Socials) ── */}
          <div className="flex flex-col items-center gap-10">
            {/* ── CTA buttons ── */}
            <motion.div variants={itemVariants} className="mb-10 flex flex-wrap items-center justify-center gap-4">
              {/* Get in Touch — light rectangle */}
              <a
                id="cta-contact"
                href="mailto:you@email.com"
                className="group inline-flex h-11 min-w-[160px] items-center justify-center gap-3 rounded-lg bg-zinc-100 text-base font-semibold text-zinc-900 shadow-md transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95 sm:min-w-[200px] sm:text-lg">
                <Mail className="h-6 w-6" />
                Get in Touch
              </a>
              {/* View Projects — dark rectangle with border */}
              <a
                id="cta-projects"
                href="#projects"
                className="group inline-flex h-11 min-w-[160px] items-center justify-center gap-3 rounded-lg border border-zinc-600 bg-zinc-900 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-800 hover:scale-105 active:scale-95 sm:min-w-[200px] sm:text-lg" >
                View Projects
                <ArrowDown className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </motion.div>

            {/* ── Social icons ── */}
            <motion.div variants={itemVariants} className="mt-6 flex items-center justify-center gap-4 sm:mt-12">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  id={`social-${label.toLowerCase()}`}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 transition-all duration-200 hover:bg-zinc-700 hover:text-white sm:h-14 sm:w-14"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bouncing scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.6 },
          y: { delay: 2, duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 z-[2] -translate-x-1/2"
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5 text-zinc-600" />
      </motion.div> */}
    </section>
  );
}
