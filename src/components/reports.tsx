"use client";

import Image from "next/image";
import Title from "./title";
import Topic from "./topic";
import { useRef, useState } from "react";
import ArrowIcon from "@/icons/arrow";

interface Review {
    name: string;
    image: string;
    text: string;
}

enum DIRECTION {
    LEFT,
    RIGHT
}

export default function Reports() {
    const reviews: Review[] = [
        {
            name: "Vanessa Airoldi",
            image: "/reviews/vanessa.webp",
            text: "Adotei meu melhor amigo aqui e não poderia estar mais feliz. Recomendo a que busca uma experiência de adoção calorosa e cheia de amor!",
        },
        {
            name: "João Antônio",
            image: "/reviews/joao.webp",
            text: "Adotei minha primeira gatinha com a Paws! Recomendo!",
        },
        {
            name: "Tulio Pereira",
            image: "/reviews/tulio.webp",
            text: "O Processo de adoção foi suave e acolhedor. Grato por ter tido a oportunidade de fazer parte de algo tão significativo.",
        },
        {
            name: "Arthur Sgarbi",
            image: "/reviews/arthur.webp",
            text: "A equipe fez todo o possível para garantir que a transição fosse suave para todos nós. A atenção contínua pós-adoção é incrível.",
        },
        {
            name: "Vinicius Rodrigues",
            image: "/reviews/vinicius.webp",
            text: "Equipe incrivelmente atenciosa. Meu novo cachorrinho já está em casa e feliz e cheio de personalidade, posso ver que foi bem cuidado.",
        }
    ]

    const reviewContainer = useRef<HTMLDivElement>(null);

    const handleClick = (direction: DIRECTION): void => {
        const containerScroll = reviewContainer.current!

        if (direction === DIRECTION.RIGHT) {
            containerScroll.scrollLeft += 250;
        } else {
            containerScroll.scrollLeft -= 250;
        }
    };


    return (
        <Topic>
            <Title>Relatos</Title>
            <div className="flex w-full">
                <ArrowIcon
                    onClick={() => handleClick(DIRECTION.LEFT)}
                    className="sm:block hidden cursor-pointer w-[5rem] rotate-180"
                />
                <div ref={reviewContainer} className="md:overflow-hidden overflow-auto flex pl-10 w-[100vw] ">
                    <div className="flex">
                        {
                            reviews.map(({ image, name, text }) => (
                                <div key={name} className="rounded-lg border-zinc-200 border mr-20 flex items-center h-[10rem] shadow-lg">
                                    <Image
                                        unoptimized={true}
                                        src={image}
                                        className="shadow-xl relative -left-10 mr-4 rounded-full object-cover min-w-[120px] w-[120px] h-[120px]"
                                        width={80}
                                        height={80}
                                        alt={name}
                                    />
                                    <div className="flex flex-col">
                                        <p className="-ml-8 text-xl font-medium">{name}</p>
                                        <p className="-ml-8 text-md w-[20rem]">{text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <ArrowIcon
                    onClick={() => handleClick(DIRECTION.RIGHT)}
                    className="sm:block hidden pointer-events-auto cursor-pointer w-[5rem]"
                />
            </div>
        </Topic>
    );
}