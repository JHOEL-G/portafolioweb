"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { dataExperience } from "@/data";
import Title from "./shared/title";
import { Progress } from "./ui/progress";
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const Experence = () => {
    const [showAllSkills, setShowAllSkills] = useState<Record<number, boolean>>({});
    const categoryRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const initialSkillsToShow = 4;

    const toggleShowAll = (categoryId: number) => {
        setShowAllSkills(prevState => ({
            ...prevState,
            [categoryId]: !(Boolean(prevState[categoryId]))
        }));
    };

    const isElementInViewport = (el: HTMLDivElement) => {
        const rect = el.getBoundingClientRect();
        return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0;
    };

    const collapseSkillsOutOfView = useCallback(() => {
        setShowAllSkills(prevState => {
            const newState = { ...prevState };
            let changed = false;
            Object.keys(categoryRefs.current).forEach(id => {
                const categoryId = Number(id);
                const ref = categoryRefs.current[categoryId];
                if (newState[categoryId] && ref && !isElementInViewport(ref)) {
                    newState[categoryId] = false;
                    changed = true;
                }
            });
            return changed ? newState : prevState;
        });
    }, []);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        const handleScroll = () => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                collapseSkillsOutOfView();
            }, 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [collapseSkillsOutOfView]);

    const getCollapsedHeight = (skillsCount: number) => {
        const itemHeight = 40;
        const subtitleHeight = 20;
        const descriptionHeight = 40;
        const progressHeight = 25;

        const totalHeightPerItem = itemHeight + subtitleHeight + descriptionHeight + progressHeight + 16;

        const numRows = Math.ceil(skillsCount / 2);
        const totalGapY = (numRows - 1) * 32;

        return (numRows * totalHeightPerItem) + totalGapY;
    };

    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto">
            <Title title="MIS HABILIDADES" subtitle="SKILLS TÉCNICAS" />

            <div className="grid md:grid-cols-2 gap-8 mt-5 items-start">
                {dataExperience.map((data) => {
                    const hasMoreSkills = data.experience.length > initialSkillsToShow;
                    const isExpanded = showAllSkills[data.id];

                    const dynamicMaxHeight = isExpanded
                        ? '1000px'
                        : `${getCollapsedHeight(initialSkillsToShow)}px`;

                    return (
                        <div
                            key={data.id}
                            ref={el => { categoryRefs.current[data.id] = el; }}
                            className="p-6 rounded-xl border border-gray-400 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl">{data.title}</h3>

                                {hasMoreSkills && (
                                    <button
                                        onClick={() => toggleShowAll(data.id)}
                                        className="p-1 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                        aria-label={isExpanded ? "Ver menos habilidades" : "Ver más habilidades"}
                                    >
                                        {isExpanded ? (
                                            <FiChevronUp size={20} />
                                        ) : (
                                            <FiChevronDown size={20} />
                                        )}
                                    </button>
                                )}
                            </div>

                            <div

                                className="overflow-hidden transition-all duration-500 ease-in-out"
                                style={{ maxHeight: dynamicMaxHeight }}
                            >
                                <div className="grid md:grid-cols-2 gap-x-4 gap-y-1">
                                    {data.experience.map((item) => (
                                        <div key={item.name} className="flex flex-col my-4">
                                            <p className="flex gap-2 mb-2 items-center">
                                                {item.icono}
                                                <span className="font-semibold text-lg">{item.name}</span>
                                            </p>
                                            <div className="flex-grow min-h-[45px] flex items-center">
                                                {item.descripcion && (
                                                    <p className="text-gray-500 text-xs leading-tight">
                                                        {item.descripcion}
                                                    </p>
                                                )}
                                            </div>

                                            <p className="text-gray-400 text-sm mb-1">{item.subtitle}</p>

                                            {item.value !== undefined && (
                                                <div className="flex items-center w-[100%] mt-2">
                                                    <Progress value={item.value} className="flex-grow mr-2" />
                                                    <span className="text-sm font-semibold text-green-400">{item.value}%</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experence;