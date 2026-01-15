import { motion } from 'framer-motion';
import { MapPin, Key, Link2, Settings, Share2, CreditCard } from 'lucide-react';

const solutions = [
  { icon: MapPin, title: 'Local SEO', desc: 'Google Maps & Miami searches', color: 'bg-primary' },
  { icon: Key, title: 'Keyword Strategy', desc: 'Target high-intent searches', color: 'bg-chart-4' },
  { icon: Link2, title: 'Authority Building', desc: 'Quality backlinks', color: 'bg-secondary' },
  { icon: Settings, title: 'Conversion Optimization', desc: 'Turn traffic into leads', color: 'bg-chart-3' },
  { icon: Share2, title: 'Social Visibility', desc: 'Brand awareness', color: 'bg-chart-5' },
  { icon: CreditCard, title: 'Paid Ads', desc: 'Instant leads (Gold plan)', color: 'bg-package-gold' },
];

const SolutionSlide = () => {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          How <span className="gradient-text">Bitdecentro</span> Will Help
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'll turn your website into a lead-generating machine
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto w-full mb-12">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="glass-card p-5 md:p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className={`w-14 h-14 rounded-xl ${solution.color} flex items-center justify-center mx-auto mb-4`}>
              <solution.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold mb-1">{solution.title}</h3>
            <p className="text-sm text-muted-foreground">{solution.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="glass-card p-6 md:p-8 max-w-3xl mx-auto text-center glow-blue"
      >
        <h3 className="text-2xl font-bold font-display mb-2">Our Goal</h3>
        <p className="text-lg text-muted-foreground">
          Put <span className="text-foreground font-semibold">Miami's Pet Grooming</span> on top
          when someone in Miami searches for pet grooming.
        </p>
      </motion.div>
    </div>
  );
};

export default SolutionSlide;
