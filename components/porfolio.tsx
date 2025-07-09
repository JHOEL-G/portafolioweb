import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Porfolio = () => {
    return (
        <div className="p-3 max-w-4xl md:py-20 mx-auto" id="porfolio">
            <Title title="PORTAFOLIO" subtitle="TRABAJOS REALIZADOS 💼" />
            <div className="grid md:grid-cols-3 gap-13 mt-4 md:gap-8">
                {dataPortfolio.map((data) => (
                    <div key={data.id} className="rounded-2xl shadow-lg p-4 flex flex-col h-full  dark:bg-blue-950">
                        <h3 className="text-xl font-extralight mb-4 text-gray-900 dark:text-gray-100 text-center">
                            {data.title}
                        </h3>

                        <div className="relative w-full h-[190px] rounded-xl overflow-hidden">
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm flex-grow font-extralight mt-3 mb-auto">
                            {data.description || 'SIN DESCRIPCION'}
                        </p>
                        <p className="flex justify-center items-center gap-3 py-2">
                            {data.iconos}
                        </p>

                        <div className="mt-1 flex gap-4 justify-center items-center">
                            <Link className={buttonVariants({ variant: "outline" })} href={data.urlGithub} target="_blank">
                                GITHUB
                            </Link>
                            <Link className={buttonVariants({})} href={data.urlDemo} target="_blank">
                                LIVE DEMO
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Porfolio;
