import { dataTestimonials } from "@/data";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "./ui/avatar";

const Testimonials = () => {
    return ( 
        <div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto">
            <Title title="TESTIMONIOS" subtitle="REVIW DE LOS CLIENTES"/>

            <Carousel className="mx-10 mt-6">
                <CarouselContent className="gap-10">
                    {dataTestimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id} className="md:basis-1/3 p-4 text-center flex flex-col items-center border-slate-400 border-2 rounded-lg">
                            <Avatar>
                                <AvatarImage  alt="PROFILE AVATAR"/>
                                <AvatarFallback>CARGANDO</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="min-h-12 text-2xl mt-4"></p>
                                <p> POR EL MOMENTO NO HAY CLIENTES. GRACIAS</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
     );
}
 
export default Testimonials;