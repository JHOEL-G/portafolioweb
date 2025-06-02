import { dataLearnings } from "@/data";
import Title from "./shared/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Learnings = () => {
  return (
    <div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto">
      <Title title="LO APRENDIDO" subtitle="Tecnologías y habilidades que he desarrollado" />

      <Carousel className="mx-10 mt-6">
        <CarouselContent className="gap-10">
          {dataLearnings.map((item) => (
            <CarouselItem
              key={item.id}
              className="md:basis-1/3 p-6 text-center flex flex-col items-center border-slate-400 border-2 rounded-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.tech}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{item.tech}</h3>
              <p className="text-sm">{item.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Learnings;
