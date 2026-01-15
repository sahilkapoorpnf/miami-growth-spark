import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const overallScore = 62;

const auditCategories = [
  { name: 'On-Page SEO', score: 58, status: 'warning' },
  { name: 'Links', score: 45, status: 'error' },
  { name: 'Usability', score: 72, status: 'ok' },
  { name: 'Performance', score: 68, status: 'warning' },
  { name: 'Social', score: 35, status: 'error' },
];

const pieData = [
  { name: 'Score', value: overallScore },
  { name: 'Remaining', value: 100 - overallScore },
];

const socialData = [
  { platform: 'Facebook', followers: 120, engagement: 2.3 },
  { platform: 'Instagram', followers: 85, engagement: 3.1 },
  { platform: 'Google', reviews: 12, rating: 4.2 },
];

const COLORS = ['hsl(217, 91%, 50%)', 'hsl(220, 20%, 20%)'];

const AuditSlide = () => {
  return (
    <div className="slide-content py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          Website <span className="text-secondary">Audit Report</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Based on SEOptimer analysis of miamispetgrooming.com
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full px-4">
        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Overall SEO Score</h3>
          <div className="h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-4xl font-bold">{overallScore}</span>
              <span className="text-sm text-muted-foreground">/ 100</span>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-2">
            Room for significant improvement
          </p>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Category Breakdown</h3>
          <div className="space-y-4">
            {auditCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    {cat.status === 'ok' && <CheckCircle className="w-4 h-4 text-chart-4" />}
                    {cat.status === 'warning' && <AlertCircle className="w-4 h-4 text-package-advanced" />}
                    {cat.status === 'error' && <XCircle className="w-4 h-4 text-destructive" />}
                    <span className="text-sm font-medium">{cat.name}</span>
                  </div>
                  <span className="text-sm font-bold">{cat.score}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.score}%` }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className={`h-full rounded-full ${
                      cat.status === 'ok' ? 'bg-chart-4' :
                      cat.status === 'warning' ? 'bg-package-advanced' : 'bg-destructive'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-card p-6 md:col-span-2"
        >
          <h3 className="text-xl font-semibold mb-4">Social Media Presence</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={socialData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 25%)" />
                <XAxis dataKey="platform" stroke="hsl(220, 10%, 60%)" />
                <YAxis stroke="hsl(220, 10%, 60%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(220, 20%, 12%)',
                    border: '1px solid hsl(220, 20%, 20%)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="followers" fill="hsl(217, 91%, 50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="stat-card">
              <p className="text-2xl font-bold text-primary">120</p>
              <p className="text-xs text-muted-foreground">FB Followers</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl font-bold text-secondary">85</p>
              <p className="text-xs text-muted-foreground">IG Followers</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl font-bold text-package-advanced">4.2★</p>
              <p className="text-xs text-muted-foreground">Google Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuditSlide;
