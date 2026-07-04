'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Threads from '@/components/ui/Threads';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:swayamkorde2005@gmail.com',
    Icon: FiMail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/swayam-korde-7b76bb285/',
    Icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sk200005',
    Icon: FaGithub,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/Swayam1563',
    Icon: FaTwitter,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 28,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export function AboutContactSection() {
  return (
    <section
      id="about-contact"
      className="relative overflow-x-clip bg-[#0a0a0a]"
      style={{ padding: 'clamp(3rem, 7vw, 7rem) clamp(1.5rem, 5vw, 4rem)' }}
    >
      {/* ── Threads background animation ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{ inset: '-30% 0 0 0' }}
      >
        <Threads
          amplitude={2.5}
          distance={0.5}
          enableMouseInteraction={false}
          color={[0.28, 0.58, 0.92]}
        />
      </div>

      {/* Subtle dark overlay so text stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.25) 50%, rgba(10,10,10,0.45) 100%)',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="relative z-[2] flex flex-col items-center"
        style={{
          width: 'min(100%, 1180px)',
          marginInline: 'auto',
          gap: 'clamp(4rem, 7vw, 6rem)',
        }}
      >
        <div className="grid w-full items-center justify-items-center gap-8 sm:gap-14 lg:grid-cols-[340px_minmax(0,760px)] lg:justify-center lg:gap-20">
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border border-sky-300/25 bg-sky-500 shadow-[0_0_55px_rgba(14,165,233,0.22)] sm:h-72 sm:w-72 lg:h-[19rem] lg:w-[19rem]">
              <Image
                src="/avatar.png"
                alt="Swayam Korde"
                fill
                sizes="(min-width: 1024px) 304px, (min-width: 640px) 288px, 224px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-[760px] lg:ml-8 text-center font-semibold leading-tight text-zinc-500 lg:text-left"
          >
           <p className="text-lg leading-relaxed md:text-xl lg:text-2xl">
              Final-year Electronics &amp; Computer Engineering student at PICT Pune,
              with a passion for building fast, professional, and good-looking websites.
            </p>

            <p className="mt-7 text-lg leading-relaxed md:text-xl lg:text-2xl">
              I work across the full stack from crafting intuitive frontends to
              architecting robust backend systems with a strong focus on AI integration
              and GenAI-powered applications.
            </p>

            <p className="mt-7 text-lg leading-relaxed md:text-xl lg:text-2xl">
              Currently exploring opportunities in Web Applications &amp; AI Development.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border border-zinc-900 bg-zinc-950/55 text-center shadow-[0_22px_70px_rgba(0,0,0,0.36)]"
          style={{
            width: 'min(100%, 1040px)',
            marginInline: 'auto',
            padding: 'clamp(2rem, 5vw, 3rem) clamp(1.25rem, 4vw, 3.5rem)',
          }}
        >
          <div className="mx-auto max-w-3xl text-center lg:translate-x-[4.75rem]">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-zinc-500 sm:text-lg">
              Open to Full Stack Development and Gen AI internships and collaborations.
            </p>
          </div>

          <div
            className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              maxWidth: '960px',
              margin: '2.5rem auto 0',
            }}
          >
            {contactLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/85 px-8 text-base font-semibold text-zinc-400 transition-all duration-200 hover:border-amber-500/70 hover:bg-zinc-900 hover:text-zinc-100"
              >
                <Icon className="h-5 w-5 text-amber-400" />
                {label}
              </a>
            ))}
          </div>

          {/* <div
            className="h-px w-full bg-zinc-800/85"
            style={{
              maxWidth: '960px',
              margin: '3rem auto',
            }}
          /> */}

          {/* <div className="flex justify-center">
            <a
              href="mailto:swayamkorde2005@gmail.com"
              className="inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-lg bg-orange-500 px-12 text-center text-base font-bold text-zinc-950 shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-200 hover:bg-orange-400 active:scale-95 sm:px-10 sm:text-lg"
            >
              <Mail className="h-6 w-6" />
              Email Me Directly
            </a>
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
