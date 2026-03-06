import { motion } from "framer-motion";
import { Map, Monitor, Plane } from "lucide-react";

const skillGroups = [
  {
    icon: Map,
    title: "Survey & Mapping",
    skills: [
      "Topographical Surveys",
      "Land Subdivision",
      "Cadastral Surveys",
      "Engineering Surveys",
      "GNSS RTK Operations",
      "Ground Control Points",
    ],
  },
  {
    icon: Monitor,
    title: "Software & Tools",
    skills: [
      "AutoCAD Civil 3D",
      "ArcGIS Pro",
      "CAD Survey",
      "GPS Data Processing",
      "GIS Data Integration",
      "Drone Flight Planning",
    ],
  },
  {
    icon: Plane,
    title: "Drone Operations",
    skills: [
      "Aerial Mapping",
      "Remote Pilot License",
      "Drone Instructor",
      "Agricultural Drones",
      "Turbine Inspection",
      "Manual UAV Control",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Skills & Competencies
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            A comprehensive toolkit spanning traditional surveying, modern
            software, and drone technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <g.icon
                  size={20}
                  className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/60 text-accent-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
