import { motion, useInView } from "framer-motion";
import { Award, Shield, Compass } from "lucide-react";
import { useRef } from "react";
import droneImg from "@/assets/drone-pilot.jpg";

const highlights = [
  { icon: Award, label: "Certified Land Surveyor" },
  { icon: Shield, label: "Licensed Remote Pilot" },
  { icon: Compass, label: "GIS & Cartography Diploma" },
];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

import { useState, useEffect } from "react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-h-[550px] border border-border/50">
            <img
              src={droneImg}
              alt="Michael with drone equipment preparing for aerial mapping"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl border-2 border-primary/20" />

          {/* Experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg"
          >
            <p className="text-3xl font-display font-bold">3+</p>
            <p className="text-xs font-medium opacity-90">Years of<br/>Experience</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
            Mapping the Future,{" "}
            <span className="text-gradient">One Survey at a Time</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a certified Land Surveyor and licensed Remote Drone Pilot
              with a Diploma in Cartography & GIS from the Regional Centre for
              Mapping of Resources for Development (RCMRD).
            </p>
            <p>
              My expertise spans topographical surveys, land subdivisions,
              aerial mapping using advanced drone technology, and GIS data
              integration. I combine traditional surveying techniques with
              cutting-edge technology to deliver precise, reliable results.
            </p>
            <p>
              Currently working at Geoid Technologies Limited, I lead mapping
              operations including large-scale aerial surveys and GNSS-based
              ground control networks.
            </p>
          </div>

          {/* Certification badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 bg-accent/60 border border-border rounded-full px-4 py-2 hover:border-primary/30 transition-colors"
              >
                <h.icon size={14} className="text-primary" />
                <span className="text-xs font-medium text-accent-foreground">
                  {h.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
