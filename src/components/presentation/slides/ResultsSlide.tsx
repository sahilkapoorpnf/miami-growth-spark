import { motion } from 'framer-motion';
import { TrendingUp, MapPin, Users, Phone, Calendar, BarChart3 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const projectedData = [
  { month: 'Now', traffic: 100, leads: 5 },
  { month: 'Month 1', traffic: 150, leads: 12 },
  { month: 'Month 2', traffic: 280, leads: 25 },
  { month: 'Month 3', traffic: 450, leads: 45 },
];

const results = [
  { icon: BarChart3, label: 'Google Rankings', value: 'Page 1', desc: 'for multiple keywords' },
  { icon: MapPin, label: 'Google Maps', value: 'Top 3', desc: 'local pack' },
  { icon: TrendingUp, label: 'Website Traffic', value: '2-5x', desc: 'growth' },
  { icon: Phone, label: 'Calls', value: 'Daily', desc: 'inbound leads' },
  { icon: Calendar, label: 'Bookings', value: 'Real', desc: 'revenue increase' },
];

const ResultsSlide = () => {
  return (
    <div className="slide-content py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          Expected <span className="text-chart-4">90-Day Results</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          When executed properly, here's what you can expect
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full px-4">
        {/* Results Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              className="glass-card p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-chart-4/20 flex items-center justify-center">
                <result.icon className="w-6 h-6 text-chart-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{result.label}</p>
                <p className="text-xl font-bold">{result.value} <span className="text-sm font-normal text-muted-foreground">{result.desc}</span></p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projected Growth Chart */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Projected Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={projectedData}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(217, 91%, 50%)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(217, 91%, 50%)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 25%)" />
                <XAxis dataKey="month" stroke="hsl(220, 10%, 60%)" />
                <YAxis stroke="hsl(220, 10%, 60%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(220, 20%, 12%)',
                    border: '1px solid hsl(220, 20%, 20%)',
                    borderRadius: '8px',
                  }}
                />
                <Area type="monotone" dataKey="traffic" stroke="hsl(217, 91%, 50%)" fillOpacity={1} fill="url(#colorTraffic)" />
                <Area type="monotone" dataKey="leads" stroke="hsl(160, 84%, 39%)" fillOpacity={1} fill="url(#colorLeads)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Traffic Index</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <span className="text-muted-foreground">Leads</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsSlide;
