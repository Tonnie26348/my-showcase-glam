import { motion } from "framer-motion";
import { MapPin, Plane, Wind, Home, Leaf } from "lucide-react";

const projects = [
  {
    icon: MapPin,
    title: "Konza Technopolis Drone Mapping",
    role: "Drone Pilot in Charge",
    desc: "Aerial mapping of 5,000 acres of Konza Technopolis to produce a basemap used for urban planning.",
  },
  {
    icon: Plane,
    title: "Zipline Aerial Mapping Project",
    role: "Surveyor & Drone Pilot in Charge",
    desc: "Operated GNSS equipment, picked GCPs, and aerial-mapped 440 acres around 107 health facilities.",
  },
  {
    icon: MapPin,
    title: "Thiba Dam & River Drone Mapping",
    role: "Surveyor & Drone Pilot",
    desc: "Established benchmarks, picked GCPs and spot heights. Aerial mapped 800 acres of Thiba Dam and 80km of river.",
  },
  {
    icon: Wind,
    title: "KIPETO Windfarm Turbine Inspection",
    role: "Drone Pilot",
    desc: "Inspected blades via manual UAV control across 30 turbines, each with 3 blades.",
  },
  {
    icon: Home,
    title: "KISIP Phase 1 – Informal Settlements",
    role: "Surveyor & Drone Pilot",
    desc: "Searched old control points, carried out static surveys, picked GCPs, and aerial-mapped settlements.",
  },
  {
    icon: Leaf,
    title: "Agricultural Drone Operations",
    role: "Drone Operator",
    desc: "Sprayed fertilizers on farms using drones and performed seed broadcasting operations.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card">
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
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon size={20} className="text-accent-foreground group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-xs text-primary font-medium mb-3">{p.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
