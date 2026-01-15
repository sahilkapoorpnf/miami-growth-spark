import { motion } from 'framer-motion';
import { Wrench, TrendingUp, Rocket } from 'lucide-react';

const months = [
  {
    month: 'Month 1',
    title: 'Foundation & Fixes',
    subtitle: 'Critical Stage',
    icon: Wrench,
    color: 'bg-primary',
    tasks: [
      'Fix mobile usability issues',
      'Setup Google Search Console & Analytics',
      'Submit XML Sitemap',
      'Optimize meta titles & descriptions',
      'Google Business Profile optimization',
      'Add 10+ business photos',
    ],
  },
  {
    month: 'Month 2',
    title: 'Ranking Push & Authority',
    subtitle: 'Growth Stage',
    icon: TrendingUp,
    color: 'bg-package-advanced',
    tasks: [
      'Publish ranking content',
      'Build 40-60 quality backlinks',
      'Local Miami business links',
      'Activate social media',
      'Before & After grooming posts',
      'Weekly content schedule',
    ],
  },
  {
    month: 'Month 3',
    title: 'Lead Explosion Phase',
    subtitle: 'Conversion Stage',
    icon: Rocket,
    color: 'bg-secondary',
    tasks: [
      'Conversion optimization',
      'Improve CTAs & booking forms',
      'Google Maps aggression',
      'More reviews & photos',
      'PPC boost (Gold plan)',
      'Retarget website visitors',
    ],
  },
];

const ActionPlanSlide = () => {
  return (
    <div className="slide-content py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          90-Day <span className="gradient-text">Action Plan</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          A strategic roadmap to Page 1 domination
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4">
        {months.map((month, index) => (
          <motion.div
            key={month.month}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            className="glass-card p-6 relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 right-0 h-1 ${month.color}`} />
            
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl ${month.color} flex items-center justify-center`}>
                <month.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{month.month}</p>
                <h3 className="font-bold">{month.title}</h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 italic">{month.subtitle}</p>

            <ul className="space-y-2">
              {month.tasks.map((task, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 + i * 0.05, duration: 0.3 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 ${month.color}`} />
                  <span>{task}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Timeline Bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden md:block max-w-4xl mx-auto mt-10"
      >
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-primary" />
          <div className="absolute inset-y-0 left-1/3 w-1/3 bg-package-advanced" />
          <div className="absolute inset-y-0 left-2/3 w-1/3 bg-secondary" />
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Day 1</span>
          <span>Day 30</span>
          <span>Day 60</span>
          <span>Day 90</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ActionPlanSlide;
