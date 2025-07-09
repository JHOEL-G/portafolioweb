import { Mail, Paperclip } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Container from "./shared/container";
import { FaWhatsapp } from "react-icons/fa";

const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">HOLA A TODOS, SOY</h3>
                <h1 className="text-4xl font-bold mb-3">
                    JUNIOR JHOEL GARCIA LADINO 👨‍💻
                </h1>
                <h2 className="text-2xl text-gray-400">INGENIERO DE SOFTWARE DESARROLLADOR FULL STACK JUNIOR
                </h2>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col md:flex-row gap-3 justify-between mt-10">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> CONTACTA CONMIGO
                        </Link>
                        <Link className={buttonVariants({ variant: 'secondary' })} href="./Currículum%20Web%20-%20Jhoel%20Garcia%20Ladino.pdf" target="_blank">
                            <Paperclip className="mr-2" /> DESCARGAR CV
                        </Link>
                        <Link className={buttonVariants()} href="https://wa.me/951072293"
                        >
                            <FaWhatsapp className="mr-2" />ENVIAME MENSAJE
                        </Link>
                    </div>
                </div>
                <div className="w-[250px] h-[250px] my-10 mx-auto rounded-full overflow-hidden border-[6px] border-[#2a4d25] shadow-[0_0_12px_rgba(42,77,37,0.4)] transition-transform duration-300 ease-in-out hover:scale-[1.03]">
                    <Image
                        src="/perfil01.jpg"
                        alt="Foto de perfil"
                        width={250}
                        height={250}
                        className="w-full h-full object-cover object-top block"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Introduction;
