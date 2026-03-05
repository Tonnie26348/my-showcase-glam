import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const workData = [
  {
    role: "Drone Pilot / Instructor & Land Surveyor",
    company: "Geoid Technologies Limited",
    period: "November 2021 – Present",
    current: true,
    duties: [
      "Leading and executing mapping operations – Aerial & Topographical mapping",
      "Acquire, download, correct, integrate and document GPS data from field to GIS datasets",
      "Operated and maintained full range GNSS equipment",
      "Established ground control networks for large-scale projects",
    ],
  },
  {
    role: "Land Surveyor",
    company: "Geo Angular Surveyors",
    period: "Previous Role",
    current: false,
    duties: [
      "Conducted topographical surveys for land development",
      "Carried out land subdivisions and boundary determinations",
    ],
  },
];

const eduData = [
  { title: "Diploma in Cartography and GIS", place: "RCMRD", year: "2023–2024" },
  { title: "Certificate in Land Survey", place: "RCMRD", year: "2020–2021" },
  { title: "Remote Pilot License & Drone Instructor", place: "Certified Training", year: "Licensed" },
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
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase size={16} className="text-primary" />
              </div>
              Work Experience
            </h3>
            <div className="space-y-4 relative">
              {/* Timeline line */}
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />

              {workData.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[11px] top-5 w-[9px] h-[9px] rounded-full border-2 ${w.current ? 'bg-primary border-primary' : 'bg-card border-primary/50'}`} />

                  <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-semibold text-foreground text-sm">{w.role}</p>
                      {w.current && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-secondary/10 text-secondary px-2 py-0.5 rounded-full whitespace-nowrap">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-primary font-medium">{w.company}</p>
                    <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                      <Calendar size={10} /> {w.period}
                    </p>
                    <ul className="space-y-1.5">
                      {w.duties.map((d, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1 shrink-0">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={16} className="text-primary" />
              </div>
              Education & Training
            </h3>
            <div className="space-y-4">
              {eduData.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors"
                >
                  <p className="font-semibold text-foreground text-sm">{e.title}</p>
                  <p className="text-sm text-primary font-medium">{e.place}</p>
                  {e.year && (
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <Calendar size={10} /> {e.year}
                    </p>
                  )}
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
