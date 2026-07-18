"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Atom,
    Server,
    FileCode,
    Code2,
    Layers,
    Zap,
    Braces,
    Terminal,
    Wifi,
    Feather,
    ArrowRightLeft,
    Database,
    Activity,
    Container,
    Command,
} from "lucide-react";

const languages = [
    { name: "React.js", icon: Atom },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Terminal },
    { name: "PHP Native", icon: Code2 },
    { name: "Laravel", icon: Layers },
    { name: "Next.js", icon: Zap },
    { name: "TypeScript", icon: Braces },
    { name: "GoLang", icon: FileCode },
];

const infrastructure = [
    { name: "Cisco", icon: Wifi },
    { name: "Apache", icon: Feather },
    { name: "Nginx", icon: ArrowRightLeft },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Postgre", icon: Database },
    { name: "Kafka", icon: Activity },
    { name: "Docker", icon: Container },
    { name: "Ubuntu", icon: Command },
];

export default function TechStack() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-[#111827] border-b-[8px] border-black overflow-hidden">
            {/* FACTORY BLUEPRINT GRID BACKGROUND */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 2px, transparent 2px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 2px, transparent 2px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
                {/* CONSTRUCTION ZONE HEADER */}
                <div className="mb-24 w-full flex flex-col items-center">
                    <div className="bg-[#fbbf24] border-[8px] border-black p-4 w-full max-w-4xl shadow-[16px_16px_0_0_#1e3a8a] relative">
                        {/* Caution tape top border */}
                        <div className="h-6 w-full bg-[repeating-linear-gradient(45deg,#000,#000_15px,#fbbf24_15px,#fbbf24_30px)] border-b-[4px] border-black mb-4" />

                        {/* Screws */}
                        <div className="absolute top-2 left-2 w-4 h-4 bg-gray-400 border-[3px] border-black rounded-full" />
                        <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 border-[3px] border-black rounded-full" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 bg-gray-400 border-[3px] border-black rounded-full" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-400 border-[3px] border-black rounded-full" />

                        <div className="bg-black p-8 md:p-12 text-center border-[6px] border-black relative overflow-hidden flex flex-col items-center">
                            {/* Background Grid inside the black area */}
                            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                            {/* <div className="inline-block bg-blue-600 border-[4px] border-white px-4 py-2 mb-8 relative z-10 shadow-[4px_4px_0_0_#000]">
                 <span className="font-logo text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                   Heavy Machinery Zone
                 </span>
               </div> */}

                            <h2 className="relative z-10 font-logo text-3xl md:text-5xl lg:text-[4rem] text-white tracking-widest leading-[1.3] uppercase drop-shadow-[4px_4px_0_#1e3a8a] mb-8">
                                Teknologi <br className="hidden md:block" />
                                <span className="text-[#fbbf24] px-2 inline-block mt-2 drop-shadow-[4px_4px_0_#000]">
                                    Kelas Dunia.
                                </span>
                            </h2>

                            <div className="relative z-10 border-[4px] border-white p-4 bg-black/50 shadow-[4px_4px_0_0_#000]">
                                <p className="font-sans text-sm md:text-lg text-white font-bold leading-relaxed max-w-2xl mx-auto">
                                    Kami merakit infrastruktur digital Anda
                                    dengan komponen berstandar industri yang
                                    teruji stabilitas dan keamanannya.
                                </p>
                            </div>
                        </div>

                        {/* Caution tape bottom border */}
                        <div className="h-6 w-full bg-[repeating-linear-gradient(45deg,#000,#000_15px,#fbbf24_15px,#fbbf24_30px)] border-t-[4px] border-black mt-4" />
                    </div>
                </div>
            </div>

            {/* ROW 1 */}
            <div className="relative flex w-full overflow-hidden mb-8 group py-4">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#111827] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#111827] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6 items-center whitespace-nowrap px-4"
                    animate={{ x: [0, -2000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}>
                    {[
                        ...languages,
                        ...languages,
                        ...languages,
                        ...languages,
                    ].map((tech, i) => (
                        <TechBadge
                            key={i}
                            text={tech.name}
                            icon={tech.icon}
                            color="yellow"
                        />
                    ))}
                </motion.div>
            </div>

            {/* ROW 2 */}
            <div className="relative flex w-full overflow-hidden group py-4">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#111827] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#111827] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6 items-center whitespace-nowrap px-4"
                    animate={{ x: [-2000, 0] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35,
                    }}>
                    {[
                        ...infrastructure,
                        ...infrastructure,
                        ...infrastructure,
                        ...infrastructure,
                    ].map((tech, i) => (
                        <TechBadge
                            key={i}
                            text={tech.name}
                            icon={tech.icon}
                            color="blue"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TechBadge({ text, icon: Icon, color }) {
    const isYellow = color === "yellow";
    const accentColor = isYellow ? "bg-[#fbbf24]" : "bg-blue-500";
    return (
        <div
            className={`
      flex items-center gap-4 px-6 py-4 md:px-8 md:py-6
      bg-gray-900 border-[3px] border-gray-700
      shadow-[4px_4px_0_0_#000] hover:shadow-[4px_4px_0_0_#fff]
      hover:border-white transition-all duration-300 cursor-crosshair
      flex-shrink-0 group-hover:paused hover:-translate-y-1 hover:-translate-x-1
    `}>
            {/* Status light */}
            <div
                className={`w-3 h-3 md:w-4 md:h-4 ${accentColor} border-[2px] border-black shadow-[2px_2px_0_0_#000]`}
            />

            <div className="text-gray-300 ml-2">
                <Icon size={28} strokeWidth={2.5} />
            </div>

            <span className="font-logo text-[10px] md:text-xs font-bold tracking-widest text-white uppercase ml-3">
                {text}
            </span>
        </div>
    );
}
