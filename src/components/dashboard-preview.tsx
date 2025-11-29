"use client";

import { motion } from "framer-motion";
import { Home, BarChart3, Settings, TrendingUp, Activity, Terminal, Server, MessageSquareText, UsersRound, Workflow } from "lucide-react";

export const DashboardPreview = () => {
  return (
    <div className="w-full h-full bg-transparent overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      <div className="relative flex h-full">
        {/* Sidebar */}
        <div className="w-16 bg-transparent border-r border-white/5 flex flex-col items-center py-6 gap-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            {/* Home - Active */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-lg bg-emerald-500/10 border-l-2 border-emerald-400 flex items-center justify-center cursor-pointer relative"
            >
              <Home className="w-5 h-5 text-emerald-400" />
            </motion.div>
            
            {/* Analytics */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"
            >
              <BarChart3 className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </motion.div>
            
            {/* Messages/Chats */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"
            >
              <MessageSquareText className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </motion.div>
            
            {/* CRM/Users */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"
            >
              <UsersRound className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </motion.div>
            
            {/* Workflows/Automations */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"
            >
              <Workflow className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </motion.div>
            
            {/* Spacer */}
            <div className="flex-1" />
            
            {/* Settings */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"
            >
              <Settings className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </motion.div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-hidden">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-light text-white mb-1">Control Panel</h2>
            <p className="text-sm text-zinc-400 font-mono">Real-time system metrics</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[calc(100%-80px)]">
            {/* Card 1: Live Transaction Volume */}
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              className="col-span-2 row-span-2 bg-zinc-800/50 rounded-xl border border-white/5 p-6 relative overflow-hidden transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Live Transaction Volume</span>
                </div>
                <div className="text-4xl font-mono text-white mb-1">R$ 47,302.00</div>
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-4">
                  <span>Ticket Médio: <span className="text-zinc-300">R$ 189</span></span>
                  <span className="text-zinc-700">|</span>
                  <span>Conversão: <span className="text-emerald-400">12.4%</span></span>
                </div>
                
                {/* Technical Grid Chart */}
                <div className="mt-6 h-32 relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Chart */}
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
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Neural Network Load */}
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              className="col-span-2 row-span-2 bg-zinc-800/50 rounded-xl border border-white/5 p-6 relative overflow-hidden transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Neural Network Load</span>
                </div>
                <div className="text-4xl font-mono text-white mb-1">98.7%</div>
                <div className="text-xs font-mono text-zinc-500 mb-4">
                  Token Usage: <span className="text-emerald-400">450k/s</span>
                </div>
                
                {/* Spectrum Heatmap */}
                <div className="mt-6 flex items-end justify-between gap-[2px] h-32">
                  {Array.from({ length: 60 }).map((_, i) => {
                    const height = Math.random() * 100;
                    const delay = i * 0.01;
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay, ease: "easeOut" }}
                        className="flex-1 bg-gradient-to-t from-emerald-400 to-teal-600 rounded-t-[1px]"
                        style={{
                          opacity: 0.6 + (height / 200),
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Card 3: Real-Time Execution Log */}
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              className="col-span-2 row-span-1 bg-black rounded-xl border border-white/5 p-6 relative overflow-hidden transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Real-Time Execution Log</span>
              </div>
              
              <div className="space-y-1 font-mono text-xs">
                {[
                  { time: "10:42:01", msg: "Iniciando negociação: Cliente #8821", color: "text-emerald-500" },
                  { time: "10:42:02", msg: 'Intent detected: "Purchase_Anual"', color: "text-teal-400" },
                  { time: "10:42:05", msg: "Pix Code Generated... Success.", color: "text-emerald-500" },
                  { time: "10:42:08", msg: "Payment Confirmed. Access Granted.", color: "text-emerald-400" },
                ].map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className={`${log.color} leading-tight`}
                  >
                    <span className="text-zinc-600">&gt;</span> <span className="text-zinc-500">[{log.time}]</span> {log.msg}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card 4: Infrastructure Health */}
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              className="col-span-2 row-span-1 bg-zinc-800/50 rounded-xl border border-white/5 p-6 relative overflow-hidden transition-all duration-300"
            >
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Infrastructure Health</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      <span className="text-zinc-500">API Latency:</span>
                      <span className="text-emerald-400">12ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      <span className="text-zinc-500">WhatsApp:</span>
                      <span className="text-emerald-400">Stable</span>
                    </div>
                  </div>
                </div>
                
                {/* Technical Donut Chart */}
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#18181b"
                      strokeWidth="4"
                      fill="none"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#10b981"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 201" }}
                      animate={{ strokeDasharray: "197 201" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-mono text-white">98%</span>
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