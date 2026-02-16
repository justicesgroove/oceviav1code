import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SiRoblox, SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Users, BarChart3, Lock, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Ocevia is currently in beta. More features will arrive soon!
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-display"
            >
              Manage with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Ease</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Ocevia is a powerful Discord bot and Dashboard crafted specifically for Roblox groups. It simplifies and automates the integration of these platforms.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                Manage with Ease
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg border-white/10 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                Learn More
              </Button>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-20 relative rounded-2xl border border-white/10 bg-slate-900/50 p-2 backdrop-blur-sm shadow-2xl"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl opacity-50 -z-10" />
              <div className="rounded-xl overflow-hidden border border-white/5">
                <img 
                  src="https://panora.cc/thumbnail/Dashboard.png" 
                  alt="Panora Dashboard" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Powerful Features</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to manage your community effectively, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<SiRoblox className="w-6 h-6 text-blue-400" />}
              title="Roblox Integration"
              description="Seamlessly sync your Roblox group roles, ranks, and members with your Discord server."
            />
            <FeatureCard 
              icon={<SiDiscord className="w-6 h-6 text-blue-400" />}
              title="Discord Automation"
              description="Automate verification, role management, and moderation tasks to keep your server clean."
            />
            <FeatureCard 
              icon={<Users className="w-6 h-6 text-blue-400" />}
              title="Community Management"
              description="Advanced tools for managing your staff team, tracking activity, and handling promotions."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-blue-400" />}
              title="Instant Sync"
              description="Changes made in Roblox reflect instantly in Discord, ensuring your data is always up to date."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-6 h-6 text-blue-400" />}
              title="Analytics"
              description="Gain deep insights into your community growth and engagement with detailed analytics."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-blue-400" />}
              title="Secure & Reliable"
              description="Enterprise-grade security keeps your community safe with 99.9% uptime guarantee."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="1" label="Roblox Groups" />
            <StatCard number="0" label="Daily Commands" />
            <StatCard number="99.9%" label="Uptime" />
            <StatCard number="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-center shadow-2xl shadow-blue-600/20">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to scale your group?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                Join thousands of Roblox community leaders who trust Ocevia for their management needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-xl px-8 font-bold">
                  Add to Discord
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-xl px-8">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group">
      <div className="mb-6 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">{number}</div>
      <div className="text-slate-500 font-medium">{label}</div>
    </div>
  );
}
