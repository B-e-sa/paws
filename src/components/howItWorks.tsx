import Businessman from "@/icons/people/businessman";
import PetPaw from "@/icons/petPaw";
import Pointing from "@/icons/people/pointing";
import VacumCleaning from "@/icons/people/vacuumCleaning";
import Topic from "./topic";
import clsx from "clsx";
import Title from "./title";

interface ISteps {
    title: string;
    text: string;
    Icon: React.JSX.Element;
}

export default function HowItWorks() {
    const steps: ISteps[] = [
        {
            title: "Prepare-se!",
            text: "Antes mesmo de pensar em adotar, tenha certeza de estar preparado para fornecer o melhor ambiente e cuidados ao animalzinho de seu interesse. Considere seu estilo de vida, horários e tempo disponível.",
            Icon: <VacumCleaning />,
        },
        {
            title: "Demonstre interesse",
            text: "Nos comunique sobre o seu interesse! Entraremos em contato novamente em até 48h para que uma entrevista seja agendada e o os primeiros passos para a adoção de seu companheiro seja realizada.",
            Icon: <Pointing />,
        },
        {
            title: "Avaliação",
            text: "Numa entrevista, nosso grupo irá fazer a análise de seu cadastro e perfil. Se estiverem em conformidade com seu pet, você receberá a aprovação para o último passo no processo de adoção.",
            Icon: <Businessman />,
        },
        {
            title: "Adoção",
            text: "Caso seja aprovado, você já pode levar seu pet para casa! Você poderá buscar seu pet em nosso endereço. A partir daí, acompanhe seu bixinho com todo o carinho e cuidado!",
            Icon: <PetPaw />,
        },
    ];

    return (
        <Topic>
            <Title>Como funciona?</Title>
            <div className={clsx(
                "xl:flex-row xl:h-fit",
                "items-center flex-col flex w-full",
            )}>
                {steps.map(({ Icon, text, title }) => (
                    <div
                        className={clsx(
                            "xl:items-center xl:flex-col",
                            "flex even:my-4 w-[90vw] justify-center",
                        )}
                        key={title}
                    >
                        <Icon.type className={clsx(
                            "xl:w-48 xl:min-w-32",
                            "w-32 mr-6",
                        )} />
                        <div className={clsx(
                            "xl:items-center xl:w-[17rem]",
                            "flex flex-col w-[50rem]",
                        )}>
                            <p className="text-2xl mt-5 mb-2 font-semibold">{title}</p>
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Topic>
    )
}