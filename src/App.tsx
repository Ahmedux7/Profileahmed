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
  useLocation,
  useParams
} from "react-router-dom";
import React, { useEffect, useState } from "react";
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
  ChevronsLeft,
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
  Rocket,
  BarChart,
  Lightbulb,
  TrendingUp,
  Shield,
  GraduationCap,
  Building2,
  Download,
} from "lucide-react";


import { homeInfluencers, influencers, testimonials, projects, experience, blogPosts } from "./data";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const coursesData = [
  {
    title: "جلب المستثمر والبيتش ديك",
    desc: "تعلم كيفية بناء عرض تقديمي (Pitch Deck) احترافي يجذب المستثمرين ويقنعهم بتمويل مشروعك أو شركتك الناشئة.",
    price: "قريباً",
    oldPrice: "",
    category: "BUSINESS",
    students: "قريباً",
    duration: "قريباً",
    rating: "5.0",
    tags: ["استثمار", "بيتش ديك"]
  },
  {
    title: "الأتمتة و n8n",
    desc: "احترف أتمتة المهام والعمليات باستخدام أداة n8n، ووفر مئات الساعات من العمل اليدوي لزيادة إنتاجيتك.",
    price: "قريباً",
    oldPrice: "",
    category: "AUTOMATION",
    students: "قريباً",
    duration: "قريباً",
    rating: "5.0",
    tags: ["أتمتة", "n8n"]
  },
  {
    title: "احتراف فايب كودينج",
    desc: "دليلك الشامل لتعلم البرمجة بالذكاء الاصطناعي (Vibe Coding) وبناء تطبيقات متكاملة بسرعة وكفاءة عالية.",
    price: "قريباً",
    oldPrice: "",
    category: "AI CODING",
    students: "قريباً",
    duration: "قريباً",
    rating: "5.0",
    tags: ["ذكاء اصطناعي", "برمجة"]
  }
];

const courseDetailsData = [
  {
    title: "جلب المستثمر والبيتش ديك",
    desc: "تعلم كيفية بناء عرض تقديمي (Pitch Deck) احترافي يجذب المستثمرين ويقنعهم بتمويل مشروعك أو شركتك الناشئة.",
    price: "قريباً",
    oldPrice: "",
    category: "BUSINESS",
    students: "قريباً",
    duration: "قريباً",
    rating: "4.9",
    tags: ["بيزنس", "استثمار"],
    about: [
      "أنت تملك فكرة عظيمة، لكن المستثمر يرى مئات الأفكار يومياً.",
      "كيف تجعل مشروعك يبرز؟ كيف تقنعهم بأنك الاستثمار الرابح؟",
      "في هذا الكورس، ستتعلم خطوة بخطوة كيفية بناء Pitch Deck لا يقاوم.",
      "هذه الدورة هي دليلك الشامل لفهم عقلية المستثمر وتأمين التمويل اللازم."
    ],
    learnings: [
      "بناء بيتش ديك احترافي من الصفر",
      "فهم متطلبات المستثمرين وكيفية إقناعهم",
      "استراتيجيات التفاوض على التمويل",
      "نماذج وقوالب جاهزة للاستخدام",
      "كيفية عرض المشكلة والحل بشكل مقنع",
      "توضيح نموذج العمل التجاري بوضوح"
    ],
    modules: [
      {
        title: "الوحدة 1: أساسيات البيتش ديك",
        lessons: [
          { title: "ما هو البيتش ديك وأهميته؟", duration: "05:00", isPreview: true },
          { title: "الهيكل الأساسي للعرض التقديمي", duration: "08:00", isPreview: true },
        ]
      },
      {
        title: "الوحدة 2: فهم عقلية المستثمر",
        lessons: [
          { title: "ماذا يبحث المستثمرون؟", duration: "10:00", isPreview: false },
          { title: "التقييم والمخاطر", duration: "12:00", isPreview: false },
        ]
      },
      {
        title: "الوحدة 3: بناء العرض التقديمي",
        lessons: [
          { title: "عرض المشكلة والحل", duration: "15:00", isPreview: false },
          { title: "السوق ونموذج العمل", duration: "20:00", isPreview: false },
        ]
      }
    ]
  },
  {
    title: "الأتمتة و n8n",
    desc: "اكتشف قوة الأتمتة مع n8n لتوفير الوقت والجهد. تعلم كيف تربط التطبيقات المختلفة وتبني مسارات عمل ذكية.",
    price: "قريباً",
    oldPrice: "",
    category: "AUTOMATION",
    students: "قريباً",
    duration: "قريباً",
    rating: "5.0",
    tags: ["أتمتة", "n8n"],
    about: [
      "هل تضيع ساعات طويلة في مهام روتينية متكررة؟",
      "هل ترغب في ربط تطبيقاتك المفضلة لتعمل معاً بسلاسة؟",
      "مع n8n، يمكنك بناء مسارات عمل معقدة بدون كتابة سطر كود واحد.",
      "هذه الدورة ستنقل إنتاجيتك إلى مستوى آخر تماماً."
    ],
    learnings: [
      "توفير مئات الساعات شهرياً عبر الأتمتة",
      "ربط أكثر من 200 تطبيق مختلف",
      "بناء أنظمة عمل تعمل تلقائياً 24/7",
      "تقليل الأخطاء البشرية وزيادة الإنتاجية",
      "استخدام Webhooks والـ APIs",
      "معالجة البيانات المعقدة بسهولة"
    ],
    modules: [
      {
        title: "الوحدة 1: مقدمة في الأتمتة",
        lessons: [
          { title: "المفاهيم الأساسية للأتمتة", duration: "07:00", isPreview: true },
          { title: "تثبيت وإعداد n8n", duration: "10:00", isPreview: true },
        ]
      },
      {
        title: "الوحدة 2: العقد (Nodes) والاتصالات",
        lessons: [
          { title: "كيفية ربط التطبيقات", duration: "15:00", isPreview: false },
          { title: "نقل ومعالجة البيانات", duration: "18:00", isPreview: false },
        ]
      },
      {
        title: "الوحدة 3: مسارات عمل متقدمة",
        lessons: [
          { title: "الشروط والتكرار (Loops)", duration: "20:00", isPreview: false },
          { title: "معالجة الأخطاء (Error Handling)", duration: "15:00", isPreview: false },
        ]
      }
    ]
  },
  {
    title: "احتراف فايب كودينج",
    desc: "تعلم كيف تستخدم أدوات الذكاء الاصطناعي لكتابة الأكواد وبناء التطبيقات بسرعة وكفاءة، حتى لو لم تكن مبرمجاً محترفاً.",
    price: "قريباً",
    oldPrice: "",
    category: "AI CODING",
    students: "قريباً",
    duration: "قريباً",
    rating: "4.8",
    tags: ["ذكاء اصطناعي", "برمجة"],
    about: [
      "هل ترغب في بناء تطبيقات ولكنك تجد البرمجة معقدة؟",
      "هل أنت مبرمج وتريد مضاعفة سرعة إنتاجك؟",
      "الـ Vibe Coding هو المستقبل، حيث تقوم بتوجيه الذكاء الاصطناعي لكتابة الكود بدلاً منك.",
      "هذه الدورة ستعلمك كيف تتحدث لغة الآلة بفعالية."
    ],
    learnings: [
      "بناء تطبيقات ومواقع في وقت قياسي",
      "التغلب على حاجز البرمجة المعقدة",
      "استخدام أحدث أدوات الذكاء الاصطناعي (Cursor, Copilot)",
      "تحويل أفكارك إلى منتجات حقيقية بسهولة",
      "هندسة الأوامر (Prompt Engineering) للبرمجة",
      "تصحيح الأخطاء (Debugging) بمساعدة AI"
    ],
    modules: [
      {
        title: "الوحدة 1: ما هو الـ Vibe Coding؟",
        lessons: [
          { title: "المفهوم والمستقبل", duration: "06:00", isPreview: true },
          { title: "التعرف على الأدوات (Cursor, Copilot)", duration: "12:00", isPreview: true },
        ]
      },
      {
        title: "الوحدة 2: هندسة الأوامر للبرمجة",
        lessons: [
          { title: "كيف تطلب الكود الصحيح", duration: "15:00", isPreview: false },
          { title: "تقسيم المهام المعقدة", duration: "18:00", isPreview: false },
        ]
      },
      {
        title: "الوحدة 3: بناء تطبيقات كاملة",
        lessons: [
          { title: "من الفكرة إلى الهيكل الأساسي", duration: "25:00", isPreview: false },
          { title: "تصحيح الأخطاء والنشر", duration: "20:00", isPreview: false },
        ]
      }
    ]
  }
];

const CourseCover = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#4a3b2c] via-[#b87c4c] to-[#3a2a1c] flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
    <span className="text-white font-bold text-2xl drop-shadow-md">قريباً</span>
    <div className="absolute top-3 right-3 px-4 py-1 bg-[#0a3a2a] text-[#00ff88] text-xs font-bold rounded-full border border-[#1a5c44] shadow-sm">
      عرض
    </div>
  </div>
);

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
          <Link to="/gallery" className="hover:text-brand transition-colors">الجاليري</Link>
          <Link to="/testimonials" className="hover:text-brand transition-colors">اثروا فيا</Link>
          <Link to="/courses" className="hover:text-brand transition-colors">الدورات</Link>
          <Link to="/consultation" className="hover:text-brand transition-colors">الاستشارات</Link>
          <Link to="/blog" className="hover:text-brand transition-colors">المدونة</Link>
          <Link to="/contact" className="hover:text-brand transition-colors">تواصل معي</Link>
        </div>

        {/* Actions - Desktop */}
        <div className="hidden md:flex justify-end items-center gap-6 whitespace-nowrap">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <Globe size={16} />
            <span>العربية</span>
          </div>
          <a href="https://image2url.com/r2/default/files/1774870160750-24cdad6d-7214-469c-8d5a-65bfe867973b.pdf" target="_blank" rel="noopener noreferrer" download="Ahmed_Ali_CV.pdf" className="px-5 py-2 bg-brand text-white rounded-xl font-bold text-xs flex items-center gap-2 hover:scale-105 transition-all relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            <Download size={14} />
            تحميل السيرة الذاتية
          </a>
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
          <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>الجاليري</Link>
          <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>اثروا فيا</Link>
          <Link to="/courses" onClick={() => setIsMenuOpen(false)}>الدورات</Link>
          <Link to="/consultation" onClick={() => setIsMenuOpen(false)}>الاستشارات</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>المدونة</Link>
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
          مدير منتجات ومؤسس شركات ناشئة
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-gray-900">أحمد علي</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-lg leading-relaxed font-medium">
          أنا مدير منتجات (Mid Product Manager) ومؤسس لشركتين ناشئتين. أجمع بين الرؤية الاستراتيجية وتصميم تجربة المستخدم (UI/UX) لتحويل الأفكار إلى منتجات رقمية ناجحة وشركات قابلة للنمو.
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
            <span className="text-gray-600 font-bold text-sm mt-1">( +200 استشارة )</span>
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
          {/* Available for Work Badge */}
          <div className="absolute top-4 right-4 z-20">
            <div className="text-green-600 text-sm font-bold flex items-center gap-2 bg-green-50/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-green-200 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              متاح للعمل
            </div>
          </div>

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
                <p className="text-sm font-black text-gray-900">مدير منتجات</p>
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
        <p className="text-gray-500">مجموعة واسعة من الخدمات المتكاملة لبناء منتجات ناجحة</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "إدارة المنتجات (Product Management)", desc: "التخطيط الاستراتيجي، بناء خارطة الطريق، وإدارة دورة حياة المنتج من الفكرة حتى الإطلاق والنمو.", icon: <Briefcase /> },
          { title: "تصميم تجربة المستخدم (UI/UX)", desc: "تصميم واجهات جذابة وتجارب مستخدم سلسة تزيد من التفاعل وتحقق أهداف العمل.", icon: <Layout /> },
          { title: "استشارات الشركات الناشئة", desc: "مساعدة المؤسسين في بناء الـ MVP، وتجهيز الـ Pitch Deck لجلب الاستثمارات.", icon: <Search /> },
          { title: "الأتمتة (Automation)", desc: "بناء مسارات عمل ذكية باستخدام n8n لتوفير الوقت وتقليل الأخطاء البشرية.", icon: <Code /> },
          { title: "تحليل البيانات", desc: "فهم سلوك المستخدمين من خلال رؤى قيمة على البيانات لدعم اتخاذ قرارات أكثر ذكاءً.", icon: <Share2 /> },
          { title: "تطوير المنتجات بالذكاء الاصطناعي", desc: "استخدام أدوات الـ Vibe Coding والذكاء الاصطناعي لتسريع عملية بناء وتطوير المنتجات.", icon: <Video /> },
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
    { label: "شركات ناشئة أسستها", value: "2" },
    { label: "منتج رقمي أطلقته", value: "+20" },
    { label: "سنوات خبرة", value: "5" },
    { label: "عميل سعيد", value: "+30" },
    { label: "متابع على سوشال ميديا", value: "+15K" },
    { label: "مسابقة فزت بها", value: "+30" },
  ];

  const partners = ["Ghadwa", "Ibn Sina", "Kidihow", "Rebekia", "Weautopilot", "Fasila"];
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-24 bg-white border-y border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex-1 overflow-hidden mb-16">
          <motion.div 
            className="flex items-center gap-12 md:gap-16 opacity-50 justify-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {duplicatedPartners.map((brand, i) => (
              <div key={i} className="text-xl font-black text-gray-900 tracking-tighter whitespace-nowrap hover:text-brand transition-colors duration-300">{brand}</div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="text-4xl md:text-5xl font-black text-brand">{stat.value}</span>
              <span className="text-gray-500 font-bold text-xs md:text-sm uppercase tracking-wider">{stat.label}</span>
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
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col group"
            >
              <div className="relative mb-4 h-48 rounded-lg overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold rounded text-white">
                  {project.type}
                </div>
              </div>
              
              <div className="flex flex-col flex-grow text-right">
                <div className="flex flex-wrap justify-end gap-1.5 mb-3">
                  {project.roles.map((role, i) => (
                    <span key={i} className={`px-2 py-1 text-[10px] font-bold rounded-full border flex items-center gap-1 ${getRoleColor(role)}`}>
                      {role}
                      <Briefcase size={10} />
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold mb-2 line-clamp-1 text-gray-900 group-hover:text-brand transition-colors">{project.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed font-medium flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap justify-end gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button className="flex items-center gap-2 bg-brand text-white hover:bg-brand/90 px-4 py-2.5 rounded-xl transition-all text-xs font-bold w-full justify-center shadow-md shadow-brand/10">
                    <ExternalLink size={14} />
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
          
          {homeInfluencers.map((item, i) => (
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
                className={`w-full ${item.height} object-cover rounded-xl shadow-sm border border-gray-100/50`}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(0, 4).map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-100/50 shadow-sm hover:shadow-md relative overflow-hidden group transition-all duration-300"
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
    { q: "ما هي الخدمات التي تقدمها؟", a: "أقدم خدمات إدارة المنتجات (Product Management)، استشارات الشركات الناشئة، وتصميم تجربة المستخدم (UI/UX)." },
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
                  src="https://i.ibb.co/8DyXMqRJ/534936271-783282314390097-1989541586977274025-n.jpg" 
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
            <Link to="/" className="hover:scale-105 transition-transform">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3609/3609930.png" 
                alt="Logo" 
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium max-w-sm">
            أنا أحمد علي، مدير منتجات ومؤسس لشركتين ناشئتين. أجمع بين الرؤية الاستراتيجية وتصميم تجربة المستخدم لبناء منتجات رقمية ناجحة.
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            {[
              { icon: <Facebook size={18} />, link: "https://www.facebook.com/ahmed.ali.137893/" },
              { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/ahmed-ali-%F0%9F%A6%84-1353a3200/" },
              { icon: <span className="font-black text-sm leading-none">Bē</span>, link: "https://www.behance.net/ahmedali4f006" },
              { icon: <MessageCircle size={18} />, link: "https://wa.me/201554295388" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
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
              <Link to="/about" className="block hover:text-brand transition-colors">عن أحمد</Link>
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
                <span className="text-gray-600 font-bold text-sm group-hover:text-brand transition-colors" dir="ltr">+20 155 429 5388</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand shadow-sm border border-gray-100 group-hover:bg-brand group-hover:text-white transition-all">
                  <Mail size={14} />
                </div>
                <span className="text-gray-600 font-bold text-sm group-hover:text-brand transition-colors">ahmeduiux7@gmail.com</span>
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

        {/* Call to Action - Left Side */}
        <div className="text-center md:text-right md:col-span-3">
          <div className="bg-brand/5 p-8 rounded-[2rem] border border-brand/10">
            <h3 className="text-xl font-black text-gray-900 mb-4">هل لديك مشروع؟</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">أنا متاح دائماً لمناقشة الأفكار الجديدة والمشاريع الطموحة.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-brand font-black text-sm group"
            >
              ابدأ الآن
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
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
        {coursesData.map((course, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -8 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col group"
          >
            <div className="relative mb-6 h-48 rounded-lg overflow-hidden shrink-0">
              <CourseCover />
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
            
            <div className="flex flex-col flex-grow text-right">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Clock size={12} />
                  <span className="text-[9px] font-bold">{course.duration}</span>
                </div>
                <span className="px-2.5 py-1 bg-brand/10 text-brand text-[9px] font-bold rounded-full tracking-wide flex items-center gap-1.5">
                  {course.category}
                  <Layers size={12} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 line-clamp-1 leading-snug text-gray-900 group-hover:text-brand transition-colors">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed font-medium flex-grow">
                {course.desc}
              </p>

              <div className="flex flex-wrap justify-end gap-1.5 mb-6">
                {course.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-50 text-gray-400 text-[9px] font-bold rounded border border-gray-100">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                <Link 
                  to={`/course/${i}`}
                  className="flex items-center gap-2 bg-brand text-white hover:bg-brand/90 px-4 py-2.5 rounded-xl transition-all text-xs font-bold shadow-md shadow-brand/10"
                >
                  <Briefcase size={14} />
                  عرض الكورس
                </Link>
                <div className="text-left">
                  <div className="text-gray-400 text-[10px] line-through">{course.oldPrice}</div>
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

const awards = [
  {
    id: 1,
    tag: "Startup Power Competition",
    title: "🇪🇬Top Winners Startup Power Competition 🏆",
    description: "التكريم كأحد الفائزين الأوائل للتميز في حلول إدارة النفايات المدعومة تقنياً.",
    image: "https://i.ibb.co/HDbnHJ7c/4-25.png",
    icon: <Trophy className="text-yellow-500" size={20} />
  },
  {
    id: 2,
    tag: "Greenish Egypt",
    title: "🇫🇷 Greenish Egypt - 3rd Place 🏆",
    description: "تقدير على المستوى الوطني للأثر المستدام في برنامج مدعوم من جهات دولية فرنسية.",
    image: "https://i.ibb.co/4nBvSw2s/5-5.png",
    icon: <Flame className="text-brand" size={20} />
  },
  {
    id: 3,
    tag: "Creativity Competition",
    title: "Second Place in the Creativity Competition 🏆",
    description: "المركز الثاني في مسابقة الإبداع تقديراً للابتكار والتميز.",
    image: "https://i.ibb.co/fKVbrdn/5-556.png",
    icon: <Trophy className="text-yellow-600" size={20} />
  },
  {
    id: 4,
    tag: "Gen Z Competition",
    title: "Gen Z National Competition Winner (DMC TV) 🏆 📺",
    description: "الفوز بالمركز الأول في المسابقة الوطنية Gen Z المذاعة على قناة DMC.",
    image: "https://i.ibb.co/JFKDKxcL/2-2.png",
    icon: <Award className="text-brand" size={20} />
  }
];

const Awards = () => {

  return (
    <section className="py-32 bg-[#F8F9FA] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-right">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">جوائز وإنجازات</h2>
            <p className="text-gray-500 max-w-md font-medium">
              تقدير عالمي لأعمالي من كبرى منظمات التصميم والابتكار الرقمي.
            </p>
          </div>
          <Link 
            to="/awards"
            className="px-8 py-3 orange-gradient text-white rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-brand/20 whitespace-nowrap"
          >
            <Send size={18} className="rotate-180" />
            مشاهدة المزيد من الجوائز
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group h-full"
            >
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <img src={award.image} alt={award.title} className="w-full h-48 object-cover rounded-lg mb-4" referrerPolicy="no-referrer" />
                <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center mb-4">
                  {award.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-grow">{award.description}</p>
                <span className="text-xs font-bold text-brand bg-brand/5 px-3 py-1 rounded-full self-start">{award.tag}</span>
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
  const { id } = useParams();
  const [activeModule, setActiveModule] = useState<number | null>(0);

  const courseIndex = id ? parseInt(id, 10) : 0;
  const course = courseDetailsData[courseIndex] || courseDetailsData[0];
  const modules = course.modules;

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
              <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold rounded-full tracking-wide">{course.category}</span>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-bold text-gray-700">{course.rating}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-gray-500 text-lg max-w-3xl leading-relaxed font-medium">
              {course.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content - Right Side (in RTL) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Video Preview */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-100 shadow-2xl shadow-brand/5 group cursor-pointer bg-gray-900">
              <CourseCover />
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
                {course.about.map((paragraph, idx) => (
                  <p key={idx} className={idx === course.about.length - 1 ? "text-brand font-bold italic text-lg border-r-4 border-brand pr-5 py-2 bg-brand/5 rounded-l-xl" : ""}>
                    {paragraph}
                  </p>
                ))}
                
                <div className="grid md:grid-cols-2 gap-3 mt-8">
                  {course.learnings.map((item, i) => (
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
              <img src="https://i.ibb.co/v4j3TQYF/548183374-803517145699947-1055836045542047515-n-1.jpg" alt="Instructor" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-right">
              <div className="text-brand font-bold text-[10px] mb-1 uppercase tracking-widest">المدرب المعتمد</div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">أحمد علي</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                مدير منتجات (Mid Product Manager) ومؤسس لشركتين ناشئتين. أجمع بين خبرتي في إدارة المنتجات وتصميم تجربة المستخدم (UI/UX) لمساعدتك في تحويل أفكارك إلى منتجات ناجحة وشركات قابلة للنمو وجذب الاستثمارات.
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
                  <span className="text-5xl font-black text-brand">{course.price}</span>
                  {course.price !== "قريباً" && <span className="text-xl font-bold text-gray-400">ج.م</span>}
                </div>
                {course.oldPrice && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-base line-through font-bold">{course.oldPrice}</span>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-700 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand">
                    <Layers size={16} />
                  </div>
                  <span>{course.modules.length} وحدات تعليمية مكثفة</span>
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
              
              {course.price !== "قريباً" && (
                <div className="mt-6">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 bg-[#A435F0] text-white rounded-xl font-bold text-xs hover:opacity-90 transition-opacity shadow-lg shadow-[#A435F0]/20">
                    <img src="https://www.udemy.com/static/images/v7/logo-udemy.svg" alt="Udemy" className="h-4 invert" />
                    شراء من Udemy
                  </a>
                </div>
              )}
            </div>

            {/* Support Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand mx-auto mb-4">
                <MessageSquare size={24} />
              </div>
              <h4 className="font-bold text-base mb-2 text-gray-900">هل لديك استفسار؟</h4>
              <p className="text-gray-500 text-xs mb-5 leading-relaxed font-medium">فريقنا متاح للرد على جميع تساؤلاتك حول الدورة ومحتواها.</p>
              <a 
                href="https://wa.me/201554295388" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand font-bold text-sm hover:underline underline-offset-8"
              >
                تحدث معنا الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

const AboutPage = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [showAllAwards, setShowAllAwards] = useState(false);

  const certifications = [
    {
      title: "Agile Product Owner Role: Techniques",
      issuer: "Project Management Institute",
      date: "2024",
      desc: "شهادة متخصصة في تقنيات دور مالك المنتج في بيئة Agile.",
      icon: <Award className="text-brand" size={24} />
    },
    {
      title: "Manus For Product Manager",
      issuer: "Manus AI",
      date: "2023",
      desc: "برنامج مكثف لمديري المنتجات يركز على الأدوات والمنهجيات الحديثة.",
      icon: <Layers className="text-brand" size={24} />
    },
    {
      title: "Sprints x Microsoft Summer Camp - Product Management",
      issuer: "Sprints",
      date: "2023",
      desc: "معسكر تدريبي مكثف بالتعاون مع مايكروسوفت في إدارة المنتجات.",
      icon: <Zap className="text-brand" size={24} />
    },
    {
      title: "Product Vision, Strategy, and Objectives",
      issuer: "The Product Compass",
      date: "2023",
      desc: "دورة متقدمة في بناء رؤية المنتج واستراتيجيته وتحديد الأهداف.",
      icon: <Target className="text-brand" size={24} />
    },
    {
      title: "Continuous Product Discovery",
      issuer: "The Product Compass",
      date: "2023",
      desc: "تعلم منهجيات اكتشاف المنتج المستمر لضمان تقديم قيمة حقيقية للمستخدمين.",
      icon: <Search className="text-brand" size={24} />
    },
    {
      title: "Radical Product Thinking: Vision Setting",
      issuer: "Pendo.io",
      date: "2024",
      desc: "منهجية التفكير الجذري في بناء رؤية المنتجات الرقمية.",
      icon: <Flame className="text-brand" size={24} />
    },
    {
      title: "Product Management Basics Certification",
      issuer: "Pendo.io",
      date: "2024",
      desc: "أساسيات إدارة المنتجات والتعامل مع البيانات والتحليلات.",
      icon: <CheckCircle className="text-brand" size={24} />
    },
    {
      title: "AI For Startups",
      issuer: "Udemy",
      date: "2024",
      desc: "كيفية دمج تقنيات الذكاء الاصطناعي في الشركات الناشئة.",
      icon: <Cpu className="text-brand" size={24} />
    },
    {
      title: "Investments Hacks: The Art of Fund",
      issuer: "Yanfaa.com",
      date: "2024",
      desc: "فهم أساسيات الاستثمار وجمع التمويل للشركات الناشئة.",
      icon: <CreditCard className="text-brand" size={24} />
    },
    {
      title: "Climate Finance",
      issuer: "Micromentor",
      date: "2024",
      desc: "أساسيات التمويل المناخي والمشاريع المستدامة.",
      icon: <Globe className="text-brand" size={24} />
    },
    {
      title: "Mitigating and Adapting to Climate Change for Businesses",
      issuer: "Micromentor",
      date: "2024",
      desc: "استراتيجيات التكيف مع التغير المناخي في بيئة الأعمال.",
      icon: <Globe className="text-brand" size={24} />
    },
    {
      title: "Introduction to Climate Action for Entrepreneurs",
      issuer: "Micromentor",
      date: "2024",
      desc: "مقدمة في العمل المناخي لرواد الأعمال في منطقة الشرق الأوسط.",
      icon: <Globe className="text-brand" size={24} />
    }
  ];

  const awards = [
    {
      title: "🇪🇬Top Winners Startup Power Competition 🏆",
      issuer: "Startup Power Competition",
      date: "2025",
      desc: "التكريم كأحد الفائزين الأوائل للتميز في حلول إدارة النفايات المدعومة تقنياً.",
      icon: <Trophy className="text-brand" size={24} />
    },
    {
      title: "🇫🇷 Greenish Egypt - 3rd Place 🏆",
      issuer: "Greenish Egypt",
      date: "2024",
      desc: "تقدير على المستوى الوطني للأثر المستدام في برنامج مدعوم من جهات دولية فرنسية.",
      icon: <Flame className="text-brand" size={24} />
    },
    {
      title: "Second Place in the Creativity Competition 🏆",
      issuer: "Creativity Competition",
      date: "2024",
      desc: "المركز الثاني في مسابقة الإبداع تقديراً للابتكار والتميز.",
      icon: <Award className="text-brand" size={24} />
    },
    {
      title: "Gen Z National Competition Winner (DMC TV) 🏆 📺",
      issuer: "DMC TV",
      date: "2024",
      desc: "تأمين تمويل من خلال برنامج ريادة الأعمال الأول في مصر على قناة DMC.",
      icon: <Star className="text-brand" size={24} />
    },
    {
      title: "Yied Alex Support",
      issuer: "Yied-Rally",
      date: "2024",
      desc: "المركز الأول والحصول على تمويل ودعم استراتيجي من مبادرة مدعومة من الدنمارك.",
      icon: <Zap className="text-brand" size={24} />
    },
    {
      title: "Namaa Incubation",
      issuer: "Nema",
      date: "2024",
      desc: "القبول في حاضنة الأعمال المرموقة مع تمويل ودعم استراتيجي.",
      icon: <Layers className="text-brand" size={24} />
    },
    {
      title: "Accepted in Fintekrs Programs",
      issuer: "Rebekia",
      date: "2023",
      desc: "برنامج ما قبل الاحتضان مصمم لدعم رواد الأعمال والشركات الناشئة ذات الإمكانات العالية.",
      icon: <CheckCircle className="text-brand" size={24} />
    },
    {
      title: "Second Place in the Creativity Competition",
      issuer: "Rebekia",
      date: "2023",
      desc: "المركز الثاني في مسابقة الإبداع تقديراً للابتكار والتميز.",
      icon: <Palette className="text-brand" size={24} />
    },
    {
      title: "First place in Gharbia Governorate in green projects",
      issuer: "Government",
      date: "2023",
      desc: "الممثل الرسمي لـ COP27: تم اختياره لتمثيل مصر (الغربية) في مسار المشاريع الخضراء بالأمم المتحدة.",
      icon: <Globe className="text-brand" size={24} />
    },
    {
      title: "First Place in Ibn Sina Academy",
      issuer: "Ibn Sina Academy",
      date: "2023",
      desc: "أفضل أداء في مسابقة مرموقة بين ألمع العقول في المنطقة.",
      icon: <Trophy className="text-brand" size={24} />
    },
    {
      title: "First Place in Az-sences",
      issuer: "Rebekia",
      date: "2022",
      desc: "جائزة أفضل فكرة تطبيق موبايل على مستوى الجامعة لحل مشكلة التلوث البيئي.",
      icon: <Cpu className="text-brand" size={24} />
    },
    {
      title: "The Third place in Hackathon mansoura",
      issuer: "Rebekia",
      date: "2022",
      desc: "الحصول على المركز الثالث بين عدد كبير من الفرق المتنافسة في أول هاكاثون بالمنصورة.",
      icon: <Zap className="text-brand" size={24} />
    }
  ];

  const storySteps = [
    {
      title: "البداية والشغف",
      desc: "بدأت رحلتي بشغف عميق بالتكنولوجيا والبرمجة، حيث كنت أعمل كمطور برمجيات (Developer) في بداياتي. لم يكن هدفي المال، بل كان الفضول هو المحرك الأساسي لفهم كيف تُبنى الأدوات الرقمية وكيف تتحول الأكواد إلى واقع ملموس."
    },
    {
      title: "اكتشاف تجربة المستخدم",
      desc: "قادني الفضول للتعرف على عالم تجربة المستخدم (UX)، وبدأت أدرك أن التصميم ليس مجرد شكل جمالي، بل هو حل لمشكلات حقيقية تواجه الناس. هذا الإدراك كان الشرارة الأولى لدخولي عالم بناء المنتجات المتكاملة."
    },
    {
      title: "تأسيس الشركات الناشئة",
      desc: "لم أكتفِ بالبرمجة فقط، بل أردت بناء رؤية كاملة للمنتج. أسست شركتي الناشئة الأولى، حيث تعلمت دروساً قاسية وممتعة في استراتيجية الأعمال، والنمو، وقيادة الفرق التقنية، وكيفية تحويل الفكرة إلى شركة قائمة."
    },
    {
      title: "إدارة المنتجات الاستراتيجية",
      desc: "مع مرور الوقت، صقلت مهاراتي كمدير منتجات (Mid Product Manager). أصبحت أركز على الربط بين احتياجات المستخدم، وأهداف العمل، والقدرات التقنية لبناء منتجات رقمية ذات أثر حقيقي وقابلة للتوسع."
    },
    {
      title: "الرؤية والرسالة الحالية",
      desc: "اليوم، أجمع بين خبرتي كمؤسس ومدير منتجات لمساعدة الشركات الناشئة والمنتجات الرقمية على النمو والنجاح. أؤمن أن المنتج الناجح هو الذي يجمع بين التصميم المبدع، الاستراتيجية الذكية، والفهم العميق للسوق."
    }
  ];

  return (
    <div className="pt-20 bg-white text-gray-900 overflow-hidden" dir="rtl">
      {/* Editorial Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-right order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand/5 border border-brand/10 text-brand rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
                  <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
                  رؤية استراتيجية • تنفيذ إبداعي
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-gray-900">
                  من <span className="text-brand">الفكرة</span> إلى <span className="text-brand italic serif">النمو</span>: بناء منتجات رقمية استثنائية
                </h1>
                
                <div className="flex items-start gap-8 mb-12">
                  <div className="w-1.5 h-24 bg-brand rounded-full hidden md:block shrink-0"></div>
                  <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
                    مدير منتجات ومؤسس لشركتين ناشئتين. أجمع بين الرؤية الاستراتيجية وتصميم تجربة المستخدم لتحويل الأفكار إلى منتجات رقمية ناجحة وشركات قابلة للنمو.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <Link to="/contact" className="px-10 py-5 orange-gradient text-white rounded-2xl font-black flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-brand/30 group">
                    ابدأ مشروعك الآن
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/ahmed-ali-%F0%9F%A6%84-1353a3200/" },
                      { icon: <Facebook size={20} />, link: "https://www.facebook.com/ahmed.ali.137893/" },
                      { icon: <span className="font-black text-lg leading-none">Bē</span>, link: "https://www.behance.net/ahmedali4f006" },
                      { icon: <MessageCircle size={20} />, link: "https://wa.me/201554295388" }
                    ].map((social, i) => (
                      <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand hover:bg-brand/5 transition-all">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-[0_80px_120px_-30px_rgba(0,0,0,0.2)] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  <img 
                    src="https://i.ibb.co/7tZwf6FS/547438725-805625648822430-8229388273858976577-n.jpg" 
                    alt="Product Visionary" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Available for Work Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="text-green-600 text-sm font-bold flex items-center gap-2 bg-green-50/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-green-200 shadow-xl">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      متاح للعمل
                    </div>
                  </div>
                </div>

                {/* Abstract Shapes */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10"></div>
                
                {/* Floating Badge Removed */}
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
              "طموحي هو قيادة وإدارة الشركات الناشئة وتحويل الرؤى الطموحة إلى <span className="text-brand">واقع ملموس</span>"
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
              أنا مدير منتجات ومؤسس لشركتين ناشئتين، مع أكثر من 5 سنوات من الخبرة في بناء المنتجات الرقمية. شغفي يكمن في استكشاف كيفية تفكير الناس، ثم تحويل هذه الرؤية إلى منتجات ذات مغزى تحل مشاكل حقيقية. أستمتع بإنشاء الحلول، قيادة الفرق، بناء نماذج العمل، وتقديم ورش عمل تلهم الفرق للتفكير بعمق أكبر والعمل بذكاء أكثر. التواصل والوضوح هما جوهر كل ما أفعله.
            </p>
          </motion.div>
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

      {/* Certifications and Awards Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand font-bold mb-4 text-sm tracking-widest uppercase">الإنجازات والتقدير</p>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">الشهادات والجوائز</h2>
              <div className="w-24 h-1.5 bg-brand mx-auto rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="w-full">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-1 bg-brand rounded-full"></div>
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">الشهادات</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.slice(0, showAllCerts ? certifications.length : 4).map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-white p-5 rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-all group flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all shrink-0">
                      {cert.icon}
                    </div>
                    <div className="text-right">
                      <h3 className="text-xs font-black text-gray-900 mb-1 leading-tight">{cert.title}</h3>
                      <p className="text-gray-400 text-[10px] font-bold mb-2">{cert.issuer}</p>
                      <span className="text-[9px] font-black text-brand bg-brand/5 px-2 py-0.5 rounded-full uppercase tracking-widest">{cert.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {certifications.length > 4 && (
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setShowAllCerts(!showAllCerts)}
                    className="px-8 py-3 border-2 border-brand text-brand rounded-xl font-black text-xs hover:bg-brand hover:text-white transition-all uppercase tracking-widest"
                  >
                    {showAllCerts ? 'عرض أقل' : 'عرض جميع الشهادات'}
                  </button>
                </div>
              )}
            </div>

            {/* Awards */}
            <div className="w-full">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-1 bg-brand rounded-full"></div>
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">الجوائز</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {awards.slice(0, showAllAwards ? awards.length : 4).map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-white p-5 rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-all group flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all shrink-0">
                      {award.icon}
                    </div>
                    <div className="text-right">
                      <h3 className="text-xs font-black text-gray-900 mb-1 leading-tight">{award.title}</h3>
                      <p className="text-gray-400 text-[10px] font-bold mb-2">{award.issuer}</p>
                      <span className="text-[9px] font-black text-brand bg-brand/5 px-2 py-0.5 rounded-full uppercase tracking-widest">{award.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {awards.length > 4 && (
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setShowAllAwards(!showAllAwards)}
                    className="px-8 py-3 border-2 border-brand text-brand rounded-xl font-black text-xs hover:bg-brand hover:text-white transition-all uppercase tracking-widest"
                  >
                    {showAllAwards ? 'عرض أقل' : 'عرض جميع الجوائز'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-32">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-12 h-1 bg-brand rounded-full"></div>
              <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">الخبرات</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-3 md:p-5 rounded-xl md:rounded-2xl border border-gray-50 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex flex-col justify-between gap-1 md:gap-2 mb-3">
                    <div>
                      <h3 className="text-[11px] md:text-base font-black text-gray-900 group-hover:text-brand transition-colors leading-tight">{exp.role}</h3>
                      <p className="text-brand font-bold text-[9px] md:text-sm">{exp.company}</p>
                    </div>
                    <span className="text-[7px] md:text-[9px] font-black text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full w-fit">{exp.period}</span>
                  </div>
                  <p className="text-gray-500 text-[9px] md:text-xs leading-relaxed mb-3 font-medium">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="text-[6px] md:text-[8px] font-bold text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-md">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-32">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-12 h-1 bg-brand rounded-full"></div>
              <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">المهارات</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'إدارة المنتجات', icon: <Briefcase size={18} /> },
                { name: 'تصميم واجهة المستخدم', icon: <Palette size={18} /> },
                { name: 'تجربة المستخدم', icon: <Users size={18} /> },
                { name: 'إدارة الفرق', icon: <Users size={18} /> },
                { name: 'استراتيجية الأعمال', icon: <Target size={18} /> },
                { name: 'الشركات الناشئة', icon: <Rocket size={18} /> },
                { name: 'تحليل البيانات', icon: <BarChart size={18} /> },
                { name: 'التفكير التصميمي', icon: <Lightbulb size={18} /> },
                { name: 'منهجية Agile', icon: <Zap size={18} /> },
                { name: 'تطوير الأعمال', icon: <TrendingUp size={18} /> },
                { name: 'القيادة', icon: <Shield size={18} /> },
                { name: 'التواصل', icon: <MessageSquare size={18} /> },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#f9fafb' }}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-white text-gray-700 shadow-sm transition-all hover:border-brand/20 hover:text-brand"
                >
                  <div className="shrink-0 text-brand/70 group-hover:text-brand">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-bold">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Startup Programs Section */}
      <StartupPrograms />
    </div>
  );
};

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand font-bold mb-4 text-lg">المدونة</p>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">
              أؤمن أن مشاركة المعرفة تحدث تأثيراً
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              الكتابة هي طريقي لترك الأثر ومشاركة الخبرات في عالم التصميم والمنتجات الرقمية.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96 mx-auto mt-12">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400">
              <ChevronsLeft size={20} className="hover:text-brand cursor-pointer transition-colors" />
              <div className="w-px h-6 bg-gray-200 mx-1"></div>
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="ابحث في المدونة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl pr-6 pl-24 text-gray-900 focus:outline-none focus:border-brand/30 focus:bg-white transition-all font-medium text-right"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 rounded-lg overflow-hidden mb-6 shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay text "قريباً" */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="text-white text-3xl font-black tracking-widest drop-shadow-lg">قريباً</span>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#064e3b] text-[#10b981] text-[10px] font-black rounded-lg shadow-lg border border-[#10b981]/20">
                  عرض
                </div>
              </div>
              
              <div className="flex flex-col flex-grow text-right">
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug group-hover:text-brand transition-colors flex-grow">
                  {post.title}
                </h3>
                <div className="flex items-center justify-end gap-4 text-gray-400 text-[10px] font-bold mt-auto pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1.5">
                    <span>{post.readTime}</span>
                    <Clock size={12} />
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center gap-1.5">
                    <span>{post.date}</span>
                    <Calendar size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-3">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all disabled:opacity-30 disabled:hover:border-gray-100 disabled:hover:text-gray-400"
            >
              <ArrowRight size={20} />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-12 h-12 rounded-full font-bold text-sm transition-all ${
                  currentPage === i + 1 
                  ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                  : 'bg-white border border-gray-100 text-gray-400 hover:border-brand hover:text-brand'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all disabled:opacity-30 disabled:hover:border-gray-100 disabled:hover:text-gray-400"
            >
              <ArrowLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand font-bold mb-4 text-lg">أشخاص أثروا في مسيرتي</p>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">
              نخبة من الخبراء والمنتورز الملهمين
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              هؤلاء هم الأشخاص الذين تعلمت منهم وعملت معهم خلال رحلتي في عالم التصميم والابتكار الرقمي.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-[#F8F9FA] rounded-xl overflow-hidden relative aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/30">
                {/* Share Button */}
                <button className="absolute top-3 left-3 z-20 w-7 h-7 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-brand border border-white/40 shadow-sm hover:bg-brand hover:text-white transition-all">
                  <Share2 size={12} />
                </button>

                {/* Portrait Image */}
                <div className="w-full h-full relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Info below card */}
              <div className="mt-6 text-center">
                <h3 className="text-lg font-black text-gray-900 mb-1 group-hover:text-brand transition-colors">{item.name}</h3>
                <p className="text-gray-400 text-[10px] font-bold leading-relaxed max-w-[200px] mx-auto">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-brand transition-all group shadow-xl shadow-gray-200"
          >
            <ArrowRight size={22} className="group-hover:-translate-x-1 transition-transform" />
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

const CoursesPage = () => {
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
              دورات تعليمية عملية مصممة لتأهيلك لسوق العمل وتطوير مهاراتك في إدارة المنتجات، التصميم، والعمل الحر.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col group shadow-sm border border-gray-50"
            >
              <div className="relative h-40 overflow-hidden">
                <CourseCover />
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
                    to={`/course/${i}`}
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
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col group"
            >
              <div className="relative mb-6 h-56 rounded-lg overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md text-[10px] font-bold rounded-lg text-white shadow-lg">
                  {project.type}
                </div>
              </div>
              
              <div className="flex flex-col flex-grow text-right">
                <div className="flex flex-wrap justify-end gap-2 mb-3">
                  {project.roles.map((role, i) => (
                    <span key={i} className={`px-2.5 py-1 text-[9px] font-bold rounded-full border flex items-center gap-1.5 ${getRoleColor(role)}`}>
                      {role}
                      <Briefcase size={10} />
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-brand transition-colors">{project.name}</h3>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed font-medium flex-grow">
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
  const [selectedType, setSelectedType] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ahmeduiux7@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        form.reset();
        setSelectedType('');
      } else {
        alert("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      alert("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-20 font-sans relative overflow-hidden" dir="rtl">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand font-bold mb-4 text-sm uppercase tracking-[0.2em]">تواصل معي</p>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-[1.1]">
              لنبني شيئاً <span className="text-brand">استثنائياً</span> معاً
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed font-medium">
              سواء كنت تبحث عن استشارة لتطوير منتجك أو ترغب في بناء تجربة مستخدم فريدة، أنا هنا لمساعدتك في تحويل رؤيتك إلى واقع ملموس.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info - Right Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">معلومات التواصل</h3>
                <div className="space-y-8">
                  <div className="group flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 mb-1">البريد الإلكتروني</p>
                      <a href="mailto:ahmeduiux7@gmail.com" className="text-xl text-gray-900 font-bold hover:text-brand transition-colors" dir="ltr">ahmeduiux7@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="group flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 mb-1">رقم الهاتف / واتساب</p>
                      <a href="https://wa.me/201554295388" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-900 font-bold hover:text-brand transition-colors" dir="ltr">+20 155 429 5388</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">التواجد الرقمي</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'Behance', icon: <span className="font-black text-lg leading-none">Bē</span>, link: "https://www.behance.net/ahmedali4f006" },
                    { name: 'LinkedIn', icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/ahmed-ali-%F0%9F%A6%84-1353a3200/" },
                    { name: 'Facebook', icon: <Facebook size={20} />, link: "https://www.facebook.com/ahmed.ali.137893/" },
                    { name: 'WhatsApp', icon: <MessageCircle size={20} />, link: "https://wa.me/201554295388" },
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl border border-gray-100 bg-white flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-all text-gray-400 shadow-sm hover:shadow-lg hover:shadow-brand/20"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2 space-x-reverse">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex text-brand">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-900 mb-1">انضم لـ +30 عميل سعيد</p>
                <p className="text-xs text-gray-500 font-medium">نحن نضمن لك جودة استثنائية والتزاماً تاماً بالمواعيد.</p>
              </div>
            </div>
          </div>

          {/* Form Card - Left Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/40 p-8 md:p-12 border border-gray-50 relative overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              <form 
                onSubmit={handleSubmit}
                className="space-y-8 relative z-10"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="رسالة جديدة من موقعك الشخصي" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mr-1">الاسم بالكامل</label>
                    <input 
                      type="text" 
                      name="الاسم"
                      required
                      placeholder="أحمد محمد..."
                      className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-6 text-gray-900 focus:outline-none focus:border-brand/30 focus:bg-white transition-all font-medium text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mr-1">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      name="رقم الهاتف"
                      required
                      placeholder="+20 155 429 5388"
                      className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-6 text-gray-900 focus:outline-none focus:border-brand/30 focus:bg-white transition-all font-medium text-right"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mr-1">نوع المشروع</label>
                  <input type="hidden" name="نوع المشروع" value={selectedType} />
                  <div className="flex flex-wrap gap-3">
                    {['تجهيز الشركة للاستثمار', 'إدارة منتجات (Product Manager)', 'أتمتة', 'تصميم تطبيق', 'موقع إلكتروني', 'أخرى'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-6 py-3 rounded-xl border text-sm font-bold transition-all ${
                          selectedType === type 
                            ? 'border-brand bg-brand text-white shadow-md shadow-brand/20' 
                            : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-brand hover:text-brand hover:bg-brand/5'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mr-1">تفاصيل المشروع</label>
                  <textarea 
                    name="التفاصيل"
                    required
                    rows={5}
                    placeholder="أخبرني المزيد عن فكرتك وأهدافك..."
                    className="w-full bg-gray-50 border border-transparent rounded-2xl p-6 text-gray-900 focus:outline-none focus:border-brand/30 focus:bg-white transition-all font-medium text-right resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 bg-brand text-white rounded-2xl font-black text-lg shadow-xl shadow-brand/20 hover:shadow-2xl hover:shadow-brand/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
                  {!isSubmitting && <ArrowLeft size={20} />}
                </button>
                
                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  عادة ما يتم الرد خلال أقل من 24 ساعة
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative"
          >
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">تم الإرسال بنجاح!</h3>
            <p className="text-gray-500 font-medium mb-8">
              شكراً لتواصلك معي. سأقوم بالرد عليك في أقرب وقت ممكن.
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-brand transition-colors"
            >
              حسناً
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const ConsultationTestimonials = () => {
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full font-bold text-sm mb-6">
          <Star size={16} fill="currentColor" />
          تجارب حقيقية
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">آراء عملاء سابقين وتجارب حقيقية</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">عملائي هم أفضل من يتحدث عن نتائجي.</p>
      </div>

      <div className="relative flex overflow-x-hidden group" dir="ltr">
        <motion.div
          className="flex gap-6 px-3 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] flex-none bg-gray-50 p-8 rounded-3xl border border-gray-100 relative overflow-hidden"
              dir="rtl"
            >
              <div className="absolute -top-4 -left-4 text-brand/5">
                <Quote size={80} />
              </div>
              <div className="relative z-10 whitespace-normal">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                    <div className="text-brand text-sm font-bold">{item.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ConsultationPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{title: string, price: string} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleBook = (title: string, price: string) => {
    setSelectedPlan({ title, price });
    setIsBookingModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/ahmeduiux7@gmail.com", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        setShowSuccessPopup(true);
        setIsBookingModalOpen(false);
        form.reset();
      } else {
        alert("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      alert("حدث خطأ في الاتصال. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
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
              {/* Available for Work Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="text-green-600 text-sm font-bold flex items-center gap-2 bg-green-50/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-green-200 shadow-xl">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  متاح للعمل
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">لماذا تختار جلسات التوجيه معي؟</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">سواء كنت مؤسس شركة ناشئة، مدير منتجات، أو مصمم، جلسات التوجيه مصممة لتلبية احتياجاتك ومساعدتك على بناء منتجات ناجحة.</p>
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
              <button onClick={() => handleBook("استشارة سريعة", "مجاناً")} className="w-full py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-bold hover:border-brand hover:text-brand transition-all flex items-center justify-center gap-2">
                احجز الآن <ArrowLeft size={18} />
              </button>
            </div>

            {/* Plan 2 (Highlighted) */}
            <div className="bg-brand rounded-[2rem] p-8 shadow-2xl shadow-brand/20 transform md:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="inline-block px-4 py-1.5 bg-white/20 text-white font-bold rounded-full text-sm mb-6 backdrop-blur-sm">60 دقيقة</div>
              <h3 className="text-2xl font-black text-white mb-4">جلسة متعمقة</h3>
              <p className="text-white/80 mb-8 text-sm leading-relaxed">مثالية للمواضيع العميقة أو مراجعة وتقييم المشاريع (Portfolio Review) في جلسة واحدة.</p>
              <div className="text-4xl font-black text-white mb-8">1000 جنيه</div>
              <button onClick={() => handleBook("جلسة متعمقة", "1000 جنيه")} className="w-full py-4 rounded-2xl bg-white text-brand font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-lg">
                احجز الآن <ArrowLeft size={18} />
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 font-bold rounded-full text-sm mb-6">4 جلسات (شهر)</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">توجيه مستمر</h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">متابعة مستمرة وتوجيه مخصص لتطوير مسارك المهني بالكامل (Mentorship).</p>
              <div className="text-4xl font-black text-gray-900 mb-8">4000 جنيه</div>
              <button onClick={() => handleBook("توجيه مستمر", "4000 جنيه")} className="w-full py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-bold hover:border-brand hover:text-brand transition-all flex items-center justify-center gap-2">
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
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">5</div>
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

      {/* Animated Testimonials Component */}
      <ConsultationTestimonials />

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
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="طلب حجز استشارة جديد" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="نوع الباقة" value={selectedPlan.title} />
                <input type="hidden" name="سعر الباقة" value={selectedPlan.price} />
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                  <input type="text" name="الاسم الكامل" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-brand transition-colors" placeholder="أدخل اسمك الكامل" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">رقم الواتساب</label>
                  <input type="tel" name="رقم الواتساب" required dir="ltr" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-brand transition-colors text-right" placeholder="+20 155 429 5388" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">تاريخ الجلسة</label>
                    <input type="date" name="تاريخ الجلسة" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-brand transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الوقت المناسب</label>
                    <input type="time" name="الوقت المناسب" required className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-brand transition-colors" />
                  </div>
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
                      <input type="tel" name="رقم الموبايل المحول منه" required dir="ltr" className="w-full bg-white border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-brand transition-colors text-right" placeholder="أدخل الرقم الذي قمت بالتحويل منه" />
                    </div>
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="w-full bg-brand text-white font-bold text-lg py-4 rounded-xl hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      جاري تأكيد الحجز...
                    </>
                  ) : (
                    "تأكيد الحجز"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir="rtl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-8 text-center relative"
          >
            <button 
              onClick={() => setShowSuccessPopup(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            
            <h3 className="text-2xl font-black text-gray-900 mb-4">تم استلام طلبك بنجاح!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              شكراً لك على حجز الاستشارة. سيتم التواصل معك قريباً لتأكيد الموعد والتفاصيل.
            </p>
            
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-gray-100 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all"
            >
              إغلاق
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const GalleryPage = () => {
  const photos = [
    "https://i.ibb.co/R51r8D5/483507975-660098550041808-8906287664672726605-n.jpg",
    "https://i.ibb.co/LX4RThDy/481276697-654659803919016-878014977383527915-n.jpg",
    "https://i.ibb.co/HD5ZGqv6/514281524-740596305325365-4563407309523343497-n.jpg",
    "https://i.ibb.co/rfsc2c2S/502582396-738896518828677-6022866438440007991-n.jpg",
    "https://i.ibb.co/1YnsHtb3/537405537-786080484110280-4600725529574332829-n.jpg",
    "https://i.ibb.co/JWkJmPVx/603809582-883843694333958-8745771455446034800-n.jpg",
    "https://i.ibb.co/Q734WnvW/492739487-705858515465811-4044069649912565972-n.jpg",
    "https://i.ibb.co/XfGshspG/645984839-937604882291172-7552805595953355215-n.jpg",
    "https://i.ibb.co/5gFXJrPk/561355685-830375476347447-3662253565111961623-n.jpg",
    "https://i.ibb.co/v6nqFpMf/594434257-871324205585907-5194412690624102312-n.jpg",
    "https://i.ibb.co/JwKBv8WV/565668035-830372853014376-3143679823146890357-n.jpg",
    "https://i.ibb.co/3mN5Jff2/547438725-805625648822430-8229388273858976577-n-1.jpg",
    "https://i.ibb.co/6Jqd3S43/530908285-775074875210841-618597458420532128-n.jpg",
    "https://i.ibb.co/1fGBFD85/528365075-771619555556373-6457129229031896751-n.jpg",
    "https://i.ibb.co/QFmRHHb0/504271467-736594535725542-775774139809467500-n.jpg",
    "https://i.ibb.co/8ScVMx6/484082137-660194716698858-8955928335804861432-n.jpg",
    "https://i.ibb.co/gbWrLMjT/482222059-659553583429638-6966815646128069236-n.jpg",
    "https://i.ibb.co/GQW66Fc6/482057041-659475363437460-4378852166573113117-n.jpg",
    "https://i.ibb.co/60rj33GR/475688361-627502066634790-4353574490553891465-n.jpg",
    "https://i.ibb.co/svPFxsFG/475679780-627502093301454-2582446549540519541-n.jpg",
    "https://i.ibb.co/6ctLkShz/475511461-627502103301453-1984574279683694173-n.jpg",
    "https://i.ibb.co/xKPS04Gj/475309139-627502389968091-5948488706351835547-n.jpg",
    "https://i.ibb.co/5WHb7cbn/475352609-627502509968079-2909568468988716310-n.jpg",
    "https://i.ibb.co/whPkSCbP/475868079-630482233003440-5717652480990043080-n.jpg",
    "https://i.ibb.co/GQrhs6xp/475897900-630489033002760-2899963353177440145-n.jpg",
    "https://i.ibb.co/YTWfxZSN/475787238-630501929668137-2866337661666281269-n.jpg",
    "https://i.ibb.co/nMQ8S398/476229650-631033319614998-6501818742680978412-n.jpg",
    "https://i.ibb.co/D6Rfc6f/475991769-631032962948367-622621270404185831-n.jpg",
    "https://i.ibb.co/G3JXNdB1/476231184-631033059615024-7905681614511992539-n.jpg",
    "https://i.ibb.co/Ps33QCZv/476161050-632386649479665-2921020539570493781-n.jpg",
    "https://i.ibb.co/gZZTBsXG/480095653-639436995441297-8252586186768912671-n.jpg",
    "https://i.ibb.co/mVZBgZ4Z/480565391-641364858581844-1309556586925984935-n.jpg",
    "https://i.ibb.co/ZpsNmmt4/480662956-646310841420579-2142367282074139130-n.jpg",
    "https://i.ibb.co/Lhqbq9C9/482807996-656753923709604-4518852287232369934-n.jpg",
    "https://i.ibb.co/0VrYxHGJ/484188415-658505053534491-1944934006229647518-n.jpg",
    "https://i.ibb.co/FkkW3XjC/482354406-658509676867362-6839435539038925086-n.jpg",
    "https://i.ibb.co/gM2LPW9F/484416821-658539086864421-3271672790025835428-n.jpg",
    "https://i.ibb.co/q3kDyfkq/484258296-658538986864431-3850532482455260464-n.jpg",
    "https://i.ibb.co/dsgZV7Tn/483944060-658539126864417-8795652587989874432-n.jpg",
    "https://i.ibb.co/7xVF01hv/482347484-658539186864411-7846524868694391504-n.jpg",
    "https://i.ibb.co/QvdNmCRz/483065864-658668000184863-9172891483625909104-n.jpg",
    "https://i.ibb.co/VcYng2NZ/482251272-658907470160916-2718661998912541135-n.jpg",
    "https://i.ibb.co/zHnbxnb6/483488528-658907536827576-5912453217411590428-n.jpg",
    "https://i.ibb.co/zhG4Zq0s/482235069-659536950097968-6378525796196593502-n.jpg",
    "https://i.ibb.co/TM7M0Txk/482223042-659536910097972-438365726675816579-n.jpg",
    "https://i.ibb.co/ZCPDJZv/482219324-659536906764639-4178151301692821543-n.jpg",
    "https://i.ibb.co/R51r8D5/483507975-660098550041808-8906287664672726605-n.jpg",
    "https://i.ibb.co/BVGWsbL5/484105294-660194723365524-5462991604884603740-n.jpg",
    "https://i.ibb.co/BKdr9QY9/484069397-660295823355414-1719468263999309449-n.jpg",
    "https://i.ibb.co/LX4RThDy/481276697-654659803919016-878014977383527915-n.jpg",
    "https://i.ibb.co/HD5ZGqv6/514281524-740596305325365-4563407309523343497-n.jpg",
    "https://i.ibb.co/GQvgppqN/502587447-738896605495335-4679280357224692378-n.jpg",
    "https://i.ibb.co/YBrj24td/506614304-738896565495339-6809180825074903693-n.jpg",
    "https://i.ibb.co/rfsc2c2S/502582396-738896518828677-6022866438440007991-n.jpg",
    "https://i.ibb.co/1YnsHtb3/537405537-786080484110280-4600725529574332829-n.jpg",
    "https://i.ibb.co/JWkJmPVx/603809582-883843694333958-8745771455446034800-n.jpg",
    "https://i.ibb.co/Q734WnvW/492739487-705858515465811-4044069649912565972-n.jpg",
    "https://i.ibb.co/JFKDKxcL/2-2.png",
    "https://i.ibb.co/fKVbrdn/5-556.png"
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-40 pb-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-brand/5 border border-brand/10 text-brand rounded-full text-[10px] font-black uppercase tracking-widest mb-10"
          >
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
            معرض الصور • My Life & Work
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
          >
            لحظات لا تُنسى <br />
            <span className="text-brand">في رحلتي المهنية والشخصية</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-xl max-w-2xl mx-auto font-medium"
          >
            توثيق لبعض اللحظات المميزة مع العائلة والزملاء، حيث يتقاطع الإبداع مع السعادة.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                x: [0, 3, -3, 0] // Subtle side-to-side movement
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ 
                opacity: { duration: 0.5, delay: (i % 3) * 0.1 },
                scale: { duration: 0.5, delay: (i % 3) * 0.1 },
                y: { duration: 0.5, delay: (i % 3) * 0.1 },
                x: { 
                  duration: 4 + (i % 3), 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.2
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500 border border-gray-100"
            >
              <img
                src={photo}
                alt={`Gallery ${i}`}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Search size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImpactSection = () => {
  const projects = [
    {
      name: "غدوة",
      category: "تكنولوجيا الأغذية",
      logo: "https://i.ibb.co/Nng16MKB/527197715-4202471453357667-4828324456619388377-n-2.jpg",
      link: "https://www.facebook.com/Ghadwa14",
      metrics: [
        { label: "الطلبات", value: "1,500+" },
        { label: "الإيرادات", value: "+500 ألف جنيه" },
        { label: "أتمتة العمليات", value: "70%" },
        { label: "المسابقات", value: "3" },
      ]
    },
    {
      name: "ريبكيا",
      category: "تكنولوجيا خضراء",
      logo: "https://i.ibb.co/kVJMK1HM/468788849-501985789552422-54133115533631103-n-1.jpg",
      link: "https://www.facebook.com/photo/?fbid=501985786219089&set=a.118763727874632",
      metrics: [
        { label: "الطلبات", value: "15,000+" },
        { label: "الإيرادات", value: "+3 مليون جنيه" },
        { label: "المنح", value: "2 مليون+ جنيه" },
        { label: "المسابقات", value: "30+" },
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">أثر شركتي الناشئة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            فخور بما حققته من أثر ملموس من خلال شركتي الناشئة، حيث نسعى دائماً للابتكار وتقديم حلول تقنية تحدث فرقاً حقيقياً.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src={project.logo} alt={project.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">{project.name}</h3>
                    <p className="text-brand font-bold text-sm">{project.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-[9px] font-bold flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                    <CheckCircle size={10} />
                    الشركة جاهزة للاستثمار
                  </span>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-brand hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {project.metrics.map((metric, j) => (
                  <div key={j} className="border-r-2 border-brand/20 pr-3">
                    <div className="text-2xl font-black text-gray-900 mb-0.5">{metric.value}</div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StartupPrograms = () => {
  const programs = [
    {
      name: "منحة ماكينزي (McKinsey Forward)",
      desc: "برنامج مكثف في القيادة، استراتيجيات الأعمال، وحل المشكلات المعقدة.",
      icon: <TrendingUp className="text-brand" size={28} />,
      color: "bg-blue-50 border-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "AUC Venture Lab",
      desc: "أكبر مسرعة أعمال جامعية في إفريقيا، تدريب مكثف على نمو الشركات الناشئة.",
      icon: <Building2 className="text-brand" size={28} />,
      color: "bg-yellow-50 border-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      name: "أورانج كورنرز (Orange Corners)",
      desc: "مبادرة هولندية لدعم رواد الأعمال الشباب وتطوير الأفكار المبتكرة.",
      icon: <Lightbulb className="text-brand" size={28} />,
      color: "bg-orange-50 border-orange-100",
      textColor: "text-orange-600"
    },
    {
      name: "مسرعة أعمال Fintkers",
      desc: "مسرعة متخصصة في التكنولوجيا المالية (Fintech) وتطوير المنتجات.",
      icon: <Briefcase className="text-brand" size={28} />,
      color: "bg-purple-50 border-purple-100",
      textColor: "text-purple-600"
    },
    {
      name: "حاضنة الأعمال نماء",
      desc: "حاضنة أعمال لدعم المشاريع الناشئة وتوفير بيئة نمو متكاملة.",
      icon: <Rocket className="text-brand" size={28} />,
      color: "bg-green-50 border-green-100",
      textColor: "text-green-600"
    },
    {
      name: "مسرعة أعمال رالي (Rally)",
      desc: "مسرعة أعمال متخصصة في دعم رواد الأعمال والشركات الناشئة في مختلف القطاعات.",
      icon: <Target className="text-brand" size={28} />,
      color: "bg-red-50 border-red-100",
      textColor: "text-red-600"
    },
    {
      name: "حاضنة Startup Power",
      desc: "أكبر حاضنة أعمال في مصر، توفر دعماً شاملاً وتوجيهاً استراتيجياً لتسريع نمو الشركات.",
      icon: <Zap className="text-brand" size={28} />,
      color: "bg-indigo-50 border-indigo-100",
      textColor: "text-indigo-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand/5 text-brand rounded-full text-sm font-bold mb-6"
          >
            <GraduationCap size={18} />
            أساس متين في الأعمال
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-6 text-gray-900"
          >
            خريج أبرز مسرعات وحاضنات <span className="text-brand">الأعمال</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            رحلة تعليمية وعملية مكثفة في إدارة المنتجات، تأسيس الشركات الناشئة، واستراتيجيات النمو مع أفضل البرامج محلياً وعالمياً.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${program.color} group-hover:scale-110 transition-transform`}>
                <div className={program.textColor}>
                  {program.icon}
                </div>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2">{program.name}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {program.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <TrustedBy />
    <StartupPrograms />
    <ImpactSection />
    <Services />
    <Portfolio />
    <Courses />
    <Awards />
    <Testimonials />
    <Consultation />
    <FAQ />
  </>
);

const AwardsPage = () => (
  <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand font-bold mb-4 text-lg">الجوائز</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            جميع الجوائز والإنجازات
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            تقدير عالمي لأعمالي من كبرى منظمات التصميم والابتكار الرقمي.
          </p>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col group"
          >
            <div className="relative mb-4 h-48 rounded-lg overflow-hidden shrink-0">
              <img src={award.image} alt={award.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center mb-4 shrink-0">
              {award.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">{award.title}</h3>
            <p className="text-gray-500 text-sm mb-4 flex-grow">{award.description}</p>
            <span className="text-xs font-bold text-brand bg-brand/5 px-3 py-1 rounded-full self-start">{award.tag}</span>
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-['IBM_Plex_Sans_Arabic']" dir="rtl">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/awards" element={<AwardsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
