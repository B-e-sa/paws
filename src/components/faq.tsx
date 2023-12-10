import clsx from "clsx";
import Topic from "./topic";

export default function Faq() {
    const Button = ({ text }: { text: string }) => (
        <button
            className={clsx(
                "md:w-[16rem] md:text-lg",
                "w-[34vw] text-[2.5vw] bg-white p-[1vw] rounded-lg font-medium mx-2"
            )}
        >
            {text}
        </button>
    );

    return (
        <Topic>
            <div className="px-14 w-[87vw] flex flex-col items-center rounded-lg bg-lime-green-100 h-fit py-10">
                <p
                    className={clsx(
                        "md:text-[1.8rem] md:w-fit",
                        "w-[60vw] text-[4.2vw] font-bold mb-5"
                    )}
                >
                    Possui mais alguma dúvida?
                </p>
                <p className="md:text-[1.3rem] text-[3vw] w-[70vw]">
                    Consulte nossa área de perguntas frequentes ou entre em contato com o nosso suporte!
                </p>
                <div className="flex mt-5">
                    <Button text="Perguntas frequentes" />
                    <Button text="Suporte" />
                </div>
            </div>
        </Topic>
    );
}