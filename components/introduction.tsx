import {Mail, Paperclip } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">HOLA A TODOS</h3>
                <h1 className="text-4xl font-bold mb-3">
                    JUNIOR JHOEL GARCIA LADINO 👨‍💻
                </h1>
                <h2 className="text-2xl text-gray-400">FULL STACK DEVELOPER JUNIOR</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> CONTACTA CONMIGO
                        </Link>
                        <Link className={buttonVariants({ variant: 'secondary' })} href="/cv-tarre.pdf" target="_blank">
                            <Paperclip className="mr-2" /> DESCARGAR CV
                        </Link>
                    </div>
                </div>
                <Image
                    src="/profile.png"
                    alt="Foto de perfil"
                    width={500}
                    height={500}
                />
            </div>
        </Container>
    );
};

export default Introduction;
