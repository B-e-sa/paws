import React from "react";

export default function Form() {
    const Input = (props: React.ComponentProps<'input'>) => (
        <input
            {...props}
            className={`border border-zinc-400 p-2 mb-2 ${props.className}`}
        />
    );

    return (
        <form>
            <div className="flex">
                <Input className="w-2/5 mr-1" type="text" placeholder="Nome" />
                <Input className="w-3/5" type="text" placeholder="Sobrenome" />
            </div>
            <div className="flex flex-col">
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Número (opcional)" />
            </div>
            <button className="w-full hover:bg-lime-green-200 bg-lime-green-100 rounded-lg py-4 font-medium ">Inscrever-se</button>
        </form>
    );
}