import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";
import { DiBootstrap, DiCss3, DiCss3Full, DiGithubBadge, DiHtml5, DiJavascript1, DiLaravel, DiMysql, DiPostgresql, DiPython, DiReact } from "react-icons/di";
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
        description: "+2 año de experiencia",
    },
    {
        id: 2,
        name: "Cursos Completados",
        icon: <UsersRound />,
        description: "+5 cursos en línea",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+4 completados",
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
        image: "/proyecto1.png",
        iconos: (
            <>
                <DiReact size={30} />
                <RiTailwindCssFill size={30} />
                <RiNextjsFill size={30} />
                <SiDotnet size={30} />
                <DiPostgresql size={30} />
            </>
        ),
        description: "Proyecto en desarrollo, enfocado en diseño web moderno y funcionalidades interactivas. (Proyecto no Acabado)",
        urlGithub: "https://github.com/JHOEL-G/PaginaOnline",
        urlDemo: "https://paginaonlin.netlify.app/",
    },
    {
        id: 2,
        title: "Desarrollo Web Nativo",
        image: "/proyecto2.png",
        iconos: (
            <>
                <DiHtml5 size={30} />
                <DiCss3Full size={30} />
                <DiJavascript1 size={30} />
            </>
        ),
        description: "Sitio web completo hecho con HTML, CSS y JavaScript puro, sin .",
        urlGithub: "https://github.com/JHOEL-G/nativo",
        urlDemo: "https://proyectonativo.netlify.app/",
    },
    {
        id: 3,
        title: "Spring Boot",
        image: "/image-2.jpg",
        iconos: (
            <>
                <BiLogoSpringBoot size={30} />
                <DiPostgresql size={30} />
                <DiReact size={30} />
                <RiTailwindCssFill size={30} />
            </>
        ),
        description: "Aplicación de gestión de tareas desarrollada con Spring Boot y React . (Proyecto no Acabado)",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "MASTER SCHEDULER",
        image: "/image-4.png",
        iconos: (
            <>
                <SiDotnet size={30} />
                <DiPostgresql size={30} />
                <DiReact size={30} />
                <RiTailwindCssFill size={30} />
            </>
        ),
        description: "Sistema de ventas desarrollado con C# y React. Permite gestionar productos, clientes y ventas de manera eficiente.",
        urlGithub: "https://github.com/JHOEL-G/SISTEM_DE_VENTAS",
        urlDemo: "https://sistem-de-ventas.vercel.app/",
    },
    {
        id: 5,
        title: "TIENDA ONLINE",
        image: "/img5.png",
        iconos: (
            <>
                <DiPostgresql size={30} />
                <DiReact size={30} />
                <RiTailwindCssFill size={30} />
            </>
        ),
        description: "Sistema de ventas desarrollado React. Permite gestionar productos, clientes y ventas de manera eficiente.",
        urlGithub: "https://github.com/JHOEL-G/tienda-online",
        urlDemo: "https://tienda-online-n5e0.onrender.com/",
    },
    {
        id: 6,
        title: "INTELIGENCIA ARTIFICIAL",
        image: "/img6.png",
        iconos: (
            <>
                <DiPython size={30} />
                <DiPostgresql size={30} />
                <DiReact size={30} />
                <RiTailwindCssFill size={30} />

            </>
        ),
        description: "Aplicación de inteligencia artificial desarrollada con Python y React. Permi ite predecir el precio de las acciones de manera eficiente.",
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
                name: "Python - Nativo",
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
                name: "PHP - Nativo",
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
            { name: "Sitios web responsive con HTML, CSS y JavaScript" },
            { name: "Componentes reutilizables con React y Tailwind CSS" },
            { name: "Manejo básico de Git, GitHub, Vite y npm/yarn" },
            { name: "Consumo de APIs y uso de Axios o Fetch" },
            { name: "Enrutamiento con React Router" },
            { name: "Validación de formularios con React Hook Form" },
            { name: "Despliegue en Vercel o Netlify" },
        ],
    },
    {
        id: 2,
        title: "Desarrollo de APIs REST",
        icon: <BellPlus />,
        features: [
            { name: "APIs RESTful con Spring Boot y Spring Security" },
            { name: "Persistencia con JPA/Hibernate MySQL/PostgreSQL" },
            { name: "Manejo de errores y validación en Spring Boot" },
            { name: "APIs RESTful con C# .NET Core 8 y JWT Authentication" },
            { name: "Persistencia con Entity Framework Core (SQL Server/PostgreSQL)" },
            { name: "Manejo de errores y validación en .NET Core" },
            { name: "Documentación básica con Swagger OpenAPI" },
            { name: "Despliegue básico de aplicaciones" },
        ],
    },
    {
        id: 3,
        title: "En proceso de formación Full Stack",
        icon: <Brush />,
        features: [
            { name: "Aprendiendo arquitectura de microservicios" },
            { name: "Iniciación en patrones de diseño comunes" },
            { name: "Manejo de pruebas unitarias (JUnit, Jest, XUnit)" },
            { name: "Explorando Next.js y TypeScript para frontend" },
            { name: "Estudiando principios SOLID y Clean Architecture" },
            { name: "Uso de Git/GitHub para control de versiones y colaboración" },
            { name: "Resolución de problemas y depuración de código" },
            { name: "Conocimientos básicos de Docker para despliegue" }
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
        id: 4,
        title: "WhatsApp",
        subtitle: "DESARROLLADOR",
        link: "https://wa.me/951072293",
        buttonText: "ESCRIBEME",
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
        description: "Manejo de Oracle Database para gestión de datos, incluyendo SQL y conceptos básicos de administración de BD. Fundamental para roles de backend (Java) y datos.",
        imageUrl: "/Oracle-Logo-1.png",
    },
    {
        id: 2,
        tech: "Red Hat Linux",
        description: "Administración básica de Red Hat Enterprise Linux, cubriendo instalación de paquetes, gestión de usuarios y uso de terminal. Útil para entornos de servidor.",
        imageUrl: "/1175107.webp",
    },
    {
        id: 3,
        tech: "Cisco",
        description: "Conocimientos básicos de redes con Cisco, incluyendo direccionamiento IP, protocolos (TCP/IP) y configuración de routers/switches. Clave para infraestructura.",
        imageUrl: "/Cisco-Pride-Logo-2006.png.webp",
    },
    {
        id: 4,
        tech: "Linux",
        description: "Dominio general de Linux vía terminal para navegación, manipulación de archivos y scripting básico. Esencial para desarrollo y DevOps.",
        imageUrl: "/linux-logo-png-transparent.png",
    },
];
