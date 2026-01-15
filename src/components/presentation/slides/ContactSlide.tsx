import { motion } from 'framer-motion';
import { Mail, Phone, Globe, ArrowRight } from 'lucide-react';
import bitdecentroLogo from '@/assets/bitdecentro-logo.png';

const ContactSlide = () => {
  return (
    <div className="slide-content relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          src={bitdecentroLogo}
          alt="Bitdecentro"
          className="h-16 mx-auto mb-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold font-display mb-6"
        >
          Ready to <span className="gradient-text">Dominate</span> Miami?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-muted-foreground mb-10"
        >
          Let's discuss how we can put Miami's Pet Grooming on top of Google searches
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-card p-8 mb-10"
        >
          <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:hello@bitdecentro.com" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-sm">hello@bitdecentro.com</span>
            </a>
            <a href="tel:+1234567890" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <Phone className="w-6 h-6 text-secondary" />
              <span className="text-sm">+1 (234) 567-890</span>
            </a>
            <a href="https://bitdecentro.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <Globe className="w-6 h-6 text-package-gold" />
              <span className="text-sm">bitdecentro.com</span>
            </a>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Let's Start Growing
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          © 2025 Bitdecentro – Growth Driven Digital Marketing
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ContactSlide;
