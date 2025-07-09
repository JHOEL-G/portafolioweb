import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="contact">
            <Title title="CONTACTA CONMIGO" subtitle="PONTE EN CONTACTO CONMIGO 👋" />

            <footer className="mt-3  pt-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {dataContact.slice(0, 3).map((data) => (
                        <div
                            key={data.id}
                            className="flex flex-col items-center dark:bg-slate-800 bg-gray-900 rounded-lg p-4"
                        >
                            {data.icon}
                            <p className="font-semibold">{data.title}</p>
                            <p className="text-sm text-white">{data.subtitle}</p>
                            <Link
                                href={data.link}
                                target="_blank"
                                className="text-blue-500 hover:underline mt-2"
                            >
                                {data.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    {dataContact.length > 3 && (
                        <div
                            key={dataContact[3].id}
                            className="w-full md:w-[300px] flex flex-col items-center dark:bg-slate-800 bg-gray-900 rounded-lg p-4"
                        >
                            {dataContact[3].icon}
                            <p className="font-semibold">{dataContact[3].title}</p>
                            <p className="text-sm text-white">{dataContact[3].subtitle}</p>
                            <Link
                                href={dataContact[3].link}
                                target="_blank"
                                className="text-blue-500 hover:underline mt-2"
                            >
                                {dataContact[3].buttonText}
                            </Link>
                        </div>
                    )}
                </div>
            </footer>

            <div className="mt-30">
                <Title title="¿BUSCAS UN PROGRAMADOR?" subtitle="Estoy listo para aprender, crecer y aportar al equipo 💻" />
                <div className="mt-10">
                    <div className="flex justify-center w-full">
                        <div className="w-full max-w-3xl">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;