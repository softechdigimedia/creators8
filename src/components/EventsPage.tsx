import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, ArrowRight, Trophy, ExternalLink, Globe, Award
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function EventsPage({
  onNavigateToContact,
  initialTab = 'case-studies',
}: {
  onNavigateToContact: () => void;
  initialTab?: 'case-studies' | 'ips' | 'accolades';
}) {
  const [activeTab, setActiveTab] = useState<'case-studies' | 'ips' | 'accolades'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const spotlights = [
    {
      title: "Ultratech Cement – Mobile Theatre",
      brand: "UltraTech Cement",
      tagline: "Rural brand engagement through entertainment.",
      desc: "UTC briefed us seeking an impactful BTL activation creating visibility and noise in the target markets of Bihar while engaging and educating target consumers. Branded mobile vans connected with maximum locations alongside street play artists delivering key communication messages through entertainment, interactive brand games, and prizes.",
      stats: [
        { label: "Scale", value: "120 Days x 3 Vans" },
        { label: "Locations Covered", value: "360 Locations" },
        { label: "Direct Contacts", value: "5000+ Contacts" }
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
      accent: "from-yellow-500/10 to-transparent",
      borderColor: "border-yellow-500/20"
    },
    {
      title: "HUL – Sales Meet",
      brand: "Hindustan Unilever Limited",
      tagline: "Large-scale corporate event execution.",
      desc: "An end-to-end corporate event production and stage experience crafted for Hindustan Unilever Limited's regional leadership and sales teams, aligning strategy, recognition, and brand energy at scale.",
      stats: [
        { label: "Format", value: "Corporate Sales Meet" },
        { label: "Execution", value: "Stage & Production" },
        { label: "Focus", value: "Leadership Alignment" }
      ],
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800",
      accent: "from-blue-500/10 to-transparent",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Keya Seth – Shaktir Aradhana",
      brand: "Keya Seth",
      tagline: "Large-scale cultural brand engagement.",
      desc: "A flagship cultural brand engagement celebrating regional heritage and consumer connection across Bengal, blending festive energy, immersive on-ground brand zones, and high-recall community participation.",
      stats: [
        { label: "Format", value: "Cultural Activation" },
        { label: "Region", value: "West Bengal" },
        { label: "Impact", value: "Mass Brand Recall" }
      ],
      image: "https://images.unsplash.com/photo-1514525253361-bee8a1874298?auto=format&fit=crop&q=80&w=800",
      accent: "from-orange-500/10 to-transparent",
      borderColor: "border-orange-500/20"
    },
    {
      title: "Sunrise Spices – Jatra Integration",
      brand: "Sunrise Spices",
      tagline: "Connecting brands with regional audiences.",
      desc: "Seamless brand integration into traditional Jatra performances across Bengal and rural clusters, reaching families directly in media-dark markets through beloved regional storytelling.",
      stats: [
        { label: "Medium", value: "Jatra Integration" },
        { label: "Audience", value: "Rural & Semi-Urban" },
        { label: "Outcome", value: "Deep Cultural Trust" }
      ],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
      accent: "from-red-500/10 to-transparent",
      borderColor: "border-red-500/20"
    },
    {
      title: "National Fabricator Meet",
      brand: "Shyam Metalics / ShyamSel",
      tagline: "A strategic engagement initiative bringing together key fabricators on a single platform.",
      desc: "Designed to strengthen channel partner relationships, showcase roofing and steel solutions, and create meaningful interactions through product insights, networking, and partner recognition.",
      stats: [
        { label: "Scope", value: "National Meet" },
        { label: "Engagement", value: "B2B Channel Partners" },
        { label: "Outcome", value: "Partner Loyalty" }
      ],
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      accent: "from-amber-500/10 to-transparent",
      borderColor: "border-amber-500/20"
    }
  ];

  const ips = [
    {
      name: "Platform",
      tagline: "Business Meets Business · Kolkata Chapter",
      link: "https://platform.ind.in",
      desc: "“Platform” marked a first-of-its-kind initiative that reshaped Bengal's entrepreneurial landscape. It brought together innovators, founders, and industry leaders in a vibrant Pitch Festival, Business Networking Meet & Business Summit featuring talk shows, panel discussions & fireside conversations.",
      awardsText: "The event also celebrated excellence through the Entrepreneurship Excellence Awards, honouring standout start-ups and entrepreneurs for their innovative thinking and strong growth potential.",
      partnersText: "Powered by a wide network of partners spanning television, radio, outdoor media, and influential business communities whose support amplified the event’s reach and impact.",
      stats: [
        { label: "Established", value: "1st March 2025" },
        { label: "Venue", value: "Dhono Dhanyo Auditorium, Kolkata" },
        { label: "Core Focus", value: "Pitch, Summit & Awards" }
      ]
    },
    {
      name: "Tollywood ey Vacancy",
      tagline: "Discovering Bengal's Talent · Entertainment IP",
      link: "",
      desc: "An original entertainment and talent discovery IP created by Crea8ors to spotlight emerging actors, performers, and creative voices across Bengal's film and entertainment ecosystem.",
      awardsText: "Bridges aspiring regional talent with established industry mentors, casting directors, and production platforms.",
      partnersText: "Designed for high-impact brand integrations, youth outreach, and digital content distribution.",
      stats: [
        { label: "Category", value: "Talent & Film IP" },
        { label: "Region", value: "Bengal & East India" },
        { label: "Format", value: "Auditions & Showcase" }
      ]
    },
    {
      name: "Platform Podcast",
      tagline: "Coming Soon · Conversations That Matter",
      link: "",
      desc: "Extending the Platform ecosystem into long-form audio and video storytelling — candid conversations with founders, creative directors, marketers, and regional business leaders.",
      awardsText: "Deep dives into brand building, regional markets, entrepreneurship, and experiential marketing.",
      partnersText: "Available soon across major streaming and video platforms.",
      stats: [
        { label: "Status", value: "Coming Soon" },
        { label: "Format", value: "Video & Audio Podcast" },
        { label: "Parent IP", value: "Platform" }
      ]
    }
  ];

  const accolades = [
    {
      title: "MAA Awards – Gold",
      awardName: "Mobile Theatre – Ultratech Cement, Best Regional Marketing Collaboration",
      description: "The Mobile Theatre activity received exceptional appreciation from both internal stakeholders and external audiences. Nominated across three categories at the MAA Awards by AdGully, it secured the Gold Trophy under Best Regional Marketing Collaboration.",
      nomination: "Nominated across three categories at the MAA Awards by AdGully.",
      achievement: "Gold Trophy — Best Regional Marketing Collaboration.",
      icon: <Trophy className="w-10 h-10 text-primary" />
    },
    {
      title: "Mirchi Elite Club",
      awardName: "Recognition as an experiential and branding agency from East India",
      description: "Inducted into the Mirchi Elite Club in recognition of sustained excellence in experiential marketing, brand activations, and integrated regional campaigns across East India.",
      nomination: "East India Agency Honour",
      achievement: "Recognised for experiential and branding excellence.",
      icon: <Award className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <div className="pt-28 pb-32 relative text-white bg-black selection:bg-primary selection:text-black">
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-[#200F3C]/20 via-transparent to-transparent -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* HERO HEADER */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8"
          >
            <Calendar size={10} className="text-primary" /> OUR WORK · CASE STUDIES · IPs · AWARDS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-impact font-medium leading-none uppercase tracking-tighter mb-8"
          >
            CAMPAIGNS THAT <br />
            MAKE AN <span className="text-primary italic">IMPACT.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From award-winning rural Mobile Theatre and Jatra activations to large-scale corporate meets and proprietary IPs like Platform.
          </motion.p>
        </div>

        {/* CONTROLS & NAVIGATION TABS */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex flex-wrap gap-2 justify-center">
            {[
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'ips', label: 'Our IPs' },
              { id: 'accolades', label: 'Awards & Recognition' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'case-studies' | 'ips' | 'accolades')}
                className={cn(
                  "px-6 py-2.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap",
                  activeTab === tab.id 
                    ? "bg-primary text-black shadow-lg" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* DYNAMIC CONTENT CONTAINER */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'case-studies' && (
              <motion.div
                key="case-studies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {spotlights.map((study, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "bg-gradient-to-br border rounded-[45px] p-8 md:p-12 lg:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12",
                      study.accent, study.borderColor
                    )}
                  >
                    <div className="w-full lg:w-[40%] aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 relative group shrink-0 bg-white/5">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest text-primary">
                        {study.brand}
                      </div>
                    </div>

                    <div className="flex-1 space-y-6">
                      <div className="space-y-2">
                        <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-[0.2em] block">Case Study</span>
                        <h2 className="text-3xl md:text-4xl font-impact uppercase tracking-tight text-white leading-tight">
                          {study.title}
                        </h2>
                        <p className="text-sm font-semibold text-white/80 font-mono italic">
                          &ldquo;{study.tagline}&rdquo;
                        </p>
                      </div>

                      <div className="h-[1px] bg-white/5 w-full" />

                      <p className="text-white/55 text-sm leading-relaxed">
                        {study.desc}
                      </p>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                        {study.stats.map((stat, sIdx) => (
                          <div key={sIdx}>
                            <h5 className="text-[9px] font-mono text-white/40 uppercase tracking-widest leading-none mb-1">
                              {stat.label}
                            </h5>
                            <p className="text-xs sm:text-sm font-bold text-white uppercase font-sans">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'ips' && (
              <motion.div
                key="ips"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {ips.map((ip, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/[0.01] border border-white/10 p-8 md:p-14 rounded-[45px] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="space-y-8 max-w-5xl">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-2">
                          <span className="text-primary font-mono text-xs uppercase font-bold tracking-[0.2em] block">Our IPs · Ideas We Own</span>
                          <h2 className="text-4xl md:text-5xl font-impact uppercase tracking-tight text-white leading-none">
                            {ip.name}
                          </h2>
                          <div className="text-sm font-mono text-white/50 uppercase tracking-wider">{ip.tagline}</div>
                        </div>
                        {ip.link && (
                          <a 
                            href={ip.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="bg-primary hover:bg-white text-black font-black uppercase text-[10px] tracking-widest px-6 py-3 rounded-xl flex items-center gap-2 transition-colors duration-300 shadow-[0_0_20px_rgba(255,210,0,0.1)] shrink-0 cursor-pointer"
                          >
                            <Globe size={14} /> Visit Platform
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>

                      <div className="h-[1px] bg-white/5 w-full" />

                      <p className="text-white/60 text-base leading-relaxed font-sans">
                        {ip.desc}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 pt-4">
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                          <span className="text-xs font-mono font-black text-primary uppercase tracking-widest block">Highlights</span>
                          <p className="text-white/50 text-xs leading-relaxed">
                            {ip.awardsText}
                          </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                          <span className="text-xs font-mono font-black text-primary uppercase tracking-widest block">Ecosystem &amp; Reach</span>
                          <p className="text-white/50 text-xs leading-relaxed">
                            {ip.partnersText}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
                        {ip.stats.map((stat, sIdx) => (
                          <div key={sIdx}>
                            <h5 className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-none mb-2">
                              {stat.label}
                            </h5>
                            <p className="text-base sm:text-lg font-impact text-white uppercase">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'accolades' && (
              <motion.div
                key="accolades"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {accolades.map((award, idx) => (
                  <div 
                    key={idx}
                    className="bg-gradient-to-r from-[#110825] to-[#0A0514] border border-primary/20 p-8 md:p-16 rounded-[45px] relative overflow-hidden"
                  >
                    <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                      <div className="lg:col-span-3 flex flex-col items-center justify-center p-8 bg-white/5 rounded-3xl border border-white/10 text-center space-y-4">
                        {award.icon}
                        <div>
                          <span className="text-primary font-mono text-[9px] uppercase tracking-widest font-black block">Recognition</span>
                          <p className="text-white font-mono text-xs uppercase font-bold tracking-wider leading-none mt-1">{award.title}</p>
                        </div>
                      </div>

                      <div className="lg:col-span-9 space-y-6">
                        <div className="space-y-1">
                          <span className="text-primary font-mono text-xs uppercase font-bold tracking-[0.2em] block">Creativity That Gets Recognised</span>
                          <h2 className="text-3xl md:text-5xl font-impact uppercase tracking-tight text-white leading-none">
                            {award.title}
                          </h2>
                          <p className="text-sm font-bold text-white/80 font-mono mt-2">
                            {award.awardName}
                          </p>
                        </div>

                        <div className="h-[1px] bg-white/5 w-full" />

                        <p className="text-white/60 text-sm leading-relaxed font-sans">
                          {award.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <p className="text-xs text-white/60 leading-relaxed font-mono">
                              <strong className="text-primary">Milestone:</strong> {award.nomination}
                            </p>
                          </div>
                          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <p className="text-xs text-white/60 leading-relaxed font-mono">
                              <strong className="text-primary">Outcome:</strong> {award.achievement}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CALL TO ACTION */}
        <div className="border-t border-white/5 pt-24 text-center max-w-4xl mx-auto mt-20">
          <h2 className="text-4xl sm:text-6xl font-impact text-white uppercase tracking-tighter leading-tight mb-6">
            HAVE A BRAND CHALLENGE? <span className="text-primary italic">LET&apos;S CREATE AN IMPACT.</span>
          </h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
            Let&apos;s collaborate, innovate and create experiences that make your brand matter.
          </p>
          <button 
            onClick={onNavigateToContact}
            className="bg-primary hover:bg-white text-black py-5 px-10 rounded-full font-black uppercase text-xs tracking-widest inline-flex items-center gap-2 transition-all duration-300 shadow-[0_0_30px_rgba(255,210,0,0.15)] cursor-pointer"
          >
            Start a Conversation
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
