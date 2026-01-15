import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="slide-content relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/20 border border-primary/30"
        >
          <span className="text-sm font-medium text-primary">SEO & Digital Growth Proposal</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6"
        >
          Dominate Miami's
          <br />
          <span className="gradient-text-pink">Pet Grooming</span> Market
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
        >
          A comprehensive digital strategy to put{' '}
          <span className="text-foreground font-semibold">Miami's Pet Grooming</span> on top of Google searches
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: TrendingUp, label: 'Page 1 Rankings', color: 'text-primary' },
            { icon: Target, label: 'Local Domination', color: 'text-secondary' },
            { icon: Zap, label: 'Lead Generation', color: 'text-package-gold' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card"
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-muted-foreground"
        >
          <p className="text-sm mb-2">Prepared for</p>
          <p className="text-xl font-semibold text-foreground">Lester Sanchez</p>
          <p className="text-sm">Miami's Pet Grooming • miamispetgrooming.com</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TitleSlide;
