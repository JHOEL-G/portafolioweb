import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+1 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "No hay clientes por el momento",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+3 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Spring Boot",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Desarrollador Backend",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Sitios Web Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Proyectos Web Dinámicos",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Developer  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Intermedio",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "JavaScript",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermedio",
                value: 30,
            },
            {
                name: "React",
                subtitle: "Basic",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Intermedio",
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Developer  🥷",
        experience: [
            {
                name: "Spring Boot",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Postgres Sql",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "Python",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "MySQL",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "PHP - Laravel",
                subtitle: "Basic",
                value: 60,
            },
            {
                name: "C#",
                subtitle: "Intermedio",
                value: 60,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Construcción de componentes reutilizables con React",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Manejo básico de herramientas como Git, GitHub, Vite y npm/yarn.",
            },
            {
                name: "Manejo básico de herramientas como Git, GitHub, Vit",
            },
            {
                name: "Uso de frameworks como Bootstrap o Tailwind CSS.",
            },
        ],
    },
    {
        id: 2,
        title: "Creación de APIs RESTful",
        icon: <BellPlus />,
        features: [
            {
                name: "Desarrollo de APIs RESTful utilizando Spring Boot.",
            },
            {
                name: "Manejo de bases de datos relacionales como MySQL y PostgreSQL usando JPA/Hibernate.",
            },
            {
                name: "Gestión de autenticación y autorización con Spring Security (login, registro, JWT)",
            },
            {
                name: "Uso de herramientas de desarrollo como Postman, Docker (básico) y Git/GitHub",
            },
            {
                name: "Conexión y consumo de APIs externas",
            },
            {
                name: "Estructura de proyectos por capas (Controller - Service - Repository)",
            },
            {
                name: "Manejo de errores, validaciones y respuestas estándar en APIs",
            },
            {
                name: "Creación de controladores, servicios y modelos siguiendo la arquitectura MVC y Clean Architecture.",
            },
        ],
    },
    {
        id: 3,
        title: "En Aprendizaje de Programacio Full Stack",
        icon: <Brush />,
        features: [
            {
                name: "Arquitectura de microservicios y uso de Spring Cloud / Eureka / API Gateway",
            },
            {
                name: "Testing de servicios con JUnit y Mockito",
            },
            {
                name: "TypeScript para escribir código más robusto",
            },
            {
                name: "Buenas prácticas de testing y herramientas como Jest o React Testing Library.",
            },
            {
                name: "Conceptos de Next.js y rendimiento en aplicaciones web.",
            },
            {
                name: "Principios SOLID y buenas prácticas en C#",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "951 072 293",
        link: "tel:+51951072293",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "https://github.com/JHOEL-G",
        link: "https://github.com/JHOEL-G",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "yuniorjhoelgarcia@gmail.com",
        link: "mailto:yuniorjhoelgarcia@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];