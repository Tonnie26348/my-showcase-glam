import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const workData = [
  {
    role: "Drone Pilot / Instructor & Land Surveyor",
    company: "Geoid Technologies Limited",
    period: "November 2021 – Present",
    duties: [
      "Leading and executing mapping operations – Aerial & Topographical mapping",
      "Acquire, download, correct, integrate and document GPS data from field to GIS datasets",
      "Operated and maintained full range GNSS equipment",
    ],
  },
  {
    role: "Land Surveyor",
    company: "Geo Angular Surveyors",
    period: "Previous Role",
    duties: ["Topographical surveys", "Land subdivisions"],
  },
];

const eduData = [
  { title: "Diploma in Cartography and GIS", place: "RCMRD", year: "2023–2024" },
  { title: "Certificate in Land Survey", place: "RCMRD", year: "2020–2021" },
  { title: "Remote Pilot License & Drone Instructor", place: "Certified Training", year: "" },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <Briefcase size={20} className="text-primary" /> Work Experience
            </h3>
            <div className="space-y-6">
              {workData.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <p className="font-semibold text-foreground">{w.role}</p>
                  <p className="text-sm text-primary">{w.company}</p>
                  <p className="text-xs text-muted-foreground mb-3">{w.period}</p>
                  <ul className="space-y-1.5">
                    {w.duties.map((d, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <GraduationCap size={20} className="text-primary" /> Education & Training
            </h3>
            <div className="space-y-4">
              {eduData.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <p className="font-semibold text-foreground">{e.title}</p>
                  <p className="text-sm text-primary">{e.place}</p>
                  {e.year && <p className="text-xs text-muted-foreground">{e.year}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
