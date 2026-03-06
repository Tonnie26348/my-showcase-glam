import { Mail, Phone, MapPin, ArrowUp, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-display text-xl text-foreground mb-2">
              Michael<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Land Surveyor & Drone Pilot based in Kenya, delivering precision
              mapping solutions.
            </p>
            <a
              href="https://wa.me/254796865948"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              <MessageCircle size={12} /> Chat on WhatsApp
            </a>
          </div>

          <div>
            <p className="font-semibold text-foreground text-sm mb-3">
              Quick Links
            </p>
            <ul className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground text-sm mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <a
                  href="mailto:michaelsimintei2019@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  michaelsimintei2019@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <a
                  href="tel:+254796865948"
                  className="hover:text-primary transition-colors"
                >
                  +254 796 865948
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" /> Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-6">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Michael Simintei. Made with{" "}
            <Heart size={10} className="text-primary fill-primary" /> in Kenya.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
