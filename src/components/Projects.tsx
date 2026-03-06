import { motion } from "framer-motion";
import { MapPin, Plane, Wind, Home, Leaf, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: MapPin,
    title: "Konza Technopolis Drone Mapping",
    role: "Drone Pilot in Charge",
    scale: "5,000 acres",
    desc: "Aerial mapping of Konza Technopolis to produce a basemap used for urban planning of Kenya's silicon savannah.",
  },
  {
    icon: Plane,
    title: "Zipline Aerial Mapping Project",
    role: "Surveyor & Drone Pilot in Charge",
    scale: "440 acres · 107 facilities",
    desc: "Operated GNSS equipment, picked GCPs, and aerial-mapped areas around health facilities for drone delivery routes.",
  },
  {
    icon: MapPin,
    title: "Thiba Dam & River Mapping",
    role: "Surveyor & Drone Pilot",
    scale: "800 acres · 80km river",
    desc: "Established benchmarks, picked GCPs and spot heights. Aerial mapped Thiba Dam and surrounding river system.",
  },
  {
    icon: Wind,
    title: "KIPETO Windfarm Inspection",
    role: "Drone Pilot",
    scale: "30 turbines · 90 blades",
    desc: "Inspected wind turbine blades via precise manual UAV control, identifying structural issues for maintenance planning.",
  },
  {
    icon: Home,
    title: "KISIP Phase 1 – Settlements",
    role: "Surveyor & Drone Pilot",
    scale: "Informal Settlements",
    desc: "Located old control points, carried out static surveys, picked GCPs, and aerial-mapped informal settlements.",
  },
  {
    icon: Leaf,
    title: "Agricultural Drone Operations",
    role: "Drone Operator",
    scale: "Precision Agriculture",
    desc: "Sprayed fertilizers on farms using agricultural drones and performed seed broadcasting operations.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            A selection of major surveying and drone mapping projects I've led
            and contributed to across Kenya.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group relative"
            >
              {/* Project number */}
              <span className="absolute top-4 right-4 text-[11px] font-bold text-muted-foreground/30 font-display">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <p.icon
                    size={20}
                    className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300"
                  />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-6"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {p.title}
              </h3>
              <p className="text-xs text-primary font-medium mb-1">{p.role}</p>
              <p className="text-[11px] text-muted-foreground font-medium mb-3 bg-accent/50 inline-block px-2 py-0.5 rounded-full">
                {p.scale}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
