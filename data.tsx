import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";
import { DiBootstrap, DiCss3, DiGithubBadge, DiHtml5, DiJavascript1, DiLaravel, DiMysql, DiPostgresql, DiPython, DiReact } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiDotnet } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";



export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+1 año de experiencia",
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
        description: "Web development project",
        urlGithub: "https://github.com/JHOEL-G/PaginaOnline",
        urlDemo: "https://paginaonlin.netlify.app/",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        description: "Aplicación de gestión de tareas desarrollada con React y Node.js. Permite crear, editar y eliminar tareas de manera eficiente.",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Spring Boot",
        image: "/proyecto1.png",
        description: "Aplicación de gestión de tareas desarrollada con Spring Boot y React .",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "MASTER SCHEDULER",
        image: "/image-4.png",
        description: "Sistema de ventas desarrollado con C# y React. Permite gestionar productos, clientes y ventas de manera eficiente.",
        urlGithub: "https://github.com/JHOEL-G/SISTEM_DE_VENTAS",
        urlDemo: "https://sistem-de-ventas.vercel.app/",
    },
    {
        id: 5,
        title: "TIENDA ONLINE",
        image: "/img5.png",
        description: "Tienda online desarrollada con React y Node.js. Permite gestionar productos, clientes y ventas de manera eficiente.",
        urlGithub: "https://github.com/JHOEL-G/tienda-online",
        urlDemo: "https://tienda-online-n5e0.onrender.com/",
    },
    {
        id: 6,
        title: "INTELIGENCIA ARTIFICIAL",
        image: "/img6.png",
        description: "Aplicación de inteligencia artificial desarrollada con React. Permite predecir resultados de manera eficiente.",
        urlGithub: "https://github.com/JHOEL-G/Pagina",
        urlDemo: "https://masterenginer.netlify.app/",
    },

];



export const dataExperience = [
    {
        id: 1,
        title: "Frontend Developer 🌐",
        experience: [
            {
                name: "HTML",
                icono: <DiHtml5 size={18} />,
                descripcion: "Base para estructurar contenido web.",
                subtitle: "Uso Frecuente",
                value: 30,
            },
            {
                name: "CSS",
                icono: <DiCss3 size={18} />,
                descripcion: "Estilos para la presentación y diseño web.",
                subtitle: "Uso Frecuente",
                value: 30,
            },
            {
                name: "JavaScript",
                icono: <DiJavascript1 size={18} />,
                descripcion: "Añado interactividad y lógica a las interfaces.",
                subtitle: "En Practica",
                value: 10,
            },
            {
                name: "Tailwind CSS",
                icono: <RiTailwindCssFill size={18} />,
                descripcion: "Aplico utility-first CSS para prototipado rápido.",
                subtitle: "En Aprendizaje",
                value: 10,
            },
            {
                name: "React",
                icono: <DiReact size={18} />,
                descripcion: "Explorando la creación de UI modernas con componentes.",
                subtitle: "En Aprendizaje",
                value: 10,
            },
            {
                name: "Bootstrap",
                icono: <DiBootstrap size={18} />,
                descripcion: "Utilizo componentes predefinidos para agilizar el diseño.",
                subtitle: "Uso Regular",
                value: 10,
            },
            {
                name: "Git y GitHub",
                icono: <DiGithubBadge size={18} />,
                descripcion: "Colaboro en proyectos y gestiono versiones de código.",
                subtitle: "Uso Frecuente",
                value: 30,
            },
            {
                name: "Next.js",
                icono: <RiNextjsFill size={18} />,
                descripcion: "Construyo interfaces web con funcionalidades avanzadas de React.",
                subtitle: "En Aprendizaje",
                value: null,
            }
        ],
    },
    {
        id: 2,
        title: "Backend Developer 🖥️",
        experience: [
            {
                name: "Spring Boot",
                icono: <BiLogoSpringBoot size={18} />,
                descripcion: "Construyo APIs RESTful y MVC en Java.",
                subtitle: "En Aprendizaje",
                value: 10,
            },
            {
                name: "Postgres Sql",
                icono: <DiPostgresql size={18} />,
                descripcion: "Gestiono y consulto bases de datos relacionales robustas.",
                subtitle: "En Aprendizaje",
                value: 10,
            },
            {
                name: "Python",
                icono: < DiPython size={18} />,
                descripcion: "Desarrollo lógica de negocio y APIs en entornos backend.",
                subtitle: "Estoy Aprendiendo",
                value: null,
            },
            {
                name: "MySQL",
                icono: <DiMysql size={18} />,
                descripcion: "Trabajo con bases de datos relacionales para persistencia de datos.",
                subtitle: "En Practica",
                value: 10,
            },
            {
                name: "PHP - Laravel",
                icono: <DiLaravel size={18} />,
                descripcion: "Aprendiendo a construir aplicaciones web con este framework.",
                subtitle: "En Aprendizaje",
                value: null,
            },
            {
                name: "C# - .NET",
                icono: <SiDotnet size={18} />,
                descripcion: "Desarrollo APIs y servicios web usando C# y el framework .NET.",
                subtitle: "Uso Regular",
                value: 10,
            },
            {
                name: "Azure",
                icono: <VscAzure size={18} />,
                descripcion: "Iniziando con servicios cloud de Microsoft para despliegue de aplicaciones.",
                subtitle: "En Aprendizaje",
                value: null,
            },
            {
                name: "Docker",
                icono: <FaDocker size={18} />,
                descripcion: "Explorando el uso de contenedores para entornos de desarrollo y despliegue.",
                subtitle: "En Aprendizaje",
                value: null,
            }
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
        buttonText: "LLAMAR",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "https://github.com/JHOEL-G",
        link: "https://github.com/JHOEL-G",
        buttonText: "VER PERFIL",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "yuniorjhoelgarcia@gmail.com",
        link: "mailto:yuniorjhoelgarcia@gmail.com",
        buttonText: "ENVIAR CORREO",
        icon: <Inbox />,
    },
];

export const dataLearnings = [
    {
        id: 1,
        tech: "Oracle",
        description:
            "Aprendí a utilizar Oracle Database para gestionar grandes volúmenes de datos empresariales, incluyendo la creación de tablas, relaciones, consultas complejas con SQL y conceptos básicos de administración de base de datos. Esta habilidad es fundamental para cualquier rol relacionado con datos o backend.",
        imageUrl: "/Oracle-Logo-1.png",
    },
    {
        id: 2,
        tech: "Red Hat Linux",
        description:
            "Me capacité en el uso de Red Hat Enterprise Linux, enfocado en la administración de sistemas operativos tipo Unix. Incluyó instalación de paquetes, gestión de usuarios, configuración de servicios y uso del terminal. Es una base sólida para roles en administración de sistemas y servidores.",
        imageUrl: "/1175107.webp",
    },
    {
        id: 3,
        tech: "Cisco",
        description:
            "Estudié redes con tecnología Cisco, comprendiendo el funcionamiento de redes LAN, direccionamiento IP, protocolos como TCP/IP, y configuraciones básicas de routers y switches. Estos conocimientos son clave para roles en redes, soporte técnico o infraestructura.",
        imageUrl: "/Cisco-Pride-Logo-2006.png.webp",
    },
    {
        id: 4,
        tech: "Linux",
        description:
            "Me familiaricé con el entorno Linux en general, usando comandos de terminal para navegación, manipulación de archivos, gestión de procesos y scripting básico en bash. Es una competencia esencial para desarrolladores, administradores de sistemas y entornos DevOps.",
        imageUrl: "/linux-logo-png-transparent.png",
    },
];
