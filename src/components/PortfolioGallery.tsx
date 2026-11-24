import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

// Existing portfolio projects and galleries are retained for the marquee.
const projects = [
  {
    title: "ShyamSel Meet",
    category: "Fabricator Meet",
    img: "/Activation/Fabricator22.jpeg",
    description: "Fabricator engagement and network meet.",
    gallery: ["/Activation/Fabricator-26.jpeg", "/Activation/Fabricator-20.jpeg", "/Activation/Fabricator-28.jpeg", "/Activation/Fabricator21.jpeg", "/Activation/Fabricator-20.jpeg"],
  },
  {
    title: "Havells Activity",
    category: "Sales Activation",
    img: "/Havells Activity/Havells (1).jpeg",
    description: "Festive season sales activation across regions.",
    gallery: ["/Havells Activity/Havells (1).jpeg", "/Havells Activity/Havells (2).jpeg", "/Havells Activity/Havells (3).jpeg", "/Havells Activity/Havells (4).jpeg"],
  },
  {
    title: "Kotak Event",
    category: "Corporate Event",
    img: "/Kotak Event/Kotak (2).jpeg",
    description: "Corporate event and brand engagement.",
    gallery: ["/Kotak Event/Kotak (2).jpeg", "/Kotak Event/Kotak (1).jpeg", "/Kotak Event/Kotak (3).jpeg", "/Kotak Event/Kotak (4).jpeg"],
  },
  {
    title: "Conch Shell Blows Event",
    category: "Brand Experience",
    img: "/photo/C0299T01.JPG",
    description: "An immersive on-ground brand experience.",
    gallery: ["/photo/C0278T01.JPG", "/photo/C0228T01.JPG", "/photo/C0218T01.JPG", "/photo/C0279T01.JPG", "/photo/C0232T01.JPG", "/photo/C0217T01.JPG", "/photo/C0276T01.JPG"],
  },
  {
    title: "Too Yam Puja Activity",
    category: "Brand Activation",
    img: "/Too Yam Puja Activity/Too Yam Puja (2).jpeg",
    description: "Festive season brand activation.",
    gallery: ["/Too Yam Puja Activity/Too Yam Puja (1).jpeg", "/Too Yam Puja Activity/Too Yam Puja (2).jpeg", "/Too Yam Puja Activity/Too Yam Puja (3).jpeg", "/Too Yam Puja Activity/Too Yam Puja (4).jpeg"],
  },
  {
    title: "Puja Branding",
    category: "Sales Activation",
    img: "/Puja Branding/Puja Branding2.jpeg",
    description: "Festive branding and cultural engagement.",
    gallery: ["/Puja Branding/Puja Branding5.jpeg", "/Puja Branding/Puja Branding1.jpeg", "/Puja Branding/Puja Branding3.jpeg", "/Puja Branding/Puja Branding4.jpeg", "/Puja Branding/Puja Branding2.jpeg"],
  },
  {
    title: "Dominos",
    category: "On-ground Promotion",
    img: "/Dominos/Dominos1.jpeg",
    description: "On-ground promotion across upcountry markets.",
    gallery: ["/Dominos/Dominos1.jpeg", "/Dominos/Dominos2.jpeg", "/Dominos/Dominos3.jpeg"],
  },
  {
    title: "Autohood Branding",
    category: "Outdoor Branding",
    img: "/Autohood Branding/Autohood.jpeg",
    description: "A branded outdoor visibility campaign.",
    gallery: ["/Autohood Branding/Autohood.jpeg", "/Autohood Branding/Autohood4.jpeg", "/Autohood Branding/Autohood2.jpeg", "/Autohood Branding/Autohood3.jpeg"],
  },
  {
    title: "ITC Puja Activity",
    category: "Sales Activation",
    img: "/ITC Puja Activity/ITC Puja Activity (4).jpeg",
    description: "Festive season sales activation.",
    gallery: ["/ITC Puja Activity/ITC Puja Activity (4).jpeg", "/ITC Puja Activity/ITC Puja Activity (1).jpeg", "/ITC Puja Activity/ITC Puja Activity (2).jpeg", "/ITC Puja Activity/ITC Puja Activity (3).jpeg", "/ITC Puja Activity/ITC Puja Activity (5).jpeg"],
  },
  {
    title: "Musical Event",
    category: "Live Event",
    img: "/Musical Event/Event (3).jpeg",
    description: "Live event production and audience engagement.",
    gallery: ["/Musical Event/Event (3).jpeg", "/Musical Event/Event (1).jpeg", "/Musical Event/Event (2).jpeg"],
  },
  {
    title: "Puja Activation",
    category: "Cultural Activation",
    img: "/Activation/Puja Activation - 8.jpeg",
    description: "A festive, consumer-facing activation.",
    gallery: ["/Activation/Puja Activation - 8.jpeg", "/Activation/Puja Activation - 1.jpeg", "/Activation/Puja Activation - 4.jpeg", "/Activation/Puja Activation - 7.jpeg", "/Activation/Puja Activation -5.jpeg", "/Activation/Puja-Activation-6.jpeg", "/Activation/Puja Activation - 2.jpeg"],
  },
  {
    title: "ITC Canter",
    category: "Mobile Activation",
    img: "/ITC CANTER/ITC Canter1.jpeg",
    description: "A mobile brand activation on the move.",
    gallery: ["/ITC CANTER/ITC Canter1.jpeg", "/ITC CANTER/ITC Canter2.jpeg", "/ITC CANTER/ITC Canter3.jpeg", "/ITC CANTER/ITC Canter4.jpeg", "/ITC CANTER/ITC Canter5.jpeg", "/ITC CANTER/ITC Canter6.jpeg"],
  },
  {
    title: "Movie Promotion",
    category: "Promotion",
    img: "/Movie/Movie Campaign1.jpeg",
    description: "Promotional campaign and audience outreach.",
    gallery: ["/Movie/Movie Campaign1.jpeg", "/Movie/Movie Campaign2.jpeg", "/Movie/Movie Promotion1.jpeg", "/Movie/Movie Promotio2.jpeg"],
  },
  {
    title: "Jatra Activation",
    category: "Rural & Regional Outreach",
    img: "/Jatra/Jatra-1.jpeg",
    description: "Connecting brands with regional audiences through Jatra.",
    gallery: ["/Jatra/Jatra-1.jpeg", "/Jatra/Jatra - 2.jpeg", "/Jatra/Jatra-3.jpeg", "/Jatra/Jatra-7.jpeg", "/Jatra/Jatra-8.jpeg", "/Jatra/Jatra-6.jpeg"],
  },
];

// Segment 5 campaign titles and descriptions from the supplied CREA8ORS website PDF.
// Gallery paths below are provisional matches to the closest existing folders in the supplied TSX.
const featuredCampaigns = [
  {
    title: "UltraTech Cement – Mobile Theatre",
    category: "Rural Brand Engagement",
    description: "Rural brand engagement through entertainment.",
    img: "/ITC CANTER/ITC Canter1.jpeg",
    gallery: ["/ITC CANTER/ITC Canter1.jpeg", "/ITC CANTER/ITC Canter2.jpeg", "/ITC CANTER/ITC Canter3.jpeg", "/ITC CANTER/ITC Canter4.jpeg", "/ITC CANTER/ITC Canter5.jpeg", "/ITC CANTER/ITC Canter6.jpeg"],
  },
  {
    title: "HUL – Sales Meet",
    category: "Corporate Event",
    description: "Large-scale corporate event execution.",
    img: "/Activation/Fabricator22.jpeg",
    gallery: ["/Activation/Fabricator-26.jpeg", "/Activation/Fabricator-20.jpeg", "/Activation/Fabricator-28.jpeg", "/Activation/Fabricator21.jpeg"],
  },
  {
    title: "Keya Seth – Shakti Aradhana",
    category: "Cultural Brand Engagement",
    description: "Large-scale cultural brand engagement.",
    img: "/Puja Branding/Puja Branding2.jpeg",
    gallery: ["/Puja Branding/Puja Branding5.jpeg", "/Puja Branding/Puja Branding1.jpeg", "/Puja Branding/Puja Branding3.jpeg", "/Puja Branding/Puja Branding4.jpeg", "/Puja Branding/Puja Branding2.jpeg"],
  },
  {
    title: "Sunrise Spices – Jatra Integration",
    category: "Rural & Regional Outreach",
    description: "Connecting brands with regional audiences.",
    img: "/Jatra/Jatra-1.jpeg",
    gallery: ["/Jatra/Jatra-1.jpeg", "/Jatra/Jatra - 2.jpeg", "/Jatra/Jatra-3.jpeg", "/Jatra/Jatra-7.jpeg", "/Jatra/Jatra-8.jpeg", "/Jatra/Jatra-6.jpeg"],
  },
];

type GalleryProject = (typeof projects)[number] | (typeof featuredCampaigns)[number];

function GalleryModal({ project, onClose }: { project: GalleryProject; onClose: () => void }) {
  useEffect(() => {
    // Lock both the document and body so wheel/touch scrolling cannot reach the page behind the modal.
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;
    const scrollY = window.scrollY;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const layoutPattern = [
    { col: "col-span-2", row: "row-span-2" },
    { col: "col-span-1", row: "row-span-1" },
    { col: "col-span-1", row: "row-span-1" },
    { col: "col-span-1", row: "row-span-2" },
    { col: "col-span-2", row: "row-span-1" },
    { col: "col-span-1", row: "row-span-1" },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10 overflow-hidden"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.25s_ease]" />
      <div
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="gallery-modal-scroll no-scrollbar relative bg-[#F2F2F2] rounded-[32px] w-full max-w-5xl h-[90vh] overflow-y-auto overscroll-contain shadow-2xl animate-[scaleIn_0.3s_cubic-bezier(0.16,1,0.3,1)]"
        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
      >
        <div className="bg-white rounded-[32px] m-2 p-6 sm:p-10">
          <div className="flex items-start justify-between mb-8 gap-6">
            <div>
              <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-2 block">{project.category}</span>
              <h3 className="text-3xl sm:text-5xl font-impact font-black leading-[0.95] tracking-tight uppercase text-[#0A0A0A]">{project.title}</h3>
            </div>
            <div className="flex items-start gap-6">
              <p className="hidden sm:block text-black/40 text-sm max-w-[220px] text-right pt-2">{project.description}</p>
              <button onClick={onClose} className="flex-shrink-0 w-10 h-10 rounded-full bg-black/5 hover:bg-white/5 flex items-center justify-center transition-colors sticky top-0" aria-label="Close gallery"><X className="w-5 h-5 text-black/70" /></button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4" style={{ gridAutoRows: "clamp(110px, 14vw, 180px)", gridAutoFlow: "dense" }}>
            {project.gallery.filter(Boolean).map((src, i) => {
              const layout = layoutPattern[i % layoutPattern.length];
              return <div key={`${src}-${i}`} className={`relative overflow-hidden rounded-2xl border border-black/5 group ${layout.col} ${layout.row}`}><img src={src} alt={`${project.title} photo ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /></div>;
            })}
          </div>
        </div>
      </div>
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.gallery-modal-scroll{overscroll-behavior-y:contain;overflow-y:auto;max-height:90vh}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes scaleIn{from{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}`}</style>
    </div>
  );
}

export default function PortfolioGallery() {
  const [activeProject, setActiveProject] = useState<GalleryProject | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  // Scroll-based marquee: duplicated cards create a seamless loop without vertical scrolling.
  useEffect(() => {
    const viewport = marqueeRef.current;
    if (!viewport) return;
    let previousTime = 0;
    const speed = 34; // pixels per second
    const tick = (time: number) => {
      if (previousTime && !pausedRef.current) {
        const delta = Math.min((time - previousTime) / 1000, 0.05);
        viewport.scrollLeft += speed * delta;
        const loopPoint = viewport.scrollWidth / 2;
        if (loopPoint > 0 && viewport.scrollLeft >= loopPoint) viewport.scrollLeft -= loopPoint;
      }
      previousTime = time;
      animationFrameRef.current = window.requestAnimationFrame(tick);
    };
    animationFrameRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (animationFrameRef.current !== null) window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const moveMarquee = (direction: -1 | 1) => {
    const viewport = marqueeRef.current;
    if (!viewport) return;
    pausedRef.current = true;
    viewport.scrollBy({ left: direction * Math.max(280, viewport.clientWidth * 0.72), behavior: "smooth" });
    window.setTimeout(() => { pausedRef.current = false; }, 850);
  };

  const openAllProjects = () => {
    setShowAllProjects(true);
    window.setTimeout(() => document.getElementById("all-featured-projects")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <>
      <section id="projects" className="projects-container overflow-hidden bg-transparent text-white py-16 lg:py-24">
        <div className="px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div className="max-w-xl">
              <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">// Portfolio</span>
              <h3 className="text-6xl sm:text-8xl lg:text-9xl font-impact font-black leading-[0.8] tracking-tighter uppercase">FEATURED<br /><span className="text-outline italic">WORKS.</span></h3>
              <p className="text-white/45 max-w-sm text-sm mt-6">Explore campaigns, activations and brand experiences from our portfolio.</p>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => moveMarquee(-1)} aria-label="Scroll projects left" className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors flex items-center justify-center"><ArrowLeft size={19} /></button>
              <button type="button" onClick={() => moveMarquee(1)} aria-label="Scroll projects right" className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors flex items-center justify-center"><ArrowRight size={19} /></button>
            </div>
          </div>
        </div>

        <div ref={marqueeRef} className="portfolio-marquee flex gap-5 overflow-x-auto overflow-y-hidden px-6 lg:px-24 pb-4 no-scrollbar" onMouseEnter={() => { pausedRef.current = true; }} onMouseLeave={() => { pausedRef.current = false; }} onFocusCapture={() => { pausedRef.current = true; }} onBlurCapture={() => { pausedRef.current = false; }}>
          {[...projects, ...projects].map((project, idx) => (
            <button key={`${project.title}-${idx}`} type="button" onClick={() => setActiveProject(project)} className="project-card flex-shrink-0 w-[82vw] max-w-[550px] h-[300px] sm:h-[400px] relative group overflow-hidden rounded-[30px] sm:rounded-[40px] border border-white/5 shadow-2xl text-left cursor-pointer">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-7 sm:p-12 flex flex-col justify-end">
                <span className="font-mono text-[10px] uppercase font-bold text-primary tracking-widest mb-2">{project.category}</span>
                <h4 className="text-white text-3xl sm:text-5xl font-impact font-medium tracking-wide uppercase">{project.title}</h4>
              </div>
            </button>
          ))}
        </div>

        <div className="px-6 lg:px-24 mt-8 flex justify-center">
          <button type="button" onClick={openAllProjects} className="inline-flex items-center gap-3 bg-primary text-black font-bold text-xs tracking-widest uppercase px-7 py-4 rounded-full hover:bg-white transition-colors">View All Projects <ArrowRight size={16} /></button>
        </div>
      </section>

      {showAllProjects && (
        <section id="all-featured-projects" className="bg-transparent text-white py-16 lg:py-24 scroll-mt-8">
          <div className="px-6 lg:px-24">
            <div className="mb-10 lg:mb-14">
              <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-3 block">// Selected campaigns</span>
              <h3 className="text-5xl sm:text-7xl font-impact font-black uppercase leading-[0.9]">Campaigns That<br /><span className="italic">Make an Impact.</span></h3>
              <p className="text-white/60 text-sm mt-5 max-w-lg">A selection of featured campaigns from the CREA8ORS portfolio. Select a project to explore its image gallery.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {featuredCampaigns.map((project) => (
                <button key={project.title} type="button" onClick={() => setActiveProject(project)} className="text-left group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center group-hover:translate-x-1 transition-transform"><ArrowRight size={18} /></span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary font-bold mt-5 mb-2">{project.category}</p>
                  <h4 className="text-2xl font-impact font-bold uppercase leading-tight">{project.title}</h4>
                  <p className="text-sm text-white/60 mt-2">{project.description}</p>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest mt-4 border-b border-primary pb-1">View Case Study</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeProject && <GalleryModal project={activeProject} onClose={() => setActiveProject(null)} />}
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.portfolio-marquee{scrollbar-width:none;overscroll-behavior-x:contain;touch-action:pan-x}.portfolio-marquee::-webkit-scrollbar{display:none}`}</style>
    </>
  );
}
