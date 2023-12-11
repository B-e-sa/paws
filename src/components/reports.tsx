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
            text: "",
        }
    ]

    const reviewContainer = useRef<HTMLDivElement>(null);

    const white = ' fill-white';
    const zinc = ' fill-zinc-500';

    const [leftArrowSettings, setLeftArrowSettings] = useState(zinc);
    const [rightArrowSettings, setRightArrowSettings] = useState(white);

    const handleClick = (action: string): void => {
        const containerScroll = reviewContainer.current!

        const scrollMaxWidth =
            containerScroll.scrollWidth - containerScroll.clientWidth

        if (action === 'right') {
            containerScroll.scrollLeft -= 350;

            setRightArrowSettings(white)

            if (containerScroll.scrollLeft == 0)
                setLeftArrowSettings(zinc);
        } else {
            containerScroll.scrollLeft += 350;

            setLeftArrowSettings(white);

            if (containerScroll.scrollLeft == scrollMaxWidth)
                setRightArrowSettings(zinc);
        }
    };


    return (
        <Topic>
            <Title>Relatos</Title>
            <div className="flex w-full">
                <ArrowIcon onClick={() => { handleClick('left'); console.log("oi") }} className="cursor-pointer w-[5rem] rotate-180" />
                <div ref={reviewContainer} className="flex pl-10 w-[100vw] overflow-hidden">
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
                <ArrowIcon onClick={() => console.log("OIII")} className="pointer-events-auto cursor-pointer w-[5rem]" />
            </div>
        </Topic>
    );
}