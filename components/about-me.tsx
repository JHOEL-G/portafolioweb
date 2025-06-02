import { dataAboutMe, dataSlider, dataContact } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 max-w-5xl mx-auto" id="about-me">
            <Title title="SOBRE MI" subtitle="Conoceme" />
            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image src={data.url} alt="IMAGE" width={250} height={400} className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data) =>
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        )}
                    </div>
                    <p className="my-8">Soy un programador de software con pasión por resolver problemas a través del código. Me encanta construir aplicaciones que no solo funcionen bien, sino que también se sientan bien de usar. Disfruto trabajar tanto en el frontend como en el backend, y siempre estoy aprendiendo nuevas tecnologías para mejorar mis habilidades. Creo firmemente que los programadores somos los arquitectos digitales del mundo moderno. Ya sea desarrollando una API eficiente, diseñando una interfaz intuitiva o depurando errores a las 2 a.m., me esfuerzo por dar lo mejor en cada línea de código.</p>
                    <Button>
                        {dataContact.filter((datas) => datas.id ===1).map((datas) => (
                            <a key={datas.id} href={datas.link} className="inline-flex items-center gap-2 text-white hover:underline">
                                <Phone size={20} className="mr-2"/> LLAMAR:
                                <hr />
                                <div>
                                    <p>{datas.subtitle}</p>
                                </div>
                            </a>
                        ))}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;