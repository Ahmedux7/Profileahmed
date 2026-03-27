/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  useNavigate,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
import { 
  Search, 
  Layout, 
  Code, 
  Video, 
  Share2, 
  Briefcase, 
  ChevronDown, 
  ExternalLink,
  MessageCircle,
  MessageSquare,
  ArrowLeft,
  Phone,
  Send,
  Calendar,
  Flame,
  Dribbble,
  Twitter,
  Linkedin,
  Globe,
  BookOpen,
  FileText,
  Layers,
  Star,
  Quote,
  Palette,
  Cpu,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Trophy,
  CheckCircle,
  Users,
  Award,
  ArrowRight,
  Clock,
  Play,
  Check,
  Lock,
  Unlock,
  PlayCircle,
  ChevronUp,
  Menu,
  X,
  CheckSquare,
  Square,
  Zap,
  HeartHandshake,
  Target,
  CalendarCheck,
  CreditCard,
  MonitorPlay,
} from "lucide-react";

import { useState } from "react";
import { influencers, testimonials, projects } from "./data";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex justify-start whitespace-nowrap">
          <Link to="/" className="hover:scale-105 transition-transform">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3609/3609930.png" 
              alt="Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex flex-none justify-center items-center gap-8 text-sm font-medium text-gray-600 whitespace-nowrap">
          <Link to="/about" className="hover:text-brand transition-colors">معلومات عني</Link>
          <Link to="/testimonials" className="hover:text-brand transition-colors">اثروا فيا</Link>
          <Link to="/courses" className="hover:text-brand transition-colors">الدورات</Link>
          <Link to="/consultation" className="hover:text-brand transition-colors">الاستشارات</Link>
          <a href="#" className="hover:text-brand transition-colors">القوالب</a>
          <a href="#" className="hover:text-brand transition-colors">المصادر</a>
          <a href="#" className="hover:text-brand transition-colors">المدونة</a>
          <Link to="/contact" className="hover:text-brand transition-colors">تواصل معي</Link>
        </div>

        {/* Actions - Desktop */}
        <div className="hidden md:flex justify-end items-center gap-6 whitespace-nowrap">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <Globe size={16} />
            <span>العربية</span>
          </div>
          <button className="px-5 py-2 bg-brand text-white rounded-xl font-bold text-xs flex items-center gap-2 hover:scale-105 transition-all relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            <FileText size={14} />
            تحميل CV
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b p-6 flex flex-col gap-4 text-sm font-medium text-gray-600"
        >
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>معلومات عني</Link>
          <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>اثروا فيا</Link>
          <Link to="/courses" onClick={() => setIsMenuOpen(false)}>الدورات</Link>
          <Link to="/consultation" onClick={() => setIsMenuOpen(false)}>الاستشارات</Link>
          <a href="#" onClick={() => setIsMenuOpen(false)}>القوالب</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>المصادر</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>المدونة</a>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>تواصل معي</Link>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand/5 text-brand/80 rounded-lg font-medium text-xs mb-6 border border-brand/10">
          <span className="w-1.5 h-1.5 rounded-full bg-brand/60"></span>
          نحول الأفكار إلى واجهات رقمية ملهمة وسهلة الاستخدام
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-gray-900">أحمد علي</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-lg leading-relaxed font-medium">
          أنا مصمم واجهات المستخدم (UI) وتجربة المستخدم (UX) مع خبرة تزيد عن 5 سنوات. أسعى لتحقيق التوازن بين الوظائف والجماليات في تصاميمي، أؤمن أن التصميم الجيد يجب أن يكون بسيطاً وسهل الاستخدام.
        </p>
        <div className="flex flex-wrap items-center gap-8 mb-10">
          <Link to="/contact" className="px-8 py-4 orange-gradient text-white rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand/20">
            تواصل معى
            <Phone size={20} />
          </Link>
          <Link to="/consultation" className="flex items-center gap-2 text-gray-900 font-bold hover:text-brand transition-colors group">
            <MessageSquare size={20} className="text-gray-900 group-hover:text-brand" />
            <span className="border-b-2 border-gray-900 group-hover:border-brand pb-0.5">حجز استشارة</span>
          </Link>
        </div>

        {/* Social Proof / Student Count */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3 rtl:space-x-reverse">
            {[
              "https://i.pravatar.cc/150?u=1",
              "https://i.pravatar.cc/150?u=2",
              "https://i.pravatar.cc/150?u=3"
            ].map((src, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                <img src={src} alt="Student" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5 text-gray-900">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" className="text-gray-900" />
              ))}
            </div>
            <span className="text-gray-600 font-bold text-sm mt-1">( +6.9K طالب )</span>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex items-center justify-center"
      >
        {/* Rotating Dashed Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[110%] h-[110%] border-2 border-dashed border-brand/30 rounded-full -z-10"
        ></motion.div>

        {/* Cheerful Orange Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-[3rem] -z-10"></div>

        {/* Glassmorphism Background Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20, y: 20 }}
          whileInView={{ opacity: 1, x: 40, y: 40 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl -z-20"
        ></motion.div>

        {/* Main Image Container */}
        <div className="relative z-10 aspect-[4/5] w-full max-w-md rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group border-4 border-transparent group-hover:border-orange-500/30 transition-all duration-500">
          <div className="absolute inset-0 bg-brand/10 group-hover:opacity-0 transition-opacity duration-700"></div>
          <img 
            src="https://i.ibb.co/v4j3TQYF/548183374-803517145699947-1055836045542047515-n-1.jpg" 
            alt="Ahmed Ali" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            referrerPolicy="no-referrer"
          />
          
          {/* Info Block */}
          <div className="absolute bottom-8 right-8 left-8 p-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black text-brand uppercase tracking-widest mb-1">الدور الحالي</p>
                <p className="text-sm font-black text-gray-900">مصمم تجربة مستخدم أول</p>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">المقر</p>
                <p className="text-sm font-black text-gray-900">القاهرة، مصر</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Tech Stack Icons */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-brand border border-gray-100">
            <Cpu size={20} />
          </div>
        </motion.div>

        {/* Background Glows */}
        <div className="absolute -z-30 w-64 h-64 bg-brand/20 blur-[100px] rounded-full top-0 left-0"></div>
        <div className="absolute -z-30 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full bottom-0 right-0"></div>
      </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">أستطيع مساعدتك في</h2>
        <p className="text-gray-500">مجموعة واسعة من الخدمات المتكاملة</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "البحث", desc: "نساعدك على فهم السوق والمستخدمين من خلال رؤى قيمة على البيانات لدعم اتخاذ قرارات أكثر ذكاءً.", icon: <Search /> },
          { title: "التصميم", desc: "نصمم واجهات جذابة وعملية تضمن تجربة مستخدم سلسة بفضل الوصول.", icon: <Layout /> },
          { title: "البرمجة", desc: "نحول الأفكار إلى واقع من خلال كود نظيف وفعال يضمن الأداء وقابلية التوسع.", icon: <Code /> },
          { title: "مونتاج الفيديو", desc: "نعد محتوى بصري احترافي يعكس علامتك التجارية ويجذب الانتباه.", icon: <Video /> },
          { title: "وسائل التواصل الاجتماعي", desc: "نصمم محتوى جذاباً مخصصاً للمنصات الاجتماعية لزيادة التفاعل والوصول.", icon: <Share2 /> },
          { title: "إدارة المشاريع", desc: "ندير المشاريع بكفاءة من التخطيط حتى التسليم لضمان تنفيذ سلس ونتائج واضحة.", icon: <Briefcase /> },
        ].map((service, i) => (
          <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-10 hover:shadow-md hover:border-brand/30 transition-all duration-300 group">
            <div className="text-brand mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TrustedBy = () => {
  const stats = [
    { label: "مشروع مكتمل", value: "+150" },
    { label: "عميل سعيد", value: "+80" },
    { label: "سنوات خبرة", value: "+6" },
    { label: "جوائز عالمية", value: "+12" },
  ];

  const companies = [
    { name: "Shell", domain: "shell.com" },
    { name: "Sega", domain: "sega.com" },
    { name: "Virgin", domain: "virgin.com" },
    { name: "Lebara", domain: "lebara.com" },
    { name: "Panda", domain: "panda.com.sa" },
    { name: "Yassir", domain: "yassir.com" },
    { name: "Breadfast", domain: "breadfast.com" },
    { name: "Danube", domain: "danubehome.com" },
    { name: "Lendo", domain: "lendo.com" },
    { name: "9Round", domain: "9round.com" },
    { name: "Gourmet", domain: "gourmetegypt.com" },
    { name: "Styli", domain: "stylishop.com" },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">شركاء النجاح</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            فخور بالتعاون مع نخبة من الشركات والعلامات التجارية الرائدة التي وضعت ثقتها في رؤيتي الإبداعية وحلولي التقنية.
          </p>
          <div className="mt-8 h-1 w-16 bg-brand/20 mx-auto rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-brand rounded-full"></div>
          </div>
        </div>

        <div className="overflow-hidden space-y-8">
          {/* Row 1 */}
          <motion.div 
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...companies.slice(0, 6), ...companies.slice(0, 6)].map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: "#fff" }}
                className="h-28 w-48 flex-shrink-0 bg-gray-50/40 rounded-2xl flex items-center justify-center p-8 group transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/30"
              >
                <img 
                  src={`https://logo.clearbit.com/${company.domain}`} 
                  alt={company.name}
                  className="max-h-full max-w-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      const span = document.createElement('span');
                      span.className = 'text-gray-300 font-bold text-sm';
                      span.innerText = company.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div 
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...companies.slice(6), ...companies.slice(6)].map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: "#fff" }}
                className="h-28 w-48 flex-shrink-0 bg-gray-50/40 rounded-2xl flex items-center justify-center p-8 group transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/30"
              >
                <img 
                  src={`https://logo.clearbit.com/${company.domain}`} 
                  alt={company.name}
                  className="max-h-full max-w-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      const span = document.createElement('span');
                      span.className = 'text-gray-300 font-bold text-sm';
                      span.innerText = company.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12 border-t border-gray-50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-4xl font-black text-brand">{stat.value}</span>
              <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Portfolio = () => {
  const navigate = useNavigate();
  
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'designer': return 'bg-brand/10 text-brand border-brand/20';
      case 'developer': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'pm': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'lead': return 'bg-green-50 text-green-600 border-green-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-right">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">معرض الأعمال</h2>
            <p className="text-gray-500 max-w-md font-medium">وراء كل تصميم فكرة، ووراء كل إنجاز قصة نجاح.</p>
          </div>
          <button 
            onClick={() => navigate("/projects")}
            className="px-8 py-3 orange-gradient text-white rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-brand/20 whitespace-nowrap"
          >
            <Send size={18} className="rotate-180" />
            عرض كل المشاريع
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col group shadow-sm border border-gray-50"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md text-[8px] font-bold rounded text-white">
                  {project.type}
                </div>
              </div>
              
              <div className="p-4 flex flex-col flex-grow text-right">
                <div className="flex flex-wrap justify-end gap-1 mb-2">
                  {project.roles.map((role, i) => (
                    <span key={i} className={`px-2 py-0.5 text-[8px] font-bold rounded-full border flex items-center gap-1 ${getRoleColor(role)}`}>
                      {role}
                      <Briefcase size={8} />
                    </span>
                  ))}
                </div>
                
                <h3 className="text-base font-bold mb-1 line-clamp-1 text-gray-900">{project.name}</h3>
                <p className="text-gray-500 text-[10px] mb-2 line-clamp-2 leading-relaxed font-medium">
                  {project.desc}
                </p>

                <div className="flex flex-wrap justify-end gap-1 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[8px] font-bold text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button className="flex items-center gap-2 bg-brand text-white hover:bg-brand/90 px-3 py-2 rounded-lg transition-all text-[10px] font-bold w-full justify-center shadow-md shadow-brand/10">
                    <ExternalLink size={12} />
                    تفاصيل المشروع
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="flex justify-center">
          <Link to="/contact" className="px-10 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-3">
            تواصل معي لمشروعك القادم
            <Phone size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-40 left-10 opacity-20 hidden lg:block">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Mosaic Grid */}
        <div className="columns-2 md:columns-3 lg:columns-6 gap-4 space-y-4 mb-16">
          <div className="h-20 bg-gray-50 rounded-xl hidden lg:block"></div>
          
          {influencers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid"
            >
              <img
                src={item.src}
                alt={`Influencer ${i}`}
                className={`w-full ${item.height} object-cover rounded-xl shadow-sm border border-gray-100`}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
          
          <div className="h-24 bg-gray-50 rounded-xl hidden lg:block"></div>
        </div>

        {/* Centered Text */}
        <div className="text-center mb-16">
          <p className="text-brand font-bold mb-4 text-base">أشخاص أثروا في مسيرتي</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">من تعلمت منهم وعملت معهم،</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-400">نخبة من الخبراء والمنتورز الملهمين</h3>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 text-brand/5 group-hover:text-brand/10 transition-colors">
                <Quote size={80} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-base">{item.name}</div>
                    <div className="text-brand text-xs font-bold">{item.role}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed text-right mb-3">
                  {item.text}
                </p>
                <div className="text-right">
                  <button className="text-brand font-bold text-xs">... مشاهدة بالكامل</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 3 ? 'bg-brand w-3' : 'bg-gray-200'}`}></div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => navigate("/testimonials")}
            className="px-10 py-4 orange-gradient text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand/20 hover:scale-105 transition-all flex items-center gap-3"
          >
            عرض الكل
            <ArrowLeft size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "كيف يمكننا البدء في العمل معاً؟", a: "يمكنك التواصل معي مباشرة عبر زر 'تواصل معي' وسنحدد موعداً لمناقشة تفاصيل مشروعك وأهدافك." },
    { q: "ما هي الخدمات التي تقدمها؟", a: "أقدم خدمات تصميم واجهات المستخدم (UI/UX)، تطوير هوية بصرية، وتصميم تطبيقات الويب والموبايل." },
    { q: "كم تستغرق المشاريع عادةً؟", a: "يعتمد ذلك على حجم وتعقيد المشروع، وسأقوم بتزويدك بجدول زمني دقيق بعد مناقشة المتطلبات." },
    { q: "هل تقدم خدمات ما بعد التسليم؟", a: "نعم، أقدم دعماً فنياً وتحديثات للمشاريع لضمان استمرار نجاحها وتطورها." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* FAQ Content - Right Side in RTL */}
          <div className="text-right order-2 lg:order-1">
            <div className="mb-12">
              <h3 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                أسئلة تدور في بالك؟ <br />
                <span className="text-brand">إليك الإجابات</span>
              </h3>
              <div className="w-24 h-1.5 bg-brand rounded-full"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`rounded-2xl border transition-all duration-300 ${
                    open === i 
                    ? 'border-brand bg-white shadow-xl shadow-brand/5' 
                    : 'border-gray-100 bg-white hover:border-brand/30 hover:shadow-md'
                  }`}
                >
                  <button 
                    onClick={() => setOpen(open === i ? null : i)}
                    className={`w-full p-6 text-right flex items-center justify-between gap-4 group ${open === i ? 'bg-brand text-white rounded-t-2xl' : ''}`}
                  >
                    <span className={`font-bold text-lg leading-snug ${open === i ? 'text-white' : 'text-gray-900'}`}>{faq.q}</span>
                    <ChevronDown className={`shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-white' : 'text-gray-400'}`} />
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 text-gray-600 leading-relaxed font-medium text-base bg-white rounded-b-2xl">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Styled Image - Left Side in RTL */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[500px]"
            >
              {/* Rotating Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border-2 border-dashed border-brand/20 rounded-full -z-10"
              ></motion.div>

              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-brand/5 backdrop-blur-3xl rounded-full -z-20 scale-110"></div>

              {/* Main Image Container */}
              <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://i.ibb.co/v4j3TQYF/548183374-803517145699947-1055836045542047515-n-1.jpg" 
                  alt="Ahmed Ali" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-24 h-24 bg-white shadow-2xl rounded-3xl flex items-center justify-center z-20 border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white rotate-12">
                  <BookOpen size={24} />
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-16 w-40 h-12 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl flex items-center justify-center z-20 border border-white/50 px-4 gap-3"
              >
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center text-white">
                  <Star size={12} fill="currentColor" />
                </div>
                <span className="text-xs font-black text-gray-800">مستقبلك يبدأ هنا</span>
              </motion.div>

              {/* Abstract Shapes from Screenshot */}
              <div className="absolute -bottom-10 right-10 z-20">
                <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 35C10 35 15 5 25 5C35 5 40 35 50 35C60 35 65 5 75 5C85 5 90 35 100 35" stroke="#F27D26" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M0 20C10 20 15 0 25 0C35 0 40 20 50 20C60 20 65 0 75 0C85 0 90 20 100 20" stroke="#F27D26" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>

              <div className="absolute top-1/2 -left-20 w-32 h-32 bg-brand/10 blur-[60px] rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-50 pt-20 pb-0 overflow-hidden" dir="rtl">
    <div className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        {/* Brand & Social & Description - Right Side */}
        <div className="text-center md:text-right md:col-span-4 flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="text-3xl font-black text-brand tracking-tighter leading-none">
              أحمد<br/>علي
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium max-w-sm">
            أنا أحمد علي، مصمم واجهات مستخدم وتجربة مستخدم أسعى لتحقيق التوازن بين الوظيفة والجمال في تصاميمي.
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            {[
              { icon: <Facebook size={18} />, link: "#" },
              { icon: <Instagram size={18} />, link: "#" },
              { icon: <Linkedin size={18} />, link: "#" },
              { icon: <Twitter size={18} />, link: "#" },
              { icon: <MessageCircle size={18} />, link: "#" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand shadow-sm hover:bg-brand hover:text-white transition-all duration-300 border border-gray-100"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links & Contact - Middle */}
        <div className="md:col-span-5 flex justify-center md:justify-start gap-16 lg:gap-24">
          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-gray-900 font-bold mb-6">روابط سريعة</h4>
            <div className="space-y-4 font-bold text-gray-600">
              <Link to="/testimonials" className="block hover:text-brand transition-colors">أثروا في مسيرتي</Link>
              <a href="#" className="block hover:text-brand transition-colors">عن أحمد</a>
              <Link to="/courses" className="block hover:text-brand transition-colors">الدورات</Link>
              <Link to="/consultation" className="block hover:text-brand transition-colors">الاستشارات</Link>
            </div>
          </div>
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-gray-900 font-bold mb-6">تواصل معي</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand shadow-sm border border-gray-100 group-hover:bg-brand group-hover:text-white transition-all">
                  <Phone size={14} />
                </div>
                <span className="text-gray-600 font-bold text-sm group-hover:text-brand transition-colors" dir="ltr">+20 108 004 4424</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand shadow-sm border border-gray-100 group-hover:bg-brand group-hover:text-white transition-all">
                  <Mail size={14} />
                </div>
                <span className="text-gray-600 font-bold text-sm group-hover:text-brand transition-colors">hi@ahmedali.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand shadow-sm border border-gray-100 group-hover:bg-brand group-hover:text-white transition-all">
                  <MapPin size={14} />
                </div>
                <span className="text-gray-600 font-bold text-sm group-hover:text-brand transition-colors">القاهرة، مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Left Side */}
        <div className="text-center md:text-right md:col-span-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">اشترك في النشرة</h3>
          <p className="text-brand font-bold mb-8">احصل على أفكار ونصائح تسويقية عملية أسبوعيًا.</p>
          <div className="relative w-full">
            <input 
              type="email" 
              placeholder="البريد الإلكتروني" 
              className="w-full py-4 pr-6 pl-6 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-brand outline-none text-right font-medium"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-brand py-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/90 text-sm font-bold">
        <div className="flex gap-8 order-2 md:order-1">
          © {new Date().getFullYear()} أحمد علي — جميع الحقوق محفوظة.
        </div>
        <div className="flex gap-8 order-1 md:order-2">
          <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
          <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
        </div>
      </div>
    </div>
  </footer>
);

const Courses = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-16">
        <div className="text-center md:text-right">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">الدورات المميزة</h2>
          <p className="text-gray-500">اختر دورتك الأساسية، مع محتوى عملي ونتائج مضمونة.</p>
        </div>
        <Link 
          to="/courses" 
          className="px-8 py-3 orange-gradient text-white rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-brand/20"
        >
          <Send size={18} className="rotate-180" />
          رؤية كل الدورات
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "كومبو أبيع نفسي - لأول 100 شخص",
            desc: "في ناس شاطرة جداً في شغلها... لكن محدش عارفهم. وفي ناس أقل مهارة... لكن بيعرفوا يسوقوا لنفسهم فيكسبوا أكتر بكتير. الفرق مش [...]",
            price: "600 EGP",
            oldPrice: "3,500 EGP",
            badge: "SAVE 82.86%",
            badgeColor: "bg-red-600",
            category: "COURSE BUNDLE - 3",
            students: "+96 طالب",
            duration: "12 ساعة",
            rating: "4.8",
            tags: ["تسويق", "مبيعات"],
            img: "https://picsum.photos/seed/course1/600/400"
          },
          {
            title: "دبلومة التسويق الشاملة - 5 كورسات",
            desc: "كل محتوى الموقع! عشر ساعات = عبارة عن دبلومة تسويق وبيرسونال براندنج شاملة",
            price: "1,199 EGP",
            oldPrice: "6,000 EGP",
            badge: "SAVE 80.02%",
            badgeColor: "bg-red-600",
            category: "COURSE BUNDLE - 5",
            students: "+5 طالب",
            duration: "25 ساعة",
            rating: "4.9",
            tags: ["تسويق", "براندنج"],
            img: "https://picsum.photos/seed/course2/600/400"
          },
          {
            title: "استراتيجيات بناء براند شخصي",
            desc: "في زمن أصبح فيه الظهور الرقمي أساس الفرص المهنية، ومع سباق محموم بين المحترفين لإثبات وجودهم، يبرز سؤال واحد: كيف [...]",
            price: "299 EGP",
            oldPrice: "1,000 EGP",
            badge: "جديد",
            badgeColor: "bg-brand",
            category: "BRANDING",
            students: "+734 طالب",
            duration: "8 ساعات",
            rating: "4.9",
            tags: ["براندنج", "ظهور"],
            img: "https://picsum.photos/seed/course3/600/400"
          }
        ].map((course, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl overflow-hidden flex flex-col group shadow-sm border border-gray-50"
          >
            <div className="relative h-40 overflow-hidden">
              <img 
                src={course.img} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute top-3 right-3 px-2 py-1 ${course.badgeColor} text-[8px] font-bold rounded text-white`}>
                {course.badge}
              </div>
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg border border-gray-50 shadow-sm flex items-center gap-1">
                <Star size={10} className="text-yellow-400 fill-yellow-400" />
                <span className="text-[9px] font-bold text-gray-700">{course.rating}</span>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full border border-gray-50 shadow-sm">
                <div className="flex -space-x-1.5 rtl:space-x-reverse">
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className="w-5 h-5 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <span className="text-[9px] font-bold text-gray-700">{course.students}</span>
              </div>
            </div>
            
            <div className="p-4 pt-6 flex flex-col flex-grow text-right">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Clock size={12} />
                  <span className="text-[9px] font-bold">{course.duration}</span>
                </div>
                <span className="px-2.5 py-1 bg-brand/10 text-brand text-[9px] font-bold rounded-full tracking-wide flex items-center gap-1.5">
                  {course.category}
                  <Layers size={12} />
                </span>
              </div>
              <h3 className="text-base font-bold mb-1 line-clamp-1 leading-snug text-gray-900">{course.title}</h3>
              <p className="text-gray-500 text-[10px] mb-3 line-clamp-2 leading-relaxed font-medium">
                {course.desc}
              </p>

              <div className="flex flex-wrap justify-end gap-1 mb-4">
                {course.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-gray-50 text-gray-400 text-[8px] font-bold rounded border border-gray-100">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                <Link 
                  to="/course/1"
                  className="flex items-center gap-1.5 bg-brand text-white hover:bg-brand/90 px-3 py-2 rounded-lg transition-all text-[10px] font-bold shadow-md shadow-brand/10"
                >
                  <Briefcase size={12} />
                  عرض الكورس
                </Link>
                <div className="text-left">
                  <div className="text-gray-400 text-[9px] line-through">{course.oldPrice}</div>
                  <div className="text-brand font-bold text-sm">{course.price}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Awards = () => {
  const awards = [
    {
      id: 1,
      tag: "Gridliners Awards",
      title: "هبّ | Audience Award",
      description: "حاصل على جائزة الجمهور بمسابقة Gridliners عن مشروع هبّ",
      image: "https://picsum.photos/seed/award1/600/400"
    },
    {
      id: 2,
      tag: "Gridliners Awards",
      title: "هبّ | Silver Winner",
      description: "المركز الثاني بمسابقة Gridliners فئة الهويات البصرية",
      image: "https://picsum.photos/seed/award2/600/400"
    },
    {
      id: 3,
      tag: "GDA Awards",
      title: "هبّ | Golden Winner",
      description: "المركز الأول بمسابقة GDA كأفضل مشروع لعام 2025",
      image: "https://picsum.photos/seed/award3/600/400"
    },
    {
      id: 4,
      tag: "Design Awards",
      title: "Best UI Design",
      description: "جائزة أفضل تصميم واجهة مستخدم لتطبيق هبّ",
      image: "https://picsum.photos/seed/award4/600/400"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">جوائز وإنجازات</h2>
            <p className="text-gray-500 max-w-md font-medium">
              تقدير عالمي لأعمالي من كبرى منظمات التصميم.
            </p>
          </div>
          <button className="px-8 py-3 orange-gradient text-white rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-brand/20 whitespace-nowrap">
            <Send size={18} className="rotate-180" />
            مشاهدة المزيد من الجوائز
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: award.id * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow text-right">
                  <span className="inline-block self-end px-3 py-1 bg-gray-50 text-gray-400 rounded-md text-[10px] font-bold mb-3">
                    {award.tag}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">
                    {award.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Consultation = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    {/* Abstract Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 blur-[100px] rounded-full"></div>
    </div>
    
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full font-bold text-sm mb-8">
          <Flame size={16} fill="currentColor" />
          متاح الآن للاستشارات
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
          هل أنت مستعد <span className="text-brand">لتحويل رؤيتك</span> إلى حقيقة؟
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          احجز جلسة استشارية مجانية مدتها 30 دقيقة لمناقشة مشروعك القادم وكيف يمكنني مساعدتك في تحقيق أهدافك التصميمية.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/consultation" className="px-10 py-5 orange-gradient text-white rounded-2xl font-bold text-xl shadow-2xl shadow-brand/30 hover:scale-105 transition-all flex items-center gap-3">
            احجز جلستك الآن
            <Calendar size={24} />
          </Link>
          <Link to="/projects" className="px-10 py-5 bg-gray-50 text-gray-900 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all border border-gray-200 flex items-center gap-3">
            تصفح أعمالي
            <ArrowLeft size={24} />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const CourseDetailPage = () => {
  const [activeModule, setActiveModule] = useState<number | null>(0);

  const modules = [
    {
      title: "الوحدة 1: بداية احترافية على بيهانس",
      lessons: [
        { title: "من هو أحمد علي، مدرب الدورة؟", duration: "05:00", isPreview: true },
        { title: "ماذا سنتعلم في هذه الدورة؟", duration: "08:00", isPreview: true },
        { title: "كيف تستفيد لأقصى حد من هذه الدورة", duration: "12:00", isPreview: false },
        { title: "كيفية إنشاء حسابك على بيهانس بشكل صحيح", duration: "15:00", isPreview: false },
      ]
    },
    {
      title: "الوحدة 2: أمان الحساب وبناء الثقة",
      lessons: [
        { title: "تأمين الحساب وربط وسائل التواصل", duration: "10:00", isPreview: false },
        { title: "بناء الثقة مع العملاء من خلال الملف الشخصي", duration: "20:00", isPreview: false },
      ]
    },
    {
      title: "الوحدة 3: بناء ملف شخصي مميز",
      lessons: [
        { title: "اختيار التخصص والكلمات المفتاحية", duration: "15:00", isPreview: false },
        { title: "كتابة السيرة الذاتية بشكل احترافي", duration: "12:00", isPreview: false },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 text-gray-900 min-h-screen font-['IBM_Plex_Sans_Arabic']" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Course Header Section - Matching other pages pattern */}
        <div className="mb-12 text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold rounded-full tracking-wide">DESIGN & FREELANCE</span>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-bold text-gray-700">4.9 (120 تقييم)</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              احتراف منصة بيهانس للمستقلين
            </h1>
            <p className="text-gray-500 text-lg max-w-3xl leading-relaxed font-medium">
              دليلك الشامل لبناء ملف شخصي يجذب العملاء ويحقق مبيعات. تعلم كيف تحول موهبتك إلى مشروع تجاري ناجح على أكبر منصة للمبدعين في العالم.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content - Right Side (in RTL) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Video Preview */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-100 shadow-2xl shadow-brand/5 group cursor-pointer bg-gray-900">
              <img 
                src="https://picsum.photos/seed/course-main/1200/675" 
                alt="Course Preview" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center shadow-2xl shadow-brand/40 group-hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" className="mr-1 text-white" />
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl border border-white/20 shadow-xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-bold text-gray-900">معاينة مجانية متاحة</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <section className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand rounded-full"></span>
                عن هذه الدورة
              </h2>
              <div className="text-gray-600 space-y-5 leading-relaxed text-xs md:text-sm font-medium">
                <p>أنت موهوب، وأعمالك تتحدث عنك، لكن ملفك على Behance صامت؟</p>
                <p>تتصفح المشاريع المميزة وتتساءل: "لماذا لا يُشاهد عملي؟" تنشر، تنتظر، تُحدث الصفحة، لا شيء.</p>
                <p>وعندما يظهر عميل أخيراً، سعر المشروع يبدو كأنه تخمين. أنت لست وحدك. معظم المبدعين لا يعرفون كيف يقدمون أنفسهم على Behance.</p>
                <p className="text-brand font-bold italic text-lg border-r-4 border-brand pr-5 py-2 bg-brand/5 rounded-l-xl">هذه الدورة هي طريقك المختصر لإتقان Behance للمستقلين.</p>
                
                <div className="grid md:grid-cols-2 gap-3 mt-8">
                  {[
                    "بناء ملف شخصي يجذب العملاء تلقائياً",
                    "استراتيجيات عرض المشاريع بشكل احترافي",
                    "فهم خوارزميات بيهانس لزيادة الظهور",
                    "كيفية تسعير خدماتك والتعامل مع العملاء",
                    "تحليل أعمال المنافسين والتميز عنهم",
                    "بناء شبكة علاقات مهنية قوية"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-brand/20 transition-colors">
                      <div className="w-7 h-7 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-brand" strokeWidth={3} />
                      </div>
                      <span className="text-gray-800 font-bold text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          {/* Curriculum */}
          <section>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand rounded-full"></span>
                منهج الدورة
              </h2>
              <span className="text-[10px] text-brand font-bold bg-brand/5 px-4 py-2 rounded-full border border-brand/10 inline-block w-fit">
                الدورة مقسمة إلى {modules.length} وحدات تعليمية
              </span>
            </div>

            <div className="space-y-4">
              {modules.map((module, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                    className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${activeModule === idx ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-gray-100 text-gray-500'}`}>
                        {idx + 1}
                      </div>
                      <span className="font-bold text-sm md:text-base text-gray-900">{module.title}</span>
                    </div>
                    <div className={`p-1.5 rounded-full transition-transform duration-300 ${activeModule === idx ? 'bg-brand/10 text-brand rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>
                  
                  {activeModule === idx && (
                    <div className="px-3 pb-3 space-y-1.5 bg-gray-50/30">
                      {module.lessons.map((lesson, lIdx) => (
                        <div key={lIdx} className="flex items-center justify-between p-4 rounded-xl hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className={`w-7 h-7 rounded-md flex items-center justify-center ${lesson.isPreview ? 'bg-brand/10 text-brand' : 'bg-gray-100 text-gray-400'}`}>
                              {lesson.isPreview ? <PlayCircle size={16} /> : <Lock size={14} />}
                            </div>
                            <span className={`text-xs font-bold ${lesson.isPreview ? 'text-gray-800' : 'text-gray-400'}`}>{lesson.title}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-[10px] text-gray-400 font-bold font-mono">{lesson.duration}</span>
                            {lesson.isPreview && (
                              <button className="text-[10px] font-bold text-brand bg-brand/5 px-3 py-1 rounded-full border border-brand/10 hover:bg-brand hover:text-white transition-all">
                                مشاهدة مجانية
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Instructor */}
          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-brand/10 flex-shrink-0 shadow-xl">
              <img src="https://i.pravatar.cc/150?u=ahmed" alt="Instructor" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-right">
              <div className="text-brand font-bold text-[10px] mb-1 uppercase tracking-widest">المدرب المعتمد</div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">أحمد علي</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                مصمم منتجات رقمية بخبرة تزيد عن 4 سنوات في إنشاء تطبيقات ومواقع تتوافق تحقق التوازن بين الجمال وسهولة الاستخدام. لا أصمم واجهات فقط، بل أحول أفكارك إلى حلول رقمية يحبها المستخدمون ويثق بها المستثمرون.
              </p>
            </div>
          </section>

          {/* Customer Reviews Section */}
          <section className="space-y-8">
            <div className="text-right">
              <h2 className="text-3xl font-black text-gray-900 mb-4">تقييمات العملاء</h2>
              <p className="text-gray-500 font-medium">آراء العملاء التي نفخر بها في رحلتنا المليئة بالإنجازات</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "سارة محمود",
                  role: "مصممة واجهات مستقلة",
                  text: "الدورة كانت نقطة تحول في مسيرتي المهنية. تعلمت كيف أعرض أعمالي بطريقة تجذب العملاء فعلاً.",
                  rating: 5
                },
                {
                  name: "محمد خالد",
                  role: "مطور تطبيقات",
                  text: "أحمد علي يشرح بأسلوب مبسط وعملي جداً. أنصح بها كل من يريد احتراف بيهانس.",
                  rating: 5
                }
              ].map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm font-medium mb-6 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{review.name}</div>
                      <div className="text-[10px] text-gray-400 font-bold">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - Left Side (in RTL) */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-6">
            {/* Pricing Card */}
            <div className="bg-white p-8 rounded-2xl text-gray-900 shadow-2xl shadow-brand/10 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center text-brand">
                  <Flame size={20} fill="currentColor" />
                </div>
                <div>
                  <span className="text-[9px] font-black text-brand bg-brand/5 px-2.5 py-1 rounded-full uppercase tracking-widest block w-fit mb-1">عرض محدود</span>
                  <div className="text-[10px] text-gray-400 font-bold">ينتهي العرض قريباً</div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-black text-brand">3099</span>
                  <span className="text-xl font-bold text-gray-400">ج.م</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-base line-through font-bold">4500 ج.م</span>
                  <span className="bg-red-50 text-red-600 text-[9px] font-black px-2 py-0.5 rounded-md">وفر 31%</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-3 font-bold leading-relaxed">دفع مرة واحدة - تحديثات مدى الحياة - وفر 1401 جنيه</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-700 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand">
                    <Layers size={16} />
                  </div>
                  <span>8 وحدات تعليمية مكثفة</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-gray-700 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand">
                    <FileText size={16} />
                  </div>
                  <span>9 أوراق عمل وملفات تطبيقية</span>
                </div>
              </div>

              {/* Removed Subscribe and WhatsApp buttons as requested */}

              <div className="pt-6 border-t border-gray-100">
                <div className="text-center text-[9px] text-gray-400 font-black mb-4 uppercase tracking-[0.2em]">طرق الدفع الآمنة</div>
                <div className="flex justify-center items-center gap-5 grayscale opacity-60">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Vodafone_2017_logo.svg" alt="Vodafone" className="h-5" />
                  <img src="https://instapay.eg/assets/images/logo.png" alt="Instapay" className="h-4" />
                </div>
              </div>
              
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center gap-2 py-3.5 bg-[#A435F0] text-white rounded-xl font-bold text-xs hover:opacity-90 transition-opacity shadow-lg shadow-[#A435F0]/20">
                  <img src="https://www.udemy.com/static/images/v7/logo-udemy.svg" alt="Udemy" className="h-4 invert" />
                  شراء من Udemy
                </a>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand mx-auto mb-4">
                <MessageSquare size={24} />
              </div>
              <h4 className="font-bold text-base mb-2 text-gray-900">هل لديك استفسار؟</h4>
              <p className="text-gray-500 text-xs mb-5 leading-relaxed font-medium">فريقنا متاح للرد على جميع تساؤلاتك حول الدورة ومحتواها.</p>
              <button className="text-brand font-bold text-sm hover:underline underline-offset-8">تحدث معنا الآن</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

const AboutPage = () => {
  const storySteps = [
    {
      title: "البداية",
      desc: "منذ حوالي خمس سنوات، كانت مجرد شغف شغوف بالتصميم. بدأت كخلق كمصمم جرافيك بسيط أعمل على إنشاء منشورات لصفحات فيسبوك مثل الأهلي نجوم مصرية وغيرها من الصفحات العامة. كان كل تصميم لا يتجاوز سعره 5 جنيهات، لكن هدفي لم يكن المال، بل دعم دراستي ودفع فواتير الإنترنت في أيام السرعات البطيئة."
    },
    {
      title: "الفضول",
      desc: "قضيت ساعات طويلة في منتديات التقنية والتصميم بدافع فضول لا ينتهي - كنت أريد أن أفهم كيف يعمل المطورون، وكيف أصنع البرامج، وكيف تتحول الأفكار إلى أدوات. هذا الفضول قادني للتعرف على محترف مبرمج من الإسكندرية كان يسعى لبناء أداة تسويقية."
    },
    {
      title: "الشرارة الأولى",
      desc: "جلسنا معاً وناقشنا رؤيته وبدأت في رسم وكتابة الأفكار - دون أن أعرف حتى معنى 'تجربة المستخدم' أو 'تصميم الواجهات'. كنت أتبع حدسي فقط. وبفضل الله، خرج المشروع للنور - مصمماً بالكامل باستخدام Photoshop - وحقق أكثر من 80,000 جنيه في الأسبوع الأول. كان نجاحاً كبيراً، لكن أعظم ما فيه هو اكتشاف لشيء جديد داخلي."
    },
    {
      title: "نقطة التحول",
      desc: "بعد بضعة أسابيع، كنت أحكي لصديق من المدرسة عن المشروع. ابتسم وقال جملة غيرت كل شيء: 'اللي بتعمله ده اسمه Design UX'. تلك اللحظة كانت نقطة التحول الحقيقية. عدت إلى المنزل وبدأت البحث، واكتشفت عالماً جديداً ينتظرني."
    },
    {
      title: "الرحلة",
      desc: "منذ ذلك اليوم، بدأت أدرس التصميم بجدية - تابعت دورات أونلاين (معظمها بالإنجليزية) وتعمقت في تجربة المستخدم. وتعلمت كيف يشكل علم النفس طريقة تفكير وشعور وتفاعل المستخدم. كانت رحلة غيرت طريقة تفكيري بالكامل."
    },
    {
      title: "أين أنا الآن",
      desc: "واليوم... أشارك قصتي هنا على موقعي. لأنني أؤمن أن رحلة أي مصمم تبدأ بالفضول وليس بالإمكانيات. وأن فكرة قيمتها 5 جنيه قد تتحول إلى شيء أعظم بكثير."
    }
  ];

  return (
    <div className="pt-20 bg-white text-gray-900 overflow-hidden" dir="rtl">
      {/* Editorial Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        {/* Background Text - Editorial Style */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.02] z-0">
          <h2 className="text-[30vw] font-display leading-none whitespace-nowrap uppercase tracking-tighter text-center">
            أحمد علي
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-right">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand/5 border border-brand/10 text-brand rounded-full text-xs font-black uppercase tracking-widest mb-8">
                  <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
                  متاح لتحديات جديدة
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-gray-900">
                  أحمد <span className="text-brand">علي</span>
                </h1>
                
                <div className="flex items-start gap-8 mb-12">
                  <div className="w-1 h-24 bg-brand/20 rounded-full hidden md:block"></div>
                  <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-xl">
                    فنان في عالم التكنولوجيا، أستكشف أعماق النفس البشرية لأصمم مساحات رقمية تشعرك بالألفة والراحة، حيث يمتزج علم النفس بالجمال لتصبح التكنولوجيا امتداداً طبيعياً لإحساسك.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <Link to="/contact" className="px-12 py-6 bg-brand text-white rounded-full font-black text-lg hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 hover:scale-105 active:scale-95 inline-block">
                    تواصل معي
                  </Link>
                  <div className="flex items-center gap-4">
                    {[
                      { icon: <Linkedin size={22} />, link: "#" },
                      { icon: <Dribbble size={22} />, link: "#" },
                      { icon: <Twitter size={22} />, link: "#" }
                    ].map((social, i) => (
                      <a key={i} href={social.link} className="w-14 h-14 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand hover:bg-brand/5 transition-all">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                  <div className="absolute inset-0 bg-brand/10 group-hover:opacity-0 transition-opacity duration-700"></div>
                  <img 
                    src="https://i.ibb.co/7tZwf6FS/547438725-805625648822430-8229388273858976577-n.jpg" 
                    alt="Ahmed Ali" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Bento-Grid Style Info removed */}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand/10 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-gray-900 h-full"></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Quote size={60} className="text-brand/20 mx-auto mb-12" />
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 leading-[1.1] tracking-tight">
              "امزج علم النفس بالتصميم لخلق تجارب <span className="text-brand">تبدو إنسانية</span>"
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
              أنا مصمم مصري مع أكثر من 5 سنوات من الخبرة في التصميم، وأعشق تجربة المستخدم - وليس فقط إرضاءهم. شغفي يكمن في استكشاف كيفية تفكير الناس والشعور، ثم تحويل هذه الرؤية إلى تصاميم ذات مغزى وتركز على الإنسان. أستمتع بإنشاء الحلول التي تحل المشاكل، وتعليم الآخرين، وتقديم ورش عمل تلهم الفرق للتفكير بعمق أكبر والتصميم بذكاء أكثر. التواصل والوضوح هما جوهر كل ما أفعله.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 border-y border-gray-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] text-center md:text-right mb-8 md:mb-0">موثوق به من قبل علامات تجارية عالمية</p>
            <div className="flex-1 overflow-hidden">
              <motion.div 
                className="flex items-center gap-12 md:gap-16 opacity-30 grayscale"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {["Kimabox", "Taji", "Ridez", "Raskoda", "Tard", "Kimabox", "Taji", "Ridez", "Raskoda", "Tard"].map((brand, i) => (
                  <div key={i} className="text-xl font-black text-gray-900 tracking-tighter whitespace-nowrap">{brand}</div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-24">
            <div className="w-16 h-2 bg-brand rounded-full"></div>
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">قصتي</h2>
          </div>

          <div className="space-y-24 relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 right-4 w-px bg-gray-100 hidden md:block"></div>

            {storySteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative pr-16 md:pr-24 group"
              >
                <div className="absolute top-2 right-0 w-8 h-8 bg-white border-2 border-gray-200 rounded-full z-10 flex items-center justify-center group-hover:border-brand transition-colors">
                  <div className="w-3 h-3 bg-gray-200 rounded-full group-hover:bg-brand transition-colors"></div>
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-black text-brand uppercase tracking-widest bg-brand/5 px-3 py-1 rounded-full mb-4 inline-block">الفصل 0{i+1}</span>
                  <h3 className="text-3xl font-black text-gray-900 mb-6">{step.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed font-medium text-xl max-w-3xl">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const TestimonialsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand font-bold mb-4 text-lg">أشخاص أثروا في مسيرتي</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              نخبة من الخبراء والمنتورز الملهمين
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              هؤلاء هم الأشخاص الذين تعلمت منهم وعملت معهم خلال رحلتي في عالم التصميم والابتكار الرقمي.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-[2rem] border border-gray-50 shadow-sm hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute -top-6 -left-6 text-brand/5 group-hover:text-brand/10 transition-colors">
                <Quote size={100} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-lg mb-1">{item.name}</div>
                    <div className="text-brand text-xs font-bold">{item.role}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed text-right italic">
                  "{item.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-brand transition-all group"
          >
            <ArrowRight size={20} className="group-hover:-translate-x-1 transition-transform" />
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

const CoursesPage = () => {
  const allCourses = [
    {
      title: "كومبو أبيع نفسي - لأول 100 شخص",
      desc: "في ناس شاطرة جداً في شغلها... لكن محدش عارفهم. وفي ناس أقل مهارة... لكن بيعرفوا يسوقوا لنفسهم فيكسبوا أكتر بكتير. الفرق مش [...]",
      price: "600 EGP",
      oldPrice: "3,500 EGP",
      badge: "SAVE 82.86%",
      badgeColor: "bg-red-600",
      category: "COURSE BUNDLE - 3",
      students: "+96 طالب",
      duration: "12 ساعة",
      rating: "4.8",
      tags: ["تسويق", "مبيعات"],
      img: "https://picsum.photos/seed/course1/600/400"
    },
    {
      title: "دبلومة التسويق الشاملة - 5 كورسات",
      desc: "كل محتوى الموقع! عشر ساعات = عبارة عن دبلومة تسويق وبيرسونال براندنج شاملة",
      price: "1,199 EGP",
      oldPrice: "6,000 EGP",
      badge: "SAVE 80.02%",
      badgeColor: "bg-red-600",
      category: "COURSE BUNDLE - 5",
      students: "+5 طالب",
      duration: "25 ساعة",
      rating: "4.9",
      tags: ["تسويق", "براندنج"],
      img: "https://picsum.photos/seed/course2/600/400"
    },
    {
      title: "استراتيجيات بناء براند شخصي",
      desc: "في زمن أصبح فيه الظهور الرقمي أساس الفرص المهنية، ومع سباق محموم بين المحترفين لإثبات وجودهم، يبرز سؤال واحد: كيف [...]",
      price: "299 EGP",
      oldPrice: "1,000 EGP",
      badge: "جديد",
      badgeColor: "bg-brand",
      category: "BRANDING",
      students: "+734 طالب",
      duration: "8 ساعات",
      rating: "4.9",
      tags: ["براندنج", "ظهور"],
      img: "https://picsum.photos/seed/course3/600/400"
    },
    {
      title: "كورس تصميم واجهات المستخدم UI",
      desc: "تعلم أساسيات تصميم واجهات المستخدم من الصفر حتى الاحتراف مع تطبيق عملي على مشاريع حقيقية.",
      price: "450 EGP",
      oldPrice: "1,500 EGP",
      badge: "الأكثر مبيعاً",
      badgeColor: "bg-orange-500",
      category: "DESIGN",
      students: "+1.2k طالب",
      duration: "15 ساعة",
      rating: "5.0",
      tags: ["تصميم", "UI/UX"],
      img: "https://picsum.photos/seed/course4/600/400"
    },
    {
      title: "دورة تجربة المستخدم UX Research",
      desc: "افهم سلوك المستخدمين وكيفية إجراء الأبحاث والاختبارات لضمان تجربة مستخدم مثالية.",
      price: "350 EGP",
      oldPrice: "1,200 EGP",
      badge: "متميز",
      badgeColor: "bg-blue-600",
      category: "RESEARCH",
      students: "+450 طالب",
      duration: "10 ساعات",
      rating: "4.7",
      tags: ["بحث", "UX"],
      img: "https://picsum.photos/seed/course5/600/400"
    },
    {
      title: "أساسيات الفريلانس والعمل الحر",
      desc: "دليلك الشامل لدخول عالم العمل الحر، كيفية الحصول على أول عميل، وتسعير خدماتك باحترافية.",
      price: "199 EGP",
      oldPrice: "800 EGP",
      badge: "خصم لفترة محدودة",
      badgeColor: "bg-green-600",
      category: "FREELANCE",
      students: "+2.5k طالب",
      duration: "6 ساعات",
      rating: "4.9",
      tags: ["عمل حر", "بيزنس"],
      img: "https://picsum.photos/seed/course6/600/400"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand font-bold mb-4 text-lg">أكاديمية أحمد علي</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              استثمر في نفسك وتعلم مهارات المستقبل
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              دورات تعليمية عملية مصممة لتأهيلك لسوق العمل وتطوير مهاراتك في التصميم، التسويق، والعمل الحر.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col group shadow-sm border border-gray-50"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={course.img} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-3 right-3 px-2 py-1 ${course.badgeColor} text-[8px] font-bold rounded text-white`}>
                  {course.badge}
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg border border-gray-50 shadow-sm flex items-center gap-1">
                  <Star size={10} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-[9px] font-bold text-gray-700">{course.rating}</span>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full border border-gray-50 shadow-sm">
                  <div className="flex -space-x-1.5 rtl:space-x-reverse">
                    {[1, 2, 3, 4].map(n => (
                      <div key={n} className="w-5 h-5 rounded-full border-2 border-white bg-gray-200"></div>
                    ))}
                  </div>
                  <span className="text-[9px] font-bold text-gray-700">{course.students}</span>
                </div>
              </div>
              
              <div className="p-4 pt-6 flex flex-col flex-grow text-right">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Clock size={12} />
                    <span className="text-[9px] font-bold">{course.duration}</span>
                  </div>
                  <span className="px-2.5 py-1 bg-brand/10 text-brand text-[9px] font-bold rounded-full tracking-wide flex items-center gap-1.5">
                    {course.category}
                    <Layers size={12} />
                  </span>
                </div>
                <h3 className="text-base font-bold mb-1 line-clamp-1 leading-snug text-gray-900">{course.title}</h3>
                <p className="text-gray-500 text-[10px] mb-3 line-clamp-2 leading-relaxed font-medium">
                  {course.desc}
                </p>

                <div className="flex flex-wrap justify-end gap-1 mb-4">
                  {course.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-50 text-gray-400 text-[8px] font-bold rounded border border-gray-100">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                  <Link 
                    to="/course/1"
                    className="flex items-center gap-1.5 bg-brand text-white hover:bg-brand/90 px-3 py-2 rounded-lg transition-all text-[10px] font-bold shadow-md shadow-brand/10"
                  >
                    <Briefcase size={12} />
                    عرض الكورس
                  </Link>
                  <div className="text-left">
                    <div className="text-gray-400 text-[9px] line-through">{course.oldPrice}</div>
                    <div className="text-brand font-bold text-sm">{course.price}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-brand transition-all group"
          >
            <ArrowRight size={20} className="group-hover:-translate-x-1 transition-transform" />
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'designer': return 'bg-brand/10 text-brand border-brand/20';
      case 'developer': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'pm': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'lead': return 'bg-green-50 text-green-600 border-green-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand font-bold mb-4 text-lg">معرض الأعمال</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              مشاريع رقمية صنعت بفكر وإبداع
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              استعرض مجموعة من أفضل أعمالي في مجالات التصميم، البرمجة، وإدارة المنتجات الرقمية.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden flex flex-col group shadow-sm hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500 border border-gray-50"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-5 right-5 px-3 py-1.5 bg-white/90 backdrop-blur-md text-[10px] font-bold rounded-lg text-gray-900 shadow-lg">
                  {project.type}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow text-right">
                <div className="flex flex-wrap justify-end gap-2 mb-3">
                  {project.roles.map((role, i) => (
                    <span key={i} className={`px-2.5 py-1 text-[9px] font-bold rounded-full border flex items-center gap-1.5 ${getRoleColor(role)}`}>
                      {role}
                      <Briefcase size={10} />
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-brand transition-colors">{project.name}</h3>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed font-medium">
                  {project.desc}
                </p>

                <div className="flex flex-wrap justify-end gap-1.5 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button className="flex items-center gap-3 bg-brand text-white hover:bg-brand/90 px-6 py-3 rounded-xl transition-all text-sm font-bold w-full justify-center group/btn shadow-lg shadow-brand/20">
                    <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                    مشاهدة تفاصيل المشروع
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-brand transition-all group"
          >
            <ArrowRight size={20} className="group-hover:-translate-x-1 transition-transform" />
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [workType, setWorkType] = useState<'personal' | 'commercial'>('personal');

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900 pt-32 pb-20 font-sans relative overflow-hidden" dir="rtl">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand font-bold mb-4 text-sm tracking-wide">لديك مشروع وتريد تنفيذه؟</p>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">لنتواصل معًا الآن</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white shadow-sm">
              <span className="text-sm font-bold text-gray-700">تقييم عالي من العملاء</span>
              <div className="flex text-brand">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white shadow-sm">
              <span className="text-sm font-bold text-gray-700">اتفاقية عدم إفصاح</span>
              <CheckCircle size={16} className="text-green-500" />
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Work Type */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4 text-right">نوع العمل</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setWorkType('personal')}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                    workType === 'personal' 
                    ? 'border-brand bg-brand/5 text-brand' 
                    : 'border-gray-100 text-gray-500 hover:border-brand/30 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold">شخصي</span>
                  {workType === 'personal' ? (
                    <CheckSquare className="text-brand" size={20} />
                  ) : (
                    <Square className="text-gray-400" size={20} />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setWorkType('commercial')}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                    workType === 'commercial' 
                    ? 'border-brand bg-brand/5 text-brand' 
                    : 'border-gray-100 text-gray-500 hover:border-brand/30 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold">تجاري</span>
                  {workType === 'commercial' ? (
                    <CheckSquare className="text-brand" size={20} />
                  ) : (
                    <Square className="text-gray-400" size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 text-right">الاسم الكامل</label>
                <input 
                  type="text" 
                  placeholder="جون دو" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all text-right"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 text-right">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  placeholder="john@doe.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all text-right"
                  dir="ltr"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 text-right">رقم الواتساب</label>
              <input 
                type="tel" 
                placeholder="+965-123-456" 
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all text-right"
                dir="ltr"
              />
            </div>

            {/* reCAPTCHA Placeholder */}
            <div className="flex justify-end pt-2">
              <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between gap-8 border border-gray-200 w-fit">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-6 h-6 rounded border-gray-300 text-brand focus:ring-brand" />
                  <span className="text-sm text-gray-700 font-sans font-medium" dir="ltr">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 opacity-80" />
                  <span className="text-[8px] text-gray-500 mt-1">reCAPTCHA</span>
                  <div className="text-[8px] text-gray-400 flex gap-1">
                    <span>Privacy</span> - <span>Terms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-brand text-white font-bold text-lg py-5 rounded-2xl hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { name: 'Behance', icon: <span className="font-black text-lg leading-none">Bē</span> },
            { name: 'Facebook', icon: <Facebook size={18} className="fill-current" /> },
            { name: 'LinkedIn', icon: <Linkedin size={18} className="fill-current" /> },
            { name: 'Twitter', icon: <Twitter size={18} className="fill-current" /> },
            { name: 'Dribbble', icon: <Dribbble size={18} /> },
          ].map((social, i) => (
            <a 
              key={i} 
              href="#" 
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-brand/30 hover:text-brand transition-all text-gray-600 shadow-sm"
            >
              <span className="font-bold text-sm">{social.name}</span>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ConsultationPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{title: string, price: string} | null>(null);

  const handleBook = (title: string, price: string) => {
    setSelectedPlan({ title, price });
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gray-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand font-bold bg-brand/10 px-4 py-2 rounded-full text-sm inline-block mb-6">الاستشارات</span>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                استثمر في مسارك المهني... <br />
                <span className="text-brand">بخبرة وتوجيه مخصص.</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                اختر باقة الاستشارة المناسبة لك، وابدأ رحلة تطوير مبنية على خبرة عملية في تصميم واجهات وتجربة المستخدم.
              </p>
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-brand/90 transition-all flex items-center gap-3 shadow-lg shadow-brand/20 hover:scale-105 active:scale-95">
                احجز استشارتك الآن
                <CalendarCheck size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent rounded-[3rem] transform rotate-3 scale-105"></div>
              <img 
                src="https://i.ibb.co/WNZZ1nMW/492554153-714896711228658-704044520897984266-n.jpg" 
                alt="Consultation" 
                className="rounded-[3rem] relative z-10 w-full object-cover aspect-square shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">لماذا تختار جلسات التوجيه معي؟</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">سواء كنت مصمماً مبتدئاً أو محترفاً، جلسات التوجيه مصممة لتلبية احتياجاتك.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} className="text-brand" />,
                title: "تطبيق عملي",
                desc: "جلسات عملية قابلة للتطبيق فوراً في مشاريعك الحالية والمستقبلية."
              },
              {
                icon: <HeartHandshake size={32} className="text-brand" />,
                title: "دعم مستمر",
                desc: "دعم شخصي مباشر لتجاوز التحديات التقنية والمهنية التي تواجهك."
              },
              {
                icon: <Target size={32} className="text-brand" />,
                title: "إنجاز أهدافك",
                desc: "خطة واضحة ومدروسة لتحقيق أهدافك المهنية بسرعة ووضوح."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">خطط تناسب وقتك واحتياجاتك</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">اختيارك للباقة هو خطوتك الأولى للنجاح.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Plan 1 */}
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 font-bold rounded-full text-sm mb-6">30 دقيقة</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">استشارة سريعة</h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">مناسبة للاستشارات السريعة أو حل مشكلة محددة تواجهك في مشروعك.</p>
              <div className="text-4xl font-black text-gray-900 mb-8">مجاناً</div>
              <button onClick={() => handleBook("استشارة سريعة", "مجاناً")} className="w-full py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-brand hover:text-brand transition-all flex items-center justify-center gap-2">
                احجز الآن <ArrowLeft size={18} />
              </button>
            </div>

            {/* Plan 2 (Highlighted) */}
            <div className="bg-brand rounded-[2rem] p-8 shadow-2xl shadow-brand/20 transform md:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="inline-block px-4 py-1.5 bg-white/20 text-white font-bold rounded-full text-sm mb-6 backdrop-blur-sm">60 دقيقة</div>
              <h3 className="text-2xl font-black text-white mb-4">جلسة متعمقة</h3>
              <p className="text-white/80 mb-8 text-sm leading-relaxed">مثالية للمواضيع العميقة أو مراجعة وتقييم المشاريع (Portfolio Review) في جلسة واحدة.</p>
              <div className="text-4xl font-black text-white mb-8">200 جنيه</div>
              <button onClick={() => handleBook("جلسة متعمقة", "200 جنيه")} className="w-full py-4 rounded-xl bg-white text-brand font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-lg">
                احجز الآن <ArrowLeft size={18} />
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 font-bold rounded-full text-sm mb-6">4 جلسات (شهر)</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">توجيه مستمر</h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">متابعة مستمرة وتوجيه مخصص لتطوير مسارك المهني بالكامل (Mentorship).</p>
              <div className="text-4xl font-black text-gray-900 mb-8">400 جنيه</div>
              <button onClick={() => handleBook("توجيه مستمر", "400 جنيه")} className="w-full py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-brand hover:text-brand transition-all flex items-center justify-center gap-2">
                احجز الآن <ArrowLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">ابدأ جلستك بخطوات واضحة</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">اختار، احجز، ادفع، وابدأ... ببساطة كده.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 right-0 left-0 h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "الخطوة الأولى", title: "اختر الباقة", desc: "اختيار الخطة الأنسب لوقتك واحتياجاتك.", icon: <Target size={24} /> },
              { step: "الخطوة الثانية", title: "حدد الموعد", desc: "اختر اليوم والوقت اللي يناسب جدولك.", icon: <CalendarCheck size={24} /> },
              { step: "الخطوة الثالثة", title: "أكمل الدفع", desc: "عملية دفع آمنة وسهلة عبر الإنترنت.", icon: <CreditCard size={24} /> },
              { step: "الخطوة الرابعة", title: "ابدأ استشارتك", desc: "خوض تجربة Coaching عملية وملهمة.", icon: <MonitorPlay size={24} /> }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-gray-900 border-2 border-gray-800 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:border-brand group-hover:bg-brand/10 transition-all shadow-xl">
                  {item.icon}
                </div>
                <span className="text-brand text-sm font-bold mb-2">{item.step}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-brand/90 transition-all inline-flex items-center gap-3 shadow-lg shadow-brand/20">
                احجز استشارتك الآن
                <ArrowLeft size={20} />
              </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">رحلة عملية بتجمع بين الخبرة، التطبيق الفوري، والدعم الشخصي</h2>
            <p className="text-gray-500 mt-4">علشان توصلك لأهدافك أسرع.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-x-reverse divide-gray-100">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">+10</div>
              <div className="text-gray-500 font-bold">سنوات خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">+100</div>
              <div className="text-gray-500 font-bold">رائد أعمال</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">1:1</div>
              <div className="text-gray-500 font-bold">دعم شخصي</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">+50</div>
              <div className="text-gray-500 font-bold">مشروع ناجح</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse Testimonials Component */}
      <div className="py-10">
        <Testimonials />
      </div>

      {/* FAQ Section specifically for Consultation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">أسئلة قد تراودك</h2>
            <p className="text-gray-500">إجابات لأكثر الأسئلة شيوعاً حول الاستشارات.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "هل ممكن إعادة جدولة الجلسة بعد الحجز؟", a: "نعم، يمكنك إعادة جدولة الجلسة قبل موعدها بـ 24 ساعة على الأقل من خلال الرابط الموجود في بريد التأكيد." },
              { q: "هل الجلسة مسجلة علشان أقدر أرجع لها بعدين؟", a: "نعم، يتم تسجيل الجلسة (بناءً على موافقتك) وإرسال رابط التسجيل لك بعد الانتهاء للرجوع إليها في أي وقت." },
              { q: "هل الجلسات متاحة أونلاين فقط أم أوفلاين؟", a: "حالياً جميع الجلسات تقدم أونلاين عبر Google Meet أو Zoom لضمان المرونة وسهولة التواصل من أي مكان." },
              { q: "كيف يمكنني الدفع؟", a: "نوفر طرق دفع متعددة وآمنة عبر الإنترنت تشمل البطاقات الائتمانية وبوابات الدفع الإلكترونية المعتمدة." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900">
                  {faq.q}
                  <span className="transition group-open:rotate-180 bg-gray-50 p-2 rounded-full text-brand">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir="rtl">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">حجز {selectedPlan.title}</h3>
              <button onClick={() => setIsBookingModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('تم استلام طلبك بنجاح! سيتم التواصل معك قريباً.'); setIsBookingModalOpen(false); }}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                  <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-brand transition-colors" placeholder="أدخل اسمك الكامل" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">رقم الواتساب</label>
                  <input type="tel" required dir="ltr" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-brand transition-colors text-right" placeholder="+20 100 000 0000" />
                </div>
                
                {selectedPlan.price !== 'مجاناً' && (
                  <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img src="https://instapay.eg/assets/images/logo.png" alt="Instapay" className="h-6" />
                      <span className="font-bold text-blue-900">الدفع عبر إنستاباي</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      برجاء تحويل مبلغ <span className="font-bold text-brand">{selectedPlan.price}</span> إلى الرقم التالي لتأكيد الحجز:
                    </p>
                    <div className="bg-white border border-blue-200 rounded-xl p-4 text-center mb-5 shadow-sm">
                      <span className="text-2xl font-black text-gray-900 tracking-wider" dir="ltr">01554295388</span>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">رقم الموبايل المحول منه</label>
                      <input type="tel" required dir="ltr" className="w-full bg-white border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-brand transition-colors text-right" placeholder="أدخل الرقم الذي قمت بالتحويل منه" />
                    </div>
                  </div>
                )}

                <button type="submit" className="w-full bg-brand text-white font-bold text-lg py-4 rounded-xl hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 mt-4">
                  تأكيد الحجز
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <TrustedBy />
    <Services />
    <Portfolio />
    <Courses />
    <Awards />
    <Testimonials />
    <Consultation />
    <FAQ />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-['IBM_Plex_Sans_Arabic']" dir="rtl">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Routes>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/201080044424" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-24 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50"
        >
          <MessageCircle size={32} />
        </a>

        {/* Scroll to top button */}
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-[#6344E3] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
          <ChevronDown className="rotate-180" />
        </button>
      </div>
    </BrowserRouter>
  );
}
