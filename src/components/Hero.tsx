import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown, Download } from "lucide-react";
import surveyImg from "@/assets/survey-field.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-semibold tracking-widest uppercase text-primary mb-4"
          >
            Land Surveyor & Drone Pilot
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground leading-tight mb-6">
            Michael{" "}
            <span className="text-gradient">Simintei</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Passionate Land Surveyor with proven experience in Land Subdivision, GIS, Aerial Mapping and Drone Operations. Proficient in Civil 3D, ArcGIS and CAD survey operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
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

          <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" /> Kenya
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-primary" /> +254 796 865948
            </span>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-h-[600px]">
            <img
              src={surveyImg}
              alt="Michael Simintei conducting land survey in the field"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
            <p className="text-2xl font-bold text-primary font-display">3+</p>
            <p className="text-xs text-muted-foreground">Years Experience</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
            <p className="text-2xl font-bold text-secondary font-display">6+</p>
            <p className="text-xs text-muted-foreground">Major Projects</p>
          </div>
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
