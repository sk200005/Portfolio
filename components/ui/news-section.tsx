'use client';

import { motion, type Variants } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  DiDocker,
  DiGithubBadge,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiReact,
} from 'react-icons/di';
import { SiExpress, SiNextdotjs, SiTypescript } from 'react-icons/si';

type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: 'React', Icon: DiReact, color: '#61dafb' },
  { name: 'Node.js', Icon: DiNodejs, color: '#8cc84b' },
  { name: 'Express', Icon: SiExpress, color: '#f5f5f5' },
  { name: 'MongoDB', Icon: DiMongodb, color: '#47a248' },
  { name: 'JavaScript', Icon: DiJavascript1, color: '#f7df1e' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
  { name: 'Docker', Icon: DiDocker, color: '#2496ed' },
  { name: 'GitHub', Icon: DiGithubBadge, color: '#f5f5f5' },
  { name: 'Python', Icon: DiPython, color: '#3776ab' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#f5f5f5' },
  { name: 'MySQL', Icon: DiMysql, color: '#00758f' },
  { name: 'Postgres', Icon: DiPostgresql, color: '#336791' },
];

const orbitCount = 3;
const orbitGap = 7;
const iconsPerOrbit = Math.ceil(skills.length / orbitCount);

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export function NewsSection() {
  return (
    <section
      id="news"
      className="relative flex min-h-screen w-full max-w-full items-center overflow-hidden overflow-x-clip bg-[#0a0a0a] px-5 py-16 sm:py-20 sm:pl-14 sm:pr-10 lg:pl-28 lg:pr-16 xl:pl-36 2xl:pl-44"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
        className="relative z-10 mx-auto grid w-full max-w-[1760px] items-center gap-10 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[minmax(0,1.02fr)_minmax(34rem,0.98fr)] lg:gap-14 xl:gap-20"
      >
        <motion.div variants={itemVariants} className="flex w-full flex-col justify-center">
          <div className="w-full lg:translate-x-22 xl:translate-x-28">
            <div className="max-w-[760px]">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-amber-400">
                
              </p>
              <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
                The Stack Behind My Work
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400 sm:mt-7 sm:text-lg sm:leading-9 xl:text-xl">
                Leveraging modern technologies to build scalable, high-performance web applications with a focus on clean architecture, seamless user experiences, and maintainable code.
              </p>
            </div>
            <br /><br />

            <div className="mt-12 grid w-full max-w-[860px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {skills.slice(0, 12).map(({ name, Icon, color }) => (
                <motion.div
                  key={name}
                  variants={itemVariants}
                  className="flex min-h-16 items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900/70 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-zinc-950 ring-1 ring-zinc-800">
                    <Icon className="h-7 w-7" style={{ color }} />
                  </span>
                  <span className="text-base font-semibold text-zinc-200">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative hidden min-h-[34rem] w-full max-w-full items-center justify-center overflow-hidden lg:flex lg:min-h-[calc(100svh-10rem)]">
          <div className="relative flex h-[min(72vw,48rem)] min-h-[34rem] w-[min(72vw,48rem)] min-w-[34rem] translate-x-[7%] items-center justify-center sm:translate-x-[10%] lg:translate-x-[16%]">
            {/* Spotlight glow behind orbit center */}
            <div
              aria-hidden="true"
              className="absolute z-0 h-72 w-72 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.06) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 shadow-[0_0_80px_rgba(245,158,11,0.35),0_0_160px_rgba(245,158,11,0.12)]">
              <DiReact className="h-16 w-16 text-cyan-300" />
            </div>

            {Array.from({ length: orbitCount }).map((_, orbitIdx) => {
              const size = `${13 + orbitGap * (orbitIdx + 1)}rem`;
              const angleStep = (2 * Math.PI) / iconsPerOrbit;

              return (
                <div
                  key={orbitIdx}
                  className="absolute rounded-full border border-dashed border-zinc-700/80"
                  style={{
                    width: size,
                    height: size,
                    animation: `news-orbit-spin ${16 + orbitIdx * 8}s linear infinite`,
                    // Promote each ring to its own GPU compositing layer
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                  }}
                >
                  {skills
                    .slice(
                      orbitIdx * iconsPerOrbit,
                      orbitIdx * iconsPerOrbit + iconsPerOrbit,
                    )
                    .map(({ name, Icon, color }, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = 50 + 50 * Math.cos(angle);
                      const y = 50 + 50 * Math.sin(angle);

                      return (
                        <div
                          key={name}
                          className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 shadow-[0_12px_28px_rgba(0,0,0,0.32)]"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            // Counter-rotate so icons stay upright while ring spins
                            animation: `news-orbit-spin-reverse ${16 + orbitIdx * 8}s linear infinite`,
                            willChange: 'transform',
                          }}
                          title={name}
                        >
                          <Icon className="h-9 w-9" style={{ color }} />
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes news-orbit-spin {
          from { transform: translateZ(0) rotate(0deg); }
          to   { transform: translateZ(0) rotate(360deg); }
        }
        @keyframes news-orbit-spin-reverse {
          from { transform: translate(-50%, -50%) translateZ(0) rotate(0deg); }
          to   { transform: translate(-50%, -50%) translateZ(0) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
