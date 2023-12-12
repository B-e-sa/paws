import clsx from "clsx";
import Topic from "./topic";

export default function Faq() {
    const Button = ({ text }: { text: string }) => (
        <button className={clsx(
            "md:text-lg md:w-[16rem]",
            "xsm:w-[35vw] xsm:odd:mb-0",
            "odd:mb-5 text-md bg-white p-4 rounded-lg font-medium mx-2 hover:bg-zinc-100"
        )}>
            {text}
        </button>
    );

    return (
        <Topic as="div" className="rounded-lg bg-lime-green-100 px-5 py-10">
            <p className="sm:text-3xl text-[1.6rem] font-bold mb-5">
                Possui mais alguma dúvida?
            </p>
            <p className="md:text-[1.3rem] font-medium text-[1rem]">
                Consulte nossa área de perguntas frequentes ou entre em contato com o nosso suporte!
            </p>
            <div className="xsm:flex-row flex mt-5 flex-col ">
                <Button text="Perguntas frequentes" />
                <Button text="Suporte" />
            </div>
        </Topic>
    );
}