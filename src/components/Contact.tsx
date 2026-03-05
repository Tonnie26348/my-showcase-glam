import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Looking for a skilled Land Surveyor or Drone Pilot? I'd love to hear about your project. Reach out and let's discuss how I can help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          <a
            href="mailto:michaelsimintei2019@gmail.com"
            className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all group"
          >
            <Mail size={24} className="text-primary mx-auto mb-3" />
            <p className="font-semibold text-foreground text-sm mb-1">Email</p>
            <p className="text-xs text-muted-foreground break-all">michaelsimintei2019@gmail.com</p>
          </a>

          <a
            href="tel:+254796865948"
            className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all group"
          >
            <Phone size={24} className="text-primary mx-auto mb-3" />
            <p className="font-semibold text-foreground text-sm mb-1">Phone</p>
            <p className="text-xs text-muted-foreground">+254 796 865948</p>
          </a>

          <div className="bg-background border border-border rounded-xl p-6">
            <MapPin size={24} className="text-primary mx-auto mb-3" />
            <p className="font-semibold text-foreground text-sm mb-1">Location</p>
            <p className="text-xs text-muted-foreground">Kenya</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
