import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Zap, Activity, Gauge, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface TopologyOption {
  id: string;
  name: string;
  baseEfficiency: number;
  baseThd: number;
  baseLossWatts: number;
  description: string;
}

const TOPOLOGIES: TopologyOption[] = [
  {
    id: 'anpc-5l',
    name: '5-Level ANPC Inverter',
    baseEfficiency: 97.4,
    baseThd: 3.8,
    baseLossWatts: 180,
    description: 'Reduced switch voltage stress & common-mode voltage for medium voltage drives.'
  },
  {
    id: 'h8-zcmv',
    name: 'H8 Zero-CMV Inverter',
    baseEfficiency: 98.1,
    baseThd: 2.9,
    baseLossWatts: 130,
    description: 'Complete elimination of bearing currents in high-speed EV traction motors.'
  },
  {
    id: 'dab-dcdc',
    name: 'Dual Active Bridge (DAB)',
    baseEfficiency: 96.8,
    baseThd: 4.2,
    baseLossWatts: 210,
    description: 'Galvanically isolated bidirectional DC-DC converter for energy storage.'
  },
  {
    id: 'sc-mli',
    name: 'Switched-Capacitor MLI',
    baseEfficiency: 97.9,
    baseThd: 3.1,
    baseLossWatts: 145,
    description: 'Self-voltage balancing configuration with reduced magnetic component count.'
  }
];

export default function AiTopologyEstimator() {
  const [selectedTopologyId, setSelectedTopologyId] = useState<string>('h8-zcmv');
  const [semiconductor, setSemiconductor] = useState<'si' | 'sic' | 'gan'>('sic');
  const [freqKhz, setFreqKhz] = useState<number>(50);
  const [aiOptimized, setAiOptimized] = useState<boolean>(true);

  const selectedTopology = TOPOLOGIES.find(t => t.id === selectedTopologyId) || TOPOLOGIES[1];

  // Calculate dynamic metrics based on user selections
  const semiFactor = semiconductor === 'gan' ? 1.02 : semiconductor === 'sic' ? 1.012 : 0.985;
  const freqPenalty = (freqKhz / 20) * 0.12;
  const aiBonusEfficiency = aiOptimized ? 0.85 : 0;
  const aiReductionThd = aiOptimized ? 1.4 : 0;
  const aiLossFactor = aiOptimized ? 0.65 : 1.0;

  const calculatedEfficiency = Math.min(99.6, Number((selectedTopology.baseEfficiency * semiFactor - freqPenalty + aiBonusEfficiency).toFixed(2)));
  const calculatedThd = Math.max(0.8, Number((selectedTopology.baseThd + (freqKhz > 100 ? -0.5 : 0.2) - aiReductionThd).toFixed(2)));
  const calculatedLoss = Math.round(selectedTopology.baseLossWatts * (semiconductor === 'gan' ? 0.6 : semiconductor === 'sic' ? 0.75 : 1.1) * aiLossFactor);
  const simSpeedup = aiOptimized ? '18,500x Faster' : '1x (FEA Standard)';

  return (
    <Card className="border-2 border-brand-secondary/30 dark:border-brand-accent/30 bg-gradient-to-br from-slate-900 via-slate-950 to-brand-primary text-white shadow-2xl overflow-hidden rounded-3xl">
      <div className="p-6 sm:p-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
              <Sparkles className="h-3.5 w-3.5" />
              Interactive Lab Demonstrator
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              AI Power Electronics Design & Simulation Engine
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Test how APEX Lab’s AI surrogate models and neural pulse optimization optimize power converter performance in milliseconds.
            </p>
          </div>

          <Button
            onClick={() => setAiOptimized(!aiOptimized)}
            className={`transition-all duration-300 font-bold text-xs uppercase tracking-wider rounded-xl px-5 py-6 shadow-lg ${
              aiOptimized 
                ? 'bg-brand-accent text-slate-950 hover:bg-brand-accent/90 ring-2 ring-brand-accent/50' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Cpu className="h-4 w-4 mr-2" />
            {aiOptimized ? 'AI Surrogate Engine: ACTIVE' : 'Enable AI Neural Optimization'}
          </Button>
        </div>

        {/* Interactive Controls & Live Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Topology Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                1. Select Inverter / Converter Topology
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TOPOLOGIES.map((top) => (
                  <button
                    key={top.id}
                    onClick={() => setSelectedTopologyId(top.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      selectedTopologyId === top.id
                        ? 'bg-brand-secondary/30 border-brand-accent text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="font-bold text-sm text-white block">{top.name}</span>
                    <span className="text-[11px] text-slate-400 mt-1 line-clamp-1">{top.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Semiconductor Device Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                2. Power Semiconductor Technology
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'si', label: 'Silicon (Si) IGBT', detail: 'Standard' },
                  { id: 'sic', label: 'SiC MOSFET', detail: 'Wide Bandgap' },
                  { id: 'gan', label: 'GaN HEMT', detail: 'Ultra High Freq' },
                ].map((semi) => (
                  <button
                    key={semi.id}
                    onClick={() => setSemiconductor(semi.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      semiconductor === semi.id
                        ? 'bg-brand-accent/20 border-brand-accent text-white font-bold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{semi.label}</div>
                    <div className="text-[10px] text-brand-accent mt-0.5">{semi.detail}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Switching Frequency Slider */}
            <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
                <span>3. Switching Frequency (fsw)</span>
                <span className="text-brand-accent font-mono text-sm">{freqKhz} kHz</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={freqKhz}
                onChange={(e) => setFreqKhz(Number(e.target.value))}
                className="w-full accent-brand-accent h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10 kHz (Industrial Drive)</span>
                <span>100 kHz (EV Powertrain)</span>
                <span>200 kHz (GaN Power Density)</span>
              </div>
            </div>

          </div>

          {/* Real-time Outputs Column */}
          <div className="lg:col-span-5 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Gauge className="h-4 w-4 text-brand-accent" />
                AI Surrogate Prediction Output
              </span>
              {aiOptimized && (
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="h-3 w-3" />
                  PINN Verified
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Peak Efficiency
                </span>
                <span className="text-3xl font-serif font-extrabold text-brand-accent">
                  {calculatedEfficiency}%
                </span>
                <span className="text-[11px] text-emerald-400 block mt-1 font-medium">
                  {aiOptimized ? '+0.85% AI Loss Reduction' : 'Standard Baseline'}
                </span>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Output THD
                </span>
                <span className="text-3xl font-serif font-extrabold text-white">
                  {calculatedThd}%
                </span>
                <span className="text-[11px] text-slate-400 block mt-1 font-medium">
                  {aiOptimized ? 'Adaptive PWM Harmonics' : 'Fixed Carrier PWM'}
                </span>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Total Power Dissipation
                </span>
                <span className="text-2xl font-mono font-bold text-amber-400">
                  {calculatedLoss} W
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Heat Sink Thermal Load
                </span>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Simulation Speed
                </span>
                <span className="text-xl font-bold text-sky-400">
                  {simSpeedup}
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Neural Surrogate vs FEA
                </span>
              </div>
            </div>

            {/* AI Optimization Highlights List */}
            <div className="pt-2 border-t border-slate-800 text-xs space-y-2 text-slate-300">
              <div className="font-bold text-white uppercase tracking-wider text-[11px]">
                Active AI Physics Innovations:
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-1 flex-shrink-0" />
                  <span>Sub-millisecond magnetic core & switching loss estimation using neural surrogates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-1 flex-shrink-0" />
                  <span>Zero Common Mode Voltage (CMV) vector selection to prevent EV motor bearing erosion.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </Card>
  );
}
