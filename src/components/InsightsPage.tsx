import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Calendar, Newspaper, Sparkles, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface InsightItem {
  id: string;
  category: 'Blogs' | 'News' | 'Updates';
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
}

const INSIGHTS_DATA: InsightItem[] = [
  {
    id: 'maa-awards-gold',
    category: 'News',
    date: '2024',
    readTime: '3 min read',
    title: 'Crea8ors Wins Gold at MAA Awards for UltraTech Mobile Theatre',
    excerpt: 'Honoured by AdGully under Best Regional Marketing Collaboration for transforming last-mile rural outreach.',
    content: [
      'Crea8ors secured the Gold Trophy at the MAA Awards by AdGully for the UltraTech Cement Mobile Theatre campaign under the Best Regional Marketing Collaboration category.',
      'Nominated across three competitive categories, the campaign connected with rural audiences through live street play performances, branded mobile vans, and interactive engagement zones across Bihar.',
      'By blending culturally rooted entertainment with clear brand messaging, the initiative demonstrated how grassroots storytelling drives high recall in media-dark markets.'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'platform-kolkata-chapter',
    category: 'Updates',
    date: 'March 2025',
    readTime: '4 min read',
    title: 'Platform — Business Meets Business Concludes Flagship Kolkata Chapter',
    excerpt: 'Start-up pitch festival, business networking summit, and Entrepreneurship Excellence Awards at Dhono Dhanyo Auditorium.',
    content: [
      'Crea8ors’ flagship intellectual property, Platform, brought together founders, investors, and industry leaders at Dhono Dhanyo Auditorium, Kolkata.',
      'Featuring a dynamic Pitch Festival, curated fireside chats, and the Entrepreneurship Excellence Awards, Platform created a collaborative stage for emerging enterprises across East India.',
      'Building on this momentum, Crea8ors is expanding the IP ecosystem with the upcoming Platform Podcast — Conversations That Matter.'
    ],
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'jatra-rural-engagement',
    category: 'Blogs',
    date: '2025',
    readTime: '5 min read',
    title: 'Why Jatra & Mobile Theatre Remain Unmatched in Rural Brand Outreach',
    excerpt: 'How regional cultural formats build emotional trust and deeper consumer engagement beyond conventional mass media.',
    content: [
      'Conventional above-the-line media often struggles to create genuine engagement across tier-3 towns and rural belts in Bengal, Bihar, and Assam.',
      'Through Jatra-based brand integration and Mobile Theatre activations for brands like Sunrise Spices and UltraTech Cement, Crea8ors embeds brand stories natively inside beloved community performances.',
      'Combined with village-level sampling, fairs & melas branding, and hyperlocal consumer touchpoints, regional activations turn spectators into active brand advocates.'
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'integrated-growth-playbook',
    category: 'Blogs',
    date: '2025',
    readTime: '4 min read',
    title: 'Connecting On-Ground Activations with Digital & Growth Marketing',
    excerpt: 'Bridging physical brand experiences with SEO, SMM, performance campaigns, and measurable lead generation.',
    content: [
      'Modern brand building cannot treat experiential marketing and digital growth as isolated silos. Every mall activation, corporate launch, or festival pavilion creates real-world demand that digital channels can amplify and capture.',
      'At Crea8ors, our four integrated verticals work as one unified system — pairing BTL experiences and branded content with search optimisation, creator partnerships, and conversion-focused digital campaigns.',
      'This unified approach ensures every campaign builds both immediate consumer connection and sustained, measurable business growth.'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function InsightsPage({ onNavigateToContact }: { onNavigateToContact: () => void }) {
  const [filter, setFilter] = useState<'All' | 'Blogs' | 'News' | 'Updates'>('All');
  const [selectedArticle, setSelectedArticle] = useState<InsightItem | null>(null);

  const filteredItems = filter === 'All'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter((item) => item.category === filter);

  return (
    <div className="pt-28 pb-32 relative text-white bg-black selection:bg-primary selection:text-black">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#200F3C]/20 via-transparent to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-primary/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8"
          >
            <BookOpen size={10} className="text-primary" /> INSIGHTS · BLOGS · NEWS · UPDATES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-impact font-medium leading-none uppercase tracking-tighter mb-8"
          >
            IDEAS, STORIES &amp; <span className="text-primary italic">UPDATES.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Perspectives from our experiential campaigns, regional outreach playbooks, proprietary IPs, and agency milestones.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex flex-wrap gap-2 justify-center">
            {(['All', 'Blogs', 'News', 'Updates'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={cn(
                  'px-6 py-2.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap',
                  filter === tab
                    ? 'bg-primary text-black shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="bento-card p-0 group cursor-pointer hover:border-primary/40 transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-4">
                    <span className="text-primary font-bold uppercase">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-impact uppercase tracking-tight text-white group-hover:text-primary transition-colors mb-4 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    {item.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors inline-flex items-center gap-2">
                    Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  {item.category === 'News' ? (
                    <Newspaper size={16} className="text-white/30" />
                  ) : item.category === 'Updates' ? (
                    <Calendar size={16} className="text-white/30" />
                  ) : (
                    <Sparkles size={16} className="text-white/30" />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-white/5 pt-24 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-impact text-white uppercase tracking-tighter leading-tight mb-6">
            HAVE A BRAND CHALLENGE? <span className="text-primary italic">LET&apos;S CREATE AN IMPACT.</span>
          </h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
            Let&apos;s collaborate, innovate and create experiences that make your brand matter.
          </p>
          <button
            onClick={onNavigateToContact}
            className="bg-primary hover:bg-white text-black py-4 px-10 rounded-full font-black uppercase text-xs tracking-widest inline-flex items-center gap-2 transition-all duration-300 cursor-pointer"
          >
            Start a Conversation <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-white/10 rounded-[36px] max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                  className="absolute top-6 right-6 w-11 h-11 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                  <span className="text-primary font-bold uppercase">{selectedArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-impact uppercase tracking-tight text-white leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="space-y-4 text-white/70 text-base leading-relaxed">
                  {selectedArticle.content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      onNavigateToContact();
                    }}
                    className="bg-primary text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
                  >
                    Start a Conversation <ArrowRight size={14} />
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
