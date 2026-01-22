import { FaLaptopCode } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdOutlineMedicalServices } from "react-icons/md";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { VscProject } from "react-icons/vsc";

export const navLinks = [
  {
    id: 1,
    url: "#",
    label: "Inicio",
  },
  {
    id: 2,
    url: "#",
    label: "Buscar Empleo",
  },
  {
    id: 3,
    url: "#",
    label: "Candidatos",
  },
  {
    id: 4,
    url: "#",
    label: "Empleadores",
  },
  {
    id: 5,
    url: "#",
    label: "Blog",
  },
  {
    id: 6,
    url: "#",
    label: "Contacto",
  },
];

export const popularSearches = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "React",
  "Python",
  "Java",
  "DevOps",
  "Mobile Developer",
  "Software Engineer",
  "UX/UI Designer",
];

export const categoryData = [
  {
    id: 1,
    name: "Contabilidad / Finanzas",
    openPositions: 220,
    icon: <GiTakeMyMoney className = "w-10 h-10 text-blue-700 dark:text-white" />
  },
  {
    id: 2,
    name: "Marketing",
    openPositions: 860,
    icon: <IoMegaphoneOutline className = "w-10 h-10 text-blue-700 dark:text-white" />
  },
  {
    id: 3,
    name: "Diseño web",
    openPositions: 4750,
    icon: <PiPaintBrushDuotone className = "w-10 h-10 text-blue-700 dark:text-white" />
  },
  {
    id: 4,
    name: "Desarrollo web",
    openPositions: 7520,
    icon: <FaLaptopCode className = "w-10 h-10 text-blue-700 dark:text-white" />
  },
  {
    id: 5,
    name: "Gestión de proyectos",
    openPositions: 1930,
    icon: <VscProject className = "w-10 h-10 text-blue-700 dark:text-white" />
  },
  {
    id: 6,
    name: "Atención al cliente",
    openPositions: 955,
    icon: <RiCustomerService2Fill className = "w-10 h-10 text-blue-700 dark:text-white" />
  },
  {
    id: 7,
    name: "Salud y cuidado",
    openPositions: 161,
    icon: <MdOutlineMedicalServices className = "w-10 h-10 text-blue-700 dark:text-white" />
  },
  {
    id: 8,
    name: "Industria automotriz",
    openPositions: 384,
    icon: <LiaCarSideSolid className = "w-10 h-10 text-blue-700 dark:text-white" />
  },
]

export const jobs = [
  {
    id: 1,
    img: "/images/j1.png",
    title: "Software Engineer",
    company: "TechCorp",
    location: "Lima, Perú",
    jobType: "Tiempo completo",
    urgency: "Urgente",
  },
  {
    id: 2,
    img: "/images/j2.png",
    title: "Automation Specialist",
    company: "Catalyst Solutions",
    location: "La Paz, Bolivia",
    jobType: "Tiempo parcial",
    urgency: "Urgente",
  },
  {
    id: 3,
    img: "/images/j3.png",
    title: "Senior UX/UI Designer",
    company: "DesignHub",
    location: "Guayaquil, Ecuador",
    jobType: "Tiempo parcial",
    urgency: "Urgente",
  },
  {
    id: 4,
    img: "/images/j4.png",
    title: "IT Recruiter",
    company: "TalentFlow",
    location: "Bogotá, Colombia",
    jobType: "Tiempo completo",
    urgency: "Urgente",
  },
  {
    id: 5,
    img: "/images/j5.png",
    title: "Product Manager",
    company: "InnovateTech",
    location: "São Paulo, Brasil",
    jobType: "Por contrato",
    urgency: "Urgente",
  },
  {
    id: 6,
    img: "/images/j6.png",
    title: "Customer Service Specialist",
    company: "SupportPro",
    location: "Arequipa, Perú",
    jobType: "Tiempo parcial",
    urgency: "Confidencial",
  },
  {
    id: 7,
    img: "/images/j7.png",
    title: "Web Developer",
    company: "CodeFactory",
    location: "Santiago, Chile",
    jobType: "Tiempo completo",
    urgency: "Confidencial",
  },
  {
    id: 8,
    img: "/images/j8.png",
    title: "Fullstack Developer",
    company: "DevStack",
    location: "Buenos Aires, Argentina",
    jobType: "Tiempo completo",
    urgency: "Confidencial",
  },
  {
    id: 9,
    img: "/images/j9.png",
    title: "Junior UX/UI Designer",
    company: "Pixel Studios",
    location: "Cali, Colombia",
    jobType: "Tiempo completo",
    urgency: "Confidencial",
  },
]

export const companyData = [
  {
    id: 1,
    img: "/images/c1.png",
    name: "Udemy",
    location: "Londres, Reino Unido",
    position: "250",
  },
  {
    id: 2,
    img: "/images/c2.png",
    name: "Udemy",
    location: "San Francisco, California",
    position: "196",
  },
  {
    id: 3,
    img: "/images/c3.png",
    name: "Udemy",
    location: "Melbourne, Australia",
    position: "107",
  },
  {
    id: 4,
    img: "/images/c4.png",
    name: "Figma",
    location: "Ottawa, Cánada",
    position: "243",
  },
  {
    id: 5,
    img: "/images/c5.png",
    name: "Vercel",
    location: "Houston, Texas",
    position: "276",
  },
]

export const features = [
  "Busca entre miles de posiciones abiertas.",
  "Obtén estimaciones salariales personalizadas.",
  "Lee reseñas de más de 600,000 empresas.",
  "Conecta con talento que impulse tus proyectos."
];

export const plans = [
  {
    id: 1,
    name: "Básico",
    price: "99",
    period: "mes",
    description: "Ideal para startups y pequeñas empresas.",
    features: [
      "Hasta 5 ofertas activas",
      "Publicaciones por 30 días",
      "Acceso a base de candidatos",
      "Filtros de búsqueda básicos",
      "Soporte por email",
      "Panel de gestión simple"
    ],
    recommended: false
  },
  {
    id: 2,
    name: "Estándar",
    price: "199",
    period: "mes",
    description: "Perfecto para empresas en crecimiento.",
    features: [
      "Hasta 15 ofertas activas",
      "Publicaciones destacadas",
      "Publicaciones por 60 días",
      "Acceso prioritario a candidatos",
      "Filtros avanzados y IA",
      "Analíticas y reportes",
      "Soporte prioritario 24/7",
      "Múltiples usuarios"
    ],
    recommended: true
  },
  {
    id: 3,
    name: "Premium",
    price: "299",
    period: "mes",
    description: "La solución completa para grandes equipos.",
    features: [
      "Ofertas ilimitadas",
      "Máxima visibilidad",
      "Publicaciones por 90 días",
      "Headhunting personalizado",
      "IA avanzada de matching",
      "Entrevistas asistidas",
      "Branding personalizado",
      "Account Manager dedicado",
      "API empresarial",
      "Reportes personalizados"
    ],
    recommended: false
  }
]

export const testimonialData = [
  {
    id: 1,
    image: "/images/u1.png",
    name: "María González",
    profession: "Frontend Developer",
    title: "Encontré mi trabajo ideal en 2 semanas",
    description: "DevHire me conectó con una startup increíble que buscaba exactamente mi perfil en React. El proceso fue transparente y las ofertas de calidad superaron mis expectativas. Totalmente recomendado para desarrolladores que buscan crecer."
  },
  {
    id: 2,
    image: "/images/u2.png",
    name: "Carlos Mendoza",
    profession: "Tech Lead",
    title: "La mejor plataforma para contratar talento",
    description: "Como líder técnico, he usado varias plataformas de reclutamiento. DevHire destaca por la calidad de los candidatos y lo fácil que es filtrar por tecnologías específicas. Contraté a 3 desarrolladores senior en menos de un mes."
  },
  {
    id: 3,
    image: "/images/u3.png",
    name: "Ana Rodríguez",
    profession: "Full Stack Developer",
    title: "Triplicó mis oportunidades laborales",
    description: "Antes buscaba trabajo en portales genéricos. DevHire cambió el juego: solo ofertas tech, salarios transparentes y empresas serias. En mi primer mes recibí 12 propuestas, algo imposible en otras plataformas."
  },
  {
    id: 4,
    image: "/images/u4.png",
    name: "Roberto Silva",
    profession: "CTO",
    title: "Construimos nuestro equipo completo aquí",
    description: "Nuestra startup necesitaba armar un equipo de 8 desarrolladores rápidamente. DevHire no solo nos ayudó a encontrarlos, sino que la calidad de los perfiles fue excepcional. Ahora es nuestra herramienta principal de contratación."
  },
  {
    id: 5,
    image: "/images/u5.png",
    name: "Laura Pérez",
    profession: "Backend Developer",
    title: "Conseguí trabajo remoto desde Perú",
    description: "Siempre quise trabajar para empresas internacionales sin mudarme. DevHire me conectó con una empresa de Argentina que me permitió trabajar 100% remoto. Las opciones de filtrado por modalidad son perfectas."
  },
  {
    id: 6,
    image: "/images/u6.png",
    name: "Diego Martínez",
    profession: "HR Manager",
    title: "Redujo nuestro tiempo de contratación en 60%",
    description: "El panel de gestión es intuitivo y los filtros avanzados nos ahorran semanas de trabajo. Pasamos de 2 meses a 3 semanas en promedio para cerrar una contratación. La inversión se paga sola."
  }
]

export const footerLinks = [
  {
    id: 1,
    title: "Para candidatos",
    links: [
      { label: "Buscar empleos" },
      { label: "Crear perfil" },
      { label: "Subir CV" },
      { label: "Alertas de empleo" },
      { label: "Guía salarial" },
      { label: "Consejos de carrera" }
    ]
  },
  {
    id: 2,
    title: "Para empresas",
    links: [
      { label: "Publicar empleo" },
      { label: "Buscar candidatos" },
      { label: "Planes y precios" },
      { label: "Soluciones empresariales" },
      { label: "Contratar freelancers" },
      { label: "Centro de recursos" }
    ]
  },
  {
    id: 3,
    title: "Sobre nosotros",
    links: [
      { label: "Acerca de DevHire" },
      { label: "Cómo funciona" },
      { label: "Equipo" },
      { label: "Testimonios" },
      { label: "Contacto" },
      { label: "Trabaja con nNosotros" }
    ]
  },
  {
    id: 4,
    title: "Recursos útiles",
    links: [
      { label: "Blog" },
      { label: "Centro de ayuda" },
      { label: "Preguntas frecuentes" },
      { label: "Términos de uso" },
      { label: "Política de privacidad" },
      { label: "Soporte" }
    ]
  }
]