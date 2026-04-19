import { Smartphone, Search, DollarSign, Stethoscope, Shield, Palette } from 'lucide-react'

export const projects = [
  {
    title: "Imaan Pro: Quran Tasbih Qibla",
    description: "A comprehensive Islamic mobile application built with React Native Expo, providing essential Islamic resources and tools for daily spiritual practice.",
    features: [
      "Complete Quran with translations",
      "Digital Tasbih counter",
      "Accurate Qibla direction finder",
      "99 Names of Allah with meanings",
      "6 Kalimas collection",
      "Prayer time notifications",
      "Islamic quiz & Hadith collection",
      "Daily Islamic quotes"
    ],
    tech: ["React Native", "Expo", "Firebase", "AdMob"],
    icon: Smartphone,
    status: "Live on Play Store",
    image: "/imaan pro.png",
    link: "https://play.google.com/store/apps/details?id=com.munazir.imaanpro&hl=en-US"
  },
  {
    title: "DeepGuard - Deepfake Detection",
    description: "AI-powered deepfake detection system using advanced machine learning models to identify manipulated media and ensure content authenticity.",
    features: [
      "Real-time video analysis",
      "Deep learning detection models",
      "Frame-by-frame authenticity verification",
      "Confidence scoring system",
      "Support for multiple video formats",
      "Fast processing pipeline"
    ],
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    icon: Shield,
    status: "In Development",
    image: "/deepguard.png",
    link: "https://deepfake-detection2.vercel.app"
  },
  {
    title: "MediVoice - AI Clinical Triage",
    description: "Next-generation AI-powered triage system built for India. Break language barriers and get clinical guidance instantly through voice in 18+ regional languages.",
    features: [
      "Multilingual voice support (Hindi, Marathi, Bengali, Tamil & more)",
      "Instant symptom analysis using deep clinical models",
      "Severity scoring: Green (Home Care), Yellow (GP), Red (ER)",
      "Direct navigation to nearest specialist or pharmacy",
      "Auto-generate clinical summaries",
      "Vetted by top clinicians across India"
    ],
    tech: ["React", "AI/ML", "Voice Recognition", "FastAPI"],
    icon: Stethoscope,
    status: "Live",
    image: "/medivoice.png",
    link: "https://medivoice1.vercel.app"
  },
  {
    title: "Sovereign Finance — Admin Terminal",
    description: "Sophisticated financial management dashboard providing comprehensive tools for monitoring finances with algorithmic insights and real-time analytics.",
    features: [
      "Real-time financial analytics dashboard",
      "Income and expense tracking with growth metrics",
      "Algorithmic insights for spending patterns",
      "Risk alerts and anomaly detection",
      "Net savings calculator with trends",
      "Beautiful data visualizations"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    icon: DollarSign,
    status: "Live",
    image: "/soverign finance.png",
    link: "https://sovereign-finance-ten.vercel.app/dashboard"
  },
  {
    title: "Zentra - AI-Powered Search Extension",
    description: "Chrome extension that revolutionizes browsing with AI-powered search across 50+ platforms. Find products, articles, and resources instantly with smart recommendations.",
    features: [
      "AI-powered search with natural language processing",
      "Multi-platform integration (Amazon, eBay, Reddit, YouTube & 50+ more)",
      "Real-time price comparisons and availability updates",
      "Smart recommendations based on preferences",
      "Privacy protected - no tracking or data selling",
      "Results in under 3 seconds"
    ],
    tech: ["JavaScript", "Chrome API", "AI/ML", "Web Extensions"],
    icon: Search,
    status: "Chrome Web Store",
    image: "/zentra.png",
    link: "https://zentra-rust.vercel.app"
  },
  {
    title: "Food Delivery App - UI/UX Design",
    description: "Modern food delivery application UI/UX design created in Figma, featuring intuitive navigation, beautiful visuals, and seamless user experience.",
    features: [
      "Complete design system with components",
      "Interactive prototypes and animations",
      "Restaurant browsing and search interface",
      "Order tracking and cart management",
      "User profile and order history",
      "Responsive layouts for mobile and tablet"
    ],
    tech: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    icon: Palette,
    status: "Design Complete",
    image: "/food.png",
    link: "https://www.figma.com/proto/7fiqqlLXZrGmx2JMsnsMdq/Untitled?page-id=0%3A1&node-id=6-2&node-type=canvas&viewport=157%2C372%2C0.53&t=ou5TGKSiGivOApBe-1&scaling=scale-down&content-scaling=fixed"
  }
]
