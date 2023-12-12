import Logo from "@/components/logo";
import clsx from "clsx";
import Image from "next/image";

export default function Banner() {
    return (
        <header className="relative bg-lime-green-100 w-full">
            <Logo className={clsx(
                "xsm:ml-5 xsm:flex",
                "mx-auto flex-col pt-5 mb-3",
            )} />
            <div className={clsx(
                "mlg:-mt-5 mlg:justify-between",
                "flex justify-center items-center",
            )}>
                <div className={clsx(
                    "xl:w-[50rem]",
                    "mlg:ml-52",
                    "xsm:text-start xsm:block flex-col items-center",
                    "text-center flex ml-0 text-white pb-5",
                )}>
                    <h1 className={clsx(
                        "xl:text-4xl",
                        "sm:text-3xl",
                        "font-bold text-[1.4rem] mb-5",
                    )}>
                        Encontre seu melhor amigo aqui!
                        <br />Adote um pet!
                    </h1>
                    <p className={clsx(
                        "xl:text-xl",
                        "sm:text-lg sm:w-[60vw]",
                        "w-[80vw] text-sm",
                    )}>
                        Bem-vindo à nossa comunidade de adoção! Aqui, a jornada para encontrar o seu novo melhor amigo começa.
                        Ao adotar um pet, você não apenas ganha um companheiro leal,
                        mas também proporciona uma segunda chance a um animalzinho que precisa de um lar. <u className="cursor-pointer hover:text-zinc-100">Explore a página!</u>
                    </p>
                </div>
                <div className="relative overflow-hidden">
                    <Image
                        alt="Mulher carregando cachorro"
                        src="/woman-dog.webp"
                        width={250}
                        height={250}
                        className="lg:block hidden w-[250px] -scale-x-100 z-10 relative"
                        unoptimized={true}
                    />
                    <div
                        className="h-[24rem] w-[24rem] absolute top-16 bg-white rounded-full overflow-hidden"
                    >
                    </div>
                </div>
            </div>
        </header>
    );
}