import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "michaelsimintei2019@gmail.com",
    href: "mailto:michaelsimintei2019@gmail.com",
    desc: "Best for project inquiries",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 796 865948",
    href: "tel:+254796865948",
    desc: "Available during business hours",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send a message",
    href: "https://wa.me/254796865948",
    desc: "Quick responses guaranteed",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Looking for a skilled Land Surveyor or Drone Pilot? I'd love to hear
            about your project. Reach out through any channel below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          {contactMethods.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                <c.icon
                  size={20}
                  className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <p className="font-semibold text-foreground text-sm mb-0.5">
                {c.label}
              </p>
              <p className="text-xs text-primary font-medium mb-1 break-all">
                {c.value}
              </p>
              <p className="text-[11px] text-muted-foreground">{c.desc}</p>
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <a
            href="mailto:michaelsimintei2019@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            <Send size={16} /> Send Me a Message
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin size={14} className="text-primary" />
          <span>Based in Kenya — available for projects nationwide</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
