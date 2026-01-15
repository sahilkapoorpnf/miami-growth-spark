import { motion } from 'framer-motion';
import { Check, X, Zap, Shield, Target } from 'lucide-react';

const WhyUsSlide = () => {
  return (
    <div className="slide-content py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          Why <span className="gradient-text">Bitdecentro</span> Works
        </h2>
        <p className="text-lg text-muted-foreground">
          We don't just do reports — we create real growth
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full px-4 mb-10">
        {/* Most SEO Agencies */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-6 border-destructive/30 border"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-destructive">
            <X className="w-5 h-5" />
            Most SEO Agencies
          </h3>
          <ul className="space-y-4">
            {[
              'Just do reports',
              'No real growth',
              'Generic strategies',
              'Slow results',
              'Hidden fees',
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <X className="w-4 h-4 text-destructive" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Bitdecentro */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-6 border-chart-4/30 border glow-blue"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-chart-4">
            <Check className="w-5 h-5" />
            Bitdecentro Approach
          </h3>
          <ul className="space-y-4">
            {[
              'Google Maps + SEO + Social + PPC',
              'Creates local dominance',
              'Custom Miami strategies',
              'Aggressive 90-day plan',
              'Transparent pricing',
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <Check className="w-4 h-4 text-chart-4" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Differentiators */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-3 gap-4 max-w-4xl mx-auto px-4"
      >
        {[
          { icon: Zap, title: 'Fast Results', desc: 'See progress in weeks, not months' },
          { icon: Shield, title: 'Proven System', desc: 'Battle-tested strategies' },
          { icon: Target, title: 'Local Focus', desc: 'Miami-specific optimization' },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
            className="stat-card"
          >
            <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-1">{item.title}</h4>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyUsSlide;
