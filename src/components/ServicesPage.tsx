import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Zap, Check, Eye, MessageSquare, Heart, ShieldCheck, Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function ServicesPage({ onNavigateToContact }: { onNavigateToContact: () => void }) {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const verticals = [
    {
      num: "01",
      title: "Experiential Marketing",
      desc: "Creating meaningful brand experiences that bring consumers closer to brands.",
      items: [
        "BTL & Consumer Activations",
        "Consumer Engagement & Sampling",
        "Mall & Retail Activations",
        "Outdoor & On-ground Experiences",
        "Fabricator & Channel Partner Meets",
        "Brand Engagement Campaigns"
      ]
    },
    {
      num: "02",
      title: "Rural & Regional Outreach",
      desc: "Taking brands beyond conventional media and connecting them with consumers at the grassroots.",
      items: [
        "Jatra-Based Brand Integration",
        "Mobile Theatre Activations",
        "Fairs & Melas Branding",
        "Rural Consumer Engagement",
        "Village-Level Brand Activation",
        "Regional & Hyperlocal Campaigns"
      ]
    },
    {
      num: "03",
      title: "Brand Solutions",
      desc: "Integrated brand communication solutions that amplify visibility, build relevance and create lasting impact.",
      items: [
        "Corporate Events & Conferences",
        "Product Launches & Brand Experiences",
        "Event Planning & Production",
        "In-film Brand Integration",
        "Branded Content & Entertainment",
        "Sponsorships & Brand Partnerships",
        "Outdoor Branding & Media Solutions"
      ]
    },
    {
      num: "04",
      title: "Digital & Growth Marketing",
      desc: "Driving measurable business growth through digital strategy, creativity and performance-led marketing.",
      items: [
        "Search Engine Optimisation (SEO)",
        "Search Engine Marketing (SEM)",
        "App Store Optimisation (ASO)",
        "Influencer & Creator Marketing",
        "Website Design & Development",
        "Performance Marketing & Lead Generation",
        "Content & Social Media Marketing"
      ]
    }
  ];

  const ips = [
    {
      title: "Platform",
      subtitle: "Business Meets Business",
      desc: "A flagship pitch festival, business networking summit, and excellence awards platform uniting founders and industry leaders."
    },
    {
      title: "Tollywood ey Vacancy",
      subtitle: "Discovering Regional Talent",
      desc: "An entertainment and talent IP celebrating fresh voices and regional storytelling across Bengal."
    },
    {
      title: "Platform Podcast",
      subtitle: "Coming Soon",
      desc: "Conversations that matter with entrepreneurs, brand builders, and creative leaders."
    }
  ];

  const benefits = [
    {
      title: "Brand Impression",
      tagline: "Repeated Perceptive Impression",
      icon: <Eye className="w-6 h-6 text-primary" />,
      color: "from-pink-500/10 to-transparent",
      borderColor: "border-pink-500/20",
      accentColor: "bg-pink-500",
      desc: "Establish a constant, top-of-mind visual and cognitive presence. Our designs and activation banners build high-recall familiarity across targeted high-traffic zones and media streams."
    },
    {
      title: "Brand Conversation",
      tagline: "Continuous Brand Conversation",
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      color: "from-orange-500/10 to-transparent",
      borderColor: "border-orange-500/20",
      accentColor: "bg-orange-500",
      desc: "Move from static listening to active engagement. We curate interactive campaigns and social-first outreach programs that make your audience actively discuss and share your brand's story."
    },
    {
      title: "Brand Engagement",
      tagline: "Closeness & Genuine Engagement",
      icon: <Heart className="w-6 h-6 text-primary" />,
      color: "from-purple-500/10 to-transparent",
      borderColor: "border-purple-500/20",
      accentColor: "bg-purple-500",
      desc: "It’s all about emotional closeness and genuine alignment. By pairing physical activations with community-focused campaigns, we turn passive target groups into loyal advocates."
    },
    {
      title: "Brand Immersion",
      tagline: "Increases the Brand Perception",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      color: "from-emerald-500/10 to-transparent",
      borderColor: "border-emerald-500/20",
      accentColor: "bg-emerald-500",
      desc: "Envelop your consumers in fully-realized environments. Whether through massive-scale Jatra pavilions or custom digital products, we craft complete brand ecosystems."
    }
  ];

  return (
    <div className="pt-28 pb-32 relative text-white bg-black selection:bg-primary selection:text-black">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#200F3C]/20 via-transparent to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* HERO SECTION */}
        <div className="mb-28 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8"
          >
            <Zap size={10} className="text-primary" /> WHAT WE DO · 4 VERTICALS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-impact font-medium leading-none uppercase tracking-tighter mb-8"
          >
            FOUR INTEGRATED <span className="text-primary italic">VERTICALS.</span><br />
            ONE UNIFIED <span className="text-outline">APPROACH.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From immersive brand activations and grassroots rural outreach to integrated brand solutions and digital growth, we help brands engage, connect and create impact.
          </motion.p>
        </div>

        {/* 4 INTEGRATED VERTICALS */}
        <div className="mb-36 grid md:grid-cols-2 gap-8">
          {verticals.map((vertical) => (
            <div 
              key={vertical.num}
              className="bg-white/[0.01] border border-white/10 hover:border-primary/30 rounded-[40px] p-8 md:p-12 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-impact text-primary tracking-tight">{vertical.num}.</span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Service Vertical</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-impact uppercase tracking-tight text-white mb-4">
                  {vertical.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  {vertical.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {vertical.items.map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <Check size={11} />
                      </div>
                      <span className="text-white/80 text-xs font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                <button
                  onClick={onNavigateToContact}
                  className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  Start a Conversation <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* OUR IPs SECTION */}
        <div className="mb-36">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-primary font-mono text-xs uppercase font-bold tracking-[0.2em] block mb-2">Proprietary Properties</span>
              <h2 className="text-4xl md:text-7xl font-impact uppercase tracking-tight text-white">
                OUR <span className="text-primary italic">IPs</span> — IDEAS WE OWN.
              </h2>
              <p className="text-white/50 text-base max-w-2xl mt-3">
                Experiences we create through original intellectual properties designed to connect audiences, creators, and businesses.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ips.map((ip, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 hover:border-primary/30 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">{ip.subtitle}</span>
                    <Sparkles size={16} className="text-primary/60" />
                  </div>
                  <h3 className="text-2xl font-impact uppercase tracking-tight text-white mb-3">{ip.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{ip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CREATIVE PHILOSOPHY */}
        <div className="mb-36 py-24 px-8 md:px-16 bg-gradient-to-r from-[#110825] to-[#050C0A] rounded-[50px] border border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <span className="text-primary font-mono text-xs uppercase font-bold tracking-[0.25em] block">Creative Philosophy</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-impact uppercase tracking-tight text-white leading-tight">
              &ldquo;No idea is worth its salt unless it <br/>
              <span className="text-primary italic">sounds absurd</span> in the beginning.&rdquo;
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-white/60 text-lg sm:text-xl font-medium tracking-wide max-w-3xl mx-auto leading-relaxed">
              It is in this <strong className="text-primary">controlled absurdity</strong> that we measure out the realities of life — freeing us from convention to explore, ideate, and execute impactful brand experiences.
            </p>
          </div>
        </div>

        {/* HOW DOES YOUR BRAND BENEFIT */}
        <div className="border-t border-white/5 pt-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-mono text-xs uppercase font-bold tracking-[0.2em] block mb-2">Business Value</span>
            <h2 className="text-4xl md:text-6xl font-impact uppercase tracking-tight text-white leading-none">
              HOW DOES YOUR <br/><span className="text-primary italic">BRAND BENEFIT?</span>
            </h2>
            <p className="text-white/40 text-xs sm:text-sm mt-4 uppercase tracking-widest font-mono">
              The four stages of modern brand capital development
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 flex flex-col gap-3">
              {benefits.map((benefit, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPillar(idx)}
                  className={cn(
                    "p-6 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group cursor-pointer",
                    selectedPillar === idx 
                      ? "bg-white/5 border-primary shadow-lg shadow-primary/5" 
                      : "bg-transparent border-white/5 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className={cn("w-2 h-2 rounded-full", selectedPillar === idx ? "bg-primary" : "bg-white/20")} />
                    <div>
                      <h4 className={cn("text-xs font-bold uppercase tracking-wider font-mono", selectedPillar === idx ? "text-primary" : "text-white")}>
                        {benefit.title}
                      </h4>
                      <p className="text-[10px] text-white/30 truncate max-w-[200px]">{benefit.tagline}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className={cn("transition-transform group-hover:translate-x-1", selectedPillar === idx ? "text-primary" : "text-white/30")} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <div className={cn(
                "h-full rounded-3xl p-8 md:p-12 border bg-gradient-to-br transition-all duration-500 flex flex-col justify-between relative overflow-hidden",
                benefits[selectedPillar].borderColor,
                benefits[selectedPillar].color
              )}>
                <div className="space-y-6 relative z-10 max-w-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {benefits[selectedPillar].icon}
                    </div>
                    <div>
                      <span className="text-primary font-mono text-[9px] uppercase tracking-[0.2em] font-bold block">Benefit Stage</span>
                      <h3 className="text-2xl font-impact uppercase tracking-wide text-white">
                        {benefits[selectedPillar].title}
                      </h3>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/5 w-full" />

                  <span className="text-sm font-mono uppercase font-black tracking-widest text-primary block">
                    {benefits[selectedPillar].tagline}
                  </span>

                  <p className="text-white/60 text-base leading-relaxed">
                    {benefits[selectedPillar].desc}
                  </p>
                </div>

                <div className="mt-12 relative z-10">
                  <button 
                    onClick={onNavigateToContact}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white hover:text-primary hover:border-primary transition-all pb-1 cursor-pointer"
                  >
                    Start a Conversation <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronRight({ className, size }: { className?: string; size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
