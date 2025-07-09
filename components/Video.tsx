import React from 'react';
import { Button } from './ui/button';

const Video = () => {
    return (
        <div className="mx-auto max-w-md md:max-w-3xl flex overflow-hidden rounded-xl dark:bg-slate-800 bg-white shadow-md border">
            <div className="flex flex-col md:flex-row">
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                        src="https://www.youtube.com/embed/DGX8Vd31dz8?start=92"
                        title="Altoke"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="p-6 flex flex-col justify-center gap-3">
                    <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">AL TOKE</div>
                    <a
                        href="https://www.youtube.com/watch?v=DGX8Vd31dz8&t=92s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg leading-tight font-medium dark:text-white hover:underline"
                    >
                        AJAX con HTML y JSON en ASP.NET Core (INSTRUCTOR)
                    </a>
                    <p className="text-gray-500 dark:text-gray-300 text-sm">
                        Aprende cómo hacer peticiones AJAX desde HTML usando JSON y .NET Core AL TOKE.
                    </p>
                    <Button className=' hover:bg-red-700'>
                        <a
                            href="https://www.youtube.com/@TuCanal" // <-- Reemplaza con tu canal
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-white font-bold py-2 px-4 rounded transition-all duration-300 text-center"
                        >
                            Suscríbete 🔔
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Video;
