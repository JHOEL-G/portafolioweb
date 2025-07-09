import React from 'react';

const Video = () => {
    return (
        <div className="mx-auto max-w-md overflow-hidden rounded-xl dark:bg-slate-800 bg-white shadow-md md:max-w-2xl border">
            <div className="md:flex">
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg pr-[300px]"
                        src="https://www.youtube.com/embed/DGX8Vd31dz8?start=92"
                        title="Altoke"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="p-8 flex flex-col justify-center">
                    <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">AL TOKE</div>
                    <a
                        href="https://www.youtube.com/watch?v=DGX8Vd31dz8&t=92s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-lg leading-tight font-medium dark:text-white hover:underline "
                    >
                        AJAX con HTML y JSON en ASP.NET Core (INSTRUCTOR)
                    </a>
                    <p className="mt-2 text-gray-500">
                        Aprende cómo hacer peticiones AJAX desde HTML usando JSON y .NET Core AL TOKE .
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Video;