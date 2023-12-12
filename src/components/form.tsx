import PawsIcon from "@/icons/paws";
import WalkingCatIcon from "@/icons/pets/walkingCat";
import UniquePawIcon from "@/icons/uniquePaw";
import React from "react";
import Topic from "./topic";

export default function Form() {
    const Input = (props: React.ComponentProps<'input'>) => (
        <input
            {...props}
            className={`border border-zinc-400 p-2 mb-2 ${props.className}`}
        />
    );

    return (
        <Topic className='md:flex-row justify-between mx-5'>
            <div className="md:w-3/6">
                <p className={'xl:mb-0 mb-6 mr-4'}>
                    Inscreva-se em nosso newsletter para receber notícias sobre campanhas,
                    eventos e novidades relacionadas a nosso grupo!
                </p>
                <div className="md:flex hidden relative mt-[6vw]">
                    {
                        Array(14)
                            .fill(0)
                            .map((_, i) => (
                                <UniquePawIcon
                                    key={i}
                                    className="relative ml-[.8vw] odd:top-[2rem] rotate-90 w-[1.5rem]"
                                />
                            ))
                    }
                    <WalkingCatIcon className="ml-4 mr-4 relative r-0 w-[5rem]" />
                </div>
            </div>
            <form className="md:w-3/6">
                <div className="flex">
                    <Input
                        className="w-2/5 mr-1"
                        type="text"
                        name="name"
                        placeholder="Nome"
                    />
                    <Input
                        className="w-3/5"
                        type="text"
                        name="last name"
                        placeholder="Sobrenome"
                    />
                </div>
                <div className="flex flex-col">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <Input
                        type="tel"
                        name="number"
                        placeholder="Número (opcional)"
                    />
                </div>
                <button
                    className="w-full hover:bg-lime-green-200 bg-lime-green-100 rounded-lg py-4 font-medium"
                >
                    Inscrever-se
                </button>
            </form>
        </Topic>
    );
}