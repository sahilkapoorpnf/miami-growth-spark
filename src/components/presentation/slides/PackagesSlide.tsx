import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const packages = [
  {
    name: 'SIMPLE',
    subtitle: 'SEO Package',
    price: '$499',
    period: '/ Month',
    color: 'border-primary',
    bgClass: 'package-simple',
    badge: null,
    features: [
      'Website On-Page SEO',
      'Keyword optimization (10-15 keywords)',
      'Meta titles & descriptions',
      'Google Business Profile optimization',
      'Local SEO setup',
      'Monthly backlinks',
      'Technical SEO fixes',
      'Monthly ranking report',
    ],
    goal: 'Rank on Google organically for Miami grooming searches.',
  },
  {
    name: 'ADVANCED',
    subtitle: 'Growth Package',
    price: '$999',
    period: '/ Month',
    color: 'border-package-advanced',
    bgClass: 'package-advanced',
    badge: 'Popular',
    features: [
      'Everything in Simple +',
      'Social media marketing (IG + FB)',
      'Weekly posts',
      'Brand engagement',
      'More backlinks',
      'Local citations',
      'Google Maps ranking push',
      'Lead tracking',
    ],
    goal: 'Get both Google traffic + social media inquiries.',
  },
  {
    name: 'GOLD',
    subtitle: 'Domination Package',
    price: '$1,299',
    period: '/ Month',
    color: 'border-package-gold',
    bgClass: 'package-gold',
    badge: 'Best Value',
    features: [
      'Everything in Advanced +',
      'Google Ads (PPC)',
      'Campaign setup & bidding',
      'Ad creatives',
      'Landing page optimization',
      'Conversion tracking',
      'Weekly ROI reports',
    ],
    goal: 'Get immediate customers while SEO builds in background.',
  },
];

const PackagesSlide = () => {
  return (
    <div className="slide-content py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          Choose Your <span className="gradient-text-gold">Growth Plan</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Select the package that fits your goals and budget
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            className={`package-card ${pkg.bgClass} border-2 ${pkg.color} relative`}
          >
            {pkg.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-package-gold text-xs font-bold text-background">
                <Star className="w-3 h-3 inline mr-1" />
                {pkg.badge}
              </div>
            )}
            
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-muted-foreground mb-1">{pkg.subtitle}</p>
              <h3 className="text-2xl font-bold font-display">{pkg.name}</h3>
            </div>

            <div className="text-center mb-6">
              <span className="text-4xl font-bold">{pkg.price}</span>
              <span className="text-muted-foreground">{pkg.period}</span>
            </div>

            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    pkg.name === 'SIMPLE' ? 'text-primary' :
                    pkg.name === 'ADVANCED' ? 'text-package-advanced' : 'text-package-gold'
                  }`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Goal: </span>
                {pkg.goal}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PackagesSlide;
