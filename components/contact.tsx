import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";
import Video from "./Video";

const Contact = () => {
    return (
        <div className="p-4 sm:p-6 md:px-12 md:py-44 max-w-6xl mx-auto" id="contact">
            <Title title="CONTACTA CONMIGO" subtitle="PONTE EN CONTACTO CONMIGO 👋" />

            <footer className="mt-3 pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    {dataContact.slice(0, 3).map((data) => (
                        <div
                            key={data.id}
                            className="flex flex-col items-center border dark:bg-slate-800 bg-white rounded-lg p-4 h-full"
                        >
                            {data.icon}
                            <p className="font-semibold mt-2">{data.title}</p>
                            <p className="text-sm dark:text-white font-semibold mt-1">{data.subtitle}</p>
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

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 pb-10">
                    {dataContact.length > 3 && (
                        <div
                            key={dataContact[3].id}
                            className="w-full md:w-[370px] flex flex-col items-center border dark:bg-slate-800 bg-white rounded-lg p-5 h-full"
                        >
                            {dataContact[3].icon}
                            <p className="font-semibold mt-2">{dataContact[3].title}</p>
                            <p className="text-sm dark:text-white font-semibold mt-1">{dataContact[3].subtitle}</p>
                            <Link
                                href={dataContact[3].link}
                                target="_blank"
                                className="text-blue-500 hover:underline mt-2"
                            >
                                {dataContact[3].buttonText}
                            </Link>
                        </div>
                    )}
                    <div className="">
                        <div className="w-full md:w-auto max-w-full ">
                            <Video />
                        </div>
                    </div>
                </div>

            </footer>

            <div className="mt-20">
                <Title
                    title="¿BUSCAS UN PROGRAMADOR?"
                    subtitle="Estoy listo para aprender, crecer y aportar al equipo 💻"
                />
                <div className="mt-10 flex justify-center">
                    <div className="w-full max-w-2xl px-4">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
