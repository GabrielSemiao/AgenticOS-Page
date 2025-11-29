"use client";

import { motion } from "framer-motion";
import { Home, BarChart3, Settings, TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react";

export const DashboardPreview = () => {
  return (
    <div className="w-full h-full bg-black/60 backdrop-blur-xl rounded-[3rem] border border-white/10 ring-1 ring-white/5 inset shadow-[0_0_80px_-20px_rgba(124,58,237,0.6)] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      <div className="relative flex h-full">
        {/* Sidebar */}
        <div className="w-16 bg-transparent border-r border-white/5 flex flex-col items-center py-6 gap-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/50 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center cursor-pointer shadow-lg shadow-purple-500/30 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
            >
              <Home className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-cyan-500/40 hover:shadow-cyan-500/30 transition-all"
            >
              <BarChart3 className="w-5 h-5 text-zinc-400 hover:text-cyan-400 transition-colors" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-cyan-500/40 hover:shadow-cyan-500/30 transition-all"
            >
              <Settings className="w-5 h-5 text-zinc-400 hover:text-cyan-400 transition-colors" />
            </motion.div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-hidden">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-light text-white mb-1">Dashboard Overview</h2>
            <p className="text-sm text-zinc-400">Real-time analytics & performance</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[calc(100%-80px)]">
            {/* Card 1: Revenue - Large */}
            <motion.div
              whileHover={{ borderColor: "rgba(168,85,247,0.5)", boxShadow: "0 0 25px rgba(168,85,247,0.4)" }}
              className="col-span-2 row-span-2 bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-white/10 p-6 relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="text-xs text-zinc-400 uppercase tracking-wider">Total Revenue</span>
                </div>
                <div className="text-4xl font-light text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">$47,300</div>
                <div className="text-sm text-emerald-400 flex items-center gap-1">
                  <span className="drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">↑ 23.5%</span>
                  <span className="text-zinc-500">vs last month</span>
                </div>
                
                {/* Simulated Area Chart */}
                <div className="mt-6 h-32 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 via-emerald-500/15 to-transparent rounded-lg" />
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <path
                      d="M 0 80 Q 25 60, 50 65 T 100 45 T 150 50 T 200 30 T 250 35 T 300 20 L 300 100 L 0 100 Z"
                      fill="url(#gradient)"
                      stroke="none"
                    />
                    <path
                      d="M 0 80 Q 25 60, 50 65 T 100 45 T 150 50 T 200 30 T 250 35 T 300 20"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      filter="drop-shadow(0 0 8px rgba(16,185,129,0.8))"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Card 2: AI Performance - Vertical Bars */}
            <motion.div
              whileHover={{ borderColor: "rgba(168,85,247,0.5)", boxShadow: "0 0 25px rgba(168,85,247,0.4)" }}
              className="col-span-2 row-span-2 bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-white/10 p-6 relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  <span className="text-xs text-zinc-400 uppercase tracking-wider">AI Performance</span>
                </div>
                <div className="text-4xl font-light text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">98.7%</div>
                <div className="text-sm text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Response Accuracy</div>
                
                {/* Animated Bar Chart */}
                <div className="mt-6 flex items-end justify-between gap-2 h-32">
                  {[65, 78, 85, 92, 88, 95, 98].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="flex-1 bg-gradient-to-t from-purple-600 to-blue-500 rounded-t-lg relative group shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                      style={{
                        filter: "drop-shadow(0 0 10px rgba(168,85,247,0.6))"
                      }}
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-white bg-black/80 backdrop-blur-sm px-2 py-1 rounded border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.4)]">{height}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 3: Recent Activity */}
            <motion.div
              whileHover={{ borderColor: "rgba(168,85,247,0.5)", boxShadow: "0 0 25px rgba(168,85,247,0.4)" }}
              className="col-span-2 row-span-1 bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-white/10 p-6 relative overflow-hidden transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                <span className="text-xs text-zinc-400 uppercase tracking-wider">Recent Activity</span>
              </div>
              
              <div className="space-y-3">
                {[
                  { color: "bg-emerald-500", name: "João Silva", action: "completed purchase", glow: "shadow-[0_0_15px_rgba(16,185,129,0.6)]" },
                  { color: "bg-purple-500", name: "Maria Santos", action: "scheduled meeting", glow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]" },
                  { color: "bg-blue-500", name: "Pedro Costa", action: "requested info", glow: "shadow-[0_0_15px_rgba(59,130,246,0.6)]" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-semibold ${item.glow}`}>
                      {item.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{item.name}</p>
                      <p className="text-xs text-zinc-400 truncate">{item.action}</p>
                    </div>
                    <div className="text-xs text-zinc-500">2m ago</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card 4: System Status - Donut Chart */}
            <motion.div
              whileHover={{ borderColor: "rgba(168,85,247,0.5)", boxShadow: "0 0 25px rgba(168,85,247,0.4)" }}
              className="col-span-2 row-span-1 bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-white/10 p-6 relative overflow-hidden transition-all duration-300"
            >
              <div className="flex items-center justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    <span className="text-xs text-zinc-400 uppercase tracking-wider">System Status</span>
                  </div>
                  <div className="text-3xl font-light text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">98%</div>
                  <div className="text-sm text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">Operational</div>
                </div>
                
                {/* Donut Chart */}
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 transform -rotate-90" style={{ filter: "drop-shadow(0 0 10px rgba(16,185,129,0.6))" }}>
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#18181b"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#statusGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 251.2" }}
                      animate={{ strokeDasharray: "246.176 251.2" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="statusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};