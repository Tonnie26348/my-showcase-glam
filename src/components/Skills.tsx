import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Survey & Mapping",
    skills: ["Topographical Surveys", "Land Subdivision", "Cadastral Surveys", "Engineering Surveys", "GNSS RTK Operations", "Ground Control Points"],
  },
  {
    title: "Software & Tools",
    skills: ["AutoCAD Civil 3D", "ArcGIS", "CAD Survey", "GPS Data Processing", "GIS Data Integration"],
  },
  {
    title: "Drone Operations",
    skills: ["Aerial Mapping", "Remote Pilot License", "Drone Instructor", "Agricultural Drones", "Turbine Inspection", "Manual UAV Control"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="font-semibold text-foreground mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-accent-foreground border border-border"
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
