const projectsData = [
	{
		title: "Fidelyt – Plataforma de Fidelización",
		description: "Plataforma completa de fidelización para negocios con backend escalable, aplicaciones web y apps móviles.",
		technologies: [
			"Django",
			"PostgreSQL",
			"React",
			"React Native"
		],
		impact: [
			"Backend escalable",
			"APIs REST seguras",
			"Autenticación JWT"
		],
		link: "https://app.fidelyt.com",
		category: "Full Stack",
		icon: "mdi:gift-outline"
	},
	{
		title: "Fidelyt – Sitio Web",
		description: "Sitio web corporativo optimizado para conversión y posicionamiento SEO, construido con tecnologías modernas.",
		technologies: [
			"React",
			"Next.js",
			"Tailwind CSS"
		],
		impact: [
			"SEO optimizado",
			"Performance excelente",
			"Conversión mejorada"
		],
		link: "https://fidelyt.com",
		category: "Frontend",
		icon: "mdi:web"
	},
	{
		title: "Horizonte Inmobiliario",
		description: "Plataforma inmobiliaria con integración directa a sistemas de gestión de propiedades con sincronización automática.",
		technologies: [
			"WordPress",
			"PHP",
			"APIs externas"
		],
		impact: [
			"Integración EasyBroker",
			"Sincronización automática",
			"Gestión eficiente"
		],
		link: "https://horizonteinmobiliario.com",
		category: "WordPress",
		icon: "mdi:home-city-outline"
	},
	{
		title: "Fidelyt – App iOS & Android",
		description: "Aplicación móvil multiplataforma para usuarios del sistema de fidelización con interfaz intuitiva.",
		technologies: [
			"React Native",
			"Expo",
			"APIs REST"
		],
		impact: [
			"iOS & Android",
			"UX optimizada",
			"Performance nativa"
		],
		link: "https://linktr.ee/fidelyt",
		category: "Mobile",
		icon: "mdi:cellphone"
	},
	{
		title: "Fidelyt – Intranet para Negocios",
		description: "Intranet personalizada para negocios con panel de control, gestión de clientes y reportes detallados.",
		technologies: [
			"Django",
			"React",
			"Tailwind CSS"
		],
		impact: [
			"Gestión eficiente",
			"Panel de control personalizado",
			"Reportes detallados"
		],
		link: "https://intranet.fidelyt.com",
		category: "Full Stack",
		icon: "mdi:office-building"
	},
	{
		title: "Fidelyt – Testing Playground",
		description: "Entorno de pruebas con testing E2E, validación de flujos de negocio y sandbox para QA.",
		technologies: [
			"Playwright",
			"Testing E2E",
			"Automatización"
		],
		impact: [
			"Testing automatizado",
			"Validación de flujos",
			"Sandbox QA"
		],
		link: "https://fidelyt-testing.netlify.app/",
		category: "QA/Testing",
		icon: "mdi:test-tube"
	},
	{
		title: "Medicar – Sitio Web",
		description: "Sitio web corporativo para clínica médica con diseño moderno y optimización SEO.",
		technologies: [
			"React",
			"Next.js",
			"Tailwind CSS"
		],
		impact: [
			"SEO optimizado",
			"Diseño moderno",
			"Performance excelente"
		],
		link: "https://medicar-react.netlify.app/",
		category: "Frontend",
		icon: "mdi:stethoscope"
	},
	{
		title: "SuperListApp – En Desarrollo",
		description: "Web App para gestión de listas inventarios y alacenas con sincronización en tiempo real.",
		technologies: [
			"React",
			"Supabase",
			"Tailwind CSS"
		],
		impact: [
			"Sincronización en tiempo real",
			"Gestión eficiente",
			"Interfaz intuitiva"
		],
		link: "https://super-list-app.vercel.app/",
		category: "Frontend",
		icon: "mdi:format-list-bulleted"
	},
	{
		title: "ProBike - Sitio Web",
		description: "Sitio web corporativo para tienda de bicicletas con diseño moderno y optimización SEO.",
		technologies: [
			"Angular",
			"Tailwind CSS",
			"SEO"
		],
		impact: [
			"SEO optimizado",
			"Diseño moderno",
			"Performance excelente"
		],
		link: "https://probike.vercel.app/",
		category: "Frontend",
		icon: "mdi:bike"
	},
	{
		title: "Dashboard SpaceX - Amerisa Logistics",
		description: "Dashboard de seguimiento de lanzamientos espaciales con datos en tiempo real y visualizaciones interactivas.",
		technologies: [
			"React",
			"APIs REST",
			"Leaflet.js"
		],
		impact: [
			"Datos en tiempo real",
			"Visualizaciones interactivas",
			"Seguimiento de lanzamientos",
			"Prueba Técnica"
		],
		link: "https://amerisa-spacex-dashboard.vercel.app/",
		category: "Frontend",
		icon: "mdi:rocket-launch-outline"
	},
	{
		title: "Dashboard Crypto - Dinametra",
		description: "Monitorea precios, volumen y capitalización de mercado de criptomonedas usando datos públicos de CoinGecko.",
		technologies: [
			"Angular",
			"TypeScript",
			"Chart.js"
		],
		impact: [
			"Datos en tiempo real",
			"Visualizaciones dinámicas",
			"Monitoreo de criptomonedas",
			"Prueba Técnica"
		],
		link: "https://dinametra-crypto.vercel.app/",
		category: "Frontend",
		icon: "mdi:bitcoin"
	},
	{
		title: "Query Converter AI",
		description: "Herramienta web para convertir, corregir, optimizar y explicar queries SQL, ORM, MongoDB, GraphQL y otros formatos, con modo local y opción de consulta con AI.",
		technologies: [
			"React",
			"Tailwind CSS",
			"Gemini AI"
		],
		impact: [
			"Conversión entre formatos de consulta",
			"Optimización de queries",
			"Explicación detallada",
			"Modo local y AI"
		],
		link: "https://query-converter-ai.vercel.app/",
		category: "Full Stack",
		icon: "mdi:database-search"
	}
];

export { projectsData as p };
