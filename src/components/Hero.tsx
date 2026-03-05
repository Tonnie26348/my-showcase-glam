import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import surveyImg from "@/assets/survey-field.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Land Surveyor & Drone Pilot
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground leading-tight mb-6">
            Michael Simintei
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
