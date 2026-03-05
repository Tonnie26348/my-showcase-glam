import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown, Download } from "lucide-react";
import surveyImg from "@/assets/survey-field.jpg";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "6+", label: "Major Projects" },
  { value: "5000+", label: "Acres Mapped" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-accent/60 border border-border rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-accent-foreground">
              Available for Projects
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground leading-tight mb-4">
            Michael{" "}
            <span className="text-gradient">Simintei</span>
          </h1>
          <p className="text-lg md:text-xl text-primary font-medium mb-4">
            Land Surveyor & Drone Pilot
          </p>
          <p className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Delivering precision mapping solutions through advanced surveying techniques, GNSS operations, and aerial drone technology across Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
            >
              <Mail size={16} /> Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-accent transition-colors"
            >
              View Projects
            </a>
            <a
              href="/Michael_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-8"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-h-[600px] border border-border/50">
            <img
              src={surveyImg}
              alt="Michael Simintei conducting land survey in the field"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              <p className="text-xs text-muted-foreground">Based in Kenya</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <p className="text-xs text-muted-foreground">+254 796 865948</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
