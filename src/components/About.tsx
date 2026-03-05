import { motion } from "framer-motion";
import droneImg from "@/assets/drone-pilot.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-h-[550px]"
        >
          <img
            src={droneImg}
            alt="Michael with drone equipment preparing for aerial mapping"
            className="w-full h-full object-cover"
          />
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
            Mapping the Future, One Survey at a Time
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a certified Land Surveyor and licensed Remote Drone Pilot with a Diploma in Cartography & GIS from the Regional Centre for Mapping of Resources for Development (RCMRD).
            </p>
            <p>
              My expertise spans topographical surveys, land subdivisions, aerial mapping using advanced drone technology, and GIS data integration. I combine traditional surveying techniques with cutting-edge technology to deliver precise, reliable results.
            </p>
            <p>
              Currently working at Geoid Technologies Limited, I lead mapping operations including large-scale aerial surveys and GNSS-based ground control networks.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
