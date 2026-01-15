import { motion } from 'framer-motion';
import { Search, AlertTriangle, X, TrendingDown } from 'lucide-react';

const problems = [
  { icon: Search, title: 'No Keyword Targeting', desc: 'Missing strategic keyword optimization' },
  { icon: AlertTriangle, title: 'No Google Map Strategy', desc: 'Invisible in local map searches' },
  { icon: TrendingDown, title: 'No Backlink Authority', desc: 'Lacking domain credibility' },
  { icon: X, title: 'No Local SEO Push', desc: 'Missing local search signals' },
];

const searchTerms = [
  'dog grooming near me',
  'pet grooming Miami',
  'mobile dog groomer Miami',
  'puppy grooming',
  'pet spa Miami',
];

const ProblemSlide = () => {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          Why SEO is <span className="text-secondary">Critical</span> Right Now
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Pet owners in Miami are searching Google every day. If you're not on page 1, your competitors are getting those customers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
        {/* Search Terms */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            Top Search Terms in Miami
          </h3>
          <div className="space-y-3">
            {searchTerms.map((term, index) => (
              <motion.div
                key={term}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <span className="font-medium">"{term}"</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Issues */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-secondary" />
            Current Website Gaps
          </h3>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold">{problem.title}</h4>
                  <p className="text-sm text-muted-foreground">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-xl font-semibold">
          Your website looks good, but it's <span className="text-secondary">invisible</span> to Google.
        </p>
      </motion.div>
    </div>
  );
};

export default ProblemSlide;
