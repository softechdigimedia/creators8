
// @ts-nocheck

import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  Mail,
  Award,
  CheckCircle2,
  Menu,
  X,
  Facebook,
  Instagram,
  ArrowUp,
  MessageCircle,
  Trophy,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MapPin,
  Linkedin,
  BookOpen,
  Newspaper,
  Calendar,
  ExternalLink,
  Target,
  Eye,
  Zap,
  Smile,
  BarChart3,
  ChevronLeft,
  ChevronRight,
   Palette,
   Globe,
   ShoppingBag,
   Video,
   Users,
   Search,
    Compass,
    Section,
} from 'lucide-react';
import Lenis from 'lenis';
import { cn } from './lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import PortfolioGallery from './components/PortfolioGallery';

gsap.registerPlugin(ScrollTrigger);

interface CampaignCaseStudy {
  id: string;
  title: string;
  brand: string;
  summary: string;
  category: string;
  image: string;
  details: string;
  highlights: string[];
}

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

interface IPItem {
  name: string;
  subtitle: string;
  status: string;
  desc: string;
  image: string;
  highlights: string[];
  link?: string;
}

  const directors = [
    {
      name: "Sunando Chakraborty",
      title: "Co-Founder & Director",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      bio: "Sunando Chakraborty is a seasoned marketing leader with 15+ years of experience in business development, client strategy, and brand integration. He has worked with renowned brands such as ABP Group, Radio Mirchi, Reliance Communications, Mahuaa Bangla, Mongia Steel and others, driving high-impact marketing initiatives. As the co-founder & director of Crea8ors, he has spearheaded milestone projects including rural Jatra activations across Bengal & Assam and the exclusive IP 'Platform'. A passionate storyteller and brand enthusiast, Sunando continues to explore emerging trends in branding, communication, and entrepreneurship."
    },
    {
      name: "Shubhadeep Sarkaar",
      title: "Co-Founder & Director",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      bio: "Shubhadeep Sarkaar brings 15+ years of sales and marketing expertise across leading media groups like India Today, Mahuaa Media, Focus TV and Epic Media. His entrepreneurial journey in Bengali movie marketing set new benchmarks in film activations and brand integrations for leading production houses including SVF, Raj Chakraborty Films, Dev Entertainment and more. He has successfully executed large-scale Jatra activations in Bengal and Assam, influencing regional brand outreach. His dynamic problem-solving approach and constant pursuit of innovation remain the core of Crea8ors’ creative strength."
    }
  ];

  const strengths = [
    "Activations",
    "Events",
    "Branded Content",
    "Intellectual Property (IP)",
    "Digital Marketing",
    "Creative Design"
  ];

const clients = [
  { name: 'Senco Gold',     img: '/clients/senco.png' },
  { name: 'Wow Momo',       img: '/clients/Wow.jpg' },
  { name: 'UltraTech',      img: '/clients/ultra.png' },
  { name: 'IDFC First',     img: '/clients/IDFC.png' },
  { name: 'Lux',            img: '/clients/lux.jpg' },
  { name: 'Mirchi',         img: '/clients/Radiomirchi.jpg' },
  { name: 'Sony',           img: '/clients/Sony.png' },
  { name: 'ITC Limited',    img: '/clients/ITC.png' },
  { name: 'Ambuja Neotia',  img: '/clients/ambuja.jpg' },
  { name: 'Bangur Cement',  img: '/clients/bangur.jpg' },
    { name: 'keo karpin',  img: '/clients/keokarpin.webp' },
      { name: 'dava india',  img: '/clients/davaindia.png' },
        { name: 'idestiny',  img: '/clients/idestiny.png' },
];

const ClientItem = ({ name, img }: { name: string; img: string | null }) => (
  <div className="flex items-center gap-5 group cursor-default shrink-0">
    {/* Logo / Initials badge */}
    <div className="w-24 h-24 flex items-center justify-center overflow-hidden flex-shrink-0  transition-all duration-500">
      {img ? (
        <img
          src={img}
          alt={name}
          className="w-full h-full object-contain p-2 filter transition-all duration-500"
        />
      ) : (
        <span className="text-white/20 group-hover:text-primary/60 transition-all duration-500 font-mono text-xs font-bold tracking-widest uppercase">
          {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
        </span>
      )}
    </div>

    {/* Client name */}
    <span className="text-5xl md:text-7xl font-impact font-black text-white/5 group-hover:text-primary transition-all duration-500 uppercase tracking-tighter">
      {name}
    </span>

    {/* Separator dot */}
    <span className="text-white/10 text-2xl mx-2 flex-shrink-0">·</span>
  </div>
);


const testimonials = [
    {
      text: "Closest to the promises made by anyone regarding execution. Amazing teamwork",
      author: "Swarnojit Sengupta",
      role: "Wow Momo",
      image: "/user.png",
      rating: 5
    },
    {
      text: "Outstanding planning with immaculate execution. Thumbs up for the entire team.",
      author: "S. Sureka",
      role: "Lux Industries",
      image: "/user.png",
      rating: 5
    },
    {
      text: "Epic ideation and execution is absolutely in sync. More power to the Crea8ors team. Keep up the good work",
      author: "S. Sengupta",
      role: "Ultra Tech Cement",
      image: "/user.png",
      rating: 5
    }
  ];

const VERTICALS = [
  {
    num: '01',
    title: 'Experiential Marketing',
    tagline: 'Creating meaningful brand experiences that bring consumers closer to brands.',
    image:
      'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=900',
    services: [
      'BTL & Consumer Activations',
      'Consumer Engagement & Sampling',
      'Mall & Retail Activations',
      'Outdoor & On-ground Experiences',
      'Fabricator & Channel Partner Meets',
      'Brand Engagement Campaigns',
    ],
  },
  {
    num: '02',
    title: 'Rural & Regional Outreach',
    tagline:
      'Taking brands beyond conventional media and connecting them with consumers at the grassroots.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=900',
    services: [
      'Jatra-Based Brand Integration',
      'Mobile Theatre Activations',
      'Fairs & Melas Branding',
      'Rural Consumer Engagement',
      'Village-Level Brand Activation',
      'Regional & Hyperlocal Campaigns',
    ],
  },
  {
    num: '03',
    title: 'Brand Solutions',
    tagline:
      'Integrated brand communication solutions that amplify visibility, build relevance and create lasting impact.',
    image:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=900',
    services: [
      'Corporate Events & Conferences',
      'Product Launches & Brand Experiences',
      'Event Planning & Production',
      'In-film Brand Integration',
      'Branded Content & Entertainment',
      'Sponsorships & Brand Partnerships',
      'Outdoor Branding & Media Solutions',
    ],
  },
  {
    num: '04',
    title: 'Digital & Growth Marketing',
    tagline:
      'Driving measurable business growth through digital strategy, creativity and performance-led marketing.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900',
    services: [
      'Search Engine Optimisation (SEO)',
      'Search Engine Marketing (SEM)',
      'App Store Optimisation (ASO)',
      'Influencer & Creator Marketing',
      'Website Design & Development',
      'Performance Marketing & Lead Generation',
      'Content & Social Media Marketing',
    ],
  },
];

const FEATURED_CAMPAIGNS: CampaignCaseStudy[] = [
  {
    id: 'ultratech-mobile-theatre',
    title: 'Ultratech Cement – Mobile Theatre',
    brand: 'UltraTech Cement',
    summary: 'Rural brand engagement through entertainment.',
    category: 'Rural & Regional Outreach',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=900',
    details:
      'An impactful last-mile BTL and Mobile Theatre activation across Bihar combining branded mobile vans, live street play artists, and interactive consumer games to build brand recall and product education in media-dark markets.',
    highlights: ['120 Days × 3 Branded Vans', '360 Locations Covered', 'MAA Awards Gold Winner'],
  },
  {
    id: 'hul-sales-meet',
    title: 'HUL – Sales Meet',
    brand: 'Hindustan Unilever Limited',
    summary: 'Large-scale corporate event execution.',
    category: 'Brand Solutions',
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=900',
    details:
      'End-to-end corporate event architecture, stage production, and leadership engagement designed to align regional sales teams around annual brand priorities and milestones.',
    highlights: ['Turnkey Event Production', 'Audio-Visual Stage Design', 'Executive & Team Engagement'],
  },
  {
    id: 'keya-seth-shaktir-aradhana',
    title: 'Keya Seth – Shaktir Aradhana',
    brand: 'Keya Seth',
    summary: 'Large-scale cultural brand engagement.',
    category: 'Experiential Marketing',
    image:
      'https://images.unsplash.com/photo-1514525253361-bee8a1874298?auto=format&fit=crop&q=80&w=900',
    details:
      'A high-visibility festive and cultural activation weaving brand presence directly into Bengal’s biggest community celebration with immersive experiential touchpoints.',
    highlights: ['Festival Brand Hub', 'Mass Consumer Engagement', 'High-Recall Cultural Integration'],
  },
  {
    id: 'sunrise-spices-jatra',
    title: 'Sunrise Spices – Jatra Integration',
    brand: 'Sunrise Spices',
    summary: 'Connecting brands with regional audiences.',
    category: 'Rural & Regional Outreach',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=900',
    details:
      'Seamless brand storytelling woven into traditional Jatra performances across Bengal, connecting authentically with regional households beyond conventional mass media.',
    highlights: ['Jatra-Based Brand Integration', 'Grassroots Household Reach', 'Regional Audience Trust'],
  },
];

const EXTRA_CAMPAIGNS: CampaignCaseStudy[] = [
  {
    id: 'shyamsel-fabricator-meet',
    title: 'ShyamSel – National Fabricator Meet',
    brand: 'Shyam Metalics',
    summary: 'Strategic B2B engagement with key fabricators on a unified platform.',
    category: 'Experiential Marketing',
    image:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=900',
    details:
      'A dedicated industry interaction bringing channel partners and fabricators together to strengthen relationships, showcase roofing solutions, and recognise partner excellence.',
    highlights: ['National Partner Summit', 'Product Showcase', 'Channel Loyalty'],
  },
  {
    id: 'mirchi-boombox',
    title: 'Mirchi Boombox Concert Series',
    brand: 'Radio Mirchi',
    summary: 'High-energy youth and metro live music IP execution.',
    category: 'Brand Solutions',
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=900',
    details:
      'Immersive large-format concert production uniting marquee artists and lifestyle brand integrations for urban audiences across East India.',
    highlights: ['Live Music Production', 'Youth Brand Integration', 'Metro Scale'],
  },
];

const OUR_IPS: IPItem[] = [
  {
    name: 'Platform',
    subtitle: 'Business Meets Business',
    status: 'Flagship IP',
    desc: 'Pitch Festival, Business Networking Summit & Entrepreneurship Excellence Awards bringing founders and leaders together.',
    image:
      'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=700',
    highlights: [
      'Start-up Pitch Festival & Founder Showcase',
      'Business Networking Meet & Summit',
      'Entrepreneurship Excellence Awards · Kolkata Chapter',
    ],
    link: 'https://platform.ind.in',
  },
  {
    name: 'Tollywood ey Vacancy',
    subtitle: "Discovering Bengal's Talent",
    status: 'Entertainment IP',
    desc: 'Regional talent and entertainment property spotlighting emerging performers and creative voices.',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=700',
    highlights: [
      'Regional Film & Talent Discovery',
      'Youth Outreach & Audition Showcase',
      'Branded Entertainment Integration',
    ],
  },
  {
    name: 'Platform Podcast',
    subtitle: 'Conversations That Matter',
    status: 'Coming Soon',
    desc: 'Long-form conversations with entrepreneurs, brand builders, and creative minds shaping regional and national markets.',
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=700',
    highlights: [
      'Founder & Marketer Dialogues',
      'Audio & Video Episodes',
      'Launching Soon',
    ],
  },
];

const CLIENTS = [
  'UltraTech Cement',
  'HUL',
  'Sunrise Spices',
  'Shree Cement',
  'Godrej Agrovet',
  'ITC',
  'L&T',
  'Dava India',
  'Wow! Momo',
  'Shyam Metalics',
  'Keya Seth',
];

const INSIGHTS_DATA: InsightItem[] = [
  {
    id: 'maa-awards-gold',
    category: 'News',
    date: '2024',
    readTime: '3 min read',
    title: 'Crea8ors Wins Gold at MAA Awards for UltraTech Mobile Theatre',
    excerpt:
      'Honoured by AdGully under Best Regional Marketing Collaboration for transforming last-mile rural outreach.',
    content: [
      'Crea8ors secured the Gold Trophy at the MAA Awards by AdGully for the UltraTech Cement Mobile Theatre campaign under the Best Regional Marketing Collaboration category.',
      'Nominated across three competitive categories, the campaign connected with rural audiences through live street play performances, branded mobile vans, and interactive engagement zones across Bihar.',
      'By blending culturally rooted entertainment with clear brand messaging, the initiative demonstrated how grassroots storytelling drives high recall in media-dark markets.',
    ],
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'platform-kolkata-chapter',
    category: 'Updates',
    date: 'March 2025',
    readTime: '4 min read',
    title: 'Platform — Business Meets Business Concludes Flagship Kolkata Chapter',
    excerpt:
      'Start-up pitch festival, business networking summit, and Entrepreneurship Excellence Awards at Dhono Dhanyo Auditorium.',
    content: [
      'Crea8ors’ flagship intellectual property, Platform, brought together founders, investors, and industry leaders at Dhono Dhanyo Auditorium, Kolkata.',
      'Featuring a dynamic Pitch Festival, curated fireside chats, and the Entrepreneurship Excellence Awards, Platform created a collaborative stage for emerging enterprises across East India.',
      'Building on this momentum, Crea8ors is expanding the IP ecosystem with the upcoming Platform Podcast — Conversations That Matter.',
    ],
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'jatra-rural-engagement',
    category: 'Blogs',
    date: '2025',
    readTime: '5 min read',
    title: 'Why Jatra & Mobile Theatre Remain Unmatched in Rural Brand Outreach',
    excerpt:
      'How regional cultural formats build emotional trust and deeper consumer engagement beyond conventional mass media.',
    content: [
      'Conventional above-the-line media often struggles to create genuine engagement across tier-3 towns and rural belts in Bengal, Bihar, and Assam.',
      'Through Jatra-based brand integration and Mobile Theatre activations for brands like Sunrise Spices and UltraTech Cement, Crea8ors embeds brand stories natively inside beloved community performances.',
      'Combined with village-level sampling, fairs & melas branding, and hyperlocal consumer touchpoints, regional activations turn spectators into active brand advocates.',
    ],
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000',
  },
];


const services = [
  {
    num: "01",
    title: "Experiential Marketing",
    img: "/point1.png",
    text: "Creating meaningful brand experiences that bring consumers closer to brands.",
    points: [
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
    img: "/point2.png",
    text: "Taking brands beyond conventional media and connecting them with consumers at the grassroots.",
    points: [
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
    img: "/point3.png",
    text: "Integrated brand communication solutions that amplify visibility, build relevance and create lasting impact.",
    points: [
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
    img: "/point4.png",
    text: "Driving measurable business growth through digital strategy, creativity and performance-led marketing.",
    points: [
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

const DIRECTORS = [
  {
    name: 'Sunando Chakraborty',
    role: 'Co-Founder & Director',
    experience: '15+ Years',
    bio: 'Seasoned marketing leader across ABP Group, Radio Mirchi, Reliance Communications, and Mahuaa Bangla, spearheading rural Jatra activations across Bengal & Assam and Crea8ors’ flagship IP Platform.',
  },
  {
    name: 'Shubhadeep Sarkaar',
    role: 'Co-Founder & Director',
    experience: '15+ Years',
    bio: 'Sales and marketing leader across India Today, Mahuaa Media, Focus TV, and Epic Media, pioneering Bengali film integrations and large-scale regional activations.',
  },
];

export default function App() {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number | null>(0);

  // Interactive in-page states (100% single page)
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [expandedVertical, setExpandedVertical] = useState<string | null>('01');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignCaseStudy | null>(null);
  const [selectedIP, setSelectedIP] = useState<IPItem | null>(null);
  const [insightFilter, setInsightFilter] = useState<'All' | 'Blogs' | 'News' | 'Updates'>('All');
  const [selectedArticle, setSelectedArticle] = useState<InsightItem | null>(null);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
   const [direction, setDirection] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  
  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

   useEffect(() => {
    if (isCarouselPaused) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextTestimonial, isCarouselPaused]);

  // Business Enquiry Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowButtons(scrolled > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const hasActiveOverlay = Boolean(selectedCampaign || selectedIP || selectedArticle || isMenuOpen);

  useEffect(() => {
    if (hasActiveOverlay) {
      lenisRef.current?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCampaign(null);
        setSelectedIP(null);
        setSelectedArticle(null);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [hasActiveOverlay]);

  useGSAP(
    () => {
      gsap.set('.footer-eight', { y: 0, rotation: 0, scale: 1 });
      gsap.to('.footer-eight', {
        y: -120,
        rotation: -12,
        scale: 1.15,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.footer-crea8ors-container',
          start: 'top 100%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });

      const heroTl = gsap.timeline();
      heroTl.from('.hero-line', {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'expo.out',
        clearProps: 'all',
      });

      gsap.to('.hero-float', {
        y: -20,
        rotation: 5,
        duration: 2.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.4,
          from: 'random',
        },
      });

      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 94%',
            toggleActions: 'play none none none',
          },
          y: 32,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
        });
      });

      gsap.utils.toArray<HTMLElement>('.gsap-reveal-left').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 94%',
            toggleActions: 'play none none none',
          },
          x: -45,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          clearProps: 'all',
        });
      });

      gsap.utils.toArray<HTMLElement>('.gsap-reveal-right').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 94%',
            toggleActions: 'play none none none',
          },
          x: 45,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          clearProps: 'all',
        });
      });

      gsap.to('.client-ticker', {
        xPercent: -50,
        duration: 36,
        ease: 'none',
        repeat: -1,
      });

      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setSelectedCampaign(null);
    setSelectedIP(null);
    setSelectedArticle(null);
    document.body.style.overflow = '';
    lenisRef.current?.start();
    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(el, { offset: -90, duration: 1.05 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  };

  const scrollToTop = () => {
    setIsMenuOpen(false);
    setSelectedCampaign(null);
    setSelectedIP(null);
    setSelectedArticle(null);
    document.body.style.overflow = '';
    lenisRef.current?.start();
    requestAnimationFrame(() => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 1 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  const enquireForVertical = (verticalTitle: string) => {
    setSelectedServices((prev) => (prev.includes(verticalTitle) ? prev : [...prev, verticalTitle]));
    scrollToSection('contact-form');
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', website: '', message: '' });
    setSelectedServices([]);
    setIsSubmitted(false);
  };

  const visibleCampaigns = showAllProjects
    ? [...FEATURED_CAMPAIGNS, ...EXTRA_CAMPAIGNS]
    : FEATURED_CAMPAIGNS;

  const filteredInsights =
    insightFilter === 'All'
      ? INSIGHTS_DATA
      : INSIGHTS_DATA.filter((item) => item.category === insightFilter);

  return (
    <div
      ref={container}
      className="min-h-screen selection:bg-primary selection:text-black overflow-x-hidden bg-dark text-white bg-grid"
    >
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-white/5">
        <motion.div
          className="h-full bg-primary shadow-[0_0_10px_rgba(255,210,0,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Buttons Group */}
      <AnimatePresence>
        {showButtons && (
          <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
            <motion.button
              type="button"
              onClick={() => scrollToSection('contact-form')}
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Start a Conversation"
              className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] border-2 border-[#25D366] transition-all cursor-pointer"
            >
              <MessageCircle size={22} />
            </motion.button>

            <motion.button
              type="button"
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,210,0,0.3)] border-2 border-primary cursor-pointer"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* SEGMENT 1: Header / Main Navigation */}
      <nav className="fixed top-0 w-full z-[60] bg-dark/85 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-10 flex justify-between items-center h-20 gap-4">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 cursor-pointer text-left focus:outline-none hover:opacity-90 transition-all shrink-0"
        >
         <div className="flex items-center gap-2">
         <img src="/logo.jpeg" alt="Logo" className='w-40 h-15 rounded-2xl ' />
        </div>
        </button>

        {/* Desktop Links + Sub-Menus */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-[11px] font-bold uppercase tracking-[0.16em]">
          {/* About + Dropdown */}
          <div className="relative group">
            <button
              type="button"
              onClick={() => scrollToSection('who-we-are')}
              className="cursor-pointer transition-all hover:text-primary focus:outline-none text-white/80 whitespace-nowrap shrink-0 inline-flex items-center gap-1 py-2"
            >
              About <ChevronDown size={12} className="opacity-60 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-56 rounded-2xl bg-card/95 backdrop-blur-xl border border-white/10 p-2 shadow-2xl flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => scrollToSection('who-we-are')}
                  className="text-left px-3.5 py-2.5 rounded-xl text-[11px] text-white/80 hover:bg-white/5 hover:text-primary transition-colors cursor-pointer"
                >
                  Who We Are
                </button>
             
              
              </div>
            </div>
          </div>

          {/* What We Do + Dropdown */}
          <div className="relative group">
            <button
              type="button"
              onClick={() => scrollToSection('what-we-do')}
              className="cursor-pointer transition-all hover:text-primary focus:outline-none text-white/80 whitespace-nowrap shrink-0 inline-flex items-center gap-1 py-2"
            >
              What We Do 
            </button>
         
          </div>

          {/* Our Work + Dropdown */}
          <div className="relative group">
            <button
              type="button"
              onClick={() => scrollToSection('our-work')}
              className="cursor-pointer transition-all hover:text-primary focus:outline-none text-white/80 whitespace-nowrap shrink-0 inline-flex items-center gap-1 py-2"
            >
              Our Work <ChevronDown size={12} className="opacity-60 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-52 rounded-2xl bg-card/95 backdrop-blur-xl border border-white/10 p-2 shadow-2xl flex flex-col gap-1">
         
                <button
                  type="button"
                  onClick={() => {
                    setShowAllProjects(true);
                    scrollToSection('our-work');
                  }}
                  className="text-left px-3.5 py-2.5 rounded-xl text-[11px] text-white/80 hover:bg-white/5 hover:text-primary transition-colors cursor-pointer"
                >
                  Case Studies
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('clients')}
                  className="text-left px-3.5 py-2.5 rounded-xl text-[11px] text-white/80 hover:bg-white/5 hover:text-primary transition-colors cursor-pointer"
                >
                  Clients
                </button>
              </div>
            </div>
          </div>

      

          {/* Insights + Dropdown */}
          <div className="relative group">
            <button
              type="button"
              onClick={() => {
                setInsightFilter('All');
                scrollToSection('insights');
              }}
              className="cursor-pointer transition-all hover:text-primary focus:outline-none text-white/80 whitespace-nowrap shrink-0 inline-flex items-center gap-1 py-2"
            >
              Insights <ChevronDown size={12} className="opacity-60 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-44 rounded-2xl bg-card/95 backdrop-blur-xl border border-white/10 p-2 shadow-2xl flex flex-col gap-1">
                {(['All', 'Blogs', 'News', 'Updates'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setInsightFilter(tab);
                      scrollToSection('insights');
                    }}
                    className="text-left px-3.5 py-2.5 rounded-xl text-[11px] text-white/80 hover:bg-white/5 hover:text-primary transition-colors cursor-pointer"
                  >
                    {tab === 'All' ? 'All Insights' : tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('contact-form')}
            className="cursor-pointer transition-all hover:text-primary focus:outline-none text-white/80 whitespace-nowrap shrink-0"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => scrollToSection('contact-form')}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-black px-5 py-2.5 text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all rounded-full cursor-pointer focus:outline-none whitespace-nowrap shrink-0"
          >
            Let&apos;s Talk <ArrowRight size={14} />
          </button>
    
        </div>
      </nav>

      {/* Full Navigation Drawer (Mobile & Desktop Menu ☰) - rendered outside backdrop-blur nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            data-lenis-prevent
            className="fixed inset-x-0 top-20 bottom-0 bg-[#050505]/98 backdrop-blur-2xl z-[55] overflow-y-auto overscroll-contain border-t border-white/10 px-6 py-8 md:p-12"
          >
            <div className="max-w-[1440px] mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold block">
                  01. About Us
                </span>
                <div className="flex flex-col gap-3 text-xl font-display font-bold items-start">
                  <button
                    type="button"
                    onClick={() => scrollToSection('who-we-are')}
                    className="py-1 text-white/85 hover:text-primary transition-colors cursor-pointer"
                  >
                    Who We Are
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowMoreAbout(true);
                      scrollToSection('who-we-are');
                    }}
                    className="py-1 text-white/85 hover:text-primary transition-colors cursor-pointer"
                  >
                    Our Story &amp; Team
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('awards')}
                    className="py-1 text-white/85 hover:text-primary transition-colors cursor-pointer"
                  >
                    Awards
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold block">
                  02. What We Do
                </span>
                <div className="flex flex-col gap-3 text-lg font-display font-bold items-start">
                  {VERTICALS.map((v) => (
                    <button
                      key={v.num}
                      type="button"
                      onClick={() => {
                        setExpandedVertical(v.num);
                        scrollToSection('what-we-do');
                      }}
                      className="py-1 text-left text-white/85 hover:text-primary transition-colors cursor-pointer"
                    >
                      {v.title}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => scrollToSection('our-ips')}
                    className="py-1 text-primary hover:text-white transition-colors cursor-pointer"
                  >
                    Our IPs
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold block">
                  03. Our Work
                </span>
                <div className="flex flex-col gap-3 text-xl font-display font-bold items-start">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAllProjects(false);
                      scrollToSection('our-work');
                    }}
                    className="py-1 text-white/85 hover:text-primary transition-colors cursor-pointer"
                  >
                    Campaigns
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAllProjects(true);
                      scrollToSection('our-work');
                    }}
                    className="py-1 text-white/85 hover:text-primary transition-colors cursor-pointer"
                  >
                    Case Studies
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('clients')}
                    className="py-1 text-white/85 hover:text-primary transition-colors cursor-pointer"
                  >
                    Clients
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold block">
                  04. Insights
                </span>
                <div className="flex flex-col gap-3 text-xl font-display font-bold items-start">
                  {(['Blogs', 'News', 'Updates'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => {
                        setInsightFilter(tab);
                        scrollToSection('insights');
                      }}
                      className="py-1 text-white/85 hover:text-primary transition-colors cursor-pointer"
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold block">
                  05. Contact
                </span>
                <div className="flex flex-col gap-3 text-xl font-display font-bold items-start">
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact-form')}
                    className="py-1 text-white/85 hover:text-primary transition-colors cursor-pointer"
                  >
                    Business Enquiries
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact-form')}
                    className="mt-2 bg-primary text-black px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
                  >
                    Let&apos;s Talk <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 md:pt-32 pb-16">
         <section className="mb-32 relative bg-primary rounded-[60px] overflow-hidden py-32 text-black">
       

          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20">
            <div className="flex flex-col items-center text-center mb-24">
               <div className="flex items-center gap-2 mb-6">
            
                 <span className="text-3xl font-impact uppercase tracking-tighter">crea8ors</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-impact uppercase max-w-2xl leading-none tracking-tight ">
                 Boost Your Brand's Success With <br/>
                 <span className="text-white drop-shadow-2xl">crea8ors Digital Marketing </span>
               </h2>
            </div>

            {/* Main Mockup Card */}
            <div className="relative max-w-5xl mx-auto mb-24">
               <div className="bg-dark rounded-3xl border border-white/10 p-2 md:p-4 rotate-x-6 rotate-y-3 shadow-2xl overflow-hidden group hover:rotate-0 transition-all duration-700">
                  <div className="bg-[#111] rounded-2xl p-8 md:p-16 text-center border border-white/5 relative">
                
                     
                     <h3 className="text-5xl md:text-7xl font-impact text-white mb-8 leading-none uppercase">
                        The only all-in-one <span className="text-primary italic">place</span><br/> to grow your Engagement
                     </h3>
                     <p className="text-white/40 max-w-xl mx-auto mb-10 text-sm">
                        We deliver tailored digital marketing solutions to grow your business. From SEO to social media, let's achieve your goals together.
                     </p>
                     <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Explore Our Works</button>
                        {/* <button className="bg-white/5 text-white border border-white/10 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10">
                           Watch A Demo <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black">▶</div>
                        </button> */}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>
        <section className="hero-section mb-4">
          <div className="relative mb-16">
            <h1 className="text-[12vw] font-black leading-[0.8] tracking-tighter font-display text-white gsap-reveal hero-line relative">
              crea<span className="text-primary italic">8</span>ors.
            </h1>
          </div>
           <section id="who-we-are" className="mb-24 md:mb-32">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 bento-card flex flex-col justify-between gsap-reveal-left bg-[#0C0616] border-white/10">
              <div>
                <span className="text-primary font-mono text-[11px] uppercase font-bold tracking-[0.2em] mb-4 block">
                  Who We Are
                </span>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-impact uppercase leading-[0.9] tracking-tight text-white">
                  WE THINK <br />
                  <span className="text-primary italic">BEYOND</span> THE <br />
                  <span className="text-outline">ORDINARY.</span>
                </h2>
              </div>

              <div className="mt-10 flex items-center justify-between pt-6 border-t border-white/10">
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                  Our Story · Team · Awards
                </span>
                <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center font-impact text-2xl italic">
                  8
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bento-card flex flex-col justify-between gsap-reveal-right bg-card border-white/10 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-6 max-w-2xl">
                <p className="text-xl sm:text-2xl font-display font-medium text-white leading-snug">
                  Crea8ors is an integrated marketing and brand experience agency that transforms ideas
                  into meaningful consumer connections.
                </p>
                <p className="text-white/60 text-base leading-relaxed">
                  From immersive brand activations and grassroots outreach to integrated brand
                  solutions and digital growth, we help brands engage, connect and create impact.
                </p>
              </div>

              <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setShowMoreAbout((prev) => !prev)}
                  className="bg-primary text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest inline-flex items-center gap-3 hover:bg-white transition-all cursor-pointer whitespace-nowrap"
                >
                  {showMoreAbout ? 'Hide Agency Story' : 'Know More About Us'}{' '}
                  {showMoreAbout ? <ChevronUp size={16} /> : <ArrowRight size={16} />}
                </button>
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                  Mission · Vision · Leadership
                </span>
              </div>
            </div>
          </div>

          {/* Inline Expandable Story, Mission, Vision & Leadership Drawer */}
          <AnimatePresence initial={false}>
            {showMoreAbout && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div className="bento-card bg-[#0C0616] border-white/10 space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Target size={20} />
                    </div>
                    <h3 className="text-2xl font-impact uppercase text-white">Our Mission</h3>
                    <p className="text-white/65 text-sm leading-relaxed">
                      To build innovative, effective and impactful brand solutions that exceed
                      expectations and drive business growth.
                    </p>
                  </div>

                  <div className="bento-card bg-[#050C0A] border-white/10 space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Eye size={20} />
                    </div>
                    <h3 className="text-2xl font-impact uppercase text-white">Our Vision</h3>
                    <p className="text-white/65 text-sm leading-relaxed">
                      To become a leading creative force recognised for strategic thinking,
                      transformative ideas, and unwavering dedication to client success.
                    </p>
                  </div>

                  {DIRECTORS.map((director) => (
                    <div
                      key={director.name}
                      className="bento-card bg-card border-white/10 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold">
                          {director.role}
                        </span>
                        <span className="text-[11px] font-mono text-white/40">
                          {director.experience}
                        </span>
                      </div>
                      <h3 className="text-3xl font-impact uppercase text-white">{director.name}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{director.bio}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

          {/* <div className="grid md:grid-cols-3 gap-12 mb-16 border-t border-white/5 pt-12">
            <div className="flex items-center gap-4 hero-line gsap-reveal-left">
              <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                <img src="/banerjee.png" alt="Sunando" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold">Sunando Chakraborty</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Founder & Growth Strategist</p>
              </div>
            </div>
            <div className="hero-line gsap-reveal">
              <p className="text-lg leading-snug">
                Hello, we are <span className="text-primary">Crea8ors.</span>, the high-performance marketing agency <span className="text-white/40 italic">scaling brands since 2009.</span>
              </p>
            </div>
            <div className="flex gap-4 hero-line gsap-reveal-right">
              <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm font-bold mb-1">ROI-Obsessed Scaling</p>
                <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider">Stop bleeding budget. We combine predictive data with elite creative to own your market.</p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-[40px] overflow-hidden group gsap-reveal">
             <img 
               src="/hero.png" 
               alt="Team at work" 
               className="w-full h-full object-cover  opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" 
             />
             <div className="absolute top-0 left-0 p-8 flex gap-12 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                <span>Performance Marketing</span>
                <span>ROI Optimization</span>
                <span>Growth 2025</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
             <div className="absolute bottom-12 left-12">
                <a href="#projects" className="bg-primary text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-white hover:text-black transition-all group shadow-2xl">
                  Scale your revenue <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
             </div>
             <div className="absolute bottom-12 right-12 flex gap-12 items-end">
                <div className="text-right">
                  <p className="text-4xl font-black italic tracking-tighter">$150M+</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Managed Ad Spend</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black italic tracking-tighter">4.5x</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Average ROAS</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black italic tracking-tighter">250%</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Avg Annual Scaling</p>
                </div>
             </div>
          </div> */}
          
        </section>

        
        {/* SEGMENT 2: Hero Banner – Explore our Work */}
     <div className="pt-28 pb-32 relative text-white  selection:bg-primary selection:text-black">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#200F3C]/20 via-transparent to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-primary/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* HERO HEADER - THE JOURNEY (SLIDE 2) */}
        {/* <div className="mb-32 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8"
          >
            <Compass size={10} className="text-primary" /> OUR JOURNEY
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-impact font-medium leading-none uppercase tracking-tighter mb-8"
          >
            THE ROAD TO <span className="text-primary italic">BRAND DOMINANCE.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed space-y-6"
          >
            <p>
              Crea8ors is a dynamic marketing and branding agency crafting impactful brand experiences across diverse sectors.
            </p>
            <p className="text-sm text-white/40 max-w-2xl mx-auto">
              We specialise in experiential marketing, rural activations, regional in-film associations, brand engagement, creative design, branded content, events and production.
            </p>
            <div className="pt-6 font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">
              Our focus is simple &mdash; <span className="text-white">innovative ideas</span>, <span className="text-white">meaningful engagement</span>, <span className="text-white">measurable growth</span>.
            </div>
          </motion.div>
        </div> */}

    
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* <div className="bg-gradient-to-br from-[#0C0616] to-[#05010A] border border-white/5 p-10 md:p-16 rounded-[40px] relative overflow-hidden group hover:border-primary/20 transition-all duration-500"> */}
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block">// Core Drive</span>
              <h2 className="text-3xl md:text-4xl font-impact uppercase tracking-tight text-white">
                OUR MISSION
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                To build innovative, effective and impactful brand solutions that exceed expectations and drive business growth.
              </p>
            </div> */}
          {/* </div> */}

          {/* <div className="bg-gradient-to-br from-[#050C0A] to-black border border-white/5 p-10 md:p-16 rounded-[40px] relative overflow-hidden group hover:border-primary/20 transition-all duration-500"> */}
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">// The Horizon</span>
              <h2 className="text-3xl md:text-4xl font-impact uppercase tracking-tight text-white">
                OUR VISION
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                To become a leading creative force recognised for strategic thinking, transformative ideas, and unwavering dedication to client success.
              </p>
            </div> */}
          {/* </div> */}
        </div>

        {/* LEADERSHIP & DIRECTORS (SLIDES 4 & 5) */}
       
{/* LEADERSHIP HEADING */}
<div className="col-span-full mt-2 mb-6 border-t border-white/5 pt-6">
  <div className="gsap-reveal">
    <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">
      // Leadership Team
    </span>

    <h3 className="text-5xl sm:text-7xl md:text-8xl font-impact font-bold tracking-tight uppercase leading-[0.9]">
      The{" "}
      <span className="relative inline-block">
        <span className="text-outline italic">Visionaries.</span>
        <Search className="absolute -bottom-2 -left-5 sm:-left-8 text-white w-5 sm:w-6 h-5 sm:h-6 -rotate-45 opacity-40" />
      </span>
    </h3>
  </div>
</div>

{/* LEADERSHIP CARDS */}
<div className="col-span-full w-full min-w-0 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

  {[
    {
      name: "Sunando Chakraborty",
      role: "Co-founder & Director",
      desc: "15+ years experience in business development and client strategy. Storyteller & brand enthusiast.",
      img: "/banerjee.png",
      reveal: "gsap-reveal-left"
    },
    {
      name: "Shubhadeep Sarkaar",
      role: "Director",
      desc: "15+ years expertise in sales and marketing across leading media groups including India Today.",
      img: "/sarkar.png",
      reveal: "gsap-reveal-right"
    }
  ].map((director, idx) => (
    <div
      key={idx}
      className={cn(
        "w-full min-w-0 bento-card p-0 flex flex-col overflow-hidden group",
        director.reveal
      )}
    >

      {/* IMAGE */}
      <div className="w-full h-[260px] sm:h-[320px] md:h-[300px] lg:h-[380px] overflow-hidden bg-black/20">
        <img
          src={director.img}
          alt={director.name}
          className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* DETAILS */}
      <div className="w-full min-w-0 p-5 sm:p-7 md:p-8 flex flex-col justify-center">

        <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-widest mb-3">
          {director.role}
        </span>

        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-tight break-words">
          {director.name}
        </h4>

        <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-md">
          {director.desc}
        </p>

      </div>
    </div>
  ))}

</div>


        {/* {[
          { 
            name: "Sunando Chakraborty", 
            role: "Co-founder & Director", 
            desc: "15+ years experience in business development and client strategy. Storyteller & brand enthusiast.",
            img: "/banerjee.png",
            reveal: "gsap-reveal-left"
          },
          { 
            name: "Shubhadeep Sarkaar", 
            role: "Director", 
            desc: "15+ years expertise in sales and marketing across leading media groups including India Today.",
            img: "/sarkar.png",
            reveal: "gsap-reveal-right"
          }
        ].map((director, idx) => (
          <div key={idx} className={cn("md:col-span-6 md:row-span-2 bento-card p-0 flex flex-col md:flex-row group", director.reveal)}>
             <div className="md:w-1/2 overflow-hidden h-[300px] md:h-auto">
                <img src={director.img} alt={director.name} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
             </div>
             <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-widest mb-2">{director.role}</span>
                <h4 className="text-3xl font-display font-bold mb-4">{director.name}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{director.desc}</p>
             </div>
          </div>
        ))} */}

        {/* BENEFITS SECTION */}
        {/* <div className="md:col-span-4 md:row-span-2 bento-card bg-primary group gsap-reveal">
           <h4 className="text-5xl font-impact font-black leading-none mb-8 tracking-tighter italic">HOW DOES YOUR <span className="text-outline">BRAND</span> BENEFIT?</h4>
           <p className="text-white/80 text-sm leading-relaxed">
             We create a cycle of engagement that continuously elevates your brand's market position through immersion and constant conversation.
           </p>
           <div className="mt-8 pt-8 border-t border-white/20">
             <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">Status: Dominating</div>
           </div>
        </div> */}

        {/* CORE STRENGTHS (SLIDE 6) */}
        {/* <div className="mb-40 py-24 px-8 md:px-16 bg-[#0B0C10] rounded-[50px] border border-white/5 relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-primary font-mono text-xs uppercase font-bold tracking-[0.2em] block">// Competitive Edge</span>
              <h2 className="text-4xl md:text-6xl font-impact uppercase tracking-tight text-white leading-none">
                OUR CORE <br/>
                <span className="text-primary italic">STRENGTHS</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                By maintaining absolute control over our planning and execution channels, we scale activations with zero service degradation.
              </p>
              <div className="h-[2px] w-20 bg-primary rounded" />
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-impact text-primary/40 group-hover:text-primary font-black transition-colors">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
                      {strength}
                    </h3>
                  </div>
                  <Zap className="w-4 h-4 text-primary/20 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div> */}

    

      </div>
    </div>

        {/* SEGMENT 3: Introduction – Who We Are */}
       

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
         

        {/* STRENGTHS SECTION */}
        {/* <div id="strengths" className="md:col-span-12 mt-12 mb-4">
           <div className="flex items-end justify-between gsap-reveal">
             <div className="max-w-2xl">
               <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">// Core Capabilities</span>
               <h3 className="text-7xl md:text-8xl font-impact font-bold tracking-tight uppercase leading-[0.8] mb-2">Our <span className="relative inline-block px-1"><span className="text-outline">Strategic</span> <Award className="absolute -top-4 -right-8 text-primary animate-pulse w-8 h-8 rotate-12" /></span> Ecosystem.</h3>
             </div>
             <p className="hidden md:block text-white/40 text-sm max-w-xs text-right">Hyper-specialized services designed for creative disruption and performance.</p>
           </div>
        </div>

        {[
          { title: "Meta Ads Mastery", desc: "Aggressive scaling strategies for Facebook & Instagram that deliver actual sales.", icon: <Target size={24} className="text-primary" />, span: "md:col-span-4", reveal: "gsap-reveal-left" },
          { title: "Search Dominance", desc: "High-intent SEM and SEO campaigns that own the search results.", icon: <Zap size={24} className="text-primary" />, span: "md:col-span-4", reveal: "gsap-reveal" },
          { title: "Conversion (CRO)", desc: "Optimizing every pixel of your funnel to maximize every dollar of spend.", icon: <CheckCircle2 size={24} className="text-primary" />, span: "md:col-span-4", reveal: "gsap-reveal-right" },
          { title: "Creative Sprints", desc: "Rapid-fire ad creative production designed strictly for high CTR and conversion.", icon: <Palette size={24} className="text-primary" />, span: "md:col-span-6", reveal: "gsap-reveal-left" },
          { title: "Growth Engine", desc: "Full-stack growth systems that automate your acquisition and retention.", icon: <Award size={24} className="text-primary" />, span: "md:col-span-6", reveal: "gsap-reveal-right" }
        ].map((item, idx) => (
          <div key={idx} className={cn("bento-card group hover:bg-white/5 transition-all", item.span, item.reveal)}>
             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
               {item.icon}
             </div>
             <h4 className="text-2xl font-display font-bold mb-3">{item.title}</h4>
             <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))} */}

        {/* DETAILED SERVICES SECTION */}
        {/* <div id="services" className="md:col-span-12 mt-24 mb-4 border-t border-white/5 pt-12">
           <div className="flex items-end justify-between gsap-reveal">
             <div className="max-w-2xl">
               <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">// Specialized Solutions</span>
               <h3 className="text-7xl md:text-8xl font-impact font-bold tracking-tight uppercase leading-[0.8]"><span className="text-primary italic">Our</span> <span className="text-outline">Services.</span></h3>
             </div>
             <p className="hidden md:block text-white/40 text-sm max-w-xs text-right">Deep-dive services that bridge the gap between vision and execution.</p>
           </div>
        </div>

        {[
          { title: "Google Ads (PPC)", desc: "Capturing high-intent buyers exactly when they're searching for you.", icon: <Globe size={24} className="text-primary" />, reveal: "gsap-reveal-left" },
          { title: "E-com Scaling", desc: "A-Z management for Shopify and Amazon brands to hit 7-8 figures.", icon: <ShoppingBag size={24} className="text-primary" />, reveal: "gsap-reveal" },
          { title: "Performance Creatives", desc: "Direct-response video and static ads that actually convert.", icon: <Video size={24} className="text-primary" />, reveal: "gsap-reveal-right" },
          { title: "Influencer Whitelisting", desc: "Leveraging creator audiences via paid media for massive social proof.", icon: <Users size={24} className="text-primary" />, reveal: "gsap-reveal-left" },
          { title: "Retention Flow", desc: "Elite email and SMS marketing to maximize customer Lifetime Value.", icon: <Mail size={24} className="text-primary" />, reveal: "gsap-reveal" },
          { title: "Data Analytics", desc: "Deep-dive attribution modeling to understand where every lead comes from.", icon: <BarChart3 size={24} className="text-primary" />, reveal: "gsap-reveal-right" }
        ].map((service, idx) => (
          <div key={idx} className={cn("md:col-span-4 bento-card group hover:bg-white/5 transition-all", service.reveal)}>
             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
               {service.icon}
             </div>
             <h4 className="text-2xl font-display font-bold mb-3">{service.title}</h4>
             <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
        */}

        {/* BENEFITS SECTION */}
        <div className="md:col-span-4 md:row-span-2 bento-card bg-primary group gsap-reveal">
           <h4 className="text-5xl font-impact font-black leading-none mb-8 tracking-normal italic">HOW DOES YOUR <span className="text-outline">BRAND</span> BENEFIT?</h4>
           <p className="text-white/80 text-sm leading-relaxed">
             We create a cycle of engagement that continuously elevates your brand's market position through immersion and constant conversation.
           </p>
           <div className="mt-8 pt-8 border-t border-white/20">
             <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">Status: Dominating</div>
           </div>
        </div>

        <div className="md:col-span-8 md:row-span-2 bento-card grid grid-cols-2 gap-4 benefits-grid gsap-reveal p-4">
          {[
            { label: "Acquisition", text: "Targeted high-intent traffic", icon: <Target size={16} /> },
            { label: "Scalability", text: "Uncapped revenue growth", icon: <Zap size={16} /> },
            { label: "LTV Boost", text: "Maximized customer value", icon: <CheckCircle2 size={16} /> },
            { label: "Predictability", text: "Data-backed results only", icon: <Award size={16} /> }
          ].map((benefit, i) => (
            <div key={i} className="benefit-item bento-card border-none bg-white/5 p-6 flex flex-col gap-2 hover:bg-white/10 transition-all">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-2">
                {benefit.icon}
              </div>
              <span className="font-mono text-[10px] uppercase text-primary font-bold tracking-widest">{benefit.label}</span>
              <p className="text-white/50 text-xs leading-tight">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>

        {/* SEGMENT 4: What We Do (4 Verticals + Our IPs) */}
        <section id="what-we-do" className="mb-24 md:mb-32 border-t border-white/5 pt-20">
        
          {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 gsap-reveal">
            <div className="max-w-3xl">
              <span className="text-primary font-mono text-[11px] uppercase font-bold tracking-[0.2em] mb-3 block">
                What We Do
              </span>
              <h2 className="text-5xl sm:text-7xl font-impact uppercase leading-[0.88] tracking-tight text-white mb-4">
                FOUR INTEGRATED <span className="text-primary italic">VERTICALS.</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg">
                One unified approach to building brands.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('our-ips')}
              className="bg-white/5 border border-white/15 text-white px-7 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest inline-flex items-center gap-3 hover:bg-primary hover:text-black hover:border-primary transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Explore Services (incl IPs) <ArrowRight size={16} />
            </button>
          </div> */}

          {/* 4 Vertical Cards */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {VERTICALS.map((vertical) => {
              const isExpanded = expandedVertical === vertical.num;
              return (
                <div
                  key={vertical.num}
                  className="bento-card p-0 flex flex-col justify-between group hover:border-primary/40 transition-all duration-500 gsap-reveal"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                      <img
                        src={vertical.image}
                        alt={vertical.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                      <span className="absolute top-5 left-5 text-3xl font-impact text-primary drop-shadow">
                        {vertical.num}.
                      </span>
                    </div>

                    <div className="p-6 pb-4">
                      <h3 className="text-2xl font-impact uppercase tracking-tight text-white mb-3 leading-tight">
                        {vertical.title}
                      </h3>
                      <p className="text-white/60 text-xs leading-relaxed mb-4">{vertical.tagline}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <button
                      type="button"
                      onClick={() => setExpandedVertical(isExpanded ? null : vertical.num)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-wider text-white/80 hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between cursor-pointer mb-3"
                    >
                      <span>{isExpanded ? 'Hide Capabilities' : 'View Capabilities'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2 pb-4 overflow-hidden"
                        >
                          {vertical.services.map((item, i) => (
                            <li
                              key={i}
                              className="text-xs text-white/70 flex items-start gap-2 leading-snug"
                            >
                              <span className="text-primary font-bold">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={() => enquireForVertical(vertical.title)}
                      className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white inline-flex items-center gap-2 transition-colors cursor-pointer pt-2"
                    >
                      Explore More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div> */}

          {/* Our IPs – Ideas We Own. Experiences We Create */}
          {/* <div
            id="our-ips"
            className="bento-card bg-[#0C0616] border-white/10 p-8 md:p-12 rounded-[40px] gsap-reveal"
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-primary font-mono text-[11px] uppercase font-bold tracking-[0.2em] mb-2 block">
                  Our IPs
                </span>
                <h3 className="text-3xl sm:text-5xl font-impact uppercase tracking-tight text-white">
                  Ideas We Own. <span className="text-primary italic">Experiences We Create.</span>
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIP(OUR_IPS[0])}
                className="bg-primary text-black px-7 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                Explore Our Properties <ArrowRight size={15} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {OUR_IPS.map((ip, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedIP(ip)}
                  className="rounded-3xl overflow-hidden border border-white/10 bg-dark/70 hover:border-primary/40 transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                    <img
                      src={ip.image}
                      alt={ip.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-primary uppercase tracking-wider mb-2">
                        <span>{ip.status}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-white/50">{ip.subtitle}</span>
                      </div>
                      <h4 className="text-2xl font-impact uppercase tracking-tight text-white mb-2 group-hover:text-primary transition-colors">
                        {ip.name}
                      </h4>
                      <p className="text-white/55 text-xs leading-relaxed">{ip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </section>

         
<section className="min-h-screen grid lg:grid-cols-12 bg-dark border-t border-white/5 overflow-hidden">

  {/* LEFT SIDE */}
  <div className="lg:col-span-4 p-8 sm:p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-black relative z-10">
    <div className="gsap-reveal">
      <h2 className="text-[16vw] sm:text-[12vw] lg:text-[6vw] font-bold leading-[0.9] tracking-tighter mb-8 italic uppercase">
        What.<br />we.<br />do.
      </h2>

      <div className="w-24 h-2 bg-gradient-to-r from-primary via-orange-500 to-purple-600 rounded-full mb-8 lg:mb-12" />

      <p className="text-white/40 text-lg max-w-sm leading-relaxed uppercase tracking-widest font-mono text-[10px]">
        Seamless integration of performance media, creative tech, and brand storytelling.
      </p>
    </div>
  </div>

  {/* DESKTOP: HORIZONTAL EXPANDING PANELS */}
  <div className="hidden lg:flex lg:col-span-8 flex-row min-h-[800px] bg-black">

    {services.map((panel, idx) => (
      <div
        key={idx}
        className="flex-1 min-w-0 relative group overflow-hidden border-r border-white/5 last:border-r-0 flex flex-col justify-end p-6 xl:p-8 transition-all duration-700 ease-in-out hover:flex-[2.8] focus-within:flex-[2.8]"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={panel.img}
            alt={panel.title}
            className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:via-black/80 transition-all duration-700" />
        </div>

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-4 group-hover:translate-x-2 transition-transform">
            <div className="w-5 h-[1px] bg-primary flex-shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              {panel.title}
            </span>
          </div>

          <div className="text-[75px] xl:text-[100px] font-impact font-medium leading-none text-outline-thin text-transparent mb-6 group-hover:text-white transition-all duration-500">
            {panel.num}
          </div>

          {/* Hover Content */}
          <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[650px] group-hover:opacity-100 group-focus-within:max-h-[650px] group-focus-within:opacity-100 transition-all duration-700">
            <div className="h-[2px] w-12 bg-primary mb-5" />

            <h3 className="text-white text-xl xl:text-2xl font-bold uppercase leading-tight mb-4">
              {panel.title}
            </h3>

            <p className="text-white/70 text-xs leading-relaxed mb-6">
              {panel.text}
            </p>

            <ul className="space-y-3 pb-4">
              {panel.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-[10px] xl:text-xs uppercase tracking-wide leading-relaxed">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[2px] w-0 group-hover:w-12 bg-primary transition-all duration-700 mt-4" />
        </div>
      </div>
    ))}
  </div>

  {/* MOBILE & TABLET: STACKED ACCORDION */}
  <div className="lg:hidden flex flex-col gap-3 p-4 sm:p-8 bg-black">

    {services.map((panel, idx) => {
      const isOpen = activeService === idx;

      return (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
            isOpen ? "border-primary/40" : "border-white/10"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={panel.img}
              alt={panel.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isOpen
                  ? "opacity-40 scale-105"
                  : "opacity-20 grayscale"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/80" />
          </div>

          {/* Accordion Header */}
          <button
            type="button"
            onClick={() => setActiveService(isOpen ? null : idx)}
            aria-expanded={isOpen}
            className="relative z-10 w-full flex items-center justify-between gap-4 p-5 sm:p-7 text-left"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="text-primary font-impact text-4xl sm:text-5xl flex-shrink-0">
                {panel.num}
              </span>

              <div className="min-w-0">
                <span className="block text-primary text-[9px] font-bold uppercase tracking-widest mb-1">
                  Service {panel.num}
                </span>
                <h3 className="text-white text-sm sm:text-lg font-bold uppercase leading-tight">
                  {panel.title}
                </h3>
              </div>
            </div>

            <span className={`w-9 h-9 flex-shrink-0 rounded-full border border-primary/50 text-primary flex items-center justify-center text-xl transition-transform duration-300 ${
              isOpen ? "rotate-180 bg-primary/10" : ""
            }`}>
              {isOpen ? "−" : "+"}
            </span>
          </button>

          {/* Accordion Content */}
          <div
            className={`relative z-10 grid transition-all duration-500 ease-in-out ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-5 sm:px-7 pb-7">

                <div className="h-[2px] w-12 bg-primary mb-5" />

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                  {panel.text}
                </p>

                <ul className="space-y-3">
                  {panel.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/80 text-[10px] sm:text-xs uppercase tracking-wide leading-relaxed"
                    >
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>

</section>


      <PortfolioGallery />

        {/* SEGMENT 5: Featured Work – Campaigns That Make an Impact */}
        {/* <section id="our-work" className="mb-24 md:mb-32 border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 gsap-reveal">
            <div className="max-w-3xl">
              <span className="text-primary font-mono text-[11px] uppercase font-bold tracking-[0.2em] mb-3 block">
                Featured Work
              </span>
              <h2 className="text-5xl sm:text-7xl font-impact uppercase leading-[0.88] tracking-tight text-white mb-4">
                CAMPAIGNS THAT MAKE <span className="text-primary italic">AN IMPACT.</span>
              </h2>
              <p className="text-white/60 text-base">
                A glimpse of the work we do for leading brands across India.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="bg-primary text-black px-7 py-4 rounded-2xl font-black text-xs uppercase tracking-widest inline-flex items-center gap-3 hover:bg-white transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              {showAllProjects ? 'Show Featured 4' : 'View All Projects'}{' '}
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="bento-card p-0 flex flex-col justify-between group hover:border-primary/40 transition-all duration-500 gsap-reveal"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-mono text-primary uppercase tracking-wider mb-2">
                      {campaign.category}
                    </div>
                    <h3 className="text-2xl font-impact uppercase tracking-tight text-white mb-3 leading-tight">
                      {campaign.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{campaign.summary}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCampaign(campaign)}
                    className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white inline-flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    View Case Study <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* SEGMENT 6: Our Clients – Brands That Trust Us */}
        <section id="clients" className="mb-4 md:mb-2 border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 gsap-reveal">
            <div>
              <span className="text-primary font-mono text-[11px] uppercase font-bold tracking-[0.2em] mb-3 block">
                Our Clients
              </span>
              <h2 className="text-5xl sm:text-7xl font-impact uppercase leading-[0.88] tracking-tight text-white">
                BRANDS THAT <span className="text-primary italic">TRUST US.</span>
              </h2>
            </div>
        
          </div>
{/* 
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-2 gsap-reveal">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="rounded-2xl bg-card border border-white/10 hover:border-primary/40 px-5 py-6 flex items-center justify-center text-center transition-all duration-300 group"
              >
                <span className="font-display font-bold text-sm sm:text-base text-white/80 group-hover:text-primary transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div> */}
        </section>



{/* SECTION: WE ARE ONE */}
     
         {/* BRAND BENEFIT SECTION */}
     
                 <section id="clients" className="py-14 border-b border-white/5 ">
    <div className="max-w-[1440px] mx-auto px-12 mb-12 flex items-center gap-6 gsap-reveal">
     {/* <span className="font-mono text-[10px] uppercase font-bold opacity-30 tracking-[0.3em]">
      Industry Partners
     </span> */}
     <div className="h-[1px] flex-1 bg-white/5" />
  </div>

  <div className="flex whitespace-nowrap overflow-hidden">
    <div className="client-ticker flex gap-16 items-center py-6">
      {[...clients, ...clients].map((client, idx) => (
        <ClientItem key={idx} name={client.name} img={client.img} />
      ))}
    </div>
  </div>
</section>
 <section className="py-40  border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
            
            {/* Pie Chart Side */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {/* Brand Immersion - Mint */}
                <motion.path 
                  d="M50,50 L90,50 A40,40 0 0,0 50,10 Z"
                  fill="#D1D8C5"
                  animate={{ 
                    scale: activeBenefit === 3 ? 1.1 : 1,
                    opacity: activeBenefit === 3 || activeBenefit === null ? 1 : 0.3
                  }}
                  onMouseEnter={() => setActiveBenefit(3)}
                  onMouseLeave={() => setActiveBenefit(null)}
                  className="cursor-pointer"
                />
                {/* Brand Engagement - Lavender */}
                <motion.path 
                  d="M50,50 L50,10 A40,40 0 0,0 10,50 Z"
                  fill="#D8AED3"
                  animate={{ 
                    scale: activeBenefit === 2 ? 1.1 : 1,
                    opacity: activeBenefit === 2 || activeBenefit === null ? 1 : 0.3
                  }}
                  onMouseEnter={() => setActiveBenefit(2)}
                  onMouseLeave={() => setActiveBenefit(null)}
                  className="cursor-pointer"
                />
                {/* Brand Conversation - Soft Orange */}
                <motion.path 
                  d="M50,50 L10,50 A40,40 0 0,0 50,90 Z"
                  fill="#FFBE98"
                  animate={{ 
                    scale: activeBenefit === 1 ? 1.1 : 1,
                    opacity: activeBenefit === 1 || activeBenefit === null ? 1 : 0.3
                  }}
                  onMouseEnter={() => setActiveBenefit(1)}
                  onMouseLeave={() => setActiveBenefit(null)}
                  className="cursor-pointer"
                />
                {/* Brand Impression - Peach */}
                <motion.path 
                  d="M50,50 L50,90 A40,40 0 0,0 90,50 Z"
                  fill="#FFCAB0"
                  animate={{ 
                    scale: activeBenefit === 0 ? 1.1 : 1,
                    opacity: activeBenefit === 0 || activeBenefit === null ? 1 : 0.3
                  }}
                  onMouseEnter={() => setActiveBenefit(0)}
                  onMouseLeave={() => setActiveBenefit(null)}
                  className="cursor-pointer"
                />
                {/* Center Hole for Donut Look */}
                <circle cx="50" cy="50" r="12" className="fill-black" />
              </svg>
              
              {/* Logo in Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-50 md:scale-75">
                <span className="text-white/20 font-black text-4xl">C8</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="gsap-reveal mb-16">
                 <h2 className="text-4xl md:text-7xl font-impact leading-none uppercase tracking-tighter mb-4">
                   How Does Your<br/>
                   <span className="text-primary italic">Brand</span> Benefit?
                 </h2>
                 <div className="w-20 h-1 bg-primary rounded-full" />
              </div>

              <div className="space-y-4">
                {[
                  { title: "Brand Impression", desc: "Repeated perceptive impression", color: "#FFCAB0" },
                  { title: "Brand Conversation", desc: "Continuous brand conversation", color: "#FFBE98" },
                  { title: "Brand Engagement", desc: "It's all about closeness and engagement", color: "#D8AED3" },
                  { title: "Brand Immersion", desc: "Increases the brand perception", color: "#D1D8C5" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setActiveBenefit(i)}
                    onMouseLeave={() => setActiveBenefit(null)}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "flex items-center gap-6 p-6 rounded-3xl border transition-all duration-500 cursor-pointer group",
                      activeBenefit === i 
                        ? "bg-white/5 border-white/10 translate-x-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
                        : "bg-transparent border-transparent opacity-40 hover:opacity-100"
                    )}
                  >
                    <div 
                      className="w-14 h-14 rounded-2xl shrink-0 border-2 border-white/10 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-mono">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

              <section className="py-24  border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-1 gap-8">

            {/* Review Card Carousel */}
            <div 
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              className="bg-white/5 p-10 rounded-[40px] gsap-reveal border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[400px]"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Zap key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                    ))}
                  </div>
                  <div className="flex gap-3 relative z-20">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors shadow-xl"
                    >
                      <ChevronLeft size={22} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors shadow-xl"
                    >
                      <ChevronRight size={22} />
                    </motion.button>
                  </div>
                </div>

                <div className="relative h-40">
                  <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.p 
                      key={currentTestimonial}
                      custom={direction}
                      variants={{
                        enter: (direction: number) => ({
                          x: direction > 0 ? 50 : -50,
                          opacity: 0
                        }),
                        center: {
                          zIndex: 1,
                          x: 0,
                          opacity: 1
                        },
                        exit: (direction: number) => ({
                          zIndex: 0,
                          x: direction < 0 ? 50 : -50,
                          opacity: 0
                        })
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="text-lg leading-relaxed font-medium absolute inset-0"
                    >
                      {"\""}{testimonials[currentTestimonial].text}{"\""}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-4 mt-2">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div 
                    key={currentTestimonial}
                    custom={direction}
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? 20 : -20,
                        opacity: 0,
                        scale: 0.9
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                        scale: 1
                      },
                      exit: (direction: number) => ({
                        x: direction < 0 ? 20 : -20,
                        opacity: 0,
                        scale: 0.9
                      })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="w-12 h-12 rounded-full overflow-hidden bg-white/10 grayscale"
                  >
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].author} 
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentTestimonial}
                    custom={direction}
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? 20 : -20,
                        opacity: 0
                      }),
                      center: {
                        x: 0,
                        opacity: 1
                      },
                      exit: (direction: number) => ({
                        x: direction < 0 ? 20 : -20,
                        opacity: 0
                      })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-sm font-bold">{testimonials[currentTestimonial].author}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">{testimonials[currentTestimonial].role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Dots */}
              <div className="absolute bottom-10 right-10 flex gap-2">
                {testimonials.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      setDirection(i > currentTestimonial ? 1 : -1);
                      setCurrentTestimonial(i);
                    }}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-500",
                      currentTestimonial === i ? "bg-primary w-4" : "bg-white/20"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* SEGMENT 7: Awards & Recognition */}
        <section id="awards" className="mb-24 md:mb-32">
          <div className="bento-card bg-[#0C0616] border-white/10 rounded-[44px] p-8 md:p-14 gsap-reveal">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-primary font-mono text-[11px] uppercase font-bold tracking-[0.2em] mb-3 block">
                  Awards &amp; Recognition
                </span>
                <h2 className="text-4xl sm:text-6xl font-impact uppercase leading-[0.9] tracking-tight text-white">
                  CREATIVITY THAT GETS <span className="text-primary italic">RECOGNISED.</span>
                </h2>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowMoreAbout(true);
                  scrollToSection('who-we-are');
                }}
                className="bg-white/5 border border-white/15 text-white px-7 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest inline-flex items-center gap-3 hover:bg-primary hover:text-black hover:border-primary transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                More About Crea8ors <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl bg-dark/70 border border-white/10 p-8 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <Trophy size={26} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-impact uppercase tracking-tight text-white mb-2">
                    MAA Awards – Gold
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Mobile Theatre – Ultratech Cement, Best Regional Marketing Collaboration.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-dark/70 border border-white/10 p-8 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <Award size={26} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-impact uppercase tracking-tight text-white mb-2">
                    Mirchi Elite Club
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Recognition as an experiential and branding agency from East India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS: Blogs · News · Updates */}
        <section id="insights" className="mb-24 md:mb-32 border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 gsap-reveal">
            <div>
              <span className="text-primary font-mono text-[11px] uppercase font-bold tracking-[0.2em] mb-3 block">
                Insights · Blogs · News · Updates
              </span>
              <h2 className="text-5xl sm:text-7xl font-impact uppercase leading-[0.88] tracking-tight text-white">
                STORIES &amp; <span className="text-primary italic">UPDATES.</span>
              </h2>
            </div>

            <div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex flex-wrap gap-1.5">
              {(['All', 'Blogs', 'News', 'Updates'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setInsightFilter(tab)}
                  className={cn(
                    'px-5 py-2 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap',
                    insightFilter === tab
                      ? 'bg-primary text-black'
                      : 'text-white/65 hover:text-white hover:bg-white/5'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredInsights.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedArticle(item)}
                className="bento-card p-0 group cursor-pointer hover:border-primary/40 transition-all duration-500 flex flex-col gsap-reveal"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 mb-3">
                      <span className="text-primary font-bold uppercase">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-impact uppercase tracking-tight text-white group-hover:text-primary transition-colors mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/55 text-xs leading-relaxed mb-6">{item.excerpt}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors inline-flex items-center gap-2">
                      Read More <ArrowRight size={14} />
                    </span>
                    {item.category === 'News' ? (
                      <Newspaper size={15} className="text-white/30" />
                    ) : item.category === 'Updates' ? (
                      <Calendar size={15} className="text-white/30" />
                    ) : (
                      <BookOpen size={15} className="text-white/30" />
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SEGMENT 8: Final CTA – Let's Create Something Great */}
        <section className="mb-12 gsap-reveal">
          <div className="bg-primary text-black rounded-[44px] p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-[0_25px_70px_rgba(255,210,0,0.18)]">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-black/70 block">
                Let&apos;s Create Something Great
              </span>
              <h2 className="text-4xl sm:text-6xl font-impact uppercase leading-[0.9] tracking-tight">
                Have a Brand Challenge? Let&apos;s Create an Impact.
              </h2>
              <p className="text-black/75 text-base sm:text-lg font-medium">
                Let&apos;s collaborate, innovate and create experiences that make your brand matter.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('contact-form')}
              className="bg-black text-white px-9 py-5 rounded-2xl font-black text-xs uppercase tracking-widest inline-flex items-center gap-3 hover:bg-white hover:text-black transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Start a Conversation <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>

      {/* Business Enquiries / Contact Section */}
      <section
        id="contact-form"
        className="py-24 md:py-32 bg-[#030807] border-t border-white/5 relative overflow-hidden selection:bg-primary selection:text-black"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary font-bold mb-4 block">
                Contact · Business Enquiries
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-impact font-medium leading-[0.95] uppercase tracking-tighter mb-6">
                Let&apos;s Build Your Next <span className="text-primary italic">Brand Experience</span>
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-10 max-w-lg">
                Tell us about your brand goals across experiential marketing, rural &amp; regional
                outreach, brand solutions, or digital growth.
              </p>

              <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                      Business Enquiries
                    </h4>
                    <p className="text-base sm:text-lg font-bold text-white">partner@crea8ors.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                      Presence
                    </h4>
                    <p className="text-base sm:text-lg font-bold text-white">
                      Kolkata · East India &amp; Pan-India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 w-full">
              <div className="relative bg-white/[0.02] border border-white/10 backdrop-blur-2xl rounded-[40px] p-6 sm:p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="lead-form"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleFormSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="form-name"
                            className="block text-white/50 text-[10px] font-mono uppercase tracking-widest mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            id="form-name"
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                            placeholder="Your name"
                            className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl outline-none focus:border-primary transition-all text-white text-sm"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="form-email"
                            className="block text-white/50 text-[10px] font-mono uppercase tracking-widest mb-2"
                          >
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            id="form-email"
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            placeholder="you@company.com"
                            className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl outline-none focus:border-primary transition-all text-white text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="form-website"
                          className="block text-white/50 text-[10px] font-mono uppercase tracking-widest mb-2"
                        >
                          Brand / Company Name
                        </label>
                        <input
                          type="text"
                          id="form-website"
                          value={formData.website}
                          onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                          placeholder="Your organisation"
                          className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl outline-none focus:border-primary transition-all text-white text-sm"
                        />
                      </div>

                      <div>
                        <span className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-3">
                          Select Service Verticals
                        </span>
                        <div className="flex flex-wrap gap-2.5">
                          {VERTICALS.map((v) => {
                            const isSelected = selectedServices.includes(v.title);
                            return (
                              <button
                                key={v.num}
                                type="button"
                                onClick={() => handleServiceToggle(v.title)}
                                className={cn(
                                  'px-4 py-2.5 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer',
                                  isSelected
                                    ? 'bg-primary text-black border-primary'
                                    : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/30'
                                )}
                              >
                                {v.title}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="form-message"
                          className="block text-white/50 text-[10px] font-mono uppercase tracking-widest mb-2"
                        >
                          Tell us about your brand challenge
                        </label>
                        <textarea
                          id="form-message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                          placeholder="Share your campaign objectives, timeline, or target markets..."
                          className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl outline-none focus:border-primary transition-all text-white text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-white text-black py-4 px-8 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending Enquiry...' : 'Start a Conversation'}
                        <ArrowRight size={16} />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 px-4"
                    >
                      <div className="w-20 h-20 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-4xl font-impact uppercase tracking-tight text-white mb-4">
                        Enquiry Received
                      </h3>
                      <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed mb-8">
                        Thank you, <span className="text-white font-bold">{formData.name}</span>. Our team
                        will review your brief and reach out to{' '}
                        <span className="text-primary font-bold">{formData.email}</span> shortly.
                      </p>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-xs font-mono font-bold uppercase tracking-widest text-white/50 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1 cursor-pointer"
                      >
                        Send Another Enquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENT 9: Footer */}
      <footer
        id="contact"
        className="group bg-[#050C0A] text-white pt-24 pb-16 border-t border-white/5 relative selection:bg-primary selection:text-black"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                  <img src="/logo.jpeg" alt="Logo" className='w-60 h-25 rounded-2xl' />
              </div>
              <p className="text-white/50 text-sm max-w-sm leading-relaxed mb-8">
                Ideas That Move People. Experiences That Move Brands. An integrated marketing and
                brand experience agency.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('contact-form')}
                className="bg-primary text-black px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white transition-all cursor-pointer"
              >
                Start a Conversation <ArrowRight size={14} />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
              <div>
                <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                  Navigation
                </h5>
                <ul className="space-y-3 text-xs text-white/60 font-semibold uppercase tracking-wider">
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('who-we-are')}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('what-we-do')}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      What We Do
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('our-work')}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Our Work
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('insights')}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Insights
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('contact-form')}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                  4 Verticals
                </h5>
                <ul className="space-y-3 text-xs text-white/60 font-semibold uppercase tracking-wider">
                  {VERTICALS.map((v) => (
                    <li key={v.num}>
                      <button
                        type="button"
                        onClick={() => {
                          setExpandedVertical(v.num);
                          scrollToSection('what-we-do');
                        }}
                        className="hover:text-primary transition-colors text-left cursor-pointer"
                      >
                        {v.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                  Connect
                </h5>
                <ul className="space-y-3 text-xs text-white/60 font-semibold">
                  <li>partner@crea8ors.com</li>
                  <li>Kolkata, West Bengal</li>
                  <li className="pt-2 flex items-center gap-4">
                    <a
                      href="#contact-form"
                      aria-label="Facebook"
                      className="hover:text-primary transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href="#contact-form"
                      aria-label="Instagram"
                      className="hover:text-primary transition-colors"
                    >
                      <Instagram size={16} />
                    </a>
                    <a
                      href="#contact-form"
                      aria-label="LinkedIn"
                      className="hover:text-primary transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
            <span>© {new Date().getFullYear()} Crea8ors. All rights reserved.</span>
            <span>Integrated Marketing · Experiential · Rural &amp; Regional · Digital Growth</span>
          </div>

          <div className="mt-24 opacity-100 select-none overflow-visible pb-[20px] footer-crea8ors-container relative">
            <h6 className="text-[24vw] font-impact font-black leading-none whitespace-nowrap uppercase flex justify-center items-center">
              <span className="text-white/25 tracking-tighter">crea</span>
              <span className="footer-eight-hover-wrap inline-block transition-all duration-1000 ease-out group-hover:scale-110">
                <span className="footer-eight inline-block text-primary italic px-4 relative z-20 origin-center drop-shadow-[0_0_30px_rgba(255,210,0,0.4)]">
                  8
                </span>
              </span>
              <span className="text-white/25 tracking-tighter">ors</span>
            </h6>
          </div>
        </div>
         <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 text-center block mt-12">
            Designed and Developed by <a href="https://www.softtechdigimedia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Soft Tech Digi Media</a>
          </span>
      </footer>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCampaign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCampaign(null)}
            data-lenis-prevent
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="bg-card border border-white/10 rounded-[36px] max-w-3xl w-full max-h-[88vh] overflow-y-auto overscroll-contain shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                <img
                  src={selectedCampaign.image}
                  alt={selectedCampaign.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-black/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedCampaign(null)}
                  aria-label="Close case study"
                  className="absolute top-6 right-6 w-11 h-11 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                  <span className="text-primary font-bold uppercase">{selectedCampaign.brand}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCampaign.category}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-impact uppercase tracking-tight text-white leading-tight">
                  {selectedCampaign.title}
                </h2>
                <p className="text-white/70 text-base leading-relaxed">{selectedCampaign.details}</p>

                <div className="grid sm:grid-cols-3 gap-3 pt-2">
                  {selectedCampaign.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-semibold text-white/85 flex items-center gap-2"
                    >
                      <Sparkles size={14} className="text-primary shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCampaign(null);
                      scrollToSection('contact-form');
                    }}
                    className="bg-primary text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
                  >
                    Start a Similar Campaign <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCampaign(null)}
                    className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* IP Detail Modal */}
      <AnimatePresence>
        {selectedIP && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIP(null)}
            data-lenis-prevent
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="bg-card border border-white/10 rounded-[36px] max-w-2xl w-full max-h-[88vh] overflow-y-auto overscroll-contain shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                <img
                  src={selectedIP.image}
                  alt={selectedIP.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-black/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedIP(null)}
                  aria-label="Close IP details"
                  className="absolute top-6 right-6 w-11 h-11 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 md:p-10 space-y-5">
                {/* IP Switcher Tabs */}
                <div className="flex flex-wrap gap-2 pb-3 border-b border-white/10">
                  {OUR_IPS.map((ipItem) => (
                    <button
                      key={ipItem.name}
                      type="button"
                      onClick={() => setSelectedIP(ipItem)}
                      className={cn(
                        'px-4 py-2 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap',
                        selectedIP.name === ipItem.name
                          ? 'bg-primary text-black'
                          : 'bg-white/5 text-white/65 hover:text-white hover:bg-white/10'
                      )}
                    >
                      {ipItem.name}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                  <span className="text-primary font-bold uppercase">{selectedIP.status}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedIP.subtitle}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-impact uppercase tracking-tight text-white">
                  {selectedIP.name}
                </h2>
                <p className="text-white/70 text-base leading-relaxed">{selectedIP.desc}</p>
                <div className="space-y-2.5 pt-2">
                  {selectedIP.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-semibold text-white/85 flex items-center gap-2.5"
                    >
                      <Sparkles size={14} className="text-primary shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedIP(null);
                        scrollToSection('contact-form');
                      }}
                      className="bg-primary text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
                    >
                      Partner on This IP <ArrowRight size={14} />
                    </button>
                    {selectedIP.link && (
                      <a
                        href={selectedIP.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="bg-white/10 text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white/20 transition-colors"
                      >
                        Visit Platform <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedIP(null)}
                    className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Insights Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            data-lenis-prevent
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="bg-card border border-white/10 rounded-[36px] max-w-3xl w-full max-h-[88vh] overflow-y-auto overscroll-contain shadow-2xl"
            >
              <div className="relative aspect-[16/8] overflow-hidden bg-white/5">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-black/40 to-transparent" />
                <button
                  type="button"
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
                    type="button"
                    onClick={() => {
                      setSelectedArticle(null);
                      scrollToSection('contact-form');
                    }}
                    className="bg-primary text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
                  >
                    Start a Conversation <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white cursor-pointer"
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
