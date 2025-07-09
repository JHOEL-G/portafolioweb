import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
    return (
        <footer className="max-w-3xl mx-auto px-4 py-8 ">
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
                <div className="flex flex-wrap text-center justify-center gap-x-4 gap-y-2 md:gap-8 items-center text-sm md:text-base w-full pb-3">
                    <Link href="#portfolio" className="hover:text-green-500 transition-colors">MI PORTAFOLIO</Link>
                    <Link href="#contact" className="hover:text-green-500 transition-colors">CONTACTO</Link>
                    <Link href="#home" className="hover:text-green-500 transition-colors">SOBRE MI</Link>
                    <Link href="#experience" className="hover:text-green-500 transition-colors">SKILLS</Link>
                    <Link href="#services" className="hover:text-green-500 transition-colors">SERVICIOS</Link>
                </div>
            </div>
            <div className="w-full md:w-auto text-center mt-5">
                <h4 className="text-3xl font-bold whitespace-nowrap">SOFTWARE ENGINEERING WITH AI</h4>
            </div>
            <Separator className="my-10 md:my-10" />
            <div className="text-center text-sm text-gray-500">&copy; 2025 LA PAGINA DE MI PORTAFOLIO</div>
        </footer>
    );
}

export default Footer;