import CatIcon from "@/icons/pets/cat";
import DogIcon from "@/icons/pets/dog";
import FemaleIcon from "@/icons/pets/female";
import MaleIcon from "@/icons/pets/male";
import clsx from "clsx";
import Image from "next/image";

interface IRecentAdopted {
    name: string;
    race: string;
    sex: string;
    image: string;
    description: string;
}

export default function Adopted() {
    const recentAdopted: IRecentAdopted[] = [
        {
            image: "/adopted/cat1.webp",
            name: "Faísca",
            race: "Gato",
            sex: "Fêmea",
            description: "Exploradora, é brincalhona e carinhosa, perfeita para famílias que buscam um gatinho animado.",
        },
        {
            image: "/adopted/dog1.webp",
            name: "Dan",
            race: "Cachorro",
            sex: "Macho",
            description: "Curioso e brincalhão, pronto para explorar cada canto da casa.",
        },
        {
            image: "/adopted/dog2.webp",
            name: "Pepito",
            race: "Cachorro",
            sex: "Fêmea",
            description: "Elegante e tranquilo. Adora relaxar em lugares ensolarados, é excelente companheiro para todas as idades.",
        },
        {
            image: "/adopted/cat2.webp",
            name: "Paçoca",
            race: "Gato",
            sex: "Macho",
            description: "Um verdadeiro aconchego, ideal para lares que buscam um companheiro carinhoso.",
        },
    ];

    const infoIconWidth = "w-[25px]"

    const Race = ({ race }: { race: string }) => (
        <span>
            {
                race === "Gato"
                    ? <CatIcon className={infoIconWidth} />
                    : <DogIcon className="w-[20px]" />
            }
        </span>
    );

    const Sex = ({ sex }: { sex: string }) => (
        <span>
            {
                sex === "Macho"
                    ? <MaleIcon className={infoIconWidth} />
                    : <FemaleIcon className={infoIconWidth} />
            }
        </span>
    );

    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl mb-4 font-semibold">Recém adotados</h2>
            <div className="md:px-10 lg:justify-evenly flex w-full px-2 overflow-x-auto">
                {
                    recentAdopted.map(({
                        image,
                        name,
                        race,
                        sex,
                        description,
                    }) => (
                        <div
                            className="flex flex-col items-center w-[270px] rounded-lg p-5 border xl:shadow-xl"
                            key={name}
                        >
                            <Image
                                className={clsx(
                                    "xl:h-[200px] xl:w-[200px] xl:min-w-[200px]",
                                    "w-[120px] h-[120px] min-w-[120px] object-cover rounded-full my-2"
                                )}
                                width={200}
                                height={200}
                                alt={name}
                                src={image}
                                unoptimized={true}
                            />
                            <div className="flex flex-col items-center">
                                <p className="text-xl font-medium">{name}</p>

                                <div className="lg:hidden block my-3">
                                    <div className="flex">
                                        <Race race={race} />
                                        <p>{race}</p>
                                    </div>
                                    <div className="flex">
                                        <Sex sex={sex} />
                                        <p>{sex}</p>
                                    </div>
                                </div>

                                <div className="lg:flex hidden my-3">
                                    <Race race={race} />
                                    <p className="ml-1">{race} | {sex}</p>
                                    <Sex sex={sex} />
                                </div>

                                <p className="text-md">{description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}