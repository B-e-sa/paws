import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
    return (
        <div className="flex flex-col py-10 mt-12 items-center text-white bg-lime-green-100 ">
            <Logo className="scale-[1.2] mb-5" />
            <p className="font-normal">
                Made with {"<3"} by <Link className="underline" target="_blank" href="https://www.github.com/b-e-sa">Besa</Link>
            </p>
        </div>
    )
}